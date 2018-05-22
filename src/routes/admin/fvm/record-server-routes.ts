import {
  GetCopiePermis,
  GetDemandeAuthentification, GetDossier,
  GetNoteVerbale,
  GetReleve,
  ListeDossiers
} from "src/actions/admin/fvm/fvm-action";
import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import RecordListRoutesClient from "./record-client-routes";
import {ClientListServiceImpl} from "../../../services/data/admin/fvm/client-list-service-impl-data";
import {Injector} from "hornet-js-core/src/inject/injector";
import {Roles} from '../../../utils/roles';

export default class RecordListRoutesServer extends RecordListRoutesClient {
  constructor() {
    super();

    this.addDataRoute("/",
      () => new DataRouteInfos(ListeDossiers, null, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );

    this.addDataRoute("/detailsDossiers/dossier",
      (id) => new DataRouteInfos(GetDossier, null, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );

    this.addDataRoute("/detailsDossiers/demandeauthentification",
      (id) => new DataRouteInfos(GetDemandeAuthentification, null, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );

    this.addDataRoute("/detailsDossiers/releve",
      (id) => new DataRouteInfos(GetReleve, null, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );

    this.addDataRoute("/detailsDossiers/noteverbale",
      (id) => new DataRouteInfos(GetNoteVerbale, null, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );

    this.addDataRoute("/copiePermis/(\\d+)",
      (idPermis) => new DataRouteInfos(GetCopiePermis, {"idPermis": idPermis}, ClientListServiceImpl),
      PUBLIC_ROUTE,
      "get"
    );
  }
}
