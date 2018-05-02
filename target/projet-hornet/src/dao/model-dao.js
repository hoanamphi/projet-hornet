"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var seq_user_mod_1 = require("src/models/seq-user-mod");
var model_role_1 = require("src/models/model-role");
var model_role_utilisateur_1 = require("src/models/model-role_utilisateur");
var model_permis_1 = require("src/models/model_permis");
var dec_seq_entity_1 = require("hornet-js-database/src/decorators/dec-seq-entity");
var sequelize_utils_1 = require("hornet-js-database/src/sequelize/sequelize-utils");
var injectable_1 = require("hornet-js-core/src/inject/injectable");
var hornet_sequelize_model_1 = require("hornet-js-database/src/sequelize/hornet-sequelize-model");
var inject_1 = require("hornet-js-core/src/inject/inject");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.model-dao");
var ModelDAO = /** @class */ (function (_super) {
    tslib_1.__extends(ModelDAO, _super);
    function ModelDAO(conf) {
        var _this = _super.call(this, conf) || this;
        _this.initUtilisateurEntity();
        _this.initRoleEntity();
        _this.initPermisEntity();
        return _this;
    }
    ModelDAO_1 = ModelDAO;
    /** METHODS */
    ModelDAO.prototype.initUtilisateurEntity = function () {
        sequelize_utils_1.SequelizeUtils.initRelationBelongsToMany({ fromEntity: this.utilisateurEntity, toEntity: this.roleEntity, alias: "listeRole", foreignKey: "id_utilisateur", throughTable: "role_utilisateur" });
    };
    ModelDAO.prototype.initRoleEntity = function () {
        sequelize_utils_1.SequelizeUtils.initRelationBelongsToMany({ fromEntity: this.roleEntity, toEntity: this.utilisateurEntity, alias: "listeUser", foreignKey: "id_role", throughTable: "role_utilisateur" });
    };
    ModelDAO.prototype.initPermisEntity = function () {
    };
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("utilisateur", seq_user_mod_1.UtilisateurModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "utilisateurEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("role", model_role_1.RoleModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "roleEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("role_utilisateur", model_role_utilisateur_1.RoleUtilisateurModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "roleUtilisateurEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("permis", model_permis_1.PermisModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "permisEntity", void 0);
    ModelDAO = ModelDAO_1 = tslib_1.__decorate([
        injectable_1.injectable(ModelDAO_1, injectable_1.Scope.SINGLETON, injectable_1.Side.SERVER),
        tslib_1.__param(0, inject_1.inject("databaseConfigName")),
        tslib_1.__metadata("design:paramtypes", [String])
    ], ModelDAO);
    return ModelDAO;
    var ModelDAO_1;
}(hornet_sequelize_model_1.HornetSequelizeModel));
exports.ModelDAO = ModelDAO;

//# sourceMappingURL=model-dao.js.map
