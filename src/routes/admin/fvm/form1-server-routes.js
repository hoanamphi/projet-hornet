"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fvm_action_1 = require("src/actions/admin/fvm/fvm-action");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var server_form_service_impl_data_1 = require("src/services/data/admin/fvm/server-form-service-impl-data");
var form1_client_routes_1 = require("src/routes/admin/fvm/form1-client-routes");
var fvm_action_2 = require("../../../actions/admin/fvm/fvm-action");
var Form1RoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(Form1RoutesServer, _super);
    function Form1RoutesServer() {
        var _this = _super.call(this) || this;
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.InserDossier, null, server_form_service_impl_data_1.ServerFormServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        _this.addDataRoute("/listPrefectures", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_2.ListePrefecture, null, server_form_service_impl_data_1.ServerFormServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        return _this;
    }
    return Form1RoutesServer;
}(form1_client_routes_1.default));
exports.default = Form1RoutesServer;

//# sourceMappingURL=form1-server-routes.js.map
