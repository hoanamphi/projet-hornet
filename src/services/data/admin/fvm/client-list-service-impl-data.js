"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var personne_dao_1 = require("../../../../dao/admin/fvm/personne-dao");
var copie_note_verbale_MAECI_dao_1 = require("../../../../dao/admin/fvm/copie_note_verbale_MAECI-dao");
var dossier_dao_1 = require("../../../../dao/admin/fvm/dossier-dao");
var permis_dao_1 = require("../../../../dao/admin/fvm/permis-dao");
var copie_permis_dao_1 = require("../../../../dao/admin/fvm/copie_permis-dao");
var prefecture_dao_1 = require("../../../../dao/prefecture-dao");
var demande_authentification_dao_1 = require("../../../../dao/admin/fvm/demande_authentification-dao");
var valise_dao_1 = require("../../../../dao/valise-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");
var ClientListServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ClientListServiceImpl, _super);
    function ClientListServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Error = { "hasError": null, "hasReason": null };
        _this.personneDAO = new personne_dao_1.PersonneFVMDAO();
        _this.dossierDAO = new dossier_dao_1.DossierFVMDAO();
        _this.permisDAO = new permis_dao_1.PermisFVMDAO();
        _this.copieNoteVerbaleMAECIDAO = new copie_note_verbale_MAECI_dao_1.CopieNoteVerbaleMAECIFVMDao();
        _this.copiePermisDAO = new copie_permis_dao_1.CopiePermisFVMDao();
        _this.prefectureDAO = new prefecture_dao_1.PrefectureDAO();
        _this.demandeAuthentificationDAO = new demande_authentification_dao_1.DemandeAuthentificationFVMDAO();
        _this.valiseDAO = new valise_dao_1.ValiseDAO();
        return _this;
    }
    ClientListServiceImpl.prototype.getListeDossiers = function () {
        var _this = this;
        return this.permisDAO.getAllPermis().then(function (permisList) {
            var idPersonneArray = [];
            var idDossierArray = [];
            permisList.forEach(function (permis) {
                idPersonneArray.push(permis["idPersonne"]);
                idDossierArray.push(permis["idDossier"]);
            });
            var personne = _this.personneDAO.getPersonne(idPersonneArray);
            var dossier = _this.dossierDAO.getDossier(idDossierArray);
            return Promise.all([personne, dossier]).then(function (values) {
                var personneList = values[0];
                var dossierList = values[1];
                var result = [];
                permisList.forEach(function (permis) {
                    var obj = { "idPermis": permis.idPermis, "numPermis": null, "nom": null, "prenom": null, "dateDeNaissance": null, "dateReceptionDossier": null };
                    obj.numPermis = permis.numPermis;
                    personneList.forEach(function (personne) {
                        if (personne.idPermis == permis.idPermis) {
                            obj.nom = personne.nom;
                            obj.prenom = personne.prenom;
                            obj.dateDeNaissance = Date.parse(personne.dateDeNaissance);
                        }
                    });
                    dossierList.forEach(function (dossier) {
                        if (dossier.idPermis == permis.idPermis) {
                            obj.dateReceptionDossier = Date.parse(dossier.dateReceptionDossier);
                        }
                    });
                    result.push(obj);
                });
                return Promise.resolve(result);
            });
        });
    };
    ClientListServiceImpl.prototype.getDossier = function (data) {
        var _this = this;
        var idPermis = data["idPermis"];
        return this.permisDAO.getPermis(idPermis).then(function (values) {
            var permis = values[0];
            var result = {};
            result["numPermis"] = permis.numPermis;
            result["dateDeDelivrance"] = Date.parse(permis.dateDeDelivrance);
            var copie_permis = _this.copiePermisDAO.getCopiePermis(permis.idCopiePermis);
            var personne = _this.personneDAO.getPersonne(permis.idPersonne);
            var dossier = _this.dossierDAO.getDossier(permis.idDossier);
            var prefecture_delivrance = _this.prefectureDAO.getPrefecture(permis.idPrefectureDelivrance);
            return Promise.all([copie_permis, personne, dossier, prefecture_delivrance]).then(function (values) {
                var copie_permis = values[0][0];
                var personne = values[1][0];
                var dossier = values[2][0];
                var prefecture = values[3][0];
                result["copie_permis"] = copie_permis;
                result["nom"] = personne.nom;
                result["prenom"] = personne.prenom;
                result["dateDeNaissance"] = Date.parse(personne.dateDeNaissance);
                result["sexe"] = personne.sexe;
                result["villeDeNaissance"] = personne.villeDeNaissance;
                result["paysDeNaissance"] = personne.paysDeNaissance;
                result["region"] = prefecture.region;
                result["departement"] = prefecture.departement;
                result["prefecture"] = prefecture.prefecture;
                result["adresse"] = prefecture.adresse;
                result["codePostal"] = prefecture.codePostal;
                result["ville"] = prefecture.ville;
                result["dateReceptionDossier"] = Date.parse(dossier.dateReceptionDossier);
                return _this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(dossier.idCopieNoteVerbaleMAECI).then(function (values) {
                    result["copie_note_verbale_maeci"] = values[0];
                    return Promise.resolve([result]);
                });
            });
        });
    };
    ClientListServiceImpl.prototype.getDemandeAuthentification = function (data) {
        var idPermis = data["idPermis"];
        return this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis);
    };
    ClientListServiceImpl.prototype.getReleve = function (data) {
        var idPermis = data["idPermis"];
        return Promise.resolve([]);
    };
    ClientListServiceImpl.prototype.getNoteVerbale = function (data) {
        var idPermis = data["idPermis"];
        return Promise.resolve([]);
    };
    ClientListServiceImpl.prototype.getCopiePermis = function (idCopiePermis) {
        return this.copiePermisDAO.getCopiePermis(idCopiePermis).then(function (values) {
            return Promise.resolve(values[0]);
        });
    };
    ClientListServiceImpl.prototype.getCopieNoteVerbaleMAECI = function (idCopieNoteVerbaleMAECI) {
        return this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI).then(function (values) {
            return Promise.resolve(values[0]);
        });
    };
    ClientListServiceImpl.prototype.getPDFDemandeAuthentification = function (idPermis) {
        var _this = this;
        var result = {};
        return this.getDossier({ "idPermis": idPermis }).then(function (dossier) {
            result["dossier"] = dossier;
            return _this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis).then(function (demandeAuthentification) {
                result["demandeAuthentification"] = demandeAuthentification;
                return Promise.resolve(result);
            });
        });
    };
    ClientListServiceImpl.prototype.deleteDemandeAuthentification = function (data) {
        var _this = this;
        var idDemandeAuthentification = data.idDemandeAuthentification;
        return this.demandeAuthentificationDAO.deleteDemandeAuthentification(idDemandeAuthentification).catch(function (error) {
            _this.Error.hasError = error;
            _this.Error.hasReason = error.toString();
            return _this.Error;
        });
    };
    ClientListServiceImpl.prototype.deleteDossier = function (data) {
        var _this = this;
        var idPermis = data.idPermis;
        var idDossier = this.dossierDAO.getIdDossierFromPermis(idPermis);
        var idPersonne = this.personneDAO.getIdPersonneFromPermis(idPermis);
        var idDemandeAuthentification = this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis);
        return Promise.all([idDossier, idPersonne, idDemandeAuthentification]).then(function (values) {
            var deleteCopieNoteVerbaleMAECI = _this.copieNoteVerbaleMAECIDAO.deleteCopieNoteVerbaleMAECIFromDossier(values[0][0].idDossier);
            var deleteDossier = _this.dossierDAO.deleteDossier(values[0][0].idDossier);
            var deletePersonne = _this.personneDAO.deletePersonne(values[1][0].idPersonne);
            var deleteCopiePermis = _this.copiePermisDAO.deleteCopiePermisFromPermis(idPermis);
            var deletePermis = _this.permisDAO.deletePermis(idPermis);
            if (values[2].length > 0) {
                var deleteDemandeAuthentification = _this.demandeAuthentificationDAO.deleteDemandeAuthentification(values[2][0].idDemandeAuthentification);
            }
            return Promise.all([deleteCopieNoteVerbaleMAECI, deleteDossier, deletePersonne, deleteCopiePermis, deletePermis]);
        }).catch(function (error) {
            _this.Error.hasError = error;
            _this.Error.hasReason = error.toString();
            return _this.Error;
        });
    };
    return ClientListServiceImpl;
}(service_request_1.ServiceRequest));
exports.ClientListServiceImpl = ClientListServiceImpl;

//# sourceMappingURL=client-list-service-impl-data.js.map
