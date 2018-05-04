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
    return this.getIdDossier().then(result=> {
      this.modelDAO.dossierFVMEntity.create({
        idDossier: result,
        idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
        dateReceptionDossier: dateReceptionDossier,
        idPermis: idPermis
      }).catch(reason => {
        return Promise.reject("Problème de création de Dossier : " + reason);
      });

      return Promise.resolve(result)
    });
  }

  getIdDossier(): Promise<any> {
    return this.modelDAO.dossierFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.dossierFVMEntity.max("idDossier").then(max=>{
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
