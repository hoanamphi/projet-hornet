import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parent des Classes de DAO
import { EntityDAO } from "src/dao/entity-dao";
// Classe métier d'une demande d'authentification
import {DemandeAuthentificationFVMAttributes} from "src/models/fvm/model-demandeauthentification";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.admin.fvm.demande_authentification-dao");

/**
 * Classe de DAO permettant l'interaction avec la table demande_authentification_fvm
 * @extends {EntityDAO}
 */
export class DemandeAuthentificationFVMDAO extends EntityDAO {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Méthode insérant une nouvelle demande d'authentification dans la base
   * @param {number} idDemandeAuthentification - id du nouveau tuple
   * @param {string} numDemandeAuthentification - numéro de la demande d'authentification
   * @param {number} idPermis - id du Permis auquel appartient l'entrée
   * @param {number} numValise - numéro de la valise diplomatique transportant la demande d'authentification
   * @param {Date} dateValise - date de départ du Maroc de la valise diplomatique transportant la demande d'authentification
   * @returns {Promise<number>} id du tuple créé
   */
  insererDemandeAuthentification(idDemandeAuthentification: number, numDemandeAuthentification: string, idPermis: number, numValise: number, dateValise: Date): Promise<number> {
    logger.trace("DAO inser - DemandeAuthentification.Inser");

    return this.modelDAO.demandeAuthenthificationFVMEntity.upsert({
      idDemandeAuthentification: idDemandeAuthentification,
      numDemandeAuthentification: numDemandeAuthentification,
      dateDeCreation: new Date(),
      dateDuTraitement: this.getDateDuTraitement(dateValise),
      idPermis: idPermis,
      numValise: numValise
    }).then(() => {
      return idDemandeAuthentification;
    });
  }

  /**
   * Méthode retournant la date du traitement de la demande d'authentification
   * @param {Date} dateValise - date de départ du Maroc de la valise diplomatique transportant la demande d'authentification
   * @returns {Date} date du traitement de l'entrée
   */
  getDateDuTraitement(dateValise: Date): Date {
    logger.trace("DAO get - DemandeAuthentification.GetDateDuTraitement");

    let temp = new Date();
    // La date du traitement est toujours la veille du jour du départ de la valise
    temp.setDate(dateValise.getDate()-1);
    return temp;
  }

  /**
   * Méthode retournant un id unique pour chaque nouveau tuple
   * @returns {Promise<number>} id du nouveau tuple
   */
  getNewIdDemandeAuthentification(): Promise<number> {
    logger.trace("DAO get - DemandeAuthentification.GetNewId");

    // Compte le nombre de tuples dans la table
    return this.modelDAO.demandeAuthenthificationFVMEntity.count().then(count=>{
      // S'il y a déjà des tuples dans la table
      if(count > 0) {
        // Retourne l'id le plus grand
        return this.modelDAO.demandeAuthenthificationFVMEntity.max("idDemandeAuthentification");
      } else {
        return -1;
      }
    }).then(max=>{
      // Retourne l'id le plus grand + 1 ==> nouvel id
      return max+1;
    });
  }

  /**
   * Méthode retournant une demande d'authentification
   * @param {number} idPermis - id du Permis auquel appartient le tuple
   * @returns {Promise<DemandeAuthentificationFVMAttributes>} Demande d'authentification
   */
  getDemandeAuthentificationFromPermis(idPermis: number): Promise<DemandeAuthentificationFVMAttributes> {
    logger.trace("DAO get - DemandeAuthentification.Get");

    return this.modelDAO.demandeAuthenthificationFVMEntity.find({
      where: {
        idPermis: idPermis
      }
    });
  }

  /**
   * Méthode supprimant une demande d'authentification
   * @param {number} idDemandeAuthentification - id du tuple à supprimer
   * @returns {Promise<any>}
   */
  deleteDemandeAuthentification(idDemandeAuthentification: number): Promise<any> {
    logger.trace("DAO delete - DemandeAuthentification.Delete");

    return this.modelDAO.demandeAuthenthificationFVMEntity.destroy({
      where: {
        idDemandeAuthentification: idDemandeAuthentification
      }
    });
  }
}
