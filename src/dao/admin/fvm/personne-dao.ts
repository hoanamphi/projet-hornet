import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import Map from "hornet-js-bean/src/decorators/Map";
import { PermisFVMMetier } from "src/models/fvm/fvm-mod";
import {where} from "sequelize";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class PersonneFVMDAO extends EntityDAO {

  constructor() {
    super();
  }

  insererPersonne(nom, prenom, dateDeNaissance, villeDeNaissance, paysDeNaissance, idPermis): Promise<any> {
    var id;
    this.getIdPersonne().then(result=>{
      id = result;
    });

    return this.modelDAO.personneFVMEntity.create({
      idPersonne: id,
      nom: nom,
      prenom: prenom,
      dateDeNaissance: dateDeNaissance,
      villeDeNaissance: villeDeNaissance,
      paysDeNaissance: paysDeNaissance,
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

  getIdPersonne(): Promise<number> {
    return this.modelDAO.personneFVMEntity.max("idPersonne").then(max => {
      if(max == (null || NaN)){
        max = 0;
      }
      return max + 1;
    });
  }
}
