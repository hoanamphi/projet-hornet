"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var form1_action_1 = require("src/actions/admin/fvm/form1-action");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var record_client_routes_1 = require("./record-client-routes");
var recordList_service_impl_data_1 = require("../../../services/data/admin/fvm/recordList-service-impl-data");
var RecordListRoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(RecordListRoutesServer, _super);
    function RecordListRoutesServer() {
        var _this = _super.call(this) || this;
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(form1_action_1.ListeDossiers, null, recordList_service_impl_data_1.RecordListServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        return _this;
    }
    return RecordListRoutesServer;
}(record_client_routes_1.default));
exports.default = RecordListRoutesServer;

//# sourceMappingURL=record-server-routes.js.map
