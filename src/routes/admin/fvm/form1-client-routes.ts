import { FormulairePage } from "src/views/admin/fvm/gen-form1-page";
import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import { Form1ServiceImpl } from "src/services/page/admin/fvm/form1-service-impl";

export default class PermisRoutesClient extends AbstractRoutes {
    constructor() {
        super();

        this.addPageRoute("/",
            () => new PageRouteInfos(FormulairePage, null, Form1ServiceImpl),
            PUBLIC_ROUTE
        );
    }
}
