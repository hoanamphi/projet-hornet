import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServiceRequest } from "hornet-js-core/src/services/service-request";
import { ServerFormService } from "src/services/page/admin/fvm/server-form-service";
import { Transactional } from "hornet-js-database/src/decorators/dec-transactional";
import { Injector } from "hornet-js-core/src/inject/injector";
import {PersonneFVMDAO} from "../../../../dao/admin/fvm/personne-dao";
import {CopieNoteVerbaleMAECIFVMDao} from "../../../../dao/admin/fvm/copie_note_verbale_MAECI-dao";
import {DossierFVMDAO} from "../../../../dao/admin/fvm/dossier-dao";
import {PermisFVMDAO} from "../../../../dao/admin/fvm/permis-dao";
import {CopiePermisFVMDao} from "../../../../dao/admin/fvm/copie_permis-dao";
import {PrefectureDAO} from "../../../../dao/prefecture-dao";
import {ValiseDAO} from "../../../../dao/valise-dao";
import {
  DemandeAuthentificationFVMDAO
} from "../../../../dao/admin/fvm/demande_authentification-dao";

const logger: Logger = Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");

export class ServerFormServiceImpl extends ServiceRequest implements ServerFormService {

  private Error = {"hasError": null, "hasReason": null};

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  private copiePermisDAO = new CopiePermisFVMDao();
  private prefectureDAO = new PrefectureDAO();
  private valiseDAO = new ValiseDAO();
  private demandeAuthentificationDAO = new DemandeAuthentificationFVMDAO();

  @Transactional({configDatabase: Injector.getRegistered("databaseConfigName")})
  insererDonnee(data): Promise<any> {

    let content = JSON.parse(data["content"]);
    let copie_permis = data["copie_permis"];
    let copie_note_verbale_maeci = data["copie_note_verbale_maeci"];

    let idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getNewIdCopieNoteVerbaleMAECI();
    let idDossier = this.dossierDAO.getNewIdDossier();
    let idPersonne = this.personneDAO.getNewIdPersonne();
    let idCopiePermis = this.copiePermisDAO.getNewIdCopiePermis();
    let idPermis = this.permisDAO.getNewIdPermis();

    return Promise.all([idCopieNoteVerbaleMAECI, idDossier, idPersonne, idCopiePermis, idPermis]).then(values=>{
      return this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(values[0], copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, null).then(()=> {
        let insertDossier = this.dossierDAO.insererDossier(values[1], values[0], new Date(), null);

        let insertPersonne = this.personneDAO.insererPersonne(values[2], content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.id_sexe, content.ville_de_naissance, content.pays_de_naissance, null);

        let insertCopiePermis = this.copiePermisDAO.insererCopiePermis(values[3], copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, null);

        return Promise.all([insertDossier, insertPersonne, insertCopiePermis]).then(()=> {

          return this.permisDAO.insererPermis(values[4], content.num_permis, values[3], content.date_de_delivrance, values[2], values[1], content.id_prefecture).then(()=> {
            let updateCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(values[0], copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, values[1]);

            let updateDossier = this.dossierDAO.insererDossier(values[1], values[0], new Date(), values[4]);

            let updatePersonne = this.personneDAO.insererPersonne(values[2], content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.id_sexe, content.ville_de_naissance, content.pays_de_naissance, values[4]);

            let updateCopiePermis = this.copiePermisDAO.insererCopiePermis(values[3], copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, values[4]);

            return Promise.all([updateCopieNoteVerbaleMAECI, updateDossier, updatePersonne, updateCopiePermis]);
          });
        })
      });
    }).catch(error=>{
      this.Error.hasError = error;
      this.Error.hasReason = error.toString();
      return this.Error;
    });
  }

  insererDemandeAuthentification(data): Promise<any> {
    return this.valiseDAO.getValise(data["num_valise"]).then(values=>{
      let valise = values[0];

      return this.demandeAuthentificationDAO.insererDemandeAuthentification(data["num_demande_authentification"], data["id_permis"], data["num_valise"], valise.dateValise);
    }).catch(error=>{
      this.Error.hasError = error;
      this.Error.hasReason = error.toString();
      return this.Error;
    });
  }

  insererValise(data): Promise<any> {
    return this.valiseDAO.insererValise(data["num_valise"], data["date_valise"]).catch(error=>{
      this.Error.hasError = error;
      this.Error.hasReason = error.toString();
      return this.Error;
    });
  }

  getListePrefectures(): Promise<any>{
    return this.prefectureDAO.getListePrefecture();
  }

  getListeValises(): Promise<any>{
    return this.valiseDAO.getListeValise().then(result=>{
      let arr = [];
      result.forEach(elem=>{
        let tmp = {};
        tmp["numValise"] = elem.numValise;
        tmp["dateValise"] = Date.parse(elem.dateValise);
        arr.push(tmp);
      });
      return Promise.resolve(arr);
    });
  }
}
