"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
// Classe de Page du formulaire d'insertion d'une demande d'authentification
var fvm_formDemande_page_1 = require("src/views/admin/fvm/fvm-formDemande-page");
// Classe du service utilisé par la Classe de Page
var form_service_impl_1 = require("src/services/page/admin/fvm/form-service-impl");
// Classes permettant de mettre en place l'authentification
var roles_1 = require("src/utils/roles");
/**
 * Classe définissant les sous-routes Client de la lazy route "/fvmform2"
 * @extends {AbstractRoutes}
 */
var FormulaireDemandeAuthentificationRoutesClient = /** @class */ (function (_super) {
    tslib_1.__extends(FormulaireDemandeAuthentificationRoutesClient, _super);
    /**
     * @constructor
     */
    function FormulaireDemandeAuthentificationRoutesClient() {
        var _this = _super.call(this) || this;
        // Route menant au formulaire d'insertion d'une demande d'authentification
        // La page prend un service de type FormService en entrée
        // L'attribut "idPermis" est l'id du Permis auquel appartient la demande d'authentification
        _this.addPageRoute("/(\\d+)", function (id) { return new abstract_routes_1.PageRouteInfos(fvm_formDemande_page_1.FormulaireDemandeAuthentificationPage, { "idPermis": id }, form_service_impl_1.FormServiceImpl); }, roles_1.Roles.ADMIN);
        return _this;
    }
    return FormulaireDemandeAuthentificationRoutesClient;
}(abstract_routes_1.AbstractRoutes));
exports.default = FormulaireDemandeAuthentificationRoutesClient;

//# sourceMappingURL=form2-client-routes.js.map
