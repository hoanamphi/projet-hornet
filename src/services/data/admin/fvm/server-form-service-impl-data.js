"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var dec_transactional_1 = require("hornet-js-database/src/decorators/dec-transactional");
var injector_1 = require("hornet-js-core/src/inject/injector");
var personne_dao_1 = require("../../../../dao/admin/fvm/personne-dao");
var copie_note_verbale_MAECI_dao_1 = require("../../../../dao/admin/fvm/copie_note_verbale_MAECI-dao");
var dossier_dao_1 = require("../../../../dao/admin/fvm/dossier-dao");
var permis_dao_1 = require("../../../../dao/admin/fvm/permis-dao");
var copie_permis_dao_1 = require("../../../../dao/admin/fvm/copie_permis-dao");
var prefecture_dao_1 = require("../../../../dao/prefecture-dao");
var valise_dao_1 = require("../../../../dao/valise-dao");
var demande_authentification_dao_1 = require("../../../../dao/admin/fvm/demande_authentification-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");
var ServerFormServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ServerFormServiceImpl, _super);
    function ServerFormServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Error = { "hasError": null, "hasReason": null };
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
    ServerFormServiceImpl.prototype.insererDonnee = function (data) {
        var _this = this;
        var content = JSON.parse(data["content"]);
        var copie_permis = data["copie_permis"];
        var copie_note_verbale_maeci = data["copie_note_verbale_maeci"];
        var idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getNewIdCopieNoteVerbaleMAECI();
        var idDossier = this.dossierDAO.getNewIdDossier();
        var idPersonne = this.personneDAO.getNewIdPersonne();
        var idCopiePermis = this.copiePermisDAO.getNewIdCopiePermis();
        var idPermis = this.permisDAO.getNewIdPermis();
        return Promise.all([idCopieNoteVerbaleMAECI, idDossier, idPersonne, idCopiePermis, idPermis]).then(function (values) {
            var insertCopieNoteVerbaleMAECI = _this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, values[1]);
            var insertDossier = _this.dossierDAO.insererDossier(values[0], new Date(), values[4]);
            var insertPersonne = _this.personneDAO.insererPersonne(content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, values[4]);
            var insertCopiePermis = _this.copiePermisDAO.insererCopiePermis(copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, values[4]);
            var insertPermis = _this.permisDAO.insererPermis(content.num_permis, values[3], content.date_de_delivrance, values[2], values[1], content.id_prefecture);
            return Promise.all([insertCopieNoteVerbaleMAECI, insertDossier, insertPersonne, insertCopiePermis, insertPermis]);
        }).catch(function (error) {
            _this.Error.hasError = error;
            _this.Error.hasReason = error.toString();
            return _this.Error;
        });
    };
    ServerFormServiceImpl.prototype.insererDemandeAuthentification = function (data) {
        var _this = this;
        return this.valiseDAO.getValise(data["num_valise"]).then(function (values) {
            var valise = values[0];
            return _this.demandeAuthentificationDAO.insererDemandeAuthentification(data["num_demande_authentification"], data["id_permis"], data["num_valise"], valise.dateValise);
        }).catch(function (error) {
            _this.Error.hasError = error;
            _this.Error.hasReason = error.toString();
            return _this.Error;
        });
    };
    ServerFormServiceImpl.prototype.insererValise = function (data) {
        var _this = this;
        return this.valiseDAO.insererValise(data["num_valise"], data["date_valise"]).catch(function (error) {
            _this.Error.hasError = error;
            _this.Error.hasReason = error.toString();
            return _this.Error;
        });
    };
    ServerFormServiceImpl.prototype.getListePrefectures = function () {
        return this.prefectureDAO.getListePrefecture();
    };
    ServerFormServiceImpl.prototype.getListeValises = function () {
        return this.valiseDAO.getListeValise().then(function (result) {
            var arr = [];
            result.forEach(function (elem) {
                var tmp = {};
                tmp["numValise"] = elem.numValise;
                tmp["dateValise"] = Date.parse(elem.dateValise);
                arr.push(tmp);
            });
            return Promise.resolve(arr);
        });
    };
    tslib_1.__decorate([
        dec_transactional_1.Transactional({ configDatabase: injector_1.Injector.getRegistered("databaseConfigName") }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ServerFormServiceImpl.prototype, "insererDonnee", null);
    return ServerFormServiceImpl;
}(service_request_1.ServiceRequest));
exports.ServerFormServiceImpl = ServerFormServiceImpl;

//# sourceMappingURL=server-form-service-impl-data.js.map
