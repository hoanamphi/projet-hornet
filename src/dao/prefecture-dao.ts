import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de DAO
import { EntityDAO } from "src/dao/entity-dao";
// Classe métier d'une préfecture
import {PrefectureMetier} from "src/models/common-mod";
import Map from "hornet-js-bean/src/decorators/Map";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

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
   * @returns {Promise<Array<any>>} Liste des préfectures stockées dans la base
   */
  @Map(PrefectureMetier)
  getListePrefecture(): Promise<Array<any>> {
    logger.trace("DAO get - Prefecture.GetListe");

    return this.modelDAO.prefectureEntity.findAll({
      attributes: ["idPrefecture", "prefecture"]
    });
  }

  /**
   * Méthode retournant une préfecture
   * @param {number} idPrefecture id du tuple à retourner
   * @returns {Promise<PrefectureMetier>} Préfecture
   */
  @Map(PrefectureMetier)
  getPrefecture(idPrefecture: number): Promise<PrefectureMetier> {
    logger.trace("DAO get - Prefecture.Get");

    return this.modelDAO.prefectureEntity.find({
      where: {
        idPrefecture: idPrefecture
      }
    });
  }
}
