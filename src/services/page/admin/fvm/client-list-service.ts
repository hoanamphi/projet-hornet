/**
 * Interface des services pour l'authentification
 * @interface
 */
export interface ClientListService {
  getListeDossiers(): Promise<any>;

  getDossier(data): Promise<any>;
  getDemandeAuthentification(data): Promise<any>;
  getReleve(data): Promise<any>;
  getNoteVerbale(data): Promise<any>;

  getCopiePermis(idCopiePermis): Promise<any>;
  getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI): Promise<any>;
  getPDFDemandeAuthentification(idPermis): Promise<any>;
}