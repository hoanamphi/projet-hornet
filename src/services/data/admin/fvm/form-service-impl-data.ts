import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de service
import { ServiceRequest } from "hornet-js-core/src/services/service-request";
// Interface implémentée par la Classe de service
import { FormService } from "src/services/page/admin/fvm/form-service";
// Décorateur permettant d'effectuer des transactions sur la base de données
import { Transactional } from "hornet-js-database/src/decorators/dec-transactional";
import { Injector } from "hornet-js-core/src/inject/injector";
// Classes de DAO
import {PersonneFVMDAO} from "src/dao/admin/fvm/personne-dao";
import {CopieNoteVerbaleMAECIFVMDao} from "src/dao/admin/fvm/copie_note_verbale_MAECI-dao";
import {DossierFVMDAO} from "src/dao/admin/fvm/dossier-dao";
import {PermisFVMDAO} from "src/dao/admin/fvm/permis-dao";
import {CopiePermisFVMDao} from "src/dao/admin/fvm/copie_permis-dao";
import {PrefectureDAO} from "src/dao/prefecture-dao";
import {ValiseDAO} from "src/dao/valise-dao";
import {DemandeAuthentificationFVMDAO} from "src/dao/admin/fvm/demande_authentification-dao";

const logger: Logger = Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");

export class FormServiceImpl extends ServiceRequest implements FormService {

  // Objets contenant les erreurs retournées par une insertion ou une suppression
  private Error = {"error": null, "reason": null};

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  private copiePermisDAO = new CopiePermisFVMDao();
  private prefectureDAO = new PrefectureDAO();
  private valiseDAO = new ValiseDAO();
  private demandeAuthentificationDAO = new DemandeAuthentificationFVMDAO();

  @Transactional({configDatabase: Injector.getRegistered("databaseConfigName")})
  insererDonnee(data: {"content": any, "copie_permis": any, "copie_note_verbale_maeci": any}): Promise<any> {

    let content = JSON.parse(data.content);
    let copie_permis = data.copie_permis;
    let copie_note_verbale_maeci = data.copie_note_verbale_maeci;

    let idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getNewIdCopieNoteVerbaleMAECI();
    let idDossier = this.dossierDAO.getNewIdDossier();
    let idPersonne = this.personneDAO.getNewIdPersonne();
    let idCopiePermis = this.copiePermisDAO.getNewIdCopiePermis();
    let idPermis = this.permisDAO.getNewIdPermis();

    return Promise.all([idCopieNoteVerbaleMAECI, idDossier, idPersonne, idCopiePermis, idPermis]).then(values=>{

      return this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(values[0], copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, null).then(()=> {
        let insertDossier = this.dossierDAO.insererDossier(values[1], values[0], null);

        let insertPersonne = this.personneDAO.insererPersonne(values[2], content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.id_sexe, content.ville_de_naissance, content.pays_de_naissance, null);

        let insertCopiePermis = this.copiePermisDAO.insererCopiePermis(values[3], copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, null);

        return Promise.all([insertDossier, insertPersonne, insertCopiePermis]).then(()=> {

          return this.permisDAO.insererPermis(values[4], content.num_permis, values[3], content.date_de_delivrance, values[2], values[1], content.id_prefecture).then(()=> {
            let updateCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(values[0], copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, values[1]);

            let updateDossier = this.dossierDAO.insererDossier(values[1], values[0], values[4]);

            let updatePersonne = this.personneDAO.insererPersonne(values[2], content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.id_sexe, content.ville_de_naissance, content.pays_de_naissance, values[4]);

            let updateCopiePermis = this.copiePermisDAO.insererCopiePermis(values[3], copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, values[4]);

            return Promise.all([updateCopieNoteVerbaleMAECI, updateDossier, updatePersonne, updateCopiePermis]);
          });
        })
      });
    }).catch(error=>{
      this.Error.error = error;
      this.Error.reason = error.toString();
      return this.Error;
    });
  }

  insererDemandeAuthentification(data: {"num_valise": number, "num_demande_authentification": string, "id_permis": number}): Promise<any> {

    return this.valiseDAO.getValise(data.num_valise).then(values=>{
      let valise = values;

      return this.demandeAuthentificationDAO.getNewIdDemandeAuthentification().then(idDemandeAuthentification=> {

        return this.demandeAuthentificationDAO.insererDemandeAuthentification(idDemandeAuthentification, data.num_demande_authentification, data.id_permis, data.num_valise, valise.date_valise);
      });
    }).catch(error=>{
      this.Error.error = error;
      this.Error.reason = error.toString();
      return this.Error;
    });
  }

  insererValise(data: {"num_valise": number, "date_valise": Date}): Promise<any> {

    return this.valiseDAO.insererValise(data.num_valise, data.date_valise).catch(error=>{
      this.Error.error = error;
      this.Error.reason = error.toString();
      return this.Error;
    });
  }

  getListePrefectures(): Promise<Array<any>>{

    return this.prefectureDAO.getListePrefecture();
  }

  getListeValises(): Promise<Array<any>>{

    return this.valiseDAO.getListeValise().then(result=>{
      let arr = [];

      result.forEach(elem=>{
        let tmp = {};
        tmp["numValise"] = elem.num_valise;
        tmp["dateValise"] = elem.date_valise.getDate();
        arr.push(tmp);
      });

      return arr;
    });
  }
}
