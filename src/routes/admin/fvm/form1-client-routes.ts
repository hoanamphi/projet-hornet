import { FormulairePage } from "src/views/admin/fvm/gen-form1-page";
import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import { ServerFormServiceImpl } from "src/services/page/admin/fvm/server-form-service-impl";

export default class Form1RoutesClient extends AbstractRoutes {
    constructor() {
        super();

        this.addPageRoute("/",
            () => new PageRouteInfos(FormulairePage, null, ServerFormServiceImpl),
            PUBLIC_ROUTE
        );
    }
}
