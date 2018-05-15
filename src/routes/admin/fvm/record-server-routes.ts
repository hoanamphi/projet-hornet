import {ListeDossiers} from "src/actions/admin/fvm/form1-action";
import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import RecordListRoutesClient from "./record-client-routes";
import {RecordListServiceImpl} from "../../../services/data/admin/fvm/recordList-service-impl-data";

export default class RecordListRoutesServer extends RecordListRoutesClient {
  constructor() {
    super();

    this.addDataRoute("/",
      () => new DataRouteInfos(ListeDossiers, null, RecordListServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );
  }
}
