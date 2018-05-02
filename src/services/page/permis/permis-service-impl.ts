import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServicePage } from "hornet-js-core/src/services/service-page";
import { URL_CONTACT } from "src/utils/urls";
import { PermisService } from "src/services/page/permis/permis-service";


const logger: Logger = Utils.getLogger("projet-hornet.services.page.permis.permis-service-impl");

export class PermisServiceImpl extends ServicePage implements PermisService {

    listerPermis(data: any): Promise<any> {
        logger.trace("SERVICES - list : ", data);

        return this.fetch({
            method: "post",
            url: this.buildUrl("/custom"),
            data: data
        });
    }

    insererPermis(data: any): Promise<any> {
        logger.trace("SERVICES - list : ", data);

        return this.fetch({
            method: "post",
            url: this.buildUrl("/inser"),
            data: data
        });
    }
}
