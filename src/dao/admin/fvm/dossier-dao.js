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
        var _this = this;
        return this.getIdDossier().then(function (result) {
            _this.modelDAO.dossierFVMEntity.create({
                idDossier: result,
                idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
                dateReceptionDossier: dateReceptionDossier,
                idPermis: idPermis
            }).catch(function (reason) {
                return Promise.reject("Problème de création de Dossier : " + reason);
            });
            return Promise.resolve(result);
        });
    };
    DossierFVMDAO.prototype.getIdDossier = function () {
        var _this = this;
        return this.modelDAO.dossierFVMEntity.count().then(function (count) {
            if (count > 0) {
                return _this.modelDAO.dossierFVMEntity.max("idDossier").then(function (max) {
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
    return DossierFVMDAO;
}(entity_dao_1.EntityDAO));
exports.DossierFVMDAO = DossierFVMDAO;

//# sourceMappingURL=dossier-dao.js.map
