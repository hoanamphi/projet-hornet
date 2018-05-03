import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { RouteActionService } from "hornet-js-core/src/routes/abstract-routes";
import { Form1Service } from "src/services/page/admin/fvm/form1-service";

const logger: Logger = Utils.getLogger("projet-hornet.actions.admin.permis_actions");

export class Inser extends RouteActionService<any, Form1Service> {
    execute(): Promise<any> {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

        if (this.req.body) {
            return this.getService().insererDonnee(this.req.body);
        }
    }
}
