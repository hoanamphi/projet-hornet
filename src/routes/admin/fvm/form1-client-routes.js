"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
// Classe de Page du formulaire d'insertion d'un dossier
var fvm_formDossier_page_1 = require("src/views/admin/fvm/fvm-formDossier-page");
// Classe du service utilisé par la Classe de Page
var form_service_impl_1 = require("src/services/page/admin/fvm/form-service-impl");
// Classes permettant de mettre en place l'authentification
var roles_1 = require("src/utils/roles");
/**
 * Classe définissant les sous-routes Client de la lazy route "/fvmform1"
 * @extends {AbstractRoutes}
 */
var FormulaireDossierRoutesClient = /** @class */ (function (_super) {
    tslib_1.__extends(FormulaireDossierRoutesClient, _super);
    /**
     * @constructor
     */
    function FormulaireDossierRoutesClient() {
        var _this = _super.call(this) || this;
        // Route menant au formulaire d'insertion d'un dossier
        // La page prend un service de type FormService en entrée
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(fvm_formDossier_page_1.FormulaireDossierPage, null, form_service_impl_1.FormServiceImpl); }, roles_1.Roles.ADMIN);
        return _this;
    }
    return FormulaireDossierRoutesClient;
}(abstract_routes_1.AbstractRoutes));
exports.default = FormulaireDossierRoutesClient;

//# sourceMappingURL=form1-client-routes.js.map
