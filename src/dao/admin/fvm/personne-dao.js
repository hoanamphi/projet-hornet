"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var PersonneFVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(PersonneFVMDAO, _super);
    function PersonneFVMDAO() {
        return _super.call(this) || this;
    }
    PersonneFVMDAO.prototype.insererPersonne = function (nom, prenom, dateDeNaissance, idSexe, villeDeNaissance, paysDeNaissance, idPermis) {
        var _this = this;
        return this.getNewIdPersonne().then(function (idPersonne) {
            return _this.modelDAO.personneFVMEntity.create({
                idPersonne: idPersonne,
                nom: nom,
                prenom: prenom,
                dateDeNaissance: dateDeNaissance,
                sexe: _this.getSexe(idSexe),
                villeDeNaissance: villeDeNaissance,
                paysDeNaissance: paysDeNaissance,
                idPermis: idPermis
            }).then(function (result) {
                return Promise.resolve(idPersonne);
            });
        });
    };
    PersonneFVMDAO.prototype.getSexe = function (idSexe) {
        if (idSexe == 0) {
            return "Monsieur";
        }
        else {
            return "Madame";
        }
    };
    PersonneFVMDAO.prototype.getNewIdPersonne = function () {
        var _this = this;
        return this.modelDAO.personneFVMEntity.count().then(function (count) {
            if (count > 0) {
                return _this.modelDAO.personneFVMEntity.max("idPersonne");
            }
            else {
                return Promise.resolve(-1);
            }
        }).then(function (max) {
            return Promise.resolve(max + 1);
        });
    };
    PersonneFVMDAO.prototype.getPersonne = function (idPersonne) {
        return this.modelDAO.personneFVMEntity.findAll({
            where: {
                idPersonne: idPersonne
            }
        });
    };
    PersonneFVMDAO.prototype.getIdPersonneFromPermis = function (idPermis) {
        return this.modelDAO.personneFVMEntity.findAll({
            where: {
                idPermis: idPermis
            }
        });
    };
    PersonneFVMDAO.prototype.deletePersonne = function (idPersonne) {
        return this.modelDAO.personneFVMEntity.destroy({
            where: {
                idPersonne: idPersonne
            }
        });
    };
    return PersonneFVMDAO;
}(entity_dao_1.EntityDAO));
exports.PersonneFVMDAO = PersonneFVMDAO;

//# sourceMappingURL=personne-dao.js.map
