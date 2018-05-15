"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var gen_recordList_page_1 = require("../../../views/admin/fvm/gen-recordList-page");
var recordList_service_impl_1 = require("../../../services/page/admin/fvm/recordList-service-impl");
var RecordListRoutesClient = /** @class */ (function (_super) {
    tslib_1.__extends(RecordListRoutesClient, _super);
    function RecordListRoutesClient() {
        var _this = _super.call(this) || this;
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(gen_recordList_page_1.RecordListPage, null, recordList_service_impl_1.RecordListServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE);
        return _this;
    }
    return RecordListRoutesClient;
}(abstract_routes_1.AbstractRoutes));
exports.default = RecordListRoutesClient;

//# sourceMappingURL=record-client-routes.js.map
