"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var form1_action_1 = require("src/actions/admin/fvm/form1-action");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var form1_service_impl_data_1 = require("src/services/data/admin/fvm/form1-service-impl-data");
var form1_client_routes_1 = require("src/routes/admin/fvm/form1-client-routes");
var Form1RoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(Form1RoutesServer, _super);
    function Form1RoutesServer() {
        var _this = _super.call(this) || this;
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(form1_action_1.Inser, null, form1_service_impl_data_1.Form1ServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        return _this;
    }
    return Form1RoutesServer;
}(form1_client_routes_1.default));
exports.default = Form1RoutesServer;

//# sourceMappingURL=form1-server-routes.js.map
