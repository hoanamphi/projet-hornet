"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_page_1 = require("hornet-js-core/src/services/service-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");
var ClientListServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ClientListServiceImpl, _super);
    function ClientListServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientListServiceImpl.prototype.getListeDossiers = function () {
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver"),
        };
        return this.fetch(request);
    };
    ClientListServiceImpl.prototype.getDossier = function (data) {
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/dossier"),
            data: data
        };
        return this.fetch(request);
    };
    ClientListServiceImpl.prototype.getDemandeAuthentification = function (data) {
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification"),
            data: data
        };
        return this.fetch(request);
    };
    ClientListServiceImpl.prototype.getReleve = function (data) {
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/releve"),
            data: data
        };
        return this.fetch(request);
    };
    ClientListServiceImpl.prototype.getNoteVerbale = function (data) {
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/noteverbale"),
            data: data
        };
        return this.fetch(request);
    };
    ClientListServiceImpl.prototype.getCopiePermis = function (idCopiePermis) {
        return Promise.reject("service uniquement disponible côté serveur");
    };
    ;
    ClientListServiceImpl.prototype.getCopieNoteVerbaleMAECI = function (idCopieNoteVerbaleMAECI) {
        return Promise.reject("service uniquement disponible côté serveur");
    };
    ;
    ClientListServiceImpl.prototype.getPDFDemandeAuthentification = function (idPermis) {
        return Promise.reject("service uniquement disponible côté serveur");
    };
    ;
    ClientListServiceImpl.prototype.deleteDemandeAuthentification = function (idDemandeAuthentification) {
        var request = {
            method: "delete",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification/delete"),
            data: { "idDemandeAuthentification": idDemandeAuthentification }
        };
        return this.fetch(request);
    };
    ClientListServiceImpl.prototype.deleteDossier = function (idPermis) {
        var request = {
            method: "delete",
            url: this.buildUrl("/fvmrecordserver/delete"),
            data: { "idPermis": idPermis }
        };
        return this.fetch(request);
    };
    return ClientListServiceImpl;
}(service_page_1.ServicePage));
exports.ClientListServiceImpl = ClientListServiceImpl;

//# sourceMappingURL=client-list-service-impl.js.map
