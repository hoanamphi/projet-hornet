"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var utilisateurs_dao_1 = require("src/dao/auth/utilisateurs-dao");
var auth_service_1 = require("src/services/data/auth/auth-service");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.services.data.auth.auth-service-data-impl");
var AuthServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(AuthServiceImpl, _super);
    function AuthServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.utilisateursDAO = new utilisateurs_dao_1.UtilisateursDAO();
        return _this;
    }
    AuthServiceImpl.prototype.auth = function (data) {
        return this.utilisateursDAO.getRole(data).then(function (utilisateur) {
            return {
                "name": utilisateur.login,
                "roles": utilisateur.roles
            };
        });
    };
    AuthServiceImpl.prototype.listerUtilisateurs = function () {
        return this.utilisateursDAO.listerUtilisateurs();
    };
    AuthServiceImpl.prototype.modifierUtilisateur = function (id, data, cb) {
        // this.utilisateursDAO.updateById(id, data).done(cb);
    };
    AuthServiceImpl.prototype.creerUtilisateur = function (data) {
        return this.utilisateursDAO.insert(data);
    };
    AuthServiceImpl.prototype.supprimerUtilisateur = function (id, cb) {
        // this.utilisateursDAO.deleteById(id).done(cb);
    };
    return AuthServiceImpl;
}(auth_service_1.AuthService));
exports.AuthServiceImpl = AuthServiceImpl;

//# sourceMappingURL=auth-service-impl.js.map
