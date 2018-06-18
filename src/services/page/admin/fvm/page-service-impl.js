"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classe de service PAGE
var service_page_1 = require("hornet-js-core/src/services/service-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");
/**
 * Classe de service Page utilisée par les pages
 * @extends {ServicePage}
 * @implements {PageService}
 */
var PageServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(PageServiceImpl, _super);
    function PageServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode effectuant une requête HTTP permettant la supression d'une demande d'authentification de la base de données
     * @param {{idDemandeAuthentification: number}} data id de la demande d'authentification à supprimer
     * @returns {Promise<any>}
     */
    PageServiceImpl.prototype.deleteDemandeAuthentification = function (data) {
        logger.trace("SERVICE PAGE delete - PageService.DeleteDemandeAuthentification");
        var request = {
            method: "delete",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification/delete"),
            data: data
        };
        return this.fetch(request);
    };
    /**
     * Méthode effectuant une requête HTTP permettant la supression d'un dossier de la base de données
     * @param {{idPermis: number}} data id du Permis concerné par le dossier à supprimer
     * @returns {Promise<any>}
     */
    PageServiceImpl.prototype.deleteDossier = function (data) {
        logger.trace("SERVICE PAGE delete - PageService.DeleteDossier");
        var request = {
            method: "delete",
            url: this.buildUrl("/fvmrecordserver/delete"),
            data: data
        };
        return this.fetch(request);
    };
    /**
     * Méthode effectuant une requête HTTP retournant la liste des dossiers stockés dans la base
     * @returns {Promise<Array<any>>} Liste des dossiers stockés dans la base
     */
    PageServiceImpl.prototype.getListeDossier = function () {
        logger.trace("SERVICE PAGE get - PageService.GetListeDossier");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver"),
        };
        return this.fetch(request);
    };
    /**
     * Méthode effectuant une requête HTTP retournant un dossier
     * @param {{idPermis: number}} data id du Permis relatif au dossier
     * @returns {Promise<Array<any>>} Informations du dossier (Stockées dans un tableau pour une utilisation dans un dataSource)
     */
    PageServiceImpl.prototype.getDossier = function (data) {
        logger.trace("SERVICE PAGE get - PageService.GetDossier");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/dossier"),
            data: data
        };
        return this.fetch(request);
    };
    /**
     * Méthode effectuant une requête HTTP retournant une demande d'authentification
     * @param {{idPermis: number}} data id du Permis concerné par la demande d'authentification
     * @returns {Promise<DemandeAuthentificationFVMAttributes>} Demande d'authentification
     */
    PageServiceImpl.prototype.getDemandeAuthentification = function (data) {
        logger.trace("SERVICE PAGE get - PageService.GetDemandeAuthentification");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmrecordserver/detailsDossiers/demandeauthentification"),
            data: data
        };
        return this.fetch(request);
    };
    /**
     * Méthode effectuant une requête HTTP retournant une copie d'un permis de conduire
     * @param {number} idCopiePermis id de la copie d'un permis de conduire
     * @returns {Promise<any>} service uniquement disponible côté serveur
     */
    PageServiceImpl.prototype.getCopiePermis = function (idCopiePermis) {
        logger.trace("SERVICE PAGE get - PageService.GetCopiePermis");
        return Promise.reject("service uniquement disponible côté serveur");
    };
    ;
    /**
     * Méthode effectuant une requête HTTP retournant une copie d'une note verbale du MAECI
     * @param {number} idCopieNoteVerbaleMAECI id de la copie d'une note verbale du MAECI
     * @returns {Promise<any>} service uniquement disponible côté serveur
     */
    PageServiceImpl.prototype.getCopieNoteVerbaleMAECI = function (idCopieNoteVerbaleMAECI) {
        logger.trace("SERVICE PAGE get - PageService.GetCopieNoteVerbaleMAECI");
        return Promise.reject("service uniquement disponible côté serveur");
    };
    ;
    /**
     * Méthode effectuant une requête HTTP retournant les informations nécessaires à la génération d'une demande d'authentification en PDF
     * @param {number} idPermis id du Permis concerné par la demande d'authentification
     * @returns {Promise<any>} service uniquement disponible côté serveur
     */
    PageServiceImpl.prototype.getPDFDemandeAuthentification = function (idPermis) {
        logger.trace("SERVICE PAGE get - PageService.GetPDFDemandeAuthentification");
        return Promise.reject("service uniquement disponible côté serveur");
    };
    ;
    return PageServiceImpl;
}(service_page_1.ServicePage));
exports.PageServiceImpl = PageServiceImpl;

//# sourceMappingURL=page-service-impl.js.map
