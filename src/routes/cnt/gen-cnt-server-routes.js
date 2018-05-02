"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gen_cnt_actions_1 = require("src/actions/cnt/gen-cnt-actions");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var contact_service_data_impl_1 = require("src/services/data/cnt/contact-service-data-impl");
var gen_cnt_client_routes_1 = require("src/routes/cnt/gen-cnt-client-routes");
var ContactRoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(ContactRoutesServer, _super);
    function ContactRoutesServer() {
        var _this = _super.call(this) || this;
        /* Route des datas */
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(gen_cnt_actions_1.Send, null, contact_service_data_impl_1.ContactServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        return _this;
    }
    return ContactRoutesServer;
}(gen_cnt_client_routes_1.default));
exports.default = ContactRoutesServer;
//# sourceMappingURL=gen-cnt-server-routes.js.map