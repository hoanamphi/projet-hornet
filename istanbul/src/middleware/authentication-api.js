"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var authentication_1 = require("./authentication");
var auth_service_1 = require("./../services/data/auth/auth-service");
var injector_1 = require("hornet-js-core/src/inject/injector");
var AuthenticationAPIMiddleware = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationAPIMiddleware, _super);
    function AuthenticationAPIMiddleware() {
        var _this = _super.call(this) || this;
        _this.api = injector_1.Injector.getRegistered(auth_service_1.AuthService);
        return _this;
    }
    return AuthenticationAPIMiddleware;
}(authentication_1.AuthenticationMiddleware));
exports.AuthenticationAPIMiddleware = AuthenticationAPIMiddleware;

//# sourceMappingURL=authentication-api.js.map
