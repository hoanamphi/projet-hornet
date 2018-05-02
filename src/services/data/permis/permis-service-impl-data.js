"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var permis_dao_1 = require("src/dao/permis_dao");
var dec_transactional_1 = require("hornet-js-database/src/decorators/dec-transactional");
var injector_1 = require("hornet-js-core/src/inject/injector");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.permis.permis-service-impl-data");
var PermisServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(PermisServiceImpl, _super);
    function PermisServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.permisDAO = new permis_dao_1.PermisDAO();
        return _this;
    }
    PermisServiceImpl.prototype.listerPermis = function (data) {
        return this.permisDAO.listerPermis(data);
    };
    PermisServiceImpl.prototype.insererPermis = function (data) {
        var promise;
        promise = this.permisDAO.insererPersonne(data);
        promise = this.permisDAO.insererDossier(data);
        promise = this.permisDAO.insererPermis(data);
        return promise;
    };
    tslib_1.__decorate([
        dec_transactional_1.Transactional({ configDatabase: injector_1.Injector.getRegistered("databaseConfigName") }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], PermisServiceImpl.prototype, "insererPermis", null);
    return PermisServiceImpl;
}(service_request_1.ServiceRequest));
exports.PermisServiceImpl = PermisServiceImpl;
//# sourceMappingURL=permis-service-impl-data.js.map