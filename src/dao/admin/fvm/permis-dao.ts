import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import Map from "hornet-js-bean/src/decorators/Map";
import { PermisFVMMetier } from "src/models/fvm/fvm-mod";
import {where} from "sequelize";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class PermisDAO extends EntityDAO {

    constructor() {
        super();
    }

    @Map(PermisFVMMetier)
    listerPermis(): Promise<Array<PermisFVMMetier>> {
        return this.modelDAO.permisFVMEntity.findAll();
    }

    insererPermis(numPermis, idCopiePermis, dateDeDelivrance, idPersonne, idDossier, idPrefectureDelivrance): Promise<any> {
        var promise;
        var id;

        this.getIdPermis().then(result=>{
           id = result;
        });

        return this.modelDAO.permisFVMEntity.create({
          idPermis: id,
          numPermis: numPermis,
          idCopiePermis: idCopiePermis,
          dateDeDelivrance: dateDeDelivrance,
          idPersonne: idPersonne,
          idDossier: idDossier,
          idPrefectureDelivrance: idPrefectureDelivrance
        }).then(function(result){
          return new Promise(function(resolve, reject){
              resolve(result)
          });
        });
    }

    getIdPermis(): Promise<number> {
        return this.modelDAO.permisFVMEntity.max("permisId").then(max => {
            return max + 1;
        });
    }
}
