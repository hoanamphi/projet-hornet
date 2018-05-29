import { FormulaireDossierPage } from "src/views/admin/fvm/gen-formDossier-page";
import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import { ServerFormServiceImpl } from "src/services/page/admin/fvm/server-form-service-impl";
import {FormulaireDemandeAuthentificationPage} from "../../../views/admin/fvm/gen-formDemande-page";

export default class Form2RoutesClient extends AbstractRoutes {
  constructor() {
    super();

    this.addPageRoute("/(\\d+)",
      (id) => new PageRouteInfos(FormulaireDemandeAuthentificationPage, {"id": id}, ServerFormServiceImpl),
      PUBLIC_ROUTE
    );
  }
}
