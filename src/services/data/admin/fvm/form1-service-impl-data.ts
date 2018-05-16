import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServiceRequest } from "hornet-js-core/src/services/service-request";
import { Form1Service } from "src/services/page/admin/fvm/form1-service";
import { Transactional } from "hornet-js-database/src/decorators/dec-transactional";
import { Injector } from "hornet-js-core/src/inject/injector";
import {PersonneFVMDAO} from "../../../../dao/admin/fvm/personne-dao";
import {CopieNoteVerbaleMAECIFVMDao} from "../../../../dao/admin/fvm/copie_note_verbale_MAECI-dao";
import {DossierFVMDAO} from "../../../../dao/admin/fvm/dossier-dao";
import {PermisFVMDAO} from "../../../../dao/admin/fvm/permis-dao";
import {CopiePermisFVMDao} from "../../../../dao/admin/fvm/copie_permis-dao";
import {PrefectureDAO} from "../../../../dao/prefecture-dao";

const logger: Logger = Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");

export class Form1ServiceImpl extends ServiceRequest implements Form1Service {

  private Error = {"hasError": null, "hasReason": null};

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  private copiePermisDAO = new CopiePermisFVMDao();
  private prefectureDAO = new PrefectureDAO();

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
      let insertCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, values[1]);

      let insertDossier = this.dossierDAO.insererDossier(values[0], new Date(), values[4]);

      let insertPersonne = this.personneDAO.insererPersonne(content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, values[4]);

      let insertCopiePermis = this.copiePermisDAO.insererCopiePermis(copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, values[4]);

      let insertPermis = this.permisDAO.insererPermis(content.num_permis, values[3], content.date_de_delivrance, values[2], values[1], content.id_prefecture);

      return Promise.all([insertCopieNoteVerbaleMAECI, insertDossier, insertPersonne, insertCopiePermis,insertPermis]);
    }).catch(error=>{
      this.Error.hasError = error;
      this.Error.hasReason = error.toString();
      return this.Error;
    });
  }

  getListePrefectures(): Promise<any>{
    return this.prefectureDAO.getListePrefecture();
  }
}
