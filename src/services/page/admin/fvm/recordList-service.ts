/**
 * Interface des services pour l'authentification
 * @interface
 */
export interface RecordListService {
  getListeDossiers() :Promise<any>;
}