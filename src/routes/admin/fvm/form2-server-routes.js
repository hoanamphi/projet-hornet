"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fvm_action_1 = require("src/actions/admin/fvm/fvm-action");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var server_form_service_impl_data_1 = require("src/services/data/admin/fvm/server-form-service-impl-data");
var form2_client_routes_1 = require("./form2-client-routes");
var Form2RoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(Form2RoutesServer, _super);
    function Form2RoutesServer() {
        var _this = _super.call(this) || this;
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.InserDemandeAuthentification, null, server_form_service_impl_data_1.ServerFormServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        _this.addDataRoute("/insertValise", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.InserValise, null, server_form_service_impl_data_1.ServerFormServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        _this.addDataRoute("/listValises", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.ListeValise, null, server_form_service_impl_data_1.ServerFormServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        return _this;
    }
    return Form2RoutesServer;
}(form2_client_routes_1.default));
exports.default = Form2RoutesServer;

//# sourceMappingURL=form2-server-routes.js.map
