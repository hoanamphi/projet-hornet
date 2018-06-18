// Classe métier
import {ValiseAttributes} from "src/models/model-valise";

/**
 * Interface des services utilisés par les formulaires
 */
export interface FormService {

  /**
   * Méthode insérant un dossier dans la base de données
   * @param data données de formulaire
   * @returns {Promise<any>}
   */
  insererDossier(data: any) :Promise<any>;

  /**
   * Méthode insérant une demande d'authentification dans la base de données
   * @param {{num_valise: number, num_demande_authentification: string, id_permis: number}} data données de formulaire
   * @returns {Promise<any>}
   */
  insererDemandeAuthentification(data: {num_valise: number, num_demande_authentification: string, id_permis: number}): Promise<any>;

  /**
   * Méthode insérant une valise dans la base de données
   * @param {{num_valise: number, date_valise: Date}} data données de formulaire
   * @returns {Promise<any>}
   */
  insererValise(data: {num_valise: number, date_valise: Date}): Promise<any>;

  /**
   * Méthode retournant la liste des préfectures stockées dans la base
   * @returns {Promise<Array<{idPrefecture: number, prefecture: string}>>} Liste des préfectures stockées dans la base
   */
  getListePrefecture() :Promise<Array<{idPrefecture: number, prefecture: string}>>;

  /**
   * Méthode retournant la liste des valises stockées dans la base
   * @returns {Promise<Array<ValiseAttributes>>} Liste des valises stockées dans la base
   */
  getListeValise(): Promise<Array<ValiseAttributes>>;
}
