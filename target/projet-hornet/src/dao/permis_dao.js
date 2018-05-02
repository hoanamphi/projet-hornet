"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var user_mod_1 = require("src/models/fvm/fvm-mod");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var PermisDAO = /** @class */ (function (_super) {
    tslib_1.__extends(PermisDAO, _super);
    function PermisDAO() {
        return _super.call(this) || this;
    }
    PermisDAO.prototype.listerPermis = function () {
        return this.modelDAO.permisEntity.findAll();
    };
    tslib_1.__decorate([
        Map_1.default(user_mod_1.PermisMetier),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Promise)
    ], PermisDAO.prototype, "listerPermis", null);
    return PermisDAO;
}(entity_dao_1.EntityDAO));
exports.PermisDAO = PermisDAO;

//# sourceMappingURL=permis-dao.js.map
