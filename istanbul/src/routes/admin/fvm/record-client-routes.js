"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
// Classe de Page de la page présentant la liste des dossiers
var fvm_recordList_page_1 = require("./../../../views/admin/fvm/fvm-recordList-page");
// Classe de Page de la page présentant les détails d'un dossier
var fvm_recordDetails_page_1 = require("./../../../views/admin/fvm/fvm-recordDetails-page");
// Classe du service utilisé par la Classe de Page
var page_service_impl_1 = require("./../../../services/page/admin/fvm/page-service-impl");
/**
 * Classe définissant les sous-routes Client de la lazy route "/fvmrecord"
 * @extends {AbstractRoutes}
 */
var RecordRoutesClient = /** @class */ (function (_super) {
    tslib_1.__extends(RecordRoutesClient, _super);
    /**
     * @constructor
     */
    function RecordRoutesClient() {
        var _this = _super.call(this) || this;
        // Route menant à la page présentant la liste des dossiers
        // La page prend un service de type PageService en entrée
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(fvm_recordList_page_1.RecordListPage, null, page_service_impl_1.PageServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE);
        // Route menant à la page présentant les détails d'un dossier
        // La page prend un service de type PageService en entrée
        // L'attribut "idPermis" est l'id du Permis auquel appartient le dossier
        _this.addPageRoute("/(\\d+)", function (id) { return new abstract_routes_1.PageRouteInfos(fvm_recordDetails_page_1.RecordDetailsPage, { "idPermis": id }, page_service_impl_1.PageServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE);
        return _this;
    }
    return RecordRoutesClient;
}(abstract_routes_1.AbstractRoutes));
exports.default = RecordRoutesClient;

//# sourceMappingURL=record-client-routes.js.map
