import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
// Classe de Page du formulaire d'insertion d'un dossier
import { FormulaireDossierPage } from "src/views/admin/fvm/gen-formDossier-page";
// Classe du service utilisé par la Classe de Page
import { FormServiceImpl } from "src/services/page/admin/fvm/form-service-impl";
// Classes permettant de mettre en place l'authentification
import {Roles} from "src/utils/roles";
import {Injector} from "hornet-js-core/src/inject/injector";

/**
 * Classe définissant les sous-routes Client de la lazy route "/fvmform1"
 * @extends {AbstractRoutes}
 */
export default class FormulaireDossierRoutesClient extends AbstractRoutes {

  /**
   * @constructor
   */
  constructor() {
    super();

    // Route menant au formulaire d'insertion d'un dossier
    // La page prend un service de type FormService en entrée
    this.addPageRoute("/",
      () => new PageRouteInfos(FormulaireDossierPage, null, FormServiceImpl),
      Roles.ADMIN
    );
  }
}
