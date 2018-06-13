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
import {
  CopieNoteVerbaleMAECIFVMMetier,
  CopiePermisFVMMetier,
  DemandeAuthentificationFVMMetier
} from "src/models/fvm/fvm-mod";

const logger: Logger = Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");

/**
 * Classe de service Page utilisée par les pages
 * @extends {ServicePage}
 * @implements {PageService}
 */
export class PageServiceImpl extends ServicePage implements PageService {

  deleteDemandeAuthentification(data: {"idDemandeAuthentification": number}): Promise<any> {
    let request: HornetRequest = {
      method: "delete",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification/delete"),
      data: data
    };

    return this.fetch(request);
  }

  deleteDossier(data: {"idPermis": number}): Promise<any> {
    let request: HornetRequest = {
      method: "delete",
      url: this.buildUrl("/fvmrecordserver/delete"),
      data: data
    };

    return this.fetch(request);
  }

  getListeDossier(): Promise<Array<any>> {
    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver"),
    };

    return this.fetch(request);
  }

  getDossier(data: {"idPermis": number}): Promise<Array<any>> {
    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/dossier"),
      data: data
    };

    return this.fetch(request);
  }

  getDemandeAuthentification(data: {"idPermis": number}): Promise<DemandeAuthentificationFVMMetier> {
    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification"),
      data: data
    };

    return this.fetch(request);
  }

  getCopiePermis(idCopiePermis: number): Promise<CopiePermisFVMMetier> {
    return Promise.reject("service uniquement disponible côté serveur");
  };

  getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI: number): Promise<CopieNoteVerbaleMAECIFVMMetier> {
    return Promise.reject("service uniquement disponible côté serveur");
  };

  getPDFDemandeAuthentification(idPermis: number): Promise<any> {
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
