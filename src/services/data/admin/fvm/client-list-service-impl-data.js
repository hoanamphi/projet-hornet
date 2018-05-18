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
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");
var ClientListServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ClientListServiceImpl, _super);
    function ClientListServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.personneDAO = new personne_dao_1.PersonneFVMDAO();
        _this.dossierDAO = new dossier_dao_1.DossierFVMDAO();
        _this.permisDAO = new permis_dao_1.PermisFVMDAO();
        _this.copieNoteVerbaleMAECIDAO = new copie_note_verbale_MAECI_dao_1.CopieNoteVerbaleMAECIFVMDao();
        _this.copiePermisDAO = new copie_permis_dao_1.CopiePermisFVMDao();
        _this.prefectureDAO = new prefecture_dao_1.PrefectureDAO();
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
                    var obj = { "id_permis": permis.idPermis, "num_permis": null, "nom": null, "prenom": null, "date_de_naissance": null, "date_reception_dossier": null };
                    obj.num_permis = permis.numPermis;
                    personneList.forEach(function (personne) {
                        if (personne.idPermis == permis.idPermis) {
                            obj.nom = personne.nom;
                            obj.prenom = personne.prenom;
                            obj.date_de_naissance = Date.parse(personne.dateDeNaissance);
                        }
                    });
                    dossierList.forEach(function (dossier) {
                        if (dossier.idPermis == permis.idPermis) {
                            obj.date_reception_dossier = Date.parse(dossier.dateReceptionDossier);
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
        var idPermis = data["id"];
        return this.permisDAO.getPermis(idPermis).then(function (values) {
            var permis = values[0];
            var result = {};
            result["num_permis"] = permis.numPermis;
            result["date_de_delivrance"] = Date.parse(permis.dateDeDelivrance);
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
                result["date_de_naissance"] = Date.parse(personne.dateDeNaissance);
                result["ville_de_naissance"] = personne.villeDeNaissance;
                result["pays_de_naissance"] = personne.paysDeNaissance;
                result["date_reception_dossier"] = Date.parse(dossier.dateReceptionDossier);
                result["region"] = prefecture.region;
                result["departement"] = prefecture.departement;
                result["prefecture"] = prefecture.prefecture;
                result["adresse"] = prefecture.adresse;
                result["code_postal"] = prefecture.codePostal;
                result["ville"] = prefecture.ville;
                return Promise.resolve([result]);
            });
        });
    };
    ClientListServiceImpl.prototype.getDemandeAuthentification = function (data) {
        var idPermis = data["id"];
        return Promise.resolve([]);
    };
    ClientListServiceImpl.prototype.getReleve = function (data) {
        var idPermis = data["id"];
        return Promise.resolve([]);
    };
    ClientListServiceImpl.prototype.getNoteVerbale = function (data) {
        var idPermis = data["id"];
        return Promise.resolve([]);
    };
    return ClientListServiceImpl;
}(service_request_1.ServiceRequest));
exports.ClientListServiceImpl = ClientListServiceImpl;

//# sourceMappingURL=client-list-service-impl-data.js.map
