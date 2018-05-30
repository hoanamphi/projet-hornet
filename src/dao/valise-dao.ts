import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class ValiseDAO extends EntityDAO {

  constructor() {
    super();
  }

  insererValise(numValise, dateValise): Promise<any> {
    return this.modelDAO.valiseEntity.create({
      numValise: numValise,
      dateValise: dateValise
    }).then(result=>{
      return Promise.resolve(numValise);
    });
  }

  getListeValise(): Promise<any> {
    return this.modelDAO.valiseEntity.findAll({
      attributes: ["numValise", "dateValise"],
      where: {
        dateValise: {
          $gt: (new Date()).setDate((new Date()).getDate()+1)
        }
      }
    });
  }

  getValise(numValise): Promise<any> {
    return this.modelDAO.valiseEntity.findAll({
      where: {
        numValise: numValise
      }
    });
  }
}
