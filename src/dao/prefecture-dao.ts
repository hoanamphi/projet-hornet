import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de DAO
import { EntityDAO } from "src/dao/entity-dao";
// Classe métier d'une préfecture
import {PrefectureAttributes} from "src/models/model-prefecture";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.prefecture-dao");

/**
 * Méthode permettant l'interaction avec la table prefecture
 * @extends {EntityDAO}
 */
export class PrefectureDAO extends EntityDAO {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Méthode retournant la liste des préfectures stockées dans la base
   * @returns {Promise<Array<{idPrefecture: number, prefecture: string}>>} Liste des préfectures stockées dans la base
   */
  getListePrefecture(): Promise<Array<{idPrefecture: number, prefecture: string}>> {
    logger.trace("DAO get - Prefecture.GetListe");

    return this.modelDAO.prefectureEntity.findAll({
      attributes: ["idPrefecture", "prefecture"]
    });
  }

  /**
   * Méthode retournant une préfecture
   * @param {number} idPrefecture id du tuple à retourner
   * @returns {Promise<PrefectureAttributes>} Préfecture
   */
  getPrefecture(idPrefecture: number): Promise<PrefectureAttributes> {
    logger.trace("DAO get - Prefecture.Get");

    return this.modelDAO.prefectureEntity.find({
      where: {
        idPrefecture: idPrefecture
      }
    });
  }
}
