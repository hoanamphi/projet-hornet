import { FormulaireDossierPage } from "src/views/admin/fvm/gen-formDossier-page";
import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import { ServerFormServiceImpl } from "src/services/page/admin/fvm/server-form-service-impl";
import {Roles} from "../../../utils/roles";
import {Injector} from "hornet-js-core/src/inject/injector";

export default class Form1RoutesClient extends AbstractRoutes {
    constructor() {
        super();

        this.addPageRoute("/",
            () => new PageRouteInfos(FormulaireDossierPage, null, ServerFormServiceImpl),
            PUBLIC_ROUTE
        );
    }
}
