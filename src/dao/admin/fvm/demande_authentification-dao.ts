import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class DemandeAuthentificationFVMDAO extends EntityDAO {

  constructor() {
    super();
  }

  insererDemandeAuthentification(idDemandeAuthentification: number, numDemandeAuthentification: string, idPermis: number, numValise: number, dateValise: string): Promise<any> {
    return this.modelDAO.demandeAuthenthificationFVMEntity.create({
      idDemandeAuthentification: idDemandeAuthentification,
      numDemandeAuthentification: numDemandeAuthentification,
      dateDeCreation: new Date(),
      dateDuTraitement: this.getDateDuTraitement(dateValise),
      idPermis: idPermis,
      numValise: numValise
    }).then(() => {
      return idDemandeAuthentification;
    });
  }

  getDateDuTraitement(dateValise: string): Date {
    let temp = new Date(dateValise);
    temp.setDate(temp.getDate()-1);
    return temp;
  }

  getNewIdDemandeAuthentification(): Promise<any> {
    return this.modelDAO.demandeAuthenthificationFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.demandeAuthenthificationFVMEntity.max("idDemandeAuthentification");
      } else {
        return Promise.resolve(-1);
      }
    }).then(max=>{
      return Promise.resolve(max+1);
    });
  }

  getDemandeAuthentificationFromPermis(idPermis): Promise<any> {
    return this.modelDAO.demandeAuthenthificationFVMEntity.findAll({
      where: {
        idPermis: idPermis
      }
    });
  }

  deleteDemandeAuthentification(idDemandeAuthentification): Promise<any> {
    return this.modelDAO.demandeAuthenthificationFVMEntity.destroy({
      where: {
        idDemandeAuthentification: idDemandeAuthentification
      }
    });
  }
}
