"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_page_1 = require("hornet-js-core/src/services/service-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");
var ServerFormServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ServerFormServiceImpl, _super);
    function ServerFormServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServerFormServiceImpl.prototype.insererDonnee = function (data) {
        logger.trace("SERVICES - list : ", data);
        var request = {
            method: "post",
            url: this.buildUrl("/form1server"),
            data: data
        };
        request.attach = [];
        request.attach.push({ field: "copie_permis", file: data["copie_permis"], fileName: data["copie_permis"].name });
        request.attach.push({ field: "copie_note_verbale_maeci", file: data["copie_note_verbale_maeci"], fileName: data["copie_note_verbale_maeci"].name });
        return this.fetch(request);
    };
    ServerFormServiceImpl.prototype.insererValise = function (data) {
        logger.trace("SERVICES - list : ", data);
        var request = {
            method: "post",
            url: this.buildUrl("/form2server/insertValise"),
            data: data
        };
        return this.fetch(request);
    };
    ServerFormServiceImpl.prototype.getListePrefectures = function () {
        var request = {
            method: "post",
            url: this.buildUrl("/form1server/listPrefectures")
        };
        return this.fetch(request);
    };
    ServerFormServiceImpl.prototype.getListeValises = function () {
        var request = {
            method: "post",
            url: this.buildUrl("/form2server/listValises")
        };
        return this.fetch(request);
    };
    return ServerFormServiceImpl;
}(service_page_1.ServicePage));
exports.ServerFormServiceImpl = ServerFormServiceImpl;

//# sourceMappingURL=server-form-service-impl.js.map
