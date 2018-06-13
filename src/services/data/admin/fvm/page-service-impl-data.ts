import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServiceRequest } from "hornet-js-core/src/services/service-request";
import {PersonneFVMDAO} from "src/dao/admin/fvm/personne-dao";
import {CopieNoteVerbaleMAECIFVMDao} from "src/dao/admin/fvm/copie_note_verbale_MAECI-dao";
import {DossierFVMDAO} from "src/dao/admin/fvm/dossier-dao";
import {PermisFVMDAO} from "src/dao/admin/fvm/permis-dao";
import {CopiePermisFVMDao} from "src/dao/admin/fvm/copie_permis-dao";
import {PrefectureDAO} from "src/dao/prefecture-dao";
import {PageService} from "src/services/page/admin/fvm/page-service";
import {DemandeAuthentificationFVMDAO} from "src/dao/admin/fvm/demande_authentification-dao";
import {
  CopieNoteVerbaleMAECIFVMMetier,
  CopiePermisFVMMetier,
  DemandeAuthentificationFVMMetier
} from "src/models/fvm/fvm-mod";

const logger: Logger = Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");

export class PageServiceImpl extends ServiceRequest implements PageService {

  private Error = {"error": null, "reason": null};

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  private copiePermisDAO = new CopiePermisFVMDao();
  private prefectureDAO = new PrefectureDAO();
  private demandeAuthentificationDAO = new DemandeAuthentificationFVMDAO();

  getListeDossiers(): Promise<Array<any>> {

    return this.permisDAO.getAllPermis().then(permisList=>{

      let idPersonneArray: Array<number> = [];
      let idDossierArray: Array<number> = [];

      permisList.forEach(permis=>{
        idPersonneArray.push(permis.id_personne_fvm);
        idDossierArray.push(permis.id_dossier_fvm);
      });

      let personne = this.personneDAO.getListePersonne(idPersonneArray);
      let dossier = this.dossierDAO.getListeDossier(idDossierArray);

      return Promise.all([personne, dossier]).then(values=>{
        let personneList = values[0];
        let dossierList = values[1];

        let result = [];

        permisList.forEach(permis=>{
          let obj = {"idPermis": permis.id_permis_fvm, "numPermis": null, "nom": null, "prenom": null, "dateDeNaissance": null, "dateReceptionDossier": null};
          obj.numPermis = permis.num_permis;

          personneList.forEach(personne=>{
            if(personne.id_permis_fvm == permis.id_permis_fvm){
              obj.nom = personne.nom;
              obj.prenom = personne.prenom;
              obj.dateDeNaissance = personne.date_de_naissance;
            }
          });

          dossierList.forEach(dossier=>{
            if(dossier.id_permis_fvm == permis.id_permis_fvm){
              obj.dateReceptionDossier = dossier.date_reception_dossier;
            }
          });

          result.push(obj);
        });

        return result;
      });
    });
  }

  getDossier(data: {"idPermis": number}): Promise<Array<any>> {
    let idPermis = data.idPermis;

    return this.permisDAO.getPermis(idPermis).then(permis=>{

      let result = {};

      result["numPermis"] = permis.num_permis;
      result["dateDeDelivrance"] = permis.date_de_delivrance;

      let copie_permis = this.copiePermisDAO.getCopiePermis(permis.id_copie_permis_fvm);
      let personne = this.personneDAO.getPersonne(permis.id_personne_fvm);
      let dossier = this.dossierDAO.getDossier(permis.id_dossier_fvm);
      let prefecture_delivrance = this.prefectureDAO.getPrefecture(permis.id_prefecture_delivrance);

      return Promise.all([copie_permis, personne, dossier, prefecture_delivrance]).then(values=>{

        let copie_permis = values[0];
        let personne = values[1];
        let dossier = values[2];
        let prefecture = values[3];

        result["copie_permis"] = copie_permis;

        result["nom"] = personne.nom;
        result["prenom"] = personne.prenom;
        result["dateDeNaissance"] = personne.date_de_naissance.getDate();
        result["sexe"] = personne.titre;
        result["villeDeNaissance"] = personne.ville_de_naissance;
        result["paysDeNaissance"] = personne.pays_de_naissance;

        result["region"] = prefecture.region;
        result["departement"] = prefecture.departement;
        result["prefecture"] = prefecture.prefecture;
        result["adresse"] = prefecture.adresse;
        result["codePostal"] = prefecture.code_postal;
        result["ville"] = prefecture.ville;

        result["dateReceptionDossier"] = dossier.date_reception_dossier.getDate();

        return this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(dossier.id_copie_note_verbale_maeci_fvm).then(values=>{
          result["copie_note_verbale_maeci"] = values;

          return [result];
        });
      });
    });
  }

