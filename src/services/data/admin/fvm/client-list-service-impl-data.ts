import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServiceRequest } from "hornet-js-core/src/services/service-request";
import {PersonneFVMDAO} from "../../../../dao/admin/fvm/personne-dao";
import {CopieNoteVerbaleMAECIFVMDao} from "../../../../dao/admin/fvm/copie_note_verbale_MAECI-dao";
import {DossierFVMDAO} from "../../../../dao/admin/fvm/dossier-dao";
import {PermisFVMDAO} from "../../../../dao/admin/fvm/permis-dao";
import {CopiePermisFVMDao} from "../../../../dao/admin/fvm/copie_permis-dao";
import {PrefectureDAO} from "../../../../dao/prefecture-dao";
import {ClientListService} from "../../../page/admin/fvm/client-list-service";
import {DemandeAuthentificationFVMDAO} from "../../../../dao/admin/fvm/demande_authentification-dao";
import {ValiseDAO} from "../../../../dao/valise-dao";

const logger: Logger = Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");

export class ClientListServiceImpl extends ServiceRequest implements ClientListService {

  private Error = {"hasError": null, "hasReason": null};

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  private copiePermisDAO = new CopiePermisFVMDao();
  private prefectureDAO = new PrefectureDAO();
  private demandeAuthentificationDAO = new DemandeAuthentificationFVMDAO();
  private valiseDAO = new ValiseDAO();

  getListeDossiers(): Promise<any> {
    return this.permisDAO.getAllPermis().then(permisList=>{
      let idPersonneArray = [];
      let idDossierArray = [];

      permisList.forEach(permis=>{
        idPersonneArray.push(permis["idPersonne"]);
        idDossierArray.push(permis["idDossier"]);
      });

      let personne = this.personneDAO.getPersonne(idPersonneArray);
      let dossier = this.dossierDAO.getDossier(idDossierArray)

      return Promise.all([personne, dossier]).then(values=>{
        let personneList = values[0];
        let dossierList = values[1];

        let result = [];
        permisList.forEach(permis=>{
          let obj = {"idPermis": permis.idPermis, "numPermis": null, "nom": null, "prenom": null, "dateDeNaissance": null, "dateReceptionDossier": null};
          obj.numPermis = permis.numPermis;

          personneList.forEach(personne=>{
            if(personne.idPermis == permis.idPermis){
              obj.nom = personne.nom;
              obj.prenom = personne.prenom;
              obj.dateDeNaissance = Date.parse(personne.dateDeNaissance);
            }
          });

          dossierList.forEach(dossier=>{
            if(dossier.idPermis == permis.idPermis){
              obj.dateReceptionDossier = Date.parse(dossier.dateReceptionDossier);
            }
          });

          result.push(obj);
        });

        return Promise.resolve(result);
      });
    });
  }

  getDossier(data): Promise<any> {
    let idPermis = data["idPermis"];
    return this.permisDAO.getPermis(idPermis).then(values=>{
      let permis = values[0];

      let result = {};
      result["numPermis"] = permis.numPermis;
      result["dateDeDelivrance"] = Date.parse(permis.dateDeDelivrance);

      let copie_permis = this.copiePermisDAO.getCopiePermis(permis.idCopiePermis);
      let personne = this.personneDAO.getPersonne(permis.idPersonne);
      let dossier = this.dossierDAO.getDossier(permis.idDossier);
      let prefecture_delivrance = this.prefectureDAO.getPrefecture(permis.idPrefectureDelivrance);

      return Promise.all([copie_permis, personne, dossier, prefecture_delivrance]).then(values=>{
        let copie_permis = values[0][0];
        let personne = values[1][0];
        let dossier = values[2][0];
        let prefecture = values[3][0];

        result["copie_permis"] = copie_permis;

        result["nom"] = personne.nom;
        result["prenom"] = personne.prenom;
        result["dateDeNaissance"] = Date.parse(personne.dateDeNaissance);
        result["sexe"] = personne.sexe;
        result["villeDeNaissance"] = personne.villeDeNaissance;
        result["paysDeNaissance"] = personne.paysDeNaissance;

        result["region"] = prefecture.region;
        result["departement"] = prefecture.departement;
        result["prefecture"] = prefecture.prefecture;
        result["adresse"] = prefecture.adresse;
        result["codePostal"] = prefecture.codePostal;
        result["ville"] = prefecture.ville;

        result["dateReceptionDossier"] = Date.parse(dossier.dateReceptionDossier);

        return this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(dossier.idCopieNoteVerbaleMAECI).then(values=>{
          result["copie_note_verbale_maeci"] = values[0];
          return Promise.resolve([result]);
        });
      });
    });
  }

  getDemandeAuthentification(data): Promise<any> {
    let idPermis = data["idPermis"];
    return this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis);
  }

  getReleve(data): Promise<any> {
    let idPermis = data["idPermis"];
    return Promise.resolve([]);
  }

  getNoteVerbale(data): Promise<any> {
    let idPermis = data["idPermis"];
    return Promise.resolve([]);
  }

  getCopiePermis(idCopiePermis): Promise<any> {
    return this.copiePermisDAO.getCopiePermis(idCopiePermis).then(values=>{
        return Promise.resolve(values[0]);
    });
  }

  getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI): Promise<any> {
    return this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI).then(values=>{
      return Promise.resolve(values[0]);
    });
  }

  getPDFDemandeAuthentification(idPermis): Promise<any> {
    let result = {};

    return this.getDossier({"idPermis": idPermis}).then(dossier=>{
      result["dossier"] = dossier;

      return this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis).then(demandeAuthentification=>{
        result["demandeAuthentification"] = demandeAuthentification;

        return Promise.resolve(result);
      });
    });
  }

  deleteDemandeAuthentification(data): Promise<any> {
    let idDemandeAuthentification = data.idDemandeAuthentification;
    return this.demandeAuthentificationDAO.deleteDemandeAuthentification(idDemandeAuthentification).catch(error=>{
      this.Error.hasError = error;
      this.Error.hasReason = error.toString();
      return this.Error;
    });
  }

  deleteDossier(data): Promise<any>{
    let idPermis = data.idPermis;

    let idDossier = this.dossierDAO.getIdDossierFromPermis(idPermis);
    let idPersonne = this.personneDAO.getIdPersonneFromPermis(idPermis);
    let idDemandeAuthentification = this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis);

    return Promise.all([idDossier, idPersonne, idDemandeAuthentification]).then(values=>{
      let deleteCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.deleteCopieNoteVerbaleMAECIFromDossier(values[0][0].idDossier);

      let deleteDossier = this.dossierDAO.deleteDossier(values[0][0].idDossier);

      let deletePersonne = this.personneDAO.deletePersonne(values[1][0].idPersonne);

      let deleteCopiePermis = this.copiePermisDAO.deleteCopiePermisFromPermis(idPermis);

      let deletePermis = this.permisDAO.deletePermis(idPermis);

      if(values[2].length > 0) {
        let deleteDemandeAuthentification = this.demandeAuthentificationDAO.deleteDemandeAuthentification(values[2][0].idDemandeAuthentification);
      }

      return Promise.all([deleteCopieNoteVerbaleMAECI, deleteDossier, deletePersonne, deleteCopiePermis, deletePermis]);
    }).catch(error=>{
      this.Error.hasError = error;
      this.Error.hasReason = error.toString();
      return this.Error;
    });
  }
}
