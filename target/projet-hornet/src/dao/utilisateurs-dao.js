"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var user_mod_1 = require("src/models/fvm/fvm-mod");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var UtilisateursDAO = /** @class */ (function (_super) {
    tslib_1.__extends(UtilisateursDAO, _super);
    function UtilisateursDAO() {
        return _super.call(this) || this;
    }
    UtilisateursDAO.prototype.findOne = function (data) {
        return this.modelDAO.utilisateurEntity.findOne(data);
    };
    UtilisateursDAO.prototype.listerUtilisateurs = function () {
        return this.modelDAO.utilisateurEntity.findAll();
    };
    UtilisateursDAO.prototype.updateById = function (id, data) {
        return this.modelDAO.utilisateurEntity.update(data, { where: { id: id } });
    };
    UtilisateursDAO.prototype.insert = function (data) {
        return this.modelDAO.utilisateurEntity.create(data);
    };
    UtilisateursDAO.prototype.deleteById = function (id) {
        return this.modelDAO.utilisateurEntity.destroy({ where: { id: id } });
    };
    UtilisateursDAO.prototype.getRole = function (data) {
        return this.modelDAO.utilisateurEntity.findOne({
            where: {
                login: data.login,
                password: data.password
            },
            include: [{
                    model: this.modelDAO.roleEntity,
                    as: "listeRole"
                }]
        });
    };
    tslib_1.__decorate([
        Map_1.default(user_mod_1.UtilisateurMetier),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UtilisateursDAO.prototype, "findOne", null);
    tslib_1.__decorate([
        Map_1.default(user_mod_1.UtilisateurMetier),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Promise)
    ], UtilisateursDAO.prototype, "listerUtilisateurs", null);
    tslib_1.__decorate([
        Map_1.default(user_mod_1.UtilisateurMetier),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], UtilisateursDAO.prototype, "getRole", null);
    return UtilisateursDAO;
}(entity_dao_1.EntityDAO));
exports.UtilisateursDAO = UtilisateursDAO;

//# sourceMappingURL=utilisateurs-dao.js.map
