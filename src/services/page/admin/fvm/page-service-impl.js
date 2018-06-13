"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_page_1 = require("hornet-js-core/src/services/service-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");
var PageServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(PageServiceImpl, _super);
    function PageServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageServiceImpl.prototype.getListeDossiers = function () {
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver"),
        };
        return this.fetch(request);
    };
    PageServiceImpl.prototype.getDossier = function (data) {
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/dossier"),
            data: data
        };
        return this.fetch(request);
    };
    PageServiceImpl.prototype.getDemandeAuthentification = function (data) {
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification"),
            data: data
        };
        return this.fetch(request);
    };
    PageServiceImpl.prototype.getReleve = function (data) {
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/releve"),
            data: data
        };
        return this.fetch(request);
    };
    PageServiceImpl.prototype.getNoteVerbale = function (data) {
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/noteverbale"),
            data: data
        };
        return this.fetch(request);
    };
    PageServiceImpl.prototype.getCopiePermis = function (idCopiePermis) {
        return Promise.reject("service uniquement disponible côté serveur");
    };
    ;
    PageServiceImpl.prototype.getCopieNoteVerbaleMAECI = function (idCopieNoteVerbaleMAECI) {
        return Promise.reject("service uniquement disponible côté serveur");
    };
    ;
    PageServiceImpl.prototype.getPDFDemandeAuthentification = function (idPermis) {
        return Promise.reject("service uniquement disponible côté serveur");
    };
    ;
    PageServiceImpl.prototype.deleteDemandeAuthentification = function (idDemandeAuthentification) {
        var request = {
            method: "delete",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification/delete"),
            data: { "idDemandeAuthentification": idDemandeAuthentification }
        };
        return this.fetch(request);
    };
    PageServiceImpl.prototype.deleteDossier = function (idPermis) {
        var request = {
            method: "delete",
            url: this.buildUrl("/fvmrecordserver/delete"),
            data: { "idPermis": idPermis }
        };
        return this.fetch(request);
    };
    return PageServiceImpl;
}(service_page_1.ServicePage));
exports.PageServiceImpl = PageServiceImpl;

//# sourceMappingURL=page-service-impl.js.map
