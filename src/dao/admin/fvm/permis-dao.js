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
        var id;
        this.getIdPermis().then(function (result) {
            id = result;
        });
        return this.modelDAO.permisFVMEntity.create({
            idPermis: id,
            numPermis: numPermis,
            //TOCHANGE
            idCopiePermis: id,
            dateDeDelivrance: dateDeDelivrance,
            idPersonne: idPersonne,
            idDossier: idDossier,
            idPrefectureDelivrance: idPrefectureDelivrance
        }).then(function (result) {
            return new Promise(function (resolve) {
                resolve(id);
            });
        }).catch(function (reason) {
            return new Promise(function (reject) {
                reject(new Error(reason));
            });
        });
    };
    PermisFVMDAO.prototype.getIdPermis = function () {
        return this.modelDAO.permisFVMEntity.max("idPermis").then(function (max) {
            if (max == (null || NaN)) {
                max = 0;
            }
            return max + 1;
        });
    };
    return PermisFVMDAO;
}(entity_dao_1.EntityDAO));
exports.PermisFVMDAO = PermisFVMDAO;

//# sourceMappingURL=permis-dao.js.map
