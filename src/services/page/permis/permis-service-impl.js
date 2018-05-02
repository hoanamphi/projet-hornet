"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_page_1 = require("hornet-js-core/src/services/service-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.permis.permis-service-impl");
var PermisServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(PermisServiceImpl, _super);
    function PermisServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PermisServiceImpl.prototype.listerPermis = function (data) {
        logger.trace("SERVICES - list : ", data);
        return this.fetch({
            method: "post",
            url: this.buildUrl("/custom"),
            data: data
        });
    };
    PermisServiceImpl.prototype.insererPermis = function (data) {
        logger.trace("SERVICES - list : ", data);
        return this.fetch({
            method: "post",
            url: this.buildUrl("/inser"),
            data: data
        });
    };
    return PermisServiceImpl;
}(service_page_1.ServicePage));
exports.PermisServiceImpl = PermisServiceImpl;

//# sourceMappingURL=permis-service-impl.js.map
