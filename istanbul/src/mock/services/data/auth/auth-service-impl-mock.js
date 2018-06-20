"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var auth_service_1 = require("./../../../../services/data/auth/auth-service");
var promise_api_1 = require("hornet-js-utils/src/promise-api");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.mock.services.data.auth.auth-service-mock-impl");
/**
 * Liste des utilisateurs en mode bouchon
 * @type {any[]}
 */
var users = [
    {
        "name": "test",
        "roles": [{ "id": 2, "name": "projet-hornet_USER" }]
    },
    {
        "name": "admin",
        "roles": [{ "id": 1, "name": "projet-hornet_ADMIN" }, { "id": 2, "name": "projet-hornet_USER" }]
    }
];
function findByUsername(username) {
    for (var i = 0, len = users.length; i < len; i++) {
        var user = users[i];
        if (user.name === username) {
            return user;
        }
    }
    return null;
}
/**
 * Implementation des services pour l'authentification
 * @class
 * @implements {AuthService}
 * @extends {ServiceApi}
 */
var AuthServiceDataMockImpl = /** @class */ (function (_super) {
    tslib_1.__extends(AuthServiceDataMockImpl, _super);
    function AuthServiceDataMockImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * recherche de l'identité
     * @param {object} data
     */
    AuthServiceDataMockImpl.prototype.auth = function (data) {
        logger.trace("SERVICES MOCK - auth", data);
        var user = findByUsername(data.login);
        return promise_api_1.Promise.resolve(user);
    };
    return AuthServiceDataMockImpl;
}(auth_service_1.AuthService));
exports.AuthServiceDataMockImpl = AuthServiceDataMockImpl;

//# sourceMappingURL=auth-service-impl-mock.js.map
