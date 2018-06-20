import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classe de service PAGE
import { ServicePage } from "hornet-js-core/src/services/service-page";
// Classe implémentée par la Classe de service
import { PageService } from "src/services/page/admin/fvm/page-service";
// Classe permettant d'effectuer des requêtes HTTP sur le serveur
import {HornetRequest} from "hornet-js-core/src/services/hornet-superagent-request";
// Classes métier
import {DemandeAuthentificationFVMAttributes} from "src/models/fvm/model-demandeauthentification";

const logger: Logger = Utils.getLogger("projet-hornet.services.page.admin.fvm.page-service-impl");

/**
 * Classe de service Page utilisée par les pages
 * @extends {ServicePage}
 * @implements {PageService}
 */
export class PageServiceImpl extends ServicePage implements PageService {

  /**
   * Méthode effectuant une requête HTTP permettant la supression d'une demande d'authentification de la base de données
   * @param {{idDemandeAuthentification: number}} data - id de la demande d'authentification à supprimer
   * @returns {Promise<any>}
   */
  deleteDemandeAuthentification(data: {"idDemandeAuthentification": number}): Promise<any> {
    logger.trace("SERVICE PAGE delete - PageService.DeleteDemandeAuthentification");

    let request: HornetRequest = {
      method: "delete",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification/delete"),
      data: data
    };

    return this.fetch(request);
  }

  /**
   * Méthode effectuant une requête HTTP permettant la supression d'un dossier de la base de données
   * @param {{idPermis: number}} data - id du Permis concerné par le dossier à supprimer
   * @returns {Promise<any>}
   */
  deleteDossier(data: {"idPermis": number}): Promise<any> {
    logger.trace("SERVICE PAGE delete - PageService.DeleteDossier");

    let request: HornetRequest = {
      method: "delete",
      url: this.buildUrl("/fvmrecordserver/delete"),
      data: data
    };

    return this.fetch(request);
  }

  /**
   * Méthode effectuant une requête HTTP retournant la liste des dossiers stockés dans la base
   * @returns {Promise<Array<any>>} Liste des dossiers stockés dans la base
   */
  getListeDossier(): Promise<Array<any>> {
    logger.trace("SERVICE PAGE get - PageService.GetListeDossier");

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver"),
    };

    return this.fetch(request);
  }

  /**
   * Méthode effectuant une requête HTTP retournant un dossier
   * @param {{idPermis: number}} data - id du Permis relatif au dossier
   * @returns {Promise<Array<any>>} Informations du dossier (Stockées dans un tableau pour une utilisation dans un dataSource)
   */
  getDossier(data: {"idPermis": number}): Promise<Array<any>> {
    logger.trace("SERVICE PAGE get - PageService.GetDossier");

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/dossier"),
      data: data
    };

    return this.fetch(request);
  }

  /**
   * Méthode effectuant une requête HTTP retournant une demande d'authentification
   * @param {{idPermis: number}} data - id du Permis concerné par la demande d'authentification
   * @returns {Promise<DemandeAuthentificationFVMAttributes>} Demande d'authentification
   */
  getDemandeAuthentification(data: {"idPermis": number}): Promise<DemandeAuthentificationFVMAttributes> {
    logger.trace("SERVICE PAGE get - PageService.GetDemandeAuthentification");

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification"),
      data: data
    };

    return this.fetch(request);
  }

  /**
   * Méthode effectuant une requête HTTP retournant une copie d'un permis de conduire
   * @param {number} idCopiePermis - id de la copie d'un permis de conduire
   * @returns {Promise<any>} service uniquement disponible côté serveur
   */
  getCopiePermis(idCopiePermis: number): Promise<any> {
    logger.trace("SERVICE PAGE get - PageService.GetCopiePermis");

    return Promise.reject("service uniquement disponible côté serveur");
  };

  /**
   * Méthode effectuant une requête HTTP retournant une copie d'une note verbale du MAECI
   * @param {number} idCopieNoteVerbaleMAECI - id de la copie d'une note verbale du MAECI
   * @returns {Promise<any>} service uniquement disponible côté serveur
   */
  getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI: number): Promise<any> {
    logger.trace("SERVICE PAGE get - PageService.GetCopieNoteVerbaleMAECI");

    return Promise.reject("service uniquement disponible côté serveur");
  };

  /**
   * Méthode effectuant une requête HTTP retournant les informations nécessaires à la génération d'une demande d'authentification en PDF
   * @param {number} idPermis - id du Permis concerné par la demande d'authentification
   * @returns {Promise<any>} service uniquement disponible côté serveur
   */
  getPDFDemandeAuthentification(idPermis: number): Promise<any> {
    logger.trace("SERVICE PAGE get - PageService.GetPDFDemandeAuthentification");

    return Promise.reject("service uniquement disponible côté serveur");
  };

  /* TODO
  getReleve(data: any): Promise<any> {
    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/releve"),
      data: data
    };

    return this.fetch(request);
  }

  getNoteVerbale(data: any): Promise<any> {
    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/noteverbale"),
      data: data
    };

    return this.fetch(request);
  }*/
}
