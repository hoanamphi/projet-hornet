"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var form1_dao_service_1 = require("src/dao/admin/fvm/form1-dao-service");
var dec_transactional_1 = require("hornet-js-database/src/decorators/dec-transactional");
var injector_1 = require("hornet-js-core/src/inject/injector");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");
var Form1ServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(Form1ServiceImpl, _super);
    function Form1ServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formDAO = new form1_dao_service_1.Form1FVMDAO();
        return _this;
    }
    Form1ServiceImpl.prototype.insererDonnee = function (data) {
        return this.formDAO.insererDonnee(data);
    };
    tslib_1.__decorate([
        dec_transactional_1.Transactional({ configDatabase: injector_1.Injector.getRegistered("databaseConfigName") }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Form1ServiceImpl.prototype, "insererDonnee", null);
    return Form1ServiceImpl;
}(service_request_1.ServiceRequest));
exports.Form1ServiceImpl = Form1ServiceImpl;

//# sourceMappingURL=form1-service-impl-data.js.map
