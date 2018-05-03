import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import Map from "hornet-js-bean/src/decorators/Map";
import { PermisFVMMetier } from "src/models/fvm/fvm-mod";
import {where} from "sequelize";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class DossierFVMDAO extends EntityDAO {

  constructor() {
    super();
  }

  insererDossier(idCopieNoteVerbaleMAECI, dateReceptionDossier, idPermis): Promise<any> {
    var id;
    this.getIdDossier().then(result=>{
      id = result;
    });

    return this.modelDAO.dossierFVMEntity.create({
      idDossier: id,
      //TOCHANGE
      idCopieNoteVerbaleMAECI: id,
      dateReceptionDossier: dateReceptionDossier,
      idPermis: idPermis
    }).then(result=>{
      return new Promise(function(resolve, reject){
        resolve(id);
      });
    }).catch(reason=>{
      return new Promise(function(resolve, reject){
        reject(new Error(reason));
      });
    });
  }

  getIdDossier(): Promise<number> {
    return this.modelDAO.dossierFVMEntity.max("idDossier").then(max => {
      if(max == (null || NaN)){
        max = 0;
      }
      return max + 1;
    });
  }
}
