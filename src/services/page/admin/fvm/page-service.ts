// Classes métier
import {
  CopieNoteVerbaleMAECIFVMMetier,
  CopiePermisFVMMetier,
  DemandeAuthentificationFVMMetier
} from "src/models/fvm/fvm-mod";

/**
 * Interface des services utilisés par les pages
 */
export interface PageService {

  /**
   * Méthode supprimant une demande d'authentification de la base de données
   * @param {{idDemandeAuthentification: number}} data id de la demande d'authentification à supprimer
   * @returns {Promise<any>}
   */
  deleteDemandeAuthentification(data: {"idDemandeAuthentification": number}): Promise<any>;

  /**
   * Méthode supprimant un dossier de la base de données
   * @param {{idPermis: number}} data id du Permis concerné par le dossier
   * @returns {Promise<any>}
   */
  deleteDossier(data: {"idPermis": number}): Promise<any>;

  /**
   * Méthode retournant la liste des dossiers stockés dans la base
   * @returns {Promise<Array<any>>} Liste des dossiers stockés dans la base
   */
  getListeDossier(): Promise<Array<any>>;

  /**
   * Méthode retournant un dossier
   * @param {{idPermis: number}} data id du Permis concerné par le dossier
   * @returns {Promise<Array<any>>} Informations du dossier (Stockées dans un tableau pour une utilisation dans un dataSource)
   */
  getDossier(data: {"idPermis": number}): Promise<Array<any>>;

  /**
   * Méthode retournant un demande d'authentification
   * @param {{idPermis: number}} data id du Permis concerné par la demande d'authentification
   * @returns {Promise<DemandeAuthentificationFVMMetier>} Demande d'authentification
   */
  getDemandeAuthentification(data: {"idPermis": number}): Promise<DemandeAuthentificationFVMMetier>;

  /**
   * Méthode retournant la copie d'un permis de conduire
   * @param {number} idCopiePermis id de la copie du permis de conduire
   * @returns {Promise<CopiePermisFVMMetier>} Copie d'un permis de conduire
   */
  getCopiePermis(idCopiePermis: number): Promise<CopiePermisFVMMetier>;

  /**
   * Méthode retournant la copie d'une note verbale du MAECI
   * @param {number} idCopieNoteVerbaleMAECI id de la copie d'une note verbale du MAECI
   * @returns {Promise<CopieNoteVerbaleMAECIFVMMetier>} Copie de la note verbale du MAECI
   */
  getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI: number): Promise<CopieNoteVerbaleMAECIFVMMetier>;

  /**
   * Méthode retournant les informations nécessaires à la génération d'une demande d'authentification en PDF
   * @param {number} idPermis id du Permis concerné par la demande d'authenitification
   * @returns {Promise<any>} Informations de la demande d'authentification
   */
  getPDFDemandeAuthentification(idPermis: number): Promise<any>;

  /* TODO
  getReleve(data): Promise<any>;
  getNoteVerbale(data): Promise<any>;
  */
}