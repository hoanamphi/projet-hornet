"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_page_1 = require("hornet-js-core/src/services/service-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");
var FormServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(FormServiceImpl, _super);
    function FormServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormServiceImpl.prototype.insererDonnee = function (data) {
        logger.trace("SERVICES - insert : ", data);
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform1server"),
            data: data,
        };
        request.attach = [];
        request.attach.push({ field: "copie_permis", file: data["copie_permis"], fileName: data["copie_permis"].name });
        request.attach.push({ field: "copie_note_verbale_maeci", file: data["copie_note_verbale_maeci"], fileName: data["copie_note_verbale_maeci"].name });
        return this.fetch(request);
    };
    FormServiceImpl.prototype.insererDemandeAuthentification = function (data) {
        logger.trace("SERVICES - insert : ", data);
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform2server"),
            data: data
        };
        return this.fetch(request);
    };
    FormServiceImpl.prototype.insererValise = function (data) {
        logger.trace("SERVICES - insert : ", data);
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform2server/insertValise"),
            data: data
        };
        return this.fetch(request);
    };
    FormServiceImpl.prototype.getListePrefectures = function () {
        logger.trace("SERVICES - list");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform1server/listPrefectures")
        };
        return this.fetch(request);
    };
    FormServiceImpl.prototype.getListeValises = function () {
        logger.trace("SERVICES - list");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform2server/listValises")
        };
        return this.fetch(request);
    };
    return FormServiceImpl;
}(service_page_1.ServicePage));
exports.FormServiceImpl = FormServiceImpl;
//# sourceMappingURL=form-service-impl.js.map