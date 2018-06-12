"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
// Classes d'action à effectuer
var fvm_action_1 = require("src/actions/admin/fvm/fvm-action");
// Classe du service utilisé par la Classe d'action
var server_form_service_impl_data_1 = require("src/services/data/admin/fvm/server-form-service-impl-data");
// Classe de routes client parente de la Classe de routes serveur
var form2_client_routes_1 = require("src/routes/admin/fvm/form2-client-routes");
// Classes permettant de mettre en place l'authentification
var roles_1 = require("src/utils/roles");
/**
 * Classe définissant les sous-routes Serveur de la lazy route "/fvm/form2server"
 * @extends {FormulaireDemandeAuthentificationRoutesClient}
 */
var FormulaireDemandeAuthentificationRoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(FormulaireDemandeAuthentificationRoutesServer, _super);
    /**
     * @constructor
     */
    function FormulaireDemandeAuthentificationRoutesServer() {
        var _this = _super.call(this) || this;
        // Route effectuant un action d'insertion d'une demande d'authentification
        // L'action prend un service de type FormService en entrée
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.InserDemandeAuthentification, null, server_form_service_impl_data_1.FormServiceImpl); }, roles_1.Roles.ADMIN, "post");
        // Route effectuant un action d'insertion d'une valise
        // L'action prend un service de type FormService en entrée
        _this.addDataRoute("/insertValise", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.InserValise, null, server_form_service_impl_data_1.FormServiceImpl); }, roles_1.Roles.ADMIN, "post");
        // Route effectuant un action de listage des valises stockées dans la base
        // L'action prend un service de type FormService en entrée
        _this.addDataRoute("/listValises", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.ListValise, null, server_form_service_impl_data_1.FormServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        return _this;
    }
    return FormulaireDemandeAuthentificationRoutesServer;
}(form2_client_routes_1.default));
exports.default = FormulaireDemandeAuthentificationRoutesServer;
//# sourceMappingURL=form2-server-routes.js.map