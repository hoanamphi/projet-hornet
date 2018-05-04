import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import { PermisFVMDAO } from "./permis-dao";
import { DossierFVMDAO } from "./dossier-dao";
import { PersonneFVMDAO } from "./personne-dao";
import { CopieNoteVerbaleMAECIFVMDao } from "./copie_note_verbale_MAECI-dao";
import { CopiePermisFVMDao } from "./copie_permis-dao";
import Map from "hornet-js-bean/src/decorators/Map";
import { PermisFVMMetier } from "src/models/fvm/fvm-mod";
import {where} from "sequelize";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class Form1FVMDAO extends EntityDAO {

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  private copiePermisDAO = new CopiePermisFVMDao();

  constructor() {
    super();
  }

  insererDonnee(data): Promise<any> {
    let content = JSON.parse(data["content"]);
    let copie_permis = data["copie_permis"];
    // let copie_note_verbale_maeci = data["copie_note_verbale_maeci"];

    let idPermis = this.permisDAO.getIdPermis();
    let idPersonne = this.personneDAO.getIdPersonne();
    let idDossier = this.dossierDAO.getIdDossier();
    let idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getIdCopieNoteVerbaleMAECI();
    let idCopiePermis = this.copiePermisDAO.getIdCopiePermis();


      // return this.personneDAO.insererPersonne(content.nom, content.prenom, content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, idPermis).then(result=>{
      //   let idPersonne = result;
      //   return this.dossierDAO.insererDossier(1, new Date(), idPermis).then(result=>{
      //     let idDossier = result;
      //     return this.permisDAO.insererPermis(content.permis, 2, content.date_de_delivrance, idPersonne, idDossier, parseInt(content.id_prefecture)).then(result=>{
      //       return Promise.resolve([idPermis, idPersonne, idDossier, data["copie_permis"]]);
      //     });
      //   });
      // });

  }
}
