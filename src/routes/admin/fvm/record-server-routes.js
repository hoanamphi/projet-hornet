"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
// Classes d'action à effectuer
var fvm_action_1 = require("src/actions/admin/fvm/fvm-action");
// Classe du service utilisé par la Classe d'action
var page_service_impl_data_1 = require("src/services/data/admin/fvm/page-service-impl-data");
// Classe de routes client parente de la Classe de routes serveur
var record_client_routes_1 = require("src/routes/admin/fvm/record-client-routes");
// Classes permettant de mettre en place l'authentification
var roles_1 = require("src/utils/roles");
/**
 * Classe définissant les sous-routes Serveur de la lazy route "/fvmrecordserver"
 * @extends {RecordRoutesClient}
 */
var RecordListRoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(RecordListRoutesServer, _super);
    /**
     * @constructor
     */
    function RecordListRoutesServer() {
        var _this = _super.call(this) || this;
        // Route effectuant une action de supression d'un dossier
        // L'action prend un service de type PageService en entrée
        _this.addDataRoute("/delete", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.DeleteDossier, null, page_service_impl_data_1.PageServiceImpl); }, roles_1.Roles.ADMIN, "delete");
        // Route effectuant une action de suppression d'une demande d'authentification
        // L'action prend un service de type PageService en entrée
        _this.addDataRoute("/detailsDossiers/demandeauthentification/delete", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.DeleteDemandeAuthentification, null, page_service_impl_data_1.PageServiceImpl); }, roles_1.Roles.ADMIN, "delete");
        // Route effectuant une action de listage des dossiers stockés dans la base
        // L'action prend un service de type PageService en entrée
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.ListDossier, null, page_service_impl_data_1.PageServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        // Route effectuant une action d'acquisition d'un dossier
        // L'action prend un service de type PageService en entrée
        _this.addDataRoute("/detailsDossiers/dossier", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.GetDossier, null, page_service_impl_data_1.PageServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        // Route effectuant une action d'acquisition d'une demande d'authentification
        // L'action prend un service de type PageService en entrée
        _this.addDataRoute("/detailsDossiers/demandeauthentification", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.GetDemandeAuthentification, null, page_service_impl_data_1.PageServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        /* TODO
        this.addDataRoute("/detailsDossiers/releve",
          (id) => new DataRouteInfos(GetReleve, null, PageServiceImpl),
          PUBLIC_ROUTE,
          "post"
        );
    
        this.addDataRoute("/detailsDossiers/noteverbale",
          (id) => new DataRouteInfos(GetNoteVerbale, null, PageServiceImpl),
          PUBLIC_ROUTE,
          "post"
        );
        */
        // Route effectuant une action d'acquisition d'une copie d'un permis de conduire
        // L'action prend un service de type PageService en entrée
        // L'attribut "idCopiePermis" est l'id de la copie du permis de conduire
        _this.addDataRoute("/copiePermis/(\\d+)", function (idCopiePermis) { return new abstract_routes_1.DataRouteInfos(fvm_action_1.GetCopiePermis, { "idCopiePermis": idCopiePermis }, page_service_impl_data_1.PageServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "get");
        // Route effectuant une action d'acquisition d'une copie d'une note verbale du MAECI
        // L'action prend un service de type PageService en entrée
        // L'attribut "idCopieNoteVerbaleMAECI" est l'id de la copie de la note verbale du MAECI
        _this.addDataRoute("/copieNoteVerbaleMAECI/(\\d+)", function (idCopieNoteVerbaleMAECI) { return new abstract_routes_1.DataRouteInfos(fvm_action_1.GetCopieNoteVerbaleMAECI, { "idCopieNoteVerbaleMAECI": idCopieNoteVerbaleMAECI }, page_service_impl_data_1.PageServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "get");
        // Route effectuant une action d'acquisition d'une demande d'authentification
        // L'action prend un service de type PageService en entrée
        // L'attribut "idPermis" est l'id du permis auquel appartient la demande d'authentification
        // L'attribut "data" contient les chaînes de caractères à donner en paramètre du document PDF
        _this.addDataRoute("/pdfMake/demandeAuthentification/(\\d+)/((\\S+|\\s+)+)", function (idPermis, data) { return new abstract_routes_1.DataRouteInfos(fvm_action_1.GetPDFDemandeAuthentification, { "idPermis": idPermis, "data": data }, page_service_impl_data_1.PageServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "get");
        return _this;
    }
    return RecordListRoutesServer;
}(record_client_routes_1.default));
exports.default = RecordListRoutesServer;

//# sourceMappingURL=record-server-routes.js.map
