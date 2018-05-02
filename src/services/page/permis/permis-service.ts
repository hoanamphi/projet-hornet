
/**
 * Interface des services pour l'authentification
 * @interface
 */
export interface PermisService {
     listerPermis(data):Promise<any>;
     insererPermis(data) :Promise<any>;
}
