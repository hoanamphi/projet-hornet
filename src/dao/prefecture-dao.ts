import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class PrefectureDAO extends EntityDAO {

  constructor() {
    super();
  }

  getListePrefecture(): Promise<any> {
    return this.modelDAO.prefectureEntity.findAll({
      attributes: ["idPrefecture", "prefecture"]
    });
  }

  getPrefecture(idPrefecture): Promise<any> {
    return this.modelDAO.prefectureEntity.findAll({
      where: {
        idPrefecture: idPrefecture
      }
    });
  }
}
