"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var urls_1 = require("src/utils/urls");
var gen_hom_page_1 = require("src/views/gen/gen-hom-page");
var gen_aid_page_1 = require("src/views/gen/gen-aid-page");
var nav_pap_page_1 = require("src/views/nav/nav-pap-page");
var gen_acb_page_1 = require("src/views/gen/gen-acb-page");
var hornet_js_utils_1 = require("hornet-js-utils");
var gen_ddc_page_1 = require("src/views/gen/gen-ddc-page");
var gen_custom_page_1 = require("src/views/admin/gen-admin-page");
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
        /* Routes des pages */
        this.addPageRoute("/accueil", function () { return new abstract_routes_1.PageRouteInfos(gen_hom_page_1.HomePage); }, abstract_routes_1.PUBLIC_ROUTE);
        this.addPageRoute("/aide", function () { return new abstract_routes_1.PageRouteInfos(gen_aid_page_1.AidePage); }, abstract_routes_1.PUBLIC_ROUTE);
        this.addPageRoute("/planAppli", function () { return new abstract_routes_1.PageRouteInfos(nav_pap_page_1.PlanAppliPage); }, abstract_routes_1.PUBLIC_ROUTE);
        this.addPageRoute("/politiqueAccessibilite", function () { return new abstract_routes_1.PageRouteInfos(gen_acb_page_1.AccessibilitePage); }, abstract_routes_1.PUBLIC_ROUTE);
        this.addPageRoute("/declarationConformite", function () { return new abstract_routes_1.PageRouteInfos(gen_ddc_page_1.DeclarationconformitePage); }, abstract_routes_1.PUBLIC_ROUTE);
        this.addPageRoute("/admin", function () { return new abstract_routes_1.PageRouteInfos(gen_custom_page_1.CustomPage); }, abstract_routes_1.PUBLIC_ROUTE);
        /* Routes lazy */
        this.addLazyRoutes(urls_1.URL_CONTACT, "cnt/gen-cnt-client-routes");
    };
    Routes.prototype.addServerRoutes = function () {
        this.addLazyRoutes(urls_1.URL_CONTACT, "cnt/gen-cnt-server-routes");
    };
    return Routes;
}(abstract_routes_1.AbstractRoutes));
exports.Routes = Routes;

//# sourceMappingURL=routes.js.map
