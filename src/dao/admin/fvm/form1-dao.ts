import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import { PermisFVMDAO } from "./permis-dao";
import { DossierFVMDAO } from "./dossier-dao";
import { PersonneFVMDAO } from "./personne-dao";
import Map from "hornet-js-bean/src/decorators/Map";
import { PermisFVMMetier } from "src/models/fvm/fvm-mod";
import {where} from "sequelize";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class Form1FVMDAO extends EntityDAO {

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();

  constructor() {
    super();
  }

  insererDonnee(data): Promise<any> {
    return this.permisDAO.getIdPermis().then(result=>{
      var idPermis = result;
      return this.personneDAO.insererPersonne(data["nom"], data["prenom"], data["date_de_naissance"], data["ville_de_naissance"], data["pays_de_naissance"], idPermis).then(result=>{
        var idPersonne = result;
        return this.dossierDAO.insererDossier(1, new Date(), idPermis).then(result=>{
          var idDossier = result;
          return this.permisDAO.insererPermis(data["admin"], 2, data["date_de_delivrance"], idPersonne, idDossier, parseInt(data["id_prefecture"])).then(result=>{
            return Promise.resolve([idPermis, idPersonne, idDossier, data["copie_permis"]]);
          });
        });
      });
    });
  }
}
