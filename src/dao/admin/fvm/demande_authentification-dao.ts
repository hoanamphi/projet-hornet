import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import {serializeUser} from "passport";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class DemandeAuthentificationDAO extends EntityDAO {

  constructor() {
    super();
  }

  insererDemandeAuthentification(numDemandeAuthentification, idPermis, numValise, dateValise): Promise<any> {
    return this.getNewIdDemandeAuthentification().then(idDemandeAuthentification=> {
      return this.getDateDuTraitement(dateValise).then(dateDuTraitement=> {

        return this.modelDAO.demandeAuthenthificationFVMEntity.create({
          idDemandeAuthentification: idDemandeAuthentification,
          numDemandeAuthentification: numDemandeAuthentification,
          dateDuTraitement: dateDuTraitement,
          idPermis: idPermis,
          numValise: numValise
        }).then(result=>{
          return Promise.resolve();
        });
      });
    });
  }

  getDateDuTraitement(dateValise): Promise<any> {
    let temp = new Date();
    temp.setDate(dateValise.getDate()-1);
    return Promise.resolve(temp);
  }

  getNewIdDemandeAuthentification(): Promise<any> {
    return this.modelDAO.demandeAuthenthificationFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.demandeAuthenthificationFVMEntity.max("idDossier");
      } else {
        return Promise.resolve(-1);
      }
    }).then(max=>{
      return Promise.resolve(max+1);
    });
  }

  getDemandeAuthentification(idPermis): Promise<any> {
    return this.modelDAO.demandeAuthenthificationFVMEntity.findAll({
      where: {
        idPermis: idPermis
      }
    });
  }
}
