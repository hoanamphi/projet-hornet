import { FormulairePage } from "src/views/custom/gen-formulaire-page";
import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import { PermisServiceImpl } from "src/services/page/permis/permis-service-impl";

export default class PermisRoutesClient extends AbstractRoutes {
    constructor() {
        super();

        this.addPageRoute("/",
            () => new PageRouteInfos(FormulairePage, null, PermisServiceImpl),
            PUBLIC_ROUTE
        );
    }
}
