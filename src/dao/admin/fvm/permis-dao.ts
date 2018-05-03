import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import Map from "hornet-js-bean/src/decorators/Map";
import { PermisFVMMetier } from "src/models/fvm/fvm-mod";
import {where} from "sequelize";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class PermisFVMDAO extends EntityDAO {

  constructor() {
    super();
  }

  insererPermis(numPermis, idCopiePermis, dateDeDelivrance, idPersonne, idDossier, idPrefectureDelivrance): Promise<any> {
    var id;
    this.getIdPermis().then(result=>{
      id = result;
    });

    return this.modelDAO.permisFVMEntity.create({
      idPermis: id,
      numPermis: numPermis,
      //TOCHANGE
      idCopiePermis: id,
      dateDeDelivrance: dateDeDelivrance,
      idPersonne: idPersonne,
      idDossier: idDossier,
      idPrefectureDelivrance: idPrefectureDelivrance
    }).then(result=>{
      return new Promise(function(resolve){
        resolve(id);
      });
    }).catch(reason=>{
      return new Promise(function(reject){
        reject(new Error(reason));
      });
    });
  }

  getIdPermis(): Promise<number> {
    return this.modelDAO.permisFVMEntity.max("idPermis").then(max => {
      if(max == (null || NaN)){
        max = 0;
      }
      return max + 1;
    });
  }
}
