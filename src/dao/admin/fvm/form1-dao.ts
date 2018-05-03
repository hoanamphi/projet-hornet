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
    var idPersonne;
    this.personneDAO.insererPersonne(data["nom"], data["prenom"], data["date_de_naissance"], data["ville_de_naissance"], data["pays_de_naissance"], this.permisDAO.getIdPermis()).then(result=>{
      idPersonne = result;
    });
    var idDossier;
    this.dossierDAO.insererDossier(1, new Date(), this.permisDAO.getIdPermis()).then(result=>{
      idDossier = result;
    });
    var idPermis;
    this.permisDAO.insererPermis(data["permis"], 2, data["date_de_delivrance"], idPersonne, idDossier, data["id_prefecture"]).then(result=>{
      idPermis = result;
    });
    return new Promise(function(resolve){
      resolve(idPermis);
    });
  }
}
