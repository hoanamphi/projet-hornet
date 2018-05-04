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
    PersonneFVMDAO.prototype.insererPersonne = function (nom, prenom, dateDeNaissance, villeDeNaissance, paysDeNaissance, idPermis) {
        var _this = this;
        return this.getIdPersonne().then(function (result) {
            _this.modelDAO.personneFVMEntity.create({
                idPersonne: result,
                nom: nom,
                prenom: prenom,
                dateDeNaissance: dateDeNaissance,
                villeDeNaissance: villeDeNaissance,
                paysDeNaissance: paysDeNaissance,
                idPermis: idPermis
            }).catch(function (reason) {
                return Promise.reject("Problème de création de personne : " + reason);
            });
            return Promise.resolve(result);
        });
    };
    PersonneFVMDAO.prototype.getIdPersonne = function () {
        var _this = this;
        return this.modelDAO.personneFVMEntity.count().then(function (count) {
            if (count > 0) {
                return _this.modelDAO.personneFVMEntity.max("idPersonne").then(function (max) {
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
    return PersonneFVMDAO;
}(entity_dao_1.EntityDAO));
exports.PersonneFVMDAO = PersonneFVMDAO;

//# sourceMappingURL=personne-dao.js.map
