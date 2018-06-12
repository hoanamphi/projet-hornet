"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var gen_recordList_page_1 = require("src/views/admin/fvm/gen-recordList-page");
var page_service_impl_1 = require("src/services/page/admin/fvm/page-service-impl");
var gen_recordDetails_page_1 = require("src/views/admin/fvm/gen-recordDetails-page");
var RecordRoutesClient = /** @class */ (function (_super) {
    tslib_1.__extends(RecordRoutesClient, _super);
    function RecordRoutesClient() {
        var _this = _super.call(this) || this;
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(gen_recordList_page_1.RecordListPage, null, page_service_impl_1.PageServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE);
        _this.addPageRoute("/(\\d+)", function (id) { return new abstract_routes_1.PageRouteInfos(gen_recordDetails_page_1.RecordDetailsPage, { "idPermis": id }, page_service_impl_1.PageServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE);
        return _this;
    }
    return RecordRoutesClient;
}(abstract_routes_1.AbstractRoutes));
exports.default = RecordRoutesClient;
//# sourceMappingURL=record-client-routes.js.map