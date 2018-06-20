import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de service DATA
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
// Classes métier
import {ValiseAttributes} from "src/models/model-valise";

const logger: Logger = Utils.getLogger("projet-hornet.services.data.admin.fvm.form-service-impl-data");

/**
 * Classe de service Data utilisée par les formulaires
 * @extends {ServiceRequest}
 * @implements {FormService}
 */
export class FormServiceImplData extends ServiceRequest implements FormService {

  /**
   * Objet JSON contenant deux attributs : error : Classe de l'erreur retournée, reason : Motif de l'erreur
   * @type {{error: null, reason: null}}
   */
  private Error = {"error": null, "reason": null};

  /**
   * Classe de DAO de la table personne_fvm
   * @type {PersonneFVMDAO}
   */
  private personneDAO = new PersonneFVMDAO();
  /**
   * Classe de DAO de la table dossier_fvm
   * @type {DossierFVMDAO}
   */
  private dossierDAO = new DossierFVMDAO();
  /**
   * Classe de DAO de la table permis_fvm
   * @type {PermisFVMDAO}
   */
  private permisDAO = new PermisFVMDAO();
  /**
   * Classe de DAO de la table copie_note_verbale_maeci_fvm
   * @type {CopieNoteVerbaleMAECIFVMDao}
   */
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  /**
   * Classe de DAO de la table copie_permis_fvm
   * @type {CopiePermisFVMDao}
   */
  private copiePermisDAO = new CopiePermisFVMDao();
  /**
   * Classe de DAO de la table demande_authentification_fvm
   * @type {DemandeAuthentificationFVMDAO}
   */
  private demandeAuthentificationDAO = new DemandeAuthentificationFVMDAO();
  /**
   * Classe de DAO de la table prefecture
   * @type {PrefectureDAO}
   */
  private prefectureDAO = new PrefectureDAO();
  /**
   * Classe de DAO de la table valise
   * @type {ValiseDAO}
   */
  private valiseDAO = new ValiseDAO();

