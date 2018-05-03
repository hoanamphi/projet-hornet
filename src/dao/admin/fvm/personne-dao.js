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
        var id;
        this.getIdPersonne().then(function (result) {
            id = result;
        });
        return this.modelDAO.personneFVMEntity.create({
            idPersonne: id,
            nom: nom,
            prenom: prenom,
            dateDeNaissance: dateDeNaissance,
            villeDeNaissance: villeDeNaissance,
            paysDeNaissance: paysDeNaissance,
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
    PersonneFVMDAO.prototype.getIdPersonne = function () {
        return this.modelDAO.personneFVMEntity.max("idPersonne").then(function (max) {
            if (max == (null || NaN)) {
                max = 0;
            }
            return max + 1;
        });
    };
    return PersonneFVMDAO;
}(entity_dao_1.EntityDAO));
exports.PersonneFVMDAO = PersonneFVMDAO;

//# sourceMappingURL=personne-dao.js.map
