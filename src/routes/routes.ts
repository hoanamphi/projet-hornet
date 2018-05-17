import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
// import { HomePage } from "src/views/gen/gen-hom-page";
// import { AidePage } from "src/views/gen/gen-aid-page";
// import { PlanAppliPage } from "src/views/nav/nav-pap-page";
// import { AccessibilitePage } from "src/views/gen/gen-acb-page";
import { Utils } from "hornet-js-utils";
// import { DeclarationconformitePage } from "src/views/gen/gen-ddc-page";
import {Logger} from "hornet-js-utils/src/logger";


const logger: Logger = Utils.getLogger("projet-hornet.routes.routes");

export class Routes extends AbstractRoutes {

  constructor() {
    super();
    if(Utils.isServer){
      this.addClientRoutes();
      this.addServerRoutes();
    }else{
      this.addClientRoutes();
    }
  }

  public addClientRoutes(){
    // /* Routes des pages */
    // this.addPageRoute("/accueil",
    //   () => new PageRouteInfos(HomePage),
    //   PUBLIC_ROUTE
    // );
    // this.addPageRoute("/aide",
    //   () => new PageRouteInfos(AidePage),
    //   PUBLIC_ROUTE
    // );
    // this.addPageRoute("/planAppli",
    //   () => new PageRouteInfos(PlanAppliPage),
    //   PUBLIC_ROUTE
    // );
    // this.addPageRoute("/politiqueAccessibilite",
    //   () => new PageRouteInfos(AccessibilitePage),
    //   PUBLIC_ROUTE
    // );
    // this.addPageRoute("/declarationConformite",
    //   () => new PageRouteInfos(DeclarationconformitePage),
    //   PUBLIC_ROUTE
    // );
    // this.addLazyRoutes("/admin", "admin/admin-client-routes");
    
    this.addLazyRoutes("/form1", "admin/fvm/form1-client-routes");
    this.addLazyRoutes("/record", "admin/fvm/record-client-routes");

    // /* Routes lazy */
    // this.addLazyRoutes(URL_CONTACT, "cnt/gen-cnt-client-routes");
  }

  public addServerRoutes(){
    this.addLazyRoutes("/form1server", "admin/fvm/form1-server-routes");
    this.addLazyRoutes("/recordserver", "admin/fvm/record-server-routes");
  }
  //   this.addLazyRoutes("/admin", "admin/admin-server-routes");
  //   this.addLazyRoutes("/inser", "admin/admin-inser-routes");
  //   this.addLazyRoutes(URL_CONTACT, "cnt/gen-cnt-server-routes");
  // }
}
