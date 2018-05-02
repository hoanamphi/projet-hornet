"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var permis_action_1 = require("src/actions/permis/permis-action");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var permis_service_impl_data_1 = require("src/services/data/permis/permis-service-impl-data");
var permis_client_routes_1 = require("src/routes/permis/permis-client-routes");
var PermisRoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(PermisRoutesServer, _super);
    function PermisRoutesServer() {
        var _this = _super.call(this) || this;
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(permis_action_1.Liste, null, permis_service_impl_data_1.PermisServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        return _this;
    }
    return PermisRoutesServer;
}(permis_client_routes_1.default));
exports.default = PermisRoutesServer;

//# sourceMappingURL=permis-server-routes.js.map
