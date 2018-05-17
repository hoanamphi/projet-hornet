"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
// import { HomePage } from "src/views/gen/gen-hom-page";
// import { AidePage } from "src/views/gen/gen-aid-page";
// import { PlanAppliPage } from "src/views/nav/nav-pap-page";
// import { AccessibilitePage } from "src/views/gen/gen-acb-page";
var hornet_js_utils_1 = require("hornet-js-utils");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.routes.routes");
var Routes = /** @class */ (function (_super) {
    tslib_1.__extends(Routes, _super);
    function Routes() {
        var _this = _super.call(this) || this;
        if (hornet_js_utils_1.Utils.isServer) {
            _this.addClientRoutes();
            _this.addServerRoutes();
        }
        else {
            _this.addClientRoutes();
        }
        return _this;
    }
    Routes.prototype.addClientRoutes = function () {
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
    };
    Routes.prototype.addServerRoutes = function () {
        this.addLazyRoutes("/form1server", "admin/fvm/form1-server-routes");
        this.addLazyRoutes("/recordserver", "admin/fvm/record-server-routes");
    };
    return Routes;
}(abstract_routes_1.AbstractRoutes));
exports.Routes = Routes;

//# sourceMappingURL=routes.js.map
