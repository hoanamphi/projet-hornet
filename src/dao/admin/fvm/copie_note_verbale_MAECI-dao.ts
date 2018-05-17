import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import Map from "hornet-js-bean/src/decorators/Map";
import { PermisFVMMetier } from "src/models/fvm/fvm-mod";
import {where} from "sequelize";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class CopieNoteVerbaleMAECIFVMDao extends EntityDAO {

  constructor() {
    super();
  }

  insererCopieNoteVerbaleMAECI(mimetype, encoding, size, data, idDossier): Promise<any> {
    return this.getNewIdCopieNoteVerbaleMAECI().then(idCopieNoteVerbaleMAECI=> {

      return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.create({
        idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
        nom: this.getNewNom(idCopieNoteVerbaleMAECI),
        mimetype: mimetype,
        encoding: encoding,
        size: size,
        data: data,
        idDossier: idDossier
      }).then(result=>{
        return Promise.resolve(idCopieNoteVerbaleMAECI);
      });
    });
  }

  getNewNom(idCopieNoteVerbaleMAECI): string {
    return "copieNoteVerbaleMAECI"+idCopieNoteVerbaleMAECI+(new Date()).toString();
  }

  getNewIdCopieNoteVerbaleMAECI(): Promise<any> {
    return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.max("idCopieNoteVerbaleMAECI");
      } else {
        return Promise.resolve(-1);
      }
    }).then(max=>{
      return Promise.resolve(max+1);
    });
  }

  getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI): Promise<any> {
    return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.findAll({
      where: {
        idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI
      }
    });
  }
}
