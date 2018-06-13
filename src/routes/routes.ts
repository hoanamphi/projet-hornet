import { Utils } from "hornet-js-utils";
import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
// Classes de Page des pages principales
import { HomePage } from "src/views/gen/gen-hom-page";
import { AidePage } from "src/views/gen/gen-aid-page";
import { PlanAppliPage } from "src/views/nav/nav-pap-page";
import { AccessibilitePage } from "src/views/gen/gen-acb-page";
import { DeclarationconformitePage } from "src/views/gen/gen-ddc-page";

/**
 * Classe définissant les routes Client et Serveur de l'application
 * @extends {AbstractRoutes}
 */
export class Routes extends AbstractRoutes {

  /**
   * @constructor
   */
  constructor() {
    super();

    if(Utils.isServer){
      this.addClientRoutes();
      this.addServerRoutes();
    }else{
      this.addClientRoutes();
    }
  }

  /**
   * Méthode ajoutant les routes Client de l'application
   */
  public addClientRoutes(){
    // Route menant à la page d'accueil
    this.addPageRoute("/accueil",
      () => new PageRouteInfos(HomePage),
      PUBLIC_ROUTE
    );
    // Route menant à la page d'aide
    this.addPageRoute("/aide",
      () => new PageRouteInfos(AidePage),
      PUBLIC_ROUTE
    );
    // Route menant à la page présentant le plan de l'application
    this.addPageRoute("/planAppli",
      () => new PageRouteInfos(PlanAppliPage),
      PUBLIC_ROUTE
    );
    // Route menant à la page présentant la politique d'accessibilité de l'application
    this.addPageRoute("/politiqueAccessibilite",
      () => new PageRouteInfos(AccessibilitePage),
      PUBLIC_ROUTE
    );
    // Route menant à la page présentant la déclaration de conformité de l'application
    this.addPageRoute("/declarationConformite",
      () => new PageRouteInfos(DeclarationconformitePage),
      PUBLIC_ROUTE
    );

    // Lazy routes Client
    // Formulaire d'insertion d'un dossier
    this.addLazyRoutes("/fvmform1", "admin/fvm/form1-client-routes");
    // Formulaire d'insertion d'une demande d'authentification
    this.addLazyRoutes("/fvmform2", "admin/fvm/form2-client-routes");
    // Pages permettant de consulter les entrées de la base
    this.addLazyRoutes("/fvmrecord", "admin/fvm/record-client-routes");
  }

  /**
   * Méthode ajoutant les routes Serveur de l'application
   */
  public addServerRoutes(){
    // Lazy routes serveur
    // Formulaire d'insertion d'un dossier
    this.addLazyRoutes("/fvmform1server", "admin/fvm/form1-server-routes");
    // Formulaire d'insertion d'une demande d'authentification
    this.addLazyRoutes("/fvmform2server", "admin/fvm/form2-server-routes");
    // Pages permettant de consulter les entrées de la base
    this.addLazyRoutes("/fvmrecordserver", "admin/fvm/record-server-routes");
  }
}
