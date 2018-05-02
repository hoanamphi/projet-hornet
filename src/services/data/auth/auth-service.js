"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var service_secure_1 = require("hornet-js-core/src/services/service-secure");
/**
 * Interface des services pour l'authentification
 * @interface
 */
var AuthService = /** @class */ (function (_super) {
    tslib_1.__extends(AuthService, _super);
    function AuthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthService;
}(service_secure_1.ServiceSecure));
exports.AuthService = AuthService;
//# sourceMappingURL=auth-service.js.map