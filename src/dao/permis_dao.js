"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var user_mod_1 = require("src/models/user-mod");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var PermisDAO = /** @class */ (function (_super) {
    tslib_1.__extends(PermisDAO, _super);
    function PermisDAO() {
        return _super.call(this) || this;
    }
    PermisDAO.prototype.listerPermis = function (data) {
        return this.modelDAO.permisEntity.findAll();
    };
    PermisDAO.prototype.insererPermis = function (data) {
        var promise;
        this.modelDAO.permisEntity.create({
            numPermis: data['permis'],
            idPersonne: 1,
            numDossier: 1
        }).then(function (result) {
            promise = true;
        }).catch(function (err) {
            promise = false;
        });
        return new Promise(function (resolve, reject) {
            resolve(promise);
        });
    };
    PermisDAO.prototype.insererPersonne = function (data) {
        var promise;
        this.modelDAO.personneEntity.create({
            idPersonne: 1,
            nomPersonne: data['nom'],
            prenomPersonne: data['prenom'],
            dateDeNaissance: data['date_de_naissance'],
            numPermis: data['permis']
        }).then(function (result) {
            promise = true;
        }).catch(function (err) {
            promise = false;
        });
        return new Promise(function (resolve, reject) {
            resolve(promise);
        });
    };
    PermisDAO.prototype.insererDossier = function (data) {
        var promise;
        this.modelDAO.dossierEntity.create({
            numDossier: 1,
            demandePrefecture: "demande prefecture",
            copiePermis: "copiePermis",
            dateReceptionDossier: data['date_de_naissance'],
            numPermis: data['permis'],
            codePrefecture: 2
        }).then(function (result) {
            promise = true;
        }).catch(function (err) {
            promise = false;
        });
        return new Promise(function (resolve, reject) {
            resolve(promise);
        });
    };
    tslib_1.__decorate([
        Map_1.default(user_mod_1.PermisMetier),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], PermisDAO.prototype, "listerPermis", null);
    return PermisDAO;
}(entity_dao_1.EntityDAO));
exports.PermisDAO = PermisDAO;

//# sourceMappingURL=permis_dao.js.map
