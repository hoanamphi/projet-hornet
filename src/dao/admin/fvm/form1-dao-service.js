"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var permis_dao_1 = require("./permis-dao");
var dossier_dao_1 = require("./dossier-dao");
var personne_dao_1 = require("./personne-dao");
var copie_note_verbale_MAECI_dao_1 = require("./copie_note_verbale_MAECI-dao");
var copie_permis_dao_1 = require("./copie_permis-dao");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var injector_1 = require("hornet-js-core/src/inject/injector");
var dec_transactional_1 = require("hornet-js-database/src/decorators/dec-transactional");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var Form1FVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(Form1FVMDAO, _super);
    function Form1FVMDAO() {
        var _this = _super.call(this) || this;
        _this.personneDAO = new personne_dao_1.PersonneFVMDAO();
        _this.dossierDAO = new dossier_dao_1.DossierFVMDAO();
        _this.permisDAO = new permis_dao_1.PermisFVMDAO();
        _this.copieNoteVerbaleMAECIDAO = new copie_note_verbale_MAECI_dao_1.CopieNoteVerbaleMAECIFVMDao();
        _this.copiePermisDAO = new copie_permis_dao_1.CopiePermisFVMDao();
        return _this;
    }
    Form1FVMDAO.prototype.insererDonnee = function (data) {
        var _this = this;
        var content = JSON.parse(data["content"]);
        var copie_permis = data["copie_permis"];
        var copie_note_verbale_maeci = data["copie_note_verbale_maeci"];
        var idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getIdCopieNoteVerbaleMAECI();
        var idDossier = this.dossierDAO.getIdDossier();
        var idPersonne = this.personneDAO.getIdPersonne();
        var idCopiePermis = this.copiePermisDAO.getIdCopiePermis();
        var idPermis = this.permisDAO.getIdPermis();
        var insertCopieNoteVerbaleMAECI = idDossier.then(function (idDossier) {
            return _this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(copie_note_verbale_maeci.nom, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, idDossier);
        });
        return insertCopieNoteVerbaleMAECI.then(function (result) {
            var insertDossier = idCopieNoteVerbaleMAECI.then(function (idCopieNoteVerbaleMAECI) {
                return idPermis.then(function (idPermis) {
                    return _this.dossierDAO.insererDossier(idCopieNoteVerbaleMAECI, new Date(), idPermis);
                });
            });
            return insertDossier.then(function (result) {
                var insertPersonne = idPermis.then(function (idPermis) {
                    return _this.personneDAO.insererPersonne(content.nom, content.prenom, content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, idPermis);
                });
                return insertPersonne.then(function (result) {
                    var insertCopiePermis = idPermis.then(function (idPermis) {
                        return _this.copiePermisDAO.insererCopiePermis(copie_permis.nom, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, idPermis);
                    });
                    return insertCopiePermis.then(function (result) {
                        var insertPermis = idCopiePermis.then(function (idCopiePermis) {
                            return idPersonne.then(function (idPersonne) {
                                return idDossier.then(function (idDossier) {
                                    return _this.permisDAO.insererPermis(content.num_permis, idCopiePermis, content.date_de_delivrance, idPersonne, idDossier, content.id_prefecture);
                                });
                            });
                        });
                        return insertPermis.then(function (result) {
                            return Promise.resolve("insertion réussie");
                        });
                    });
                });
            });
        });
    };
    tslib_1.__decorate([
        dec_transactional_1.Transactional({ configDatabase: injector_1.Injector.getRegistered("databaseConfigName") }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Form1FVMDAO.prototype, "insererDonnee", null);
    return Form1FVMDAO;
}(service_request_1.ServiceRequest));
exports.Form1FVMDAO = Form1FVMDAO;

//# sourceMappingURL=form1-dao-service.js.map
