import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de service DATA
import { ServiceRequest } from "hornet-js-core/src/services/service-request";
// Interface implémentée par la classe de service
import {PageService} from "src/services/page/admin/fvm/page-service";
// Classes de DAO
import {PersonneFVMDAO} from "src/dao/admin/fvm/personne-dao";
import {CopieNoteVerbaleMAECIFVMDao} from "src/dao/admin/fvm/copie_note_verbale_MAECI-dao";
import {DossierFVMDAO} from "src/dao/admin/fvm/dossier-dao";
import {PermisFVMDAO} from "src/dao/admin/fvm/permis-dao";
import {CopiePermisFVMDao} from "src/dao/admin/fvm/copie_permis-dao";
import {PrefectureDAO} from "src/dao/prefecture-dao";
import {DemandeAuthentificationFVMDAO} from "src/dao/admin/fvm/demande_authentification-dao";
// Classes métier
import {CopieNoteVerbaleMAECIFVMMetier, CopiePermisFVMMetier, DemandeAuthentificationFVMMetier} from "src/models/fvm/fvm-mod";

const logger: Logger = Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");

/**
 * Classe de service Data utilisée par les pages
 * @extends {ServiceRequest}
 * @implements {PageService}
 */
export class PageServiceImpl extends ServiceRequest implements PageService {

  // Objets contenant les erreurs retournées par une méthode
  private Error = {"error": null, "reason": null};

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  private copiePermisDAO = new CopiePermisFVMDao();
  private prefectureDAO = new PrefectureDAO();
  private demandeAuthentificationDAO = new DemandeAuthentificationFVMDAO();

  /**
   * Méthode supprimant une demande d'authentification de la base de données
   * @param {{idDemandeAuthentification: number}} data id de la demande d'authentification à supprimer
   * @returns {Promise<any>}
   */
  deleteDemandeAuthentification(data: {"idDemandeAuthentification": number}): Promise<any> {
    logger.trace("SERVICE DATA delete - PageService.DeleteDemandeAuthentification");

    // Récupérer les données de formulaire
    let idDemandeAuthentification = data.idDemandeAuthentification;

    return this.demandeAuthentificationDAO.deleteDemandeAuthentification(idDemandeAuthentification).catch(error=>{
      // Si une erreur est capturée

      // On retourne un Objet contenant la description de l'erreur
      this.Error.error = error;
      this.Error.reason = error.toString();
      return this.Error;
    });
  }

  /**
   * Méthode supprimant un dossier de la base de données
   * @param {{idPermis: number}} data id du Permis concerné par la suppression
   * @returns {Promise<any>}
   */
  deleteDossier(data: {"idPermis": number}): Promise<any>{
    logger.trace("SERVICE DATA delete - PageService.DeleteDemandeAuthentification");

    // Récupérer les données de formulaire
    let idPermis = data.idPermis;

    // Récupérer les ids des entrées relatives à un permis de conduire
    let idDossier = this.dossierDAO.getIdDossierFromPermis(idPermis);
    let idPersonne = this.personneDAO.getIdPersonneFromPermis(idPermis);
    // Récupérer la demande d'authentification du permis
    let demandeAuthentification = this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis);

