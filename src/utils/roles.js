"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Classe regroupant les rôles disponibles dans l'application
 */
var Roles = /** @class */ (function () {
    function Roles() {
    }
    Roles.USER_STR = "USER";
    Roles.ADMIN_STR = "ADMIN";
    Roles.USER = [Roles.USER_STR];
    Roles.ADMIN = [Roles.ADMIN_STR];
    Roles.EVERYONE = [Roles.USER_STR, Roles.ADMIN_STR];
    return Roles;
}());
exports.Roles = Roles;
//# sourceMappingURL=roles.js.map