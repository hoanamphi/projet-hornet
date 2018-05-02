"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var permis_dao_1 = require("src/dao/admin/fvm/permis-dao");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.services.data.auth.auth-service-data-impl");
var PermisServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(PermisServiceImpl, _super);
    function PermisServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.permisDAO = new permis_dao_1.PermisDAO();
        return _this;
    }
    PermisServiceImpl.prototype.listerPermis = function () {
        return this.permisDAO.listerPermis();
    };
    return PermisServiceImpl;
}(service_request_1.ServiceRequest));
exports.PermisServiceImpl = PermisServiceImpl;

//# sourceMappingURL=permis_service_impl.js.map
