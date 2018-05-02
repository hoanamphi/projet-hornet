"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gen_cnt_page_1 = require("src/views/cnt/gen-cnt-page");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var contact_service_page_impl_1 = require("src/services/page/cnt/contact-service-page-impl");
var ContactRoutesClient = /** @class */ (function (_super) {
    tslib_1.__extends(ContactRoutesClient, _super);
    function ContactRoutesClient() {
        var _this = _super.call(this) || this;
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(gen_cnt_page_1.ContactPage, null, contact_service_page_impl_1.ContactServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE);
        return _this;
    }
    return ContactRoutesClient;
}(abstract_routes_1.AbstractRoutes));
exports.default = ContactRoutesClient;
//# sourceMappingURL=gen-cnt-client-routes.js.map