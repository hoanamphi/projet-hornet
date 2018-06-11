import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServicePage } from "hornet-js-core/src/services/service-page";
import { ClientListService } from "src/services/page/admin/fvm/client-list-service";
import {HornetRequest} from "hornet-js-core/src/services/hornet-superagent-request";


const logger: Logger = Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");

export class ClientListServiceImpl extends ServicePage implements ClientListService {

  getListeDossiers(): Promise<any> {
    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver"),
    };

    return this.fetch(request);
  }

  getDossier(data: any): Promise<any> {
    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/dossier"),
      data: data
    };

    return this.fetch(request);
  }

  getDemandeAuthentification(data: any): Promise<any> {
    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification"),
      data: data
    };

    return this.fetch(request);
  }

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
  }

  getCopiePermis(idCopiePermis): Promise<any> {
    return Promise.reject("service uniquement disponible côté serveur");
  };

  getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI): Promise<any> {
    return Promise.reject("service uniquement disponible côté serveur");
  };

  getPDFDemandeAuthentification(idPermis): Promise<any> {
    return Promise.reject("service uniquement disponible côté serveur");
  };

  deleteDemandeAuthentification(idDemandeAuthentification): Promise<any> {
    let request: HornetRequest = {
      method: "delete",
      url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification/delete"),
      data: {"idDemandeAuthentification": idDemandeAuthentification}
    };

    return this.fetch(request);
  }

  deleteDossier(idPermis): Promise<any> {
    let request: HornetRequest = {
      method: "delete",
      url: this.buildUrl("/fvmrecordserver/delete"),
      data: {"idPermis": idPermis}
    };

    return this.fetch(request);
  }
}
