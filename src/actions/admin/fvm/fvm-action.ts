import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { RouteActionService } from "hornet-js-core/src/routes/abstract-routes";
import { ServerFormService } from "src/services/page/admin/fvm/server-form-service";
import {ClientListService} from "../../../services/page/admin/fvm/client-list-service";
import {ResultDOC} from "hornet-js-core/src/result/result-doc";
import {ResultFile} from "hornet-js-core/src/result/result-file";
import {MediaTypes} from "hornet-js-core/src/protocol/media-type";
import {CopieNoteVerbaleMAECIFVMMetier, CopiePermisFVMMetier} from "../../../models/fvm/fvm-mod";
import {ResultJSON} from "hornet-js-core/src/result/result-json";

const logger: Logger = Utils.getLogger("projet-hornet.actions.admin.permis_actions");

export class Inser extends RouteActionService<any, ServerFormService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    if(this.req.files[0] != null){
      data["copie_permis"] = {};
      data["copie_permis"].nom = this.req.files[0].originalname;
      data["copie_permis"].mimetype = this.req.files[0].mimetype;
      data["copie_permis"].encoding = this.req.files[0].encoding;
      data["copie_permis"].size = this.req.files[0].size;
      data["copie_permis"].data = this.req.files[0].buffer;
    }

    if(this.req.files[1] != null){
      data["copie_note_verbale_maeci"] = {};
      data["copie_note_verbale_maeci"].nom = this.req.files[1].originalname;
      data["copie_note_verbale_maeci"].mimetype = this.req.files[1].mimetype;
      data["copie_note_verbale_maeci"].encoding = this.req.files[1].encoding;
      data["copie_note_verbale_maeci"].size = this.req.files[1].size;
      data["copie_note_verbale_maeci"].data = this.req.files[1].buffer;
    }

    return this.getService().insererDonnee(data);
  }
}

export class ListePrefecture extends RouteActionService<any, ServerFormService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    return this.getService().getListePrefectures();
  }
}

export class ListeValise extends RouteActionService<any, ServerFormService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    return this.getService().getListeValises();
  }
}

export class ListeDossiers extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    return this.getService().getListeDossiers();
  }
}

export class GetDossier extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getDossier(data);
  }
}

export class GetDemandeAuthentification extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getDemandeAuthentification(data);
  }
}

export class GetReleve extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getReleve(data);
  }
}

export class GetNoteVerbale extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getNoteVerbale(data);
  }
}

export class GetCopiePermis extends RouteActionService<{"idCopiePermis": number}, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    return this.getService().getCopiePermis(this.attributes.idCopiePermis).then((copiePermis: CopiePermisFVMMetier) => {
      return new ResultFile({"data": copiePermis.data,
          "filename": copiePermis.nom,
          "encoding": copiePermis.encoding,
          "size": copiePermis.size
        }, MediaTypes.fromMime(copiePermis.mimetype));
    });
  }
}

export class GetCopieNoteVerbaleMAECI extends RouteActionService<{"idCopieNoteVerbaleMAECI": number}, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    return this.getService().getCopieNoteVerbaleMAECI(this.attributes.idCopieNoteVerbaleMAECI).then((copieNoteVerbaleMAECI: CopieNoteVerbaleMAECIFVMMetier) => {
      return new ResultFile({"data": copieNoteVerbaleMAECI.data,
        "filename": copieNoteVerbaleMAECI.nom,
        "encoding": copieNoteVerbaleMAECI.encoding,
        "size": copieNoteVerbaleMAECI.size
      }, MediaTypes.fromMime(copieNoteVerbaleMAECI.mimetype));
    });
  }
}