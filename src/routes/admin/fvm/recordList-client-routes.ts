import { RecordListPage } from "src/views/admin/fvm/gen-recordList-page";
import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";

export default class RecordListRoutesClient extends AbstractRoutes {
    constructor() {
        super();

        this.addPageRoute("/",
            () => new PageRouteInfos(RecordListPage, null, null),
            PUBLIC_ROUTE
        );
    }
}
