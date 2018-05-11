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
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");
var Form1ServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(Form1ServiceImpl, _super);
    function Form1ServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Error = { "hasError": null, "hasReason": null };
        _this.personneDAO = new personne_dao_1.PersonneFVMDAO();
        _this.dossierDAO = new dossier_dao_1.DossierFVMDAO();
        _this.permisDAO = new permis_dao_1.PermisFVMDAO();
        _this.copieNoteVerbaleMAECIDAO = new copie_note_verbale_MAECI_dao_1.CopieNoteVerbaleMAECIFVMDao();
        _this.copiePermisDAO = new copie_permis_dao_1.CopiePermisFVMDao();
        _this.prefectureDAO = new prefecture_dao_1.PrefectureDAO();
        return _this;
    }
    Form1ServiceImpl.prototype.insererDonnee = function (data) {
        var _this = this;
        var content = JSON.parse(data["content"]);
        var copie_permis = data["copie_permis"];
        var copie_note_verbale_maeci = data["copie_note_verbale_maeci"];
        var idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getIdCopieNoteVerbaleMAECI();
        var idDossier = this.dossierDAO.getIdDossier();
        var idPersonne = this.personneDAO.getIdPersonne();
        var idCopiePermis = this.copiePermisDAO.getIdCopiePermis();
        var idPermis = this.permisDAO.getIdPermis();
        return Promise.all([idCopieNoteVerbaleMAECI, idDossier, idPersonne, idCopiePermis, idPermis]).then(function (values) {
            var insertCopieNoteVerbaleMAECI = _this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(copie_note_verbale_maeci.nom, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, values[1]);
            var insertDossier = _this.dossierDAO.insererDossier(values[0], new Date(), values[4]);
            var insertPersonne = _this.personneDAO.insererPersonne(content.nom, content.prenom, content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, values[4]);
            var insertCopiePermis = _this.copiePermisDAO.insererCopiePermis(copie_permis.nom, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, values[4]);
            var insertPermis = _this.permisDAO.insererPermis(content.num_permis, values[3], content.date_de_delivrance, values[2], values[1], content.id_prefecture["value"]);
            return Promise.all([insertCopieNoteVerbaleMAECI, insertDossier, insertPersonne, insertCopiePermis, insertPermis]);
        }).catch(function (error) {
            _this.Error.hasError = error;
            _this.Error.hasReason = error.toString();
            return _this.Error;
        });
    };
    Form1ServiceImpl.prototype.getListePrefectures = function () {
        return this.prefectureDAO.getListePrefecture();
    };
    tslib_1.__decorate([
        dec_transactional_1.Transactional({ configDatabase: injector_1.Injector.getRegistered("databaseConfigName") }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Form1ServiceImpl.prototype, "insererDonnee", null);
    return Form1ServiceImpl;
}(service_request_1.ServiceRequest));
exports.Form1ServiceImpl = Form1ServiceImpl;

//# sourceMappingURL=form1-service-impl-data.js.map
