import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
// Classe de Page du formulaire d'insertion d'une demande d'authentification
import {FormulaireDemandeAuthentificationPage} from "src/views/admin/fvm/fvm-formDemande-page";
// Classe du service utilisé par la Classe de Page
import { FormServiceImpl } from "src/services/page/admin/fvm/form-service-impl";
// Classes permettant de mettre en place l'authentification
import {Roles} from "src/utils/roles";
import {Injector} from "hornet-js-core/src/inject/injector";

/**
 * Classe définissant les sous-routes Client de la lazy route "/fvmform2"
 * @extends {AbstractRoutes}
 */
export default class FormulaireDemandeAuthentificationRoutesClient extends AbstractRoutes {

  /**
   * @constructor
   */
  constructor() {
    super();

    // Route menant au formulaire d'insertion d'une demande d'authentification
    // La page prend un service de type FormService en entrée
    // L'attribut "idPermis" est l'id du Permis auquel appartient la demande d'authentification
    this.addPageRoute("/(\\d+)",
      (id) => new PageRouteInfos(FormulaireDemandeAuthentificationPage, {"idPermis": id}, FormServiceImpl),
      Roles.ADMIN
    );
  }
}
