"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var server_form_service_impl_1 = require("src/services/page/admin/fvm/server-form-service-impl");
var gen_formDemande_page_1 = require("../../../views/admin/fvm/gen-formDemande-page");
var roles_1 = require("../../../utils/roles");
var Form2RoutesClient = /** @class */ (function (_super) {
    tslib_1.__extends(Form2RoutesClient, _super);
    function Form2RoutesClient() {
        var _this = _super.call(this) || this;
        _this.addPageRoute("/(\\d+)", function (id) { return new abstract_routes_1.PageRouteInfos(gen_formDemande_page_1.FormulaireDemandeAuthentificationPage, { "id": id }, server_form_service_impl_1.ServerFormServiceImpl); }, roles_1.Roles.ADMIN);
        return _this;
    }
    return Form2RoutesClient;
}(abstract_routes_1.AbstractRoutes));
exports.default = Form2RoutesClient;

//# sourceMappingURL=form2-client-routes.js.map
