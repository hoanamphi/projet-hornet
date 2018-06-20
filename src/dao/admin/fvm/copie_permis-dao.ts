import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de DAO
import { EntityDAO } from "src/dao/entity-dao";
// Classe métier de la copie d'un permis de conduire
import {CopiePermisFVMAttributes} from "src/models/fvm/model-copiepermis";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.admin.fvm.copie_permis-dao");

/**
 * Classe de DAO permettant l'interaction avec la table copie_permis_fvm
 * @extends {EntityDAO}
 */
export class CopiePermisFVMDao extends EntityDAO {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Méthode insérant une nouvelle copie d'un permis de conduire dans la base
   * @param {number} idCopiePermis - id du nouveau tuple
   * @param {string} mimetype - format du fichier
   * @param {string} encoding - encodage du fichier
   * @param {number} size - taille du fichier
   * @param {Buffer} data - contenu du fichier
   * @param {number} idPermis - id du Permis auquel appartient l'entrée
   * @returns {Promise<number>} id du tuple créé
   */
  insererCopiePermis(idCopiePermis: number, mimetype: string, encoding: string, size: number, data: Buffer, idPermis: number): Promise<number> {
    logger.trace("DAO inser - CopiePermis.Inser");

    return this.modelDAO.copiePermisFVMEntity.upsert({
      idCopiePermis: idCopiePermis,
      nom: this.getNewNom(idCopiePermis),
      mimetype: mimetype,
      encoding: encoding,
      size: size,
      data: data,
      idPermis: idPermis
    }).then(()=>{
      return idCopiePermis;
    });
  }

  /**
   * Méthode retournant un nom unique pour chaque nouveau tuple
   * @param {number} idCopiePermis - id du nouveau tuple
   * @returns {string} nom de l'entrée
   */
  getNewNom(idCopiePermis: number): string {
    logger.trace("DAO get - CopiePermis.GetNewNom");

    // Le nouveau nom est au format : [Type de document][id du nouveau tuple][Date du jour]
    return ("copiePermis"+idCopiePermis+(new Date())).replace(/\s+/g, "_");
  }

  /**
   * Méthode retournant un id unique pour chaque nouveau tuple
   * @returns {Promise<number>} id du nouveau tuple
   */
  getNewIdCopiePermis(): Promise<number> {
    logger.trace("DAO get - CopiePermis.GetNewId");

    // Compte le nombre de tuples dans la table
    return this.modelDAO.copiePermisFVMEntity.count().then(count=>{
      // S'il y a déjà des tuples dans la table
      if(count > 0) {
        //Retourne l'id le plus grand
        return this.modelDAO.copiePermisFVMEntity.max("idCopiePermis");
      } else {
        return -1;
      }
    }).then(max=>{
      // Retourne l'id le plus grand + 1 ==> nouvel id
      return max+1;
    });
  }

  /**
   * Méthode retournant une copie d'un permis de conduire
   * @param {number} idCopiePermis - id du tuple à retourner
   * @returns {Promise<CopiePermisFVMAttributes>} Copie d'un permis de conduire
   */
  getCopiePermis(idCopiePermis: number): Promise<CopiePermisFVMAttributes> {
    logger.trace("DAO get - CopiePermis.Get");

    return this.modelDAO.copiePermisFVMEntity.find({
      where: {
        idCopiePermis: idCopiePermis
      }
    });
  }

  /**
   * Méthode supprimant une copie d'un permis de conduire
   * @param {number} idPermis - id du Permis auquel appartient le tuple
   * @returns {Promise<any>}
   */
  deleteCopiePermisFromPermis(idPermis: number): Promise<any> {
    logger.trace("DAO delete - CopiePermis.Delete");

    return this.modelDAO.copiePermisFVMEntity.destroy({
      where: {
        idPermis: idPermis
      }
    });
  }
}
