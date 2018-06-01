import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import {RecordListPage} from "../../../views/admin/fvm/gen-recordList-page";
import {ClientListServiceImpl} from "../../../services/page/admin/fvm/client-list-service-impl";
import {RecordDetailsPage} from "../../../views/admin/fvm/gen-recordDetails-page";

export default class RecordListRoutesClient extends AbstractRoutes {
  constructor() {
    super();

    this.addPageRoute("/",
      () => new PageRouteInfos(RecordListPage, null, ClientListServiceImpl),
      PUBLIC_ROUTE
    );

    this.addPageRoute("/(\\d+)",
      (id) => new PageRouteInfos(RecordDetailsPage, {"idPermis": id}, ClientListServiceImpl),
      PUBLIC_ROUTE
    );
  }
}
