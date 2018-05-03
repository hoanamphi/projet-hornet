import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServicePage } from "hornet-js-core/src/services/service-page";
import { Form1Service } from "src/services/page/admin/fvm/form1-service";


const logger: Logger = Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");

export class Form1ServiceImpl extends ServicePage implements Form1Service {

    insererDonnee(data: any): Promise<any> {
        logger.trace("SERVICES - list : ", data);

        return this.fetch({
            method: "post",
            url: this.buildUrl("/inser")
        });
    }
}
