import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { PermisFVMDAO } from "./permis-dao";
import { DossierFVMDAO } from "./dossier-dao";
import { PersonneFVMDAO } from "./personne-dao";
import { CopieNoteVerbaleMAECIFVMDao } from "./copie_note_verbale_MAECI-dao";
import { CopiePermisFVMDao } from "./copie_permis-dao";
import {EntityDAO} from "../../entity-dao";

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
    let copie_note_verbale_maeci = data["copie_note_verbale_maeci"];

    let idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getIdCopieNoteVerbaleMAECI();
    let idDossier = this.dossierDAO.getIdDossier();
    let idPersonne = this.personneDAO.getIdPersonne();
    let idCopiePermis = this.copiePermisDAO.getIdCopiePermis();
    let idPermis = this.permisDAO.getIdPermis();

    return Promise.all([idCopieNoteVerbaleMAECI, idDossier, idPersonne, idCopiePermis, idPermis]).then(values=>{
      let insertCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(copie_note_verbale_maeci.nom, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, values[1]);

      let insertDossier = this.dossierDAO.insererDossier(values[0], new Date(), values[4]);

      let insertPersonne = this.personneDAO.insererPersonne(content.nom, content.prenom, content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, values[4]);

      let insertCopiePermis = this.copiePermisDAO.insererCopiePermis(copie_permis.nom, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, values[4]);

      let insertPermis = this.permisDAO.insererPermis(content.num_permis, values[3], content.date_de_delivrance, values[2], values[1], content.id_prefecture);

      return Promise.all([insertCopieNoteVerbaleMAECI, insertDossier, insertPersonne, insertCopiePermis,insertPermis]);
    });


    // return idDossier.then(idDossier=>{
    //
    //   return this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(copie_note_verbale_maeci.nom, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, idDossier).then(insertCopieNoteVerbaleMAECI=>{
    //
    //     return idCopieNoteVerbaleMAECI.then(idCopieNoteVerbaleMAECI=>{
    //
    //       return idPermis.then(idPermis=>{
    //
    //         return this.dossierDAO.insererDossier(idCopieNoteVerbaleMAECI, new Date(), idPermis).then(insertDossier=>{
    //
    //           return this.personneDAO.insererPersonne(content.nom, content.prenom, content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, idPermis).then(insertPersonne=>{
    //
    //             return this.copiePermisDAO.insererCopiePermis(copie_permis.nom, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, idPermis).then(insertCopiePermis=> {
    //
    //               return this.permisDAO.insererPermis(content.num_permis, idCopiePermis, content.date_de_delivrance, idPersonne, idDossier, content.id_prefecture);
    //             });
    //           });
    //         });
    //       });
    //     });
    //   });
    // });
  }
}