    return Promise.all([idDossier, idPersonne, demandeAuthentification]).then(values=>{

      let idDossier_value = values[0];
      let idPersonne_value = values[1];

      let demandeAuthentification_value = values[2];

      // Supprimer les entrées relatives à un permis de conduire
      let deleteCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.deleteCopieNoteVerbaleMAECIFromDossier(idDossier_value);

      let deleteDossier = this.dossierDAO.deleteDossier(idDossier_value);

      let deletePersonne = this.personneDAO.deletePersonne(idPersonne_value);

      let deleteCopiePermis = this.copiePermisDAO.deleteCopiePermisFromPermis(idPermis);

      let deletePermis = this.permisDAO.deletePermis(idPermis);

      // Si une demande d'authentification a été générée pour ce permis
      if(demandeAuthentification_value != null) {
        // Supprimer la demande d'authentification
        let deleteDemandeAuthentification = this.demandeAuthentificationDAO.deleteDemandeAuthentification(demandeAuthentification_value.id_demande_authentification_fvm);

        return Promise.all([deleteCopieNoteVerbaleMAECI, deleteDossier, deletePersonne, deleteCopiePermis, deleteDemandeAuthentification, deletePermis]);
      } else {
        return Promise.all([deleteCopieNoteVerbaleMAECI, deleteDossier, deletePersonne, deleteCopiePermis, deletePermis]);
      }
    }).catch(error=>{
      // Si une erreur est capturée

      // On retourne un Objet contenant la description de l'erreur
      this.Error.error = error;
      this.Error.reason = error.toString();
      return this.Error;
    });
  }

  /**
   * Méthode retournant la liste des dossiers stockés dans la base
   * @returns {Promise<Array<any>>} Liste des dossiers stockés dans la base
   */
  getListeDossier(): Promise<Array<any>> {
    logger.trace("SERVICE DATA get - PageService.GetListDossier");
    
    // Récupérer tous les permis de conduires stockés dans la base
    return this.permisDAO.getAllPermis().then(permisList=>{

      let idPersonneArray: Array<number> = [];
      let idDossierArray: Array<number> = [];
      
      /* Pour chaque permis de conduire :
          idPersonne : id de la personne auquel appartient le permis
          idDossier : id du dossier concerné par le permis
      */
      permisList.forEach(permis=>{
        idPersonneArray.push(permis.idPersonne);
        idDossierArray.push(permis.idDossier);
      });
      
      // Récupérer les listes des personnes et des dossiers stockés dans la base
      let personne = this.personneDAO.getListePersonne(idPersonneArray);
      let dossier = this.dossierDAO.getListeDossier(idDossierArray);

      return Promise.all([personne, dossier]).then(values=>{
        let personneList = values[0];
        let dossierList = values[1];

        let result = [];
        
        // Concatèner les données relatives à chaque permis
        permisList.forEach(permis=>{
          let obj = {"idPermis": permis.idPermis, "numPermis": null, "nom": null, "prenom": null, "dateDeNaissance": null, "dateReceptionDossier": null};
          obj.numPermis = permis.numPermis;

          personneList.forEach(personne=>{
            if(personne.idPermis == permis.idPermis){
              obj.nom = personne.nom;
              obj.prenom = personne.prenom;
              obj.dateDeNaissance = Date.parse(personne.dateDeNaissance.toString());
            }
          });

          dossierList.forEach(dossier=>{
            if(dossier.idPermis == permis.idPermis){
              obj.dateReceptionDossier = Date.parse(dossier.dateReceptionDossier.toString());
            }
          });

          result.push(obj);
        });
        
        // Retourne le tableau contenant la liste des données correspondant à chaque permis
        return result;
      });
    });
  }

  /**
   * Méthode retournant un dossier
   * @param {{idPermis: number}} data id du Permis relatif au dossier
   * @returns {Promise<Array<any>>} Informations du dossier (Stockées dans un tableau pour une utilisation dans un dataSource)
   */
  getDossier(data: {"idPermis": number}): Promise<Array<any>> {
    logger.trace("SERVICE DATA get - PageService.GetDossier");
    
    // Récupérer les données de formulaire
    let idPermis = data.idPermis;
    
    // Récupérer les informations d'un permis de conduire
    return this.permisDAO.getPermis(idPermis).then(permis=>{
      
      let result = {};
      
      result["numPermis"] = permis.num_permis;
      result["dateDeDelivrance"] = permis.date_de_delivrance;
      
      /* Récupérer les informations relatives à un permis :
          Copie du permis de conduire
          Personne à qui appartient le permis
          Dossier concerné par le permis
          Préfecture ayant délivré le permis
      */
      let copie_permis = this.copiePermisDAO.getCopiePermis(permis.id_copie_permis_fvm);
      let personne = this.personneDAO.getPersonne(permis.id_personne_fvm);
      let dossier = this.dossierDAO.getDossier(permis.id_dossier_fvm);
      let prefecture_delivrance = this.prefectureDAO.getPrefecture(permis.id_prefecture_delivrance);

      return Promise.all([copie_permis, personne, dossier, prefecture_delivrance]).then(values=>{
        
        let copie_permis_value = values[0];
        let personne_value = values[1];
        let dossier_value = values[2];
        let prefecture_value = values[3];

        // Concaténer les données relatives à un permis
        result["copie_permis"] = copie_permis_value;

        result["nom"] = personne_value.nom;
        result["prenom"] = personne_value.prenom;
        result["dateDeNaissance"] = personne_value.date_de_naissance;
        result["sexe"] = personne_value.titre;
        result["villeDeNaissance"] = personne_value.ville_de_naissance;
        result["paysDeNaissance"] = personne_value.pays_de_naissance;

        result["region"] = prefecture_value.region;
        result["departement"] = prefecture_value.departement;
        result["prefecture"] = prefecture_value.prefecture;
        result["adresse"] = prefecture_value.adresse;
        result["codePostal"] = prefecture_value.code_postal;
        result["ville"] = prefecture_value.ville;

        result["dateReceptionDossier"] = dossier_value.date_reception_dossier;

        // Récupérer la copie de la note verbale du MAECI
        return this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(dossier_value.id_copie_note_verbale_maeci_fvm).then(values=>{
          // Concaténer la copie aux autres informations relatives à un permis
          result["copie_note_verbale_maeci"] = values;

          return [result];
        });
      });
    });
  }

  /**
   * Méthode retournant une demande d'authentification
   * @param {{idPermis: number}} data id du Permis concerné par la demande d'authentification
   * @returns {Promise<DemandeAuthentificationFVMMetier>} Demande d'authentification
   */
  getDemandeAuthentification(data: {"idPermis": number}): Promise<DemandeAuthentificationFVMMetier> {
    logger.trace("SERVICE DATA get - PageService.GetDemandeAuthentification");

    // Récupérer les données de formulaire
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

  /**
   * Méthode retournant la copie d'un permis de conduire
   * @param {number} idCopiePermis id de la copie du permis de conduire
   * @returns {Promise<CopiePermisFVMMetier>} Copie d'un permis de conduire
   */
  getCopiePermis(idCopiePermis: number): Promise<CopiePermisFVMMetier> {
    logger.trace("SERVICE DATA get - PageService.GetCopiePermis");

    return this.copiePermisDAO.getCopiePermis(idCopiePermis);
  }

  /**
   * Méthode retournant la copie d'une note verbale du MAECI
   * @param {number} idCopieNoteVerbaleMAECI id de la copie de la note verbale du MAECI
   * @returns {Promise<CopieNoteVerbaleMAECIFVMMetier>} Copie d'une note verbale du MAECI
   */
  getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI: number): Promise<CopieNoteVerbaleMAECIFVMMetier> {
    logger.trace("SERVICE DATA get - PageService.GetCopieNoteVerbaleMAECI");

    return this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI);
  }

  /**
   * Méthode retournant les informations nécessaires à la génération d'une demande d'authentification en PDF
   * @param {number} idPermis id du Permis concerné par la demande d'authentification
   * @returns {Promise<{dossier: any, demande_authentification: any}>} Informations de la demande d'authentification
   */
  getPDFDemandeAuthentification(idPermis: number): Promise<{dossier: any, demandeAuthentification: DemandeAuthentificationFVMMetier}> {
    logger.trace("SERVICE DATA get - PageService.GetDossier");

    // Concaténer les informations relatives à une demande d'authentification
    let result = {dossier: null, demandeAuthentification: null};

    // Récupérer les informations d'un dossier
    return this.getDossier({"idPermis": idPermis}).then(dossier=>{
      result["dossier"] = dossier;

      // Récupérer la demande d'authentification
      return this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis).then(demandeAuthentification=>{
        result["demandeAuthentification"] = demandeAuthentification;

        return result;
      });
    });
  }
}
