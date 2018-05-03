"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gen_form1_page_1 = require("src/views/admin/fvm/gen-form1-page");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var form1_service_impl_1 = require("src/services/page/admin/fvm/form1-service-impl");
var PermisRoutesClient = /** @class */ (function (_super) {
    tslib_1.__extends(PermisRoutesClient, _super);
    function PermisRoutesClient() {
        var _this = _super.call(this) || this;
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(gen_form1_page_1.FormulairePage, null, form1_service_impl_1.Form1ServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE);
        return _this;
    }
    return PermisRoutesClient;
}(abstract_routes_1.AbstractRoutes));
exports.default = PermisRoutesClient;

//# sourceMappingURL=form1-client-routes.js.map
