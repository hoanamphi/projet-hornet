
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
   * @param data données de formulaire
   * @returns {Promise<any>}
   */
  insererDemandeAuthentification(data: {"num_valise": number, "num_demande_authentification": any, "id_permis": number}): Promise<any>;

  /**
   * Méthode insérant une valise dans la base de données
   * @param data données de formulaire
   * @returns {Promise<any>}
   */
  insererValise(data: {"num_valise": number, "date_valise": Date}): Promise<any>;

  /**
   * Méthode retournant la liste des préfectures stockées dans la base
   * @returns {Promise<Array<any>>} Liste des préfectures stockées dans la base
   */
  getListePrefecture() :Promise<Array<any>>;

  /**
   * Méthode retournant la liste des valises stockées dans la base
   * @returns {Promise<Array<any>>} Liste des valises stockées dans la base
   */
  getListeValise(): Promise<Array<any>>;
}
