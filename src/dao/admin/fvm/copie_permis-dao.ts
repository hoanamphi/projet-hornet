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

  insererCopiePermis(nom, mimetype, encoding, size, data, idPermis): Promise<any> {
    return this.getIdCopiePermis().then(result=> {
      this.modelDAO.copiePermisFVMEntity.create({
        idCopiePermis: result,
        nom: nom,
        mimetype: mimetype,
        encoding: encoding,
        size: size,
        data: data,
        idPermis: idPermis
      }).catch(reason => {
        return Promise.reject("Problème de stockage de la copie du permis : " + reason);
      });

      return Promise.resolve(result)
    });
  }

  getIdCopiePermis(): Promise<any> {
    return this.modelDAO.copiePermisFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.copiePermisFVMEntity.max("idCopiePermis").then(max=>{
          return Promise.resolve(max+1);
        }).catch(reason => {
          return Promise.reject("Problème de calcul de l'id : " + reason);
        });
      } else {
        return Promise.resolve(0);
      }
    }).catch(reason=>{
      return Promise.reject("Problème de comptage : "+ reason)
    });
  }
}