  /**
   * Méthode effectuant l'insertion d'un dossier dans la base de données
   * @param {{content: any, copie_permis: any, copie_note_verbale_maeci: any}} data - données de formulaire
   * @returns {Promise<any>}
   */
  @Transactional({configDatabase: Injector.getRegistered("databaseConfigName")})
  insererDossier(data: {content: any, copie_permis: any, copie_note_verbale_maeci: any}): Promise<any> {
    logger.trace("SERVICE DATA inser - FormService.InserDonnee");

    // Récupérer les données de formulaire
    let content = JSON.parse(data.content);
    let copie_permis = data.copie_permis;
    let copie_note_verbale_maeci = data.copie_note_verbale_maeci;

    // Obtenir des ids pour les entrées à insérer
    let idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getNewIdCopieNoteVerbaleMAECI();
    let idDossier = this.dossierDAO.getNewIdDossier();
    let idPersonne = this.personneDAO.getNewIdPersonne();
    let idCopiePermis = this.copiePermisDAO.getNewIdCopiePermis();
    let idPermis = this.permisDAO.getNewIdPermis();

    return Promise.all([idCopieNoteVerbaleMAECI, idDossier, idPersonne, idCopiePermis, idPermis]).then(values=>{

      let idCopieNoteVerbaleMAECI_value = values[0];
      let idDossier_value = values[1];
      let idPersonne_value = values[2];
      let idCopiePermis_value = values[3];
      let idPermis_value = values[4];

      // Insérer la copie de la note verbale MAECI
      return this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI_value, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, null).then(()=> {
        // Si la promesse de résultat est remplie (sans erreurs)

        // Insérer les autres entrées
        let insertDossier = this.dossierDAO.insererDossier(idDossier_value, idCopieNoteVerbaleMAECI_value, null);
        let insertPersonne = this.personneDAO.insererPersonne(idPersonne_value, content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.id_sexe, content.ville_de_naissance, content.pays_de_naissance, null);
        let insertCopiePermis = this.copiePermisDAO.insererCopiePermis(idCopiePermis_value, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, null);

        return Promise.all([insertDossier, insertPersonne, insertCopiePermis]).then(()=> {
          // Si la promesse de résultat est remplie (sans erreurs)

          // Insérer le permis de conduire
          return this.permisDAO.insererPermis(idPermis_value, content.num_permis, idCopiePermis_value, content.date_de_delivrance, idPersonne_value, idDossier_value, content.id_prefecture).then(()=> {
            // Toutes les insertions se sont déroulées sans erreur

            // On met à jour les entrées en ajoutant les clés étrangères
            let updateCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI_value, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, idDossier_value);
            let updateDossier = this.dossierDAO.insererDossier(idDossier_value, idCopieNoteVerbaleMAECI_value, idPermis_value);
            let updatePersonne = this.personneDAO.insererPersonne(idPersonne_value, content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.id_sexe, content.ville_de_naissance, content.pays_de_naissance, idPermis_value);
            let updateCopiePermis = this.copiePermisDAO.insererCopiePermis(idCopiePermis_value, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, idPermis_value);

            return Promise.all([updateCopieNoteVerbaleMAECI, updateDossier, updatePersonne, updateCopiePermis]);
          });
        })
      });
    }).catch(error=>{
      // Si une erreur est capturée

      // On retourne un Objet contenant la description de l'erreur
      this.Error.error = error;
      this.Error.reason = error.toString();
      return this.Error;
    });
  }

  /**
   * Méthode effectuant l'insertion d'une demande d'authentification dans la base de données
   * @param {{num_valise: number, num_demande_authentification: string, id_permis: number}} data - données de formulaire
   * @returns {Promise<any>}
   */
  insererDemandeAuthentification(data: {num_valise: number, num_demande_authentification: string, id_permis: number}): Promise<any> {
    logger.trace("SERVICE DATA inser - FormService.InserDemandeAuthentification");

    // Récupérer les informations de la valise diplomatique
    return this.valiseDAO.getValise(data.num_valise).then(values=>{
      let valise = values;

      // Obtenir un id pour l'entrée à insérer
      return this.demandeAuthentificationDAO.getNewIdDemandeAuthentification().then(idDemandeAuthentification=> {

        // Insérer la demande d'authentification
        return this.demandeAuthentificationDAO.insererDemandeAuthentification(idDemandeAuthentification, data.num_demande_authentification, data.id_permis, data.num_valise, new Date(valise.dateValise.toString()));
      });
    }).catch(error=>{
      // Si une erreur est capturée

      // On retourne un Objet contenant la description de l'erreur
      this.Error.error = error;
      this.Error.reason = error.toString();
      return this.Error;
    });
  }

  /**
   * Méthode effectuant l'insertion d'une valise dans la base de données
   * @param {{num_valise: number, date_valise: Date}} data - données de formulaire
   * @returns {Promise<any>}
   */
  insererValise(data: {num_valise: number, date_valise: Date}): Promise<any> {
    logger.trace("SERVICE DATA inser - FormService.InserValise");

    // Insérer la valise
    return this.valiseDAO.insererValise(data.num_valise, data.date_valise).catch(error=>{
      // Si une erreur est capturée

      // On retourne un Objet contenant la description de l'erreur
      this.Error.error = error;
      this.Error.reason = error.toString();
      return this.Error;
    });
  }

  /**
   * Méthode retournant la liste des préfectures stockées dans la base
   * @returns {Promise<Array<{idPrefecture: number, prefecture: string}>>} Liste des préfectures stockées dans la base
   */
  getListePrefecture(): Promise<Array<{idPrefecture: number, prefecture: string}>>{
    logger.trace("SERVICE DATA get - FormService.GetListPrefecture");

    return this.prefectureDAO.getListePrefecture();
  }

  /**
   * Méthode retournant la liste des valises stockées dans la base
   * @returns {Promise<Array<ValiseAttributes>>} Liste des valises stockées dans la base
   */
  getListeValise(): Promise<Array<ValiseAttributes>>{
    logger.trace("SERVICE DATA get - FormService.GetListValise");

    return this.valiseDAO.getListeValise().then(valiseList=> {
      let tmp = [];

      valiseList.forEach(valise=> {
        tmp.push({numValise: valise.numValise, dateValise: Date.parse(valise.dateValise.toString())});
      });

      return tmp;
    });
  }
}
