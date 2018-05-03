"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var DossierFVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(DossierFVMDAO, _super);
    function DossierFVMDAO() {
        return _super.call(this) || this;
    }
    DossierFVMDAO.prototype.insererDossier = function (idCopieNoteVerbaleMAECI, dateReceptionDossier, idPermis) {
        var id;
        this.getIdDossier().then(function (result) {
            id = result;
        });
        return this.modelDAO.dossierFVMEntity.create({
            idDossier: id,
            //TOCHANGE
            idCopieNoteVerbaleMAECI: id,
            dateReceptionDossier: dateReceptionDossier,
            idPermis: idPermis
        }).then(function (result) {
            return new Promise(function (resolve, reject) {
                resolve(id);
            });
        }).catch(function (reason) {
            return new Promise(function (resolve, reject) {
                reject(new Error(reason));
            });
        });
    };
    DossierFVMDAO.prototype.getIdDossier = function () {
        return this.modelDAO.dossierFVMEntity.max("idDossier").then(function (max) {
            if (max == (null || NaN)) {
                max = 0;
            }
            return max + 1;
        });
    };
    return DossierFVMDAO;
}(entity_dao_1.EntityDAO));
exports.DossierFVMDAO = DossierFVMDAO;

//# sourceMappingURL=dossier-dao.js.map
