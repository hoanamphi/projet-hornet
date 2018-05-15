import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServicePage } from "hornet-js-core/src/services/service-page";
import { RecordListService } from "src/services/page/admin/fvm/recordList-service";
import {HornetRequest} from "hornet-js-core/src/services/hornet-superagent-request";


const logger: Logger = Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");

export class RecordListServiceImpl extends ServicePage implements RecordListService {

  getListeDossiers(): Promise<any> {
    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/listDossiers")
    };

    return this.fetch(request);
  }
}
