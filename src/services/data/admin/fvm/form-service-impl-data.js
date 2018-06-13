"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de service
var service_request_1 = require("hornet-js-core/src/services/service-request");
// Décorateur permettant d'effectuer des transactions sur la base de données
var dec_transactional_1 = require("hornet-js-database/src/decorators/dec-transactional");
var injector_1 = require("hornet-js-core/src/inject/injector");
// Classes de DAO
var personne_dao_1 = require("src/dao/admin/fvm/personne-dao");
var copie_note_verbale_MAECI_dao_1 = require("src/dao/admin/fvm/copie_note_verbale_MAECI-dao");
var dossier_dao_1 = require("src/dao/admin/fvm/dossier-dao");
var permis_dao_1 = require("src/dao/admin/fvm/permis-dao");
var copie_permis_dao_1 = require("src/dao/admin/fvm/copie_permis-dao");
var prefecture_dao_1 = require("src/dao/prefecture-dao");
var valise_dao_1 = require("src/dao/valise-dao");
var demande_authentification_dao_1 = require("src/dao/admin/fvm/demande_authentification-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");
var FormServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(FormServiceImpl, _super);
    function FormServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Objets contenant les erreurs retournées par une insertion ou une suppression
        _this.Error = { "error": null, "reason": null };
        _this.personneDAO = new personne_dao_1.PersonneFVMDAO();
        _this.dossierDAO = new dossier_dao_1.DossierFVMDAO();
        _this.permisDAO = new permis_dao_1.PermisFVMDAO();
        _this.copieNoteVerbaleMAECIDAO = new copie_note_verbale_MAECI_dao_1.CopieNoteVerbaleMAECIFVMDao();
        _this.copiePermisDAO = new copie_permis_dao_1.CopiePermisFVMDao();
        _this.prefectureDAO = new prefecture_dao_1.PrefectureDAO();
        _this.valiseDAO = new valise_dao_1.ValiseDAO();
        _this.demandeAuthentificationDAO = new demande_authentification_dao_1.DemandeAuthentificationFVMDAO();
        return _this;
    }
    FormServiceImpl.prototype.insererDonnee = function (data) {
        var _this = this;
        var content = JSON.parse(data.content);
        var copie_permis = data.copie_permis;
        var copie_note_verbale_maeci = data.copie_note_verbale_maeci;
        var idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getNewIdCopieNoteVerbaleMAECI();
        var idDossier = this.dossierDAO.getNewIdDossier();
        var idPersonne = this.personneDAO.getNewIdPersonne();
        var idCopiePermis = this.copiePermisDAO.getNewIdCopiePermis();
        var idPermis = this.permisDAO.getNewIdPermis();
        return Promise.all([idCopieNoteVerbaleMAECI, idDossier, idPersonne, idCopiePermis, idPermis]).then(function (values) {
            return _this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(values[0], copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, null).then(function () {
                var insertDossier = _this.dossierDAO.insererDossier(values[1], values[0], null);
                var insertPersonne = _this.personneDAO.insererPersonne(values[2], content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.id_sexe, content.ville_de_naissance, content.pays_de_naissance, null);
                var insertCopiePermis = _this.copiePermisDAO.insererCopiePermis(values[3], copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, null);
                return Promise.all([insertDossier, insertPersonne, insertCopiePermis]).then(function () {
                    return _this.permisDAO.insererPermis(values[4], content.num_permis, values[3], content.date_de_delivrance, values[2], values[1], content.id_prefecture).then(function () {
                        var updateCopieNoteVerbaleMAECI = _this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(values[0], copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, values[1]);
                        var updateDossier = _this.dossierDAO.insererDossier(values[1], values[0], values[4]);
                        var updatePersonne = _this.personneDAO.insererPersonne(values[2], content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.id_sexe, content.ville_de_naissance, content.pays_de_naissance, values[4]);
                        var updateCopiePermis = _this.copiePermisDAO.insererCopiePermis(values[3], copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, values[4]);
                        return Promise.all([updateCopieNoteVerbaleMAECI, updateDossier, updatePersonne, updateCopiePermis]);
                    });
                });
            });
        }).catch(function (error) {
            _this.Error.error = error;
            _this.Error.reason = error.toString();
            return _this.Error;
        });
    };
    FormServiceImpl.prototype.insererDemandeAuthentification = function (data) {
        var _this = this;
        return this.valiseDAO.getValise(data.num_valise).then(function (values) {
            var valise = values;
            return _this.demandeAuthentificationDAO.getNewIdDemandeAuthentification().then(function (idDemandeAuthentification) {
                return _this.demandeAuthentificationDAO.insererDemandeAuthentification(idDemandeAuthentification, data.num_demande_authentification, data.id_permis, data.num_valise, valise.date_valise);
            });
        }).catch(function (error) {
            _this.Error.error = error;
            _this.Error.reason = error.toString();
            return _this.Error;
        });
    };
    FormServiceImpl.prototype.insererValise = function (data) {
        var _this = this;
        return this.valiseDAO.insererValise(data.num_valise, data.date_valise).catch(function (error) {
            _this.Error.error = error;
            _this.Error.reason = error.toString();
            return _this.Error;
        });
    };
    FormServiceImpl.prototype.getListePrefectures = function () {
        return this.prefectureDAO.getListePrefecture();
    };
    FormServiceImpl.prototype.getListeValises = function () {
        return this.valiseDAO.getListeValise().then(function (result) {
            var arr = [];
            result.forEach(function (elem) {
                var tmp = {};
                tmp["numValise"] = elem.num_valise;
                tmp["dateValise"] = elem.date_valise.getDate();
                arr.push(tmp);
            });
            return arr;
        });
    };
    tslib_1.__decorate([
        dec_transactional_1.Transactional({ configDatabase: injector_1.Injector.getRegistered("databaseConfigName") }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], FormServiceImpl.prototype, "insererDonnee", null);
    return FormServiceImpl;
}(service_request_1.ServiceRequest));
exports.FormServiceImpl = FormServiceImpl;
//# sourceMappingURL=form-service-impl-data.js.map