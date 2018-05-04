import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { RouteActionService } from "hornet-js-core/src/routes/abstract-routes";
import { Form1Service } from "src/services/page/admin/fvm/form1-service";

const logger: Logger = Utils.getLogger("projet-hornet.actions.admin.permis_actions");

export class Inser extends RouteActionService<any, Form1Service> {
    execute(): Promise<any> {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

        let data = this.req.body;

        if(this.req.files[0] != null){
            data["copie_permis"] = {};
            data["copie_permis"].nom = this.req.files[0].originalname;
            data["copie_permis"].mimetype = this.req.files[0].mimetype;
            data["copie_permis"].encoding = this.req.files[0].encoding;
            data["copie_permis"].size = this.req.files[0].size;
            data["copie_permis"].contenu = this.req.files[0].buffer;
        }

        return this.getService().insererDonnee(data);
    }
}
