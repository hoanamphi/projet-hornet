import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import {RecordListPage} from "../../../views/admin/fvm/gen-recordList-page";
import {RecordListServiceImpl} from "../../../services/page/admin/fvm/recordList-service-impl";

export default class RecordListRoutesClient extends AbstractRoutes {
  constructor() {
    super();

    this.addPageRoute("/",
      () => new PageRouteInfos(RecordListPage, null, RecordListServiceImpl),
      PUBLIC_ROUTE
    );
  }
}
