"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_page_1 = require("hornet-js-core/src/services/service-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");
var Form1ServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(Form1ServiceImpl, _super);
    function Form1ServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Form1ServiceImpl.prototype.insererDonnee = function (data) {
        logger.trace("SERVICES - list : ", data);
        var request = {
            method: "post",
            url: this.buildUrl("/inser"),
            data: data
        };
        request.attach = [];
        request.attach.push({ field: "copie_permis", file: data["copie_permis"], fileName: data["copie_permis"].name });
        request.attach.push({ field: "copie_note_verbale_maeci", file: data["copie_note_verbale_maeci"], fileName: data["copie_note_verbale_maeci"].name });
        return this.fetch(request);
    };
    Form1ServiceImpl.prototype.getListePrefectures = function () {
        var request = {
            method: "post",
            url: this.buildUrl("/listPrefectures")
        };
        return this.fetch(request);
    };
    return Form1ServiceImpl;
}(service_page_1.ServicePage));
exports.Form1ServiceImpl = Form1ServiceImpl;

//# sourceMappingURL=form1-service-impl.js.map