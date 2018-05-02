import { Liste } from "src/actions/permis/permis-action";
import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import { PermisServiceImpl } from "src/services/data/permis/permis-service-impl-data";
import PermisRoutesClient from "src/routes/permis/permis-client-routes";

export default class PermisRoutesServer extends PermisRoutesClient {
    constructor() {
        super();

         this.addDataRoute("/",
             () => new DataRouteInfos(Liste, null, PermisServiceImpl),
             PUBLIC_ROUTE,
             "post"
         );
    }
}
