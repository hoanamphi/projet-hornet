"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var DemandeAuthentificationDAO = /** @class */ (function (_super) {
    tslib_1.__extends(DemandeAuthentificationDAO, _super);
    function DemandeAuthentificationDAO() {
        return _super.call(this) || this;
    }
    DemandeAuthentificationDAO.prototype.insererDemandeAuthentification = function (numDemandeAuthentification, idPermis, numValise, dateValise) {
        var _this = this;
        return this.getNewIdDemandeAuthentification().then(function (idDemandeAuthentification) {
            return _this.getDateDuTraitement(dateValise).then(function (dateDuTraitement) {
                return _this.modelDAO.demandeAuthenthificationFVMEntity.create({
                    idDemandeAuthentification: idDemandeAuthentification,
                    numDemandeAuthentification: numDemandeAuthentification,
                    dateDuTraitement: dateDuTraitement,
                    idPermis: idPermis,
                    numValise: numValise
                }).then(function (result) {
                    return Promise.resolve();
                });
            });
        });
    };
    DemandeAuthentificationDAO.prototype.getDateDuTraitement = function (dateValise) {
        var temp = new Date();
        temp.setDate(dateValise.getDate() - 1);
        return Promise.resolve(temp);
    };
    DemandeAuthentificationDAO.prototype.getNewIdDemandeAuthentification = function () {
        var _this = this;
        return this.modelDAO.demandeAuthenthificationFVMEntity.count().then(function (count) {
            if (count > 0) {
                return _this.modelDAO.demandeAuthenthificationFVMEntity.max("idDossier");
            }
            else {
                return Promise.resolve(-1);
            }
        }).then(function (max) {
            return Promise.resolve(max + 1);
        });
    };
    DemandeAuthentificationDAO.prototype.getDemandeAuthentification = function (idPermis) {
        return this.modelDAO.demandeAuthenthificationFVMEntity.findAll({
            where: {
                idPermis: idPermis
            }
        });
    };
    return DemandeAuthentificationDAO;
}(entity_dao_1.EntityDAO));
exports.DemandeAuthentificationDAO = DemandeAuthentificationDAO;

//# sourceMappingURL=demande_authentification-dao.js.map
