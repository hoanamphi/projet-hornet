
/**
 * Interface des services pour l'authentification
 * @interface
 */
export interface ServerFormService {
     insererDonnee(data) :Promise<any>;
     getListePrefectures() :Promise<any>;
}
