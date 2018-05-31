
/**
 * Interface des services pour l'authentification
 * @interface
 */
export interface ServerFormService {
     insererDonnee(data) :Promise<any>;
     insererDemandeAuthentification(data): Promise<any>;
     insererValise(data): Promise<any>;
     getListePrefectures() :Promise<any>;
     getListeValises(): Promise<any>;
}