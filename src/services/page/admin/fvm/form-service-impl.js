"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de service PAGE
var service_page_1 = require("hornet-js-core/src/services/service-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.admin.fvm.form-service-impl");
/**
 * Classe de service Page utilisée par les formulaires
 * @extends {ServicePage}
 * @implements {FormService}
 */
var FormServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(FormServiceImpl, _super);
    function FormServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode effectuant une requête HTTP permettant l'insertion d'un dossier dans la base de données
     * @param data données de formulaire
     * @returns {Promise<any>}
     */
    FormServiceImpl.prototype.insererDossier = function (data) {
        logger.trace("SERVICE PAGE inser - FormService.InserDossier");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform1server"),
            data: data,
        };
        // Passer les fichiers uploadés en pièce jointe de la requête
        request.attach = [];
        request.attach.push({ field: "copie_permis", file: data.copie_permis, fileName: data.copie_permis.name });
        request.attach.push({ field: "copie_note_verbale_maeci", file: data.copie_note_verbale_maeci, fileName: data.copie_note_verbale_maeci.name });
        return this.fetch(request);
    };
    /**
     * Méthode effectuant une requête HTTP permettant l'insertion d'une demande d'authentification dans la base de données
     * @param {{num_valise: number, num_demande_authentification: any, id_permis: number}} data données de formulaire
     * @returns {Promise<any>}
     */
    FormServiceImpl.prototype.insererDemandeAuthentification = function (data) {
        logger.trace("SERVICE PAGE inser - FormService.InserDemandeAuthentification");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform2server"),
            data: data
        };
        return this.fetch(request);
    };
    /**
     * Méthode effectuant une requête HTTP permettant l'insertion d'une valise dans la base de données
     * @param {{num_valise: number, date_valise: Date}} data données de formulaire
     * @returns {Promise<any>}
     */
    FormServiceImpl.prototype.insererValise = function (data) {
        logger.trace("SERVICE PAGE inser - FormService.InserValise");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform2server/insertValise"),
            data: data
        };
        return this.fetch(request);
    };
    /**
     * Méthode effectuant une requête HTTP permettant la récupération de la liste des préfectures stockées dans la base
     * @returns {Promise<Array<{idPrefecture: number, prefecture: string}>>} Liste des préfectures stockées dans la base
     */
    FormServiceImpl.prototype.getListePrefecture = function () {
        logger.trace("SERVICE PAGE get - FormService.GetListPrefecture");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform1server/listPrefectures")
        };
        return this.fetch(request);
    };
    /**
     * Méthode effectuant une requête HTTP permettant la récupération de la liste des valises stockées dans la base
     * @returns {Promise<Array<ValiseAttributes>>} Liste des valises stockées dans la base
     */
    FormServiceImpl.prototype.getListeValise = function () {
        logger.trace("SERVICE PAGE get - FormService.GetListValise");
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
