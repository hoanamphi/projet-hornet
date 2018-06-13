"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var personne_dao_1 = require("src/dao/admin/fvm/personne-dao");
var copie_note_verbale_MAECI_dao_1 = require("src/dao/admin/fvm/copie_note_verbale_MAECI-dao");
var dossier_dao_1 = require("src/dao/admin/fvm/dossier-dao");
var permis_dao_1 = require("src/dao/admin/fvm/permis-dao");
var copie_permis_dao_1 = require("src/dao/admin/fvm/copie_permis-dao");
var prefecture_dao_1 = require("src/dao/prefecture-dao");
var demande_authentification_dao_1 = require("src/dao/admin/fvm/demande_authentification-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");
var PageServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(PageServiceImpl, _super);
    function PageServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Error = { "error": null, "reason": null };
        _this.personneDAO = new personne_dao_1.PersonneFVMDAO();
        _this.dossierDAO = new dossier_dao_1.DossierFVMDAO();
        _this.permisDAO = new permis_dao_1.PermisFVMDAO();
        _this.copieNoteVerbaleMAECIDAO = new copie_note_verbale_MAECI_dao_1.CopieNoteVerbaleMAECIFVMDao();
        _this.copiePermisDAO = new copie_permis_dao_1.CopiePermisFVMDao();
        _this.prefectureDAO = new prefecture_dao_1.PrefectureDAO();
        _this.demandeAuthentificationDAO = new demande_authentification_dao_1.DemandeAuthentificationFVMDAO();
        return _this;
    }
    PageServiceImpl.prototype.getListeDossiers = function () {
        var _this = this;
        return this.permisDAO.getAllPermis().then(function (permisList) {
            var idPersonneArray = [];
            var idDossierArray = [];
            permisList.forEach(function (permis) {
                idPersonneArray.push(permis.id_personne_fvm);
                idDossierArray.push(permis.id_dossier_fvm);
            });
            var personne = _this.personneDAO.getListePersonne(idPersonneArray);
            var dossier = _this.dossierDAO.getListeDossier(idDossierArray);
            return Promise.all([personne, dossier]).then(function (values) {
                var personneList = values[0];
                var dossierList = values[1];
                var result = [];
                permisList.forEach(function (permis) {
                    var obj = { "idPermis": permis.id_permis_fvm, "numPermis": null, "nom": null, "prenom": null, "dateDeNaissance": null, "dateReceptionDossier": null };
                    obj.numPermis = permis.num_permis;
                    personneList.forEach(function (personne) {
                        if (personne.id_permis_fvm == permis.id_permis_fvm) {
                            obj.nom = personne.nom;
                            obj.prenom = personne.prenom;
                            obj.dateDeNaissance = personne.date_de_naissance;
                        }
                    });
                    dossierList.forEach(function (dossier) {
                        if (dossier.id_permis_fvm == permis.id_permis_fvm) {
                            obj.dateReceptionDossier = dossier.date_reception_dossier;
                        }
                    });
                    result.push(obj);
                });
                return result;
            });
        });
    };
    PageServiceImpl.prototype.getDossier = function (data) {
        var _this = this;
        var idPermis = data.idPermis;
        return this.permisDAO.getPermis(idPermis).then(function (permis) {
            var result = {};
            result["numPermis"] = permis.num_permis;
            result["dateDeDelivrance"] = permis.date_de_delivrance;
            var copie_permis = _this.copiePermisDAO.getCopiePermis(permis.id_copie_permis_fvm);
            var personne = _this.personneDAO.getPersonne(permis.id_personne_fvm);
            var dossier = _this.dossierDAO.getDossier(permis.id_dossier_fvm);
            var prefecture_delivrance = _this.prefectureDAO.getPrefecture(permis.id_prefecture_delivrance);
            return Promise.all([copie_permis, personne, dossier, prefecture_delivrance]).then(function (values) {
                var copie_permis = values[0];
                var personne = values[1];
                var dossier = values[2];
                var prefecture = values[3];
                result["copie_permis"] = copie_permis;
                result["nom"] = personne.nom;
                result["prenom"] = personne.prenom;
                result["dateDeNaissance"] = personne.date_de_naissance.getDate();
                result["sexe"] = personne.titre;
                result["villeDeNaissance"] = personne.ville_de_naissance;
                result["paysDeNaissance"] = personne.pays_de_naissance;
                result["region"] = prefecture.region;
                result["departement"] = prefecture.departement;
                result["prefecture"] = prefecture.prefecture;
                result["adresse"] = prefecture.adresse;
                result["codePostal"] = prefecture.code_postal;
                result["ville"] = prefecture.ville;
                result["dateReceptionDossier"] = dossier.date_reception_dossier.getDate();
                return _this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(dossier.id_copie_note_verbale_maeci_fvm).then(function (values) {
                    result["copie_note_verbale_maeci"] = values;
                    return [result];
                });
            });
        });
    };
    PageServiceImpl.prototype.getDemandeAuthentification = function (data) {
        var idPermis = data.idPermis;
        return this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis);
    };
    /* TODO
    getReleve(data): Promise<any> {
      let idPermis = data["idPermis"];
      return Promise.resolve([]);
    }
  
    getNoteVerbale(data): Promise<any> {
      let idPermis = data["idPermis"];
      return Promise.resolve([]);
    }
    */
    PageServiceImpl.prototype.getCopiePermis = function (idCopiePermis) {
        return this.copiePermisDAO.getCopiePermis(idCopiePermis);
    };
    PageServiceImpl.prototype.getCopieNoteVerbaleMAECI = function (idCopieNoteVerbaleMAECI) {
        return this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI);
    };
    PageServiceImpl.prototype.getPDFDemandeAuthentification = function (idPermis) {
        var _this = this;
        var result = {};
        return this.getDossier({ "idPermis": idPermis }).then(function (dossier) {
            result["dossier"] = dossier;
            return _this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis).then(function (demandeAuthentification) {
                result["demandeAuthentification"] = demandeAuthentification;
                return result;
            });
        });
    };
    PageServiceImpl.prototype.deleteDemandeAuthentification = function (data) {
        var _this = this;
        var idDemandeAuthentification = data.idDemandeAuthentification;
        return this.demandeAuthentificationDAO.deleteDemandeAuthentification(idDemandeAuthentification).catch(function (error) {
            _this.Error.error = error;
            _this.Error.reason = error.toString();
            return _this.Error;
        });
    };
    PageServiceImpl.prototype.deleteDossier = function (data) {
        var _this = this;
        var idPermis = data.idPermis;
        var idDossier = this.dossierDAO.getIdDossierFromPermis(idPermis);
        var idPersonne = this.personneDAO.getIdPersonneFromPermis(idPermis);
        var demandeAuthentification = this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis);
        return Promise.all([idDossier, idPersonne, demandeAuthentification]).then(function (values) {
            var deleteCopieNoteVerbaleMAECI = _this.copieNoteVerbaleMAECIDAO.deleteCopieNoteVerbaleMAECIFromDossier(values[0]);
            var deleteDossier = _this.dossierDAO.deleteDossier(values[0]);
            var deletePersonne = _this.personneDAO.deletePersonne(values[1]);
            var deleteCopiePermis = _this.copiePermisDAO.deleteCopiePermisFromPermis(idPermis);
            var deletePermis = _this.permisDAO.deletePermis(idPermis);
            if (values[2] != null) {
                var deleteDemandeAuthentification = _this.demandeAuthentificationDAO.deleteDemandeAuthentification(values[2].id_demande_authentification_fvm);
                return Promise.all([deleteCopieNoteVerbaleMAECI, deleteDossier, deletePersonne, deleteCopiePermis, deleteDemandeAuthentification, deletePermis]);
            }
            else {
                return Promise.all([deleteCopieNoteVerbaleMAECI, deleteDossier, deletePersonne, deleteCopiePermis, deletePermis]);
            }
        }).catch(function (error) {
            _this.Error.error = error;
            _this.Error.reason = error.toString();
            return _this.Error;
        });
    };
    return PageServiceImpl;
}(service_request_1.ServiceRequest));
exports.PageServiceImpl = PageServiceImpl;

//# sourceMappingURL=page-service-impl-data.js.map
