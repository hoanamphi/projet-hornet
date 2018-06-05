"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var PermisFVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(PermisFVMDAO, _super);
    function PermisFVMDAO() {
        return _super.call(this) || this;
    }
    PermisFVMDAO.prototype.insererPermis = function (numPermis, idCopiePermis, dateDeDelivrance, idPersonne, idDossier, idPrefectureDelivrance) {
        var _this = this;
        return this.getNewIdPermis().then(function (idPermis) {
            return _this.modelDAO.permisFVMEntity.create({
                idPermis: idPermis,
                numPermis: numPermis,
                idCopiePermis: idCopiePermis,
                dateDeDelivrance: dateDeDelivrance,
                idPersonne: idPersonne,
                idDossier: idDossier,
                idPrefectureDelivrance: idPrefectureDelivrance
            }).then(function (result) {
                return Promise.resolve(idPermis);
            });
        });
    };
    PermisFVMDAO.prototype.getNewIdPermis = function () {
        var _this = this;
        return this.modelDAO.permisFVMEntity.count().then(function (count) {
            if (count > 0) {
                return _this.modelDAO.permisFVMEntity.max("idPermis");
            }
            else {
                return Promise.resolve(-1);
            }
        }).then(function (max) {
            return Promise.resolve(max + 1);
        });
    };
    PermisFVMDAO.prototype.getAllPermis = function () {
        return this.modelDAO.permisFVMEntity.findAll();
    };
    PermisFVMDAO.prototype.getPermis = function (idPermis) {
        return this.modelDAO.permisFVMEntity.findAll({
            where: {
                idPermis: idPermis
            }
        });
    };
    PermisFVMDAO.prototype.deletePermis = function (idPermis) {
        return this.modelDAO.permisFVMEntity.destroy({
            where: {
                idPermis: idPermis
            }
        });
    };
    return PermisFVMDAO;
}(entity_dao_1.EntityDAO));
exports.PermisFVMDAO = PermisFVMDAO;

//# sourceMappingURL=permis-dao.js.map
