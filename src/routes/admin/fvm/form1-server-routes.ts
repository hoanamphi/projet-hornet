import { Inser } from "src/actions/admin/fvm/form1-action";
import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import { Form1ServiceImpl } from "src/services/data/admin/fvm/form1-service-impl-data";
import PermisRoutesClient from "src/routes/admin/fvm/form1-client-routes";

export default class PermisRoutesServer extends PermisRoutesClient {
    constructor() {
        super();

         this.addDataRoute("/",
             () => new DataRouteInfos(Inser, null, Form1ServiceImpl),
             PUBLIC_ROUTE,
             "post"
         );
    }
}
