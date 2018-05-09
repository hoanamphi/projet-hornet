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

  insererCopieNoteVerbaleMAECI(nom, mimetype, encoding, size, data, idDossier): Promise<any> {
    return this.getIdCopieNoteVerbaleMAECI().then(idCopieNoteVerbaleMAECI=> {

      return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.create({
        idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
        nom: nom,
        mimetype: mimetype,
        encoding: encoding,
        size: size,
        data: data,
        idDossier: idDossier
      });
    });
  }

  getIdCopieNoteVerbaleMAECI(): Promise<any> {
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
}
