import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class PersonneFVMDAO extends EntityDAO {

  constructor() {
    super();
  }

  insererPersonne(nom, prenom, dateDeNaissance, villeDeNaissance, paysDeNaissance, idPermis): Promise<any> {
    return this.getIdPersonne().then(result=>{
      this.modelDAO.personneFVMEntity.create({
        idPersonne: result,
        nom: nom,
        prenom: prenom,
        dateDeNaissance: dateDeNaissance,
        villeDeNaissance: villeDeNaissance,
        paysDeNaissance: paysDeNaissance,
        idPermis: idPermis
      }).catch(reason=>{
        return Promise.reject("Problème de création de personne : " + reason);
      });
      return Promise.resolve(result);
    });
  }

  getIdPersonne(): Promise<any> {
    return this.modelDAO.personneFVMEntity.count().then(count=>{
      if(count > 0) {
        return this.modelDAO.personneFVMEntity.max("idPersonne").then(max=>{
          return Promise.resolve(max+1);
        }).catch(error => {
          return Promise.reject("Problème de calcul de l'id : " + error);
        });
      } else {
        return Promise.resolve(0);
      }
    }).catch(error=>{
      return Promise.reject("Problème de comptage : "+ error);
    });
  }
}