  getDemandeAuthentification(data: {"idPermis": number}): Promise<DemandeAuthentificationFVMMetier> {
    let idPermis = data.idPermis;

    return this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis);
  }
  
  /* TODO
  getReleve(data): Promise<any> {
    let idPermis = data["idPermis"];
    return Promise.resolve([]);
  }

  getNoteVerbale(data): Promise<any> {
    let idPermis = data["idPermis"];
    return Promise.resolve([]);
  }
  */

  getCopiePermis(idCopiePermis: number): Promise<CopiePermisFVMMetier> {

    return this.copiePermisDAO.getCopiePermis(idCopiePermis);
  }

  getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI: number): Promise<CopieNoteVerbaleMAECIFVMMetier> {

    return this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI);
  }

  getPDFDemandeAuthentification(idPermis: number): Promise<any> {
    let result = {};

    return this.getDossier({"idPermis": idPermis}).then(dossier=>{
      result["dossier"] = dossier;

      return this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis).then(demandeAuthentification=>{
        result["demandeAuthentification"] = demandeAuthentification;

        return result;
      });
    });
  }

  deleteDemandeAuthentification(data: {"idDemandeAuthentification": number}): Promise<any> {

    let idDemandeAuthentification = data.idDemandeAuthentification;

    return this.demandeAuthentificationDAO.deleteDemandeAuthentification(idDemandeAuthentification).catch(error=>{
      this.Error.error = error;
      this.Error.reason = error.toString();
      return this.Error;
    });
  }

  deleteDossier(data: {"idPermis": number}): Promise<any>{

    let idPermis = data.idPermis;

    let idDossier = this.dossierDAO.getIdDossierFromPermis(idPermis);
    let idPersonne = this.personneDAO.getIdPersonneFromPermis(idPermis);
    let demandeAuthentification = this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis);

    return Promise.all([idDossier, idPersonne, demandeAuthentification]).then(values=>{

      let deleteCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.deleteCopieNoteVerbaleMAECIFromDossier(values[0]);

      let deleteDossier = this.dossierDAO.deleteDossier(values[0]);

      let deletePersonne = this.personneDAO.deletePersonne(values[1]);

      let deleteCopiePermis = this.copiePermisDAO.deleteCopiePermisFromPermis(idPermis);

      let deletePermis = this.permisDAO.deletePermis(idPermis);

      if(values[2] != null) {
        let deleteDemandeAuthentification = this.demandeAuthentificationDAO.deleteDemandeAuthentification(values[2].id_demande_authentification_fvm);

        return Promise.all([deleteCopieNoteVerbaleMAECI, deleteDossier, deletePersonne, deleteCopiePermis, deleteDemandeAuthentification, deletePermis]);
      } else {
        return Promise.all([deleteCopieNoteVerbaleMAECI, deleteDossier, deletePersonne, deleteCopiePermis, deletePermis]);
      }
    }).catch(error=>{
      this.Error.error = error;
      this.Error.reason = error.toString();
      return this.Error;
    });
  }
}
