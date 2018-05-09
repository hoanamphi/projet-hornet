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
    return this.getIdDossier().then(idDossier=> {

      return this.modelDAO.dossierFVMEntity.create({
        idDossier: idDossier,
        idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
        dateReceptionDossier: dateReceptionDossier,
        idPermis: idPermis
      }).then(result=>{
        return Promise.resolve(idDossier)
      }).catch(error=>{
        throw new Error(error);
      });
    });
  }

  getIdDossier(): Promise<any> {
    return this.modelDAO.dossierFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.dossierFVMEntity.max("idDossier");
      } else {
        return Promise.resolve(0);
      }
    }).then(max=>{
      return Promise.resolve(max+1);
    });
  }
}
