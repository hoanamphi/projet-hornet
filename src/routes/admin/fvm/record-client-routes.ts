import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import {RecordListPage} from "src/views/admin/fvm/gen-recordList-page";
import {PageServiceImpl} from "src/services/page/admin/fvm/page-service-impl";
import {RecordDetailsPage} from "src/views/admin/fvm/gen-recordDetails-page";

export default class RecordRoutesClient extends AbstractRoutes {
  constructor() {
    super();

    this.addPageRoute("/",
      () => new PageRouteInfos(RecordListPage, null, PageServiceImpl),
      PUBLIC_ROUTE
    );

    this.addPageRoute("/(\\d+)",
      (id) => new PageRouteInfos(RecordDetailsPage, {"idPermis": id}, PageServiceImpl),
      PUBLIC_ROUTE
    );
  }
}
