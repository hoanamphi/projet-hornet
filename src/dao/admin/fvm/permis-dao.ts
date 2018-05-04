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
    return this.getIdPermis().then(result=>{
      this.modelDAO.permisFVMEntity.create({
        idPermis: result,
        numPermis: numPermis,
        idCopiePermis: idCopiePermis,
        dateDeDelivrance: dateDeDelivrance,
        idPersonne: idPersonne,
        idDossier: idDossier,
        idPrefectureDelivrance: idPrefectureDelivrance
      }).catch(reason=>{
        return Promise.reject("Problème de création de Permis : " + reason);
      });
      return Promise.resolve(result);
    });
  }

  getIdPermis(): Promise<any> {
    return this.modelDAO.permisFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.permisFVMEntity.max("idPermis").then(max=>{
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
