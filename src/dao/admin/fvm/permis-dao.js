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
        return this.getIdPermis().then(function (result) {
            _this.modelDAO.permisFVMEntity.create({
                idPermis: result,
                numPermis: numPermis,
                idCopiePermis: idCopiePermis,
                dateDeDelivrance: dateDeDelivrance,
                idPersonne: idPersonne,
                idDossier: idDossier,
                idPrefectureDelivrance: idPrefectureDelivrance
            }).catch(function (reason) {
                return Promise.reject("Problème de création de Permis : " + reason);
            });
            return Promise.resolve(result);
        });
    };
    PermisFVMDAO.prototype.getIdPermis = function () {
        var _this = this;
        return this.modelDAO.permisFVMEntity.count().then(function (count) {
            if (count > 0) {
                return _this.modelDAO.permisFVMEntity.max("idPermis").then(function (max) {
                    return Promise.resolve(max + 1);
                }).catch(function (reason) {
                    return Promise.reject("Problème de calcul de l'id : " + reason);
                });
            }
            else {
                return Promise.resolve(0);
            }
        }).catch(function (reason) {
            return Promise.reject("Problème de comptage : " + reason);
        });
    };
    return PermisFVMDAO;
}(entity_dao_1.EntityDAO));
exports.PermisFVMDAO = PermisFVMDAO;

//# sourceMappingURL=permis-dao.js.map
