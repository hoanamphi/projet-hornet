import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { RouteActionService } from "hornet-js-core/src/routes/abstract-routes";
import { PermisService } from "src/services/page/permis/permis-service";

const logger: Logger = Utils.getLogger("projet-hornet.actions.permis.permis_actions");

/**
 * Appel le service distant pour réaliser l"envoi de la demande de contact.
 */
export class Liste extends RouteActionService<any, PermisService> {
    execute(): Promise<any> {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

        if (this.req.body) {
            return this.getService().listerPermis(this.req.body);
        }
    }
}

export class Inser extends RouteActionService<any, PermisService> {
    execute(): Promise<any> {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

        if (this.req.body) {
            return this.getService().insererPermis(this.req.body);
        }
    }
}
