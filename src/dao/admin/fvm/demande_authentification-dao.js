"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var DemandeAuthentificationFVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(DemandeAuthentificationFVMDAO, _super);
    function DemandeAuthentificationFVMDAO() {
        return _super.call(this) || this;
    }
    DemandeAuthentificationFVMDAO.prototype.insererDemandeAuthentification = function (idDemandeAuthentification, numDemandeAuthentification, idPermis, numValise, dateValise) {
        return this.modelDAO.demandeAuthenthificationFVMEntity.create({
            idDemandeAuthentification: idDemandeAuthentification,
            numDemandeAuthentification: numDemandeAuthentification,
            dateDeCreation: new Date(),
            dateDuTraitement: this.getDateDuTraitement(dateValise),
            idPermis: idPermis,
            numValise: numValise
        }).then(function () {
            return idDemandeAuthentification;
        });
    };
    DemandeAuthentificationFVMDAO.prototype.getDateDuTraitement = function (dateValise) {
        var temp = new Date(dateValise);
        temp.setDate(temp.getDate() - 1);
        return temp;
    };
    DemandeAuthentificationFVMDAO.prototype.getNewIdDemandeAuthentification = function () {
        var _this = this;
        return this.modelDAO.demandeAuthenthificationFVMEntity.count().then(function (count) {
            if (count > 0) {
                return _this.modelDAO.demandeAuthenthificationFVMEntity.max("idDemandeAuthentification");
            }
            else {
                return Promise.resolve(-1);
            }
        }).then(function (max) {
            return Promise.resolve(max + 1);
        });
    };
    DemandeAuthentificationFVMDAO.prototype.getDemandeAuthentificationFromPermis = function (idPermis) {
        return this.modelDAO.demandeAuthenthificationFVMEntity.findAll({
            where: {
                idPermis: idPermis
            }
        });
    };
    DemandeAuthentificationFVMDAO.prototype.deleteDemandeAuthentification = function (idDemandeAuthentification) {
        return this.modelDAO.demandeAuthenthificationFVMEntity.destroy({
            where: {
                idDemandeAuthentification: idDemandeAuthentification
            }
        });
    };
    return DemandeAuthentificationFVMDAO;
}(entity_dao_1.EntityDAO));
exports.DemandeAuthentificationFVMDAO = DemandeAuthentificationFVMDAO;

//# sourceMappingURL=demande_authentification-dao.js.map
