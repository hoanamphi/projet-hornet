import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import Map from "hornet-js-bean/src/decorators/Map";
import { PermisFVMMetier } from "src/models/fvm/fvm-mod";
import {where} from "sequelize";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class CopiePermisFVMDao extends EntityDAO {

  constructor() {
    super();
  }

  insererCopiePermis(idCopiePermis, mimetype, encoding, size, data, idPermis): Promise<any> {
    return this.modelDAO.copiePermisFVMEntity.upsert({
      idCopiePermis: idCopiePermis,
      nom: this.getNewNom(idCopiePermis),
      mimetype: mimetype,
      encoding: encoding,
      size: size,
      data: data,
      idPermis: idPermis
    }).then(result=>{
      return Promise.resolve(idCopiePermis);
    });
  }

  getNewNom(idCopiePermis): string {
    return ("copiePermis"+idCopiePermis+(new Date())).replace(/\s+/g, "_");
  }

  getNewIdCopiePermis(): Promise<any> {
    return this.modelDAO.copiePermisFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.copiePermisFVMEntity.max("idCopiePermis");
      } else {
        return Promise.resolve(-1);
      }
    }).then(max=>{
      return Promise.resolve(max+1);
    });
  }

  getCopiePermis(idCopiePermis): Promise<any> {
    return this.modelDAO.copiePermisFVMEntity.findAll({
      where: {
        idCopiePermis: idCopiePermis
      }
    });
  }

  deleteCopiePermisFromPermis(idPermis): Promise<any> {
    return this.modelDAO.copiePermisFVMEntity.destroy({
      where: {
        idPermis: idPermis
      }
    });
  }
}
