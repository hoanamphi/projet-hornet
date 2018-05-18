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

const logger: Logger = Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");

export class ClientListServiceImpl extends ServiceRequest implements ClientListService {

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  private copiePermisDAO = new CopiePermisFVMDao();
  private prefectureDAO = new PrefectureDAO();

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
          let obj = {"id_permis":permis.idPermis, "num_permis": null, "nom": null, "prenom": null, "date_de_naissance": null, "date_reception_dossier": null};
          obj.num_permis = permis.numPermis;

          personneList.forEach(personne=>{
            if(personne.idPermis == permis.idPermis){
              obj.nom = personne.nom;
              obj.prenom = personne.prenom;
              obj.date_de_naissance = Date.parse(personne.dateDeNaissance);
            }
          });

          dossierList.forEach(dossier=>{
            if(dossier.idPermis == permis.idPermis){
              obj.date_reception_dossier = Date.parse(dossier.dateReceptionDossier);
            }
          });

          result.push(obj);
        });

        return Promise.resolve(result);
      });
    });
  }

  getDossier(data): Promise<any> {
    let idPermis = data["id"];
    return this.permisDAO.getPermis(idPermis).then(values=>{
      let permis = values[0];

      let result = {};
      result["num_permis"] = permis.numPermis;
      result["date_de_delivrance"] = Date.parse(permis.dateDeDelivrance);

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
        result["date_de_naissance"] = Date.parse(personne.dateDeNaissance);
        result["ville_de_naissance"] = personne.villeDeNaissance;
        result["pays_de_naissance"] = personne.paysDeNaissance;

        result["date_reception_dossier"] = Date.parse(dossier.dateReceptionDossier);

        result["region"] = prefecture.region;
        result["departement"] = prefecture.departement;
        result["prefecture"] = prefecture.prefecture;
        result["adresse"] = prefecture.adresse;
        result["code_postal"] = prefecture.codePostal;
        result["ville"] = prefecture.ville;

        return Promise.resolve([result]);
      });
    });
  }

  getDemandeAuthentification(data): Promise<any> {
    let idPermis = data["id"];
    return Promise.resolve([]);
  }

  getReleve(data): Promise<any> {
    let idPermis = data["id"];
    return Promise.resolve([]);
  }

  getNoteVerbale(data): Promise<any> {
    let idPermis = data["id"];
    return Promise.resolve([]);
  }
}
