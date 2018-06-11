"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fvm_action_1 = require("src/actions/admin/fvm/fvm-action");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var record_client_routes_1 = require("./record-client-routes");
var client_list_service_impl_data_1 = require("../../../services/data/admin/fvm/client-list-service-impl-data");
var roles_1 = require("../../../utils/roles");
var RecordListRoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(RecordListRoutesServer, _super);
    function RecordListRoutesServer() {
        var _this = _super.call(this) || this;
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.ListDossier, null, client_list_service_impl_data_1.ClientListServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        _this.addDataRoute("/delete", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.DeleteDossier, null, client_list_service_impl_data_1.ClientListServiceImpl); }, roles_1.Roles.ADMIN, "delete");
        _this.addDataRoute("/detailsDossiers/dossier", function (id) { return new abstract_routes_1.DataRouteInfos(fvm_action_1.GetDossier, null, client_list_service_impl_data_1.ClientListServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        _this.addDataRoute("/detailsDossiers/demandeauthentification", function (id) { return new abstract_routes_1.DataRouteInfos(fvm_action_1.GetDemandeAuthentification, null, client_list_service_impl_data_1.ClientListServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        _this.addDataRoute("/detailsDossiers/demandeauthentification/delete", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.DeleteDemandeAuthentification, null, client_list_service_impl_data_1.ClientListServiceImpl); }, roles_1.Roles.ADMIN, "delete");
        /* TODO
        this.addDataRoute("/detailsDossiers/releve",
          (id) => new DataRouteInfos(GetReleve, null, ClientListServiceImpl),
          PUBLIC_ROUTE,
          "post"
        );
    
        this.addDataRoute("/detailsDossiers/noteverbale",
          (id) => new DataRouteInfos(GetNoteVerbale, null, ClientListServiceImpl),
          PUBLIC_ROUTE,
          "post"
        );
        */
        _this.addDataRoute("/copiePermis/(\\d+)", function (idCopiePermis) { return new abstract_routes_1.DataRouteInfos(fvm_action_1.GetCopiePermis, { "idCopiePermis": idCopiePermis }, client_list_service_impl_data_1.ClientListServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "get");
        _this.addDataRoute("/copieNoteVerbaleMAECI/(\\d+)", function (idCopieNoteVerbaleMAECI) { return new abstract_routes_1.DataRouteInfos(fvm_action_1.GetCopieNoteVerbaleMAECI, { "idCopieNoteVerbaleMAECI": idCopieNoteVerbaleMAECI }, client_list_service_impl_data_1.ClientListServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "get");
        _this.addDataRoute("/pdfMake/demandeAuthentification/(\\d+)/((\\S+|\\s+)+)", function (idPermis, data) { return new abstract_routes_1.DataRouteInfos(fvm_action_1.GetPDFDemandeAuthentification, { "idPermis": idPermis, "data": data }, client_list_service_impl_data_1.ClientListServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "get");
        return _this;
    }
    return RecordListRoutesServer;
}(record_client_routes_1.default));
exports.default = RecordListRoutesServer;

//# sourceMappingURL=record-server-routes.js.map
