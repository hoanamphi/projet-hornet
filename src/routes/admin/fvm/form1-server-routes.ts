import { InserDossier } from "src/actions/admin/fvm/fvm-action";
import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import { ServerFormServiceImpl } from "src/services/data/admin/fvm/server-form-service-impl-data";
import Form1RoutesClient from "src/routes/admin/fvm/form1-client-routes";
import {ListePrefecture} from "../../../actions/admin/fvm/fvm-action";

export default class Form1RoutesServer extends Form1RoutesClient {
    constructor() {
        super();

         this.addDataRoute("/",
             () => new DataRouteInfos(InserDossier, null, ServerFormServiceImpl),
             PUBLIC_ROUTE,
             "post"
         );

      this.addDataRoute("/listPrefectures",
        () => new DataRouteInfos(ListePrefecture, null, ServerFormServiceImpl),
        PUBLIC_ROUTE,
        "post"
      );
    }
}
