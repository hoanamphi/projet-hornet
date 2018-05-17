"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gen_form1_page_1 = require("src/views/admin/fvm/gen-form1-page");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var server_form_service_impl_1 = require("src/services/page/admin/fvm/server-form-service-impl");
var Form1RoutesClient = /** @class */ (function (_super) {
    tslib_1.__extends(Form1RoutesClient, _super);
    function Form1RoutesClient() {
        var _this = _super.call(this) || this;
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(gen_form1_page_1.FormulairePage, null, server_form_service_impl_1.ServerFormServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE);
        return _this;
    }
    return Form1RoutesClient;
}(abstract_routes_1.AbstractRoutes));
exports.default = Form1RoutesClient;

//# sourceMappingURL=form1-client-routes.js.map
