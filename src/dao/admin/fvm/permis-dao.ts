import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de DAO
import { EntityDAO } from "src/dao/entity-dao";
// Classe métier d'un permis
import {PermisFVMAttributes} from "src/models/fvm/model-permis";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.admin.fvm.permis-dao");

/**
 * Classe de DAO permettant l'interaction avec la table permis_fvm
 * @extends {EntityDAO}
 */
export class PermisFVMDAO extends EntityDAO {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Méthode insérant un nouveau permis dans la base
   * @param {number} idPermis - id du nouveau tuple
   * @param {string} numPermis - numéro du permis de conduire
   * @param {number} idCopiePermis - id de la copie du permis de conduire
   * @param {Date} dateDeDelivrance - date de délivrance du permis de conduire
   * @param {number} idPersonne - id de la personne auquel appartient le permis
   * @param {number} idDossier - id du dossier concerné par le permis
   * @param {number} idPrefectureDelivrance - id de la préfecture ayant délivré le permis
   * @returns {Promise<number>} id du tuple créé
   */
  insererPermis(idPermis: number, numPermis: string, idCopiePermis: number, dateDeDelivrance: Date, idPersonne: number, idDossier: number, idPrefectureDelivrance: number): Promise<number> {
    logger.trace("DAO inser - Permis.Inser");

    return this.modelDAO.permisFVMEntity.upsert({
      idPermis: idPermis,
      numPermis: numPermis,
      idCopiePermis: idCopiePermis,
      dateDeDelivrance: dateDeDelivrance,
      idPersonne: idPersonne,
      idDossier: idDossier,
      idPrefectureDelivrance: idPrefectureDelivrance
    }).then(()=>{
      return idPermis;
    });
  }

  /**
   * Méthode retournant un id unique pour chaque nouveau tuple
   * @returns {Promise<number>} id du nouveau tuple
   */
  getNewIdPermis(): Promise<number> {
    logger.trace("DAO get - Permis.GetNewId");

    // Compte le nombre de tuples dans la table
    return this.modelDAO.permisFVMEntity.count().then(count=>{
      // S'il y a déjà des tuples dans la table
      if(count > 0) {
        // Retourne l'id le plus grand
        return this.modelDAO.permisFVMEntity.max("idPermis");
      } else {
        return -1;
      }
    }).then(max=>{
      // Retourne l'id le plus grand + 1 ==> nouvel id
      return max+1;
    });
  }

  /**
   * Méthode retournant la liste des permis stockés dans la base
   * @returns {Promise<Array<PermisFVMAttributes>>} Liste des permis stockés dans la base
   */
  getAllPermis(): Promise<Array<PermisFVMAttributes>> {
    logger.trace("DAO get - Permis.GetAll");

    return this.modelDAO.permisFVMEntity.findAll();
  }

  /**
   * Méthode retournant un permis de conduire
   * @param {number} idPermis - id du tuple à retourner
   * @returns {Promise<PermisFVMAttributes>} Permis
   */
  getPermis(idPermis: number): Promise<PermisFVMAttributes> {
    logger.trace("DAO get - Permis.Get");

    return this.modelDAO.permisFVMEntity.find({
      where: {
        idPermis: idPermis
      }
    });
  }

  /**
   * Méthode supprimant un permis de conduire
   * @param {number} idPermis - id du tuple à supprimer
   * @returns {Promise<any>}
   */
  deletePermis(idPermis: number): Promise<any> {
    logger.trace("DAO delete - Permis.Delete");

    return this.modelDAO.permisFVMEntity.destroy({
      where: {
        idPermis: idPermis
      }
    });
  }
}
