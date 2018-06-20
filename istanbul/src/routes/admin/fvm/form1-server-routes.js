"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
// Classes d'action à effectuer
var fvm_action_1 = require("./../../../actions/admin/fvm/fvm-action");
// Classe du service utilisé par la Classe d'action
var form_service_impl_data_1 = require("./../../../services/data/admin/fvm/form-service-impl-data");
// Classe de routes client parente de la Classe de routes serveur
var form1_client_routes_1 = require("./form1-client-routes");
// Classes permettant de mettre en place l'authentification
var roles_1 = require("./../../../utils/roles");
/**
 * Classe définissant les sous-routes Serveur de la lazy route "/fvmform1server"
 * @extends {FormulaireDossierRoutesClient}
 */
var FormulaireDossierRoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(FormulaireDossierRoutesServer, _super);
    /**
     * @constructor
     */
    function FormulaireDossierRoutesServer() {
        var _this = _super.call(this) || this;
        // Route effectuant une action d'insertion d'un dossier
        // L'action prend un service de type FormService en entrée
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.InserDossier, null, form_service_impl_data_1.FormServiceImplData); }, roles_1.Roles.ADMIN, "post");
        // Route effectuant une action de listage des préfectures stockées dans la base
        // L'action prend un service de type FormService en entrée
        _this.addDataRoute("/listPrefectures", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.ListPrefecture, null, form_service_impl_data_1.FormServiceImplData); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        return _this;
    }
    return FormulaireDossierRoutesServer;
}(form1_client_routes_1.default));
exports.default = FormulaireDossierRoutesServer;

//# sourceMappingURL=form1-server-routes.js.map
