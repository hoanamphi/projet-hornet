import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
// Classe de Page de la page présentant la liste des dossiers
import {RecordListPage} from "src/views/admin/fvm/gen-recordList-page";
// Classe de Page de la page présentant les détails d'un dossier
import {RecordDetailsPage} from "src/views/admin/fvm/gen-recordDetails-page";
// Classe du service utilisé par la Classe de Page
import {PageServiceImpl} from "src/services/page/admin/fvm/page-service-impl";

/**
 * Classe définissant les sous-routes Client de la lazy route "/fvmrecord"
 * @extends {AbstractRoutes}
 */
export default class RecordRoutesClient extends AbstractRoutes {

  /**
   * @constructor
   */
  constructor() {
    super();

    // Route menant à la page présentant la liste des dossiers
    // La page prend un service de type PageService en entrée
    this.addPageRoute("/",
      () => new PageRouteInfos(RecordListPage, null, PageServiceImpl),
      PUBLIC_ROUTE
    );

    // Route menant à la page présentant les détails d'un dossier
    // La page prend un service de type PageService en entrée
    // L'attribut "idPermis" est l'id du Permis auquel appartient le dossier
    this.addPageRoute("/(\\d+)",
      (id) => new PageRouteInfos(RecordDetailsPage, {"idPermis": id}, PageServiceImpl),
      PUBLIC_ROUTE
    );
  }
}
