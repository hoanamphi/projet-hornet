"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_page_1 = require("hornet-js-core/src/services/service-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");
var RecordListServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(RecordListServiceImpl, _super);
    function RecordListServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordListServiceImpl.prototype.getListeDossiers = function () {
        var request = {
            method: "post",
            url: this.buildUrl("/listDossiers")
        };
        return this.fetch(request);
    };
    return RecordListServiceImpl;
}(service_page_1.ServicePage));
exports.RecordListServiceImpl = RecordListServiceImpl;

//# sourceMappingURL=recordList-service-impl.js.map
