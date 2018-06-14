"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de service DATA
var service_request_1 = require("hornet-js-core/src/services/service-request");
// Classes de DAO
var personne_dao_1 = require("src/dao/admin/fvm/personne-dao");
var copie_note_verbale_MAECI_dao_1 = require("src/dao/admin/fvm/copie_note_verbale_MAECI-dao");
var dossier_dao_1 = require("src/dao/admin/fvm/dossier-dao");
var permis_dao_1 = require("src/dao/admin/fvm/permis-dao");
var copie_permis_dao_1 = require("src/dao/admin/fvm/copie_permis-dao");
var prefecture_dao_1 = require("src/dao/prefecture-dao");
var demande_authentification_dao_1 = require("src/dao/admin/fvm/demande_authentification-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");
/**
 * Classe de service Data utilisée par les pages
 * @extends {ServiceRequest}
 * @implements {PageService}
 */
var PageServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(PageServiceImpl, _super);
    function PageServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Objets contenant les erreurs retournées par une méthode
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
    /**
     * Méthode supprimant une demande d'authentification de la base de données
     * @param {{idDemandeAuthentification: number}} data id de la demande d'authentification à supprimer
     * @returns {Promise<any>}
     */
    PageServiceImpl.prototype.deleteDemandeAuthentification = function (data) {
        var _this = this;
        logger.trace("SERVICE DATA delete - PageService.DeleteDemandeAuthentification");
        // Récupérer les données de formulaire
        var idDemandeAuthentification = data.idDemandeAuthentification;
        return this.demandeAuthentificationDAO.deleteDemandeAuthentification(idDemandeAuthentification).catch(function (error) {
            // Si une erreur est capturée
            // On retourne un Objet contenant la description de l'erreur
            _this.Error.error = error;
            _this.Error.reason = error.toString();
            return _this.Error;
        });
    };
    /**
     * Méthode supprimant un dossier de la base de données
     * @param {{idPermis: number}} data id du Permis concerné par la suppression
     * @returns {Promise<any>}
     */
    PageServiceImpl.prototype.deleteDossier = function (data) {
        var _this = this;
        logger.trace("SERVICE DATA delete - PageService.DeleteDemandeAuthentification");
        // Récupérer les données de formulaire
        var idPermis = data.idPermis;
        // Récupérer les ids des entrées relatives à un permis de conduire
        var idDossier = this.dossierDAO.getIdDossierFromPermis(idPermis);
        var idPersonne = this.personneDAO.getIdPersonneFromPermis(idPermis);
        // Récupérer la demande d'authentification du permis
        var demandeAuthentification = this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis);
        return Promise.all([idDossier, idPersonne, demandeAuthentification]).then(function (values) {
            var idDossier_value = values[0];
            var idPersonne_value = values[1];
            var demandeAuthentification_value = values[2];
            // Supprimer les entrées relatives à un permis de conduire
            var deleteCopieNoteVerbaleMAECI = _this.copieNoteVerbaleMAECIDAO.deleteCopieNoteVerbaleMAECIFromDossier(idDossier_value);
            var deleteDossier = _this.dossierDAO.deleteDossier(idDossier_value);
            var deletePersonne = _this.personneDAO.deletePersonne(idPersonne_value);
            var deleteCopiePermis = _this.copiePermisDAO.deleteCopiePermisFromPermis(idPermis);
            var deletePermis = _this.permisDAO.deletePermis(idPermis);
            // Si une demande d'authentification a été générée pour ce permis
            if (demandeAuthentification_value != null) {
                // Supprimer la demande d'authentification
                var deleteDemandeAuthentification = _this.demandeAuthentificationDAO.deleteDemandeAuthentification(demandeAuthentification_value.id_demande_authentification_fvm);
                return Promise.all([deleteCopieNoteVerbaleMAECI, deleteDossier, deletePersonne, deleteCopiePermis, deleteDemandeAuthentification, deletePermis]);
            }
            else {
                return Promise.all([deleteCopieNoteVerbaleMAECI, deleteDossier, deletePersonne, deleteCopiePermis, deletePermis]);
            }
        }).catch(function (error) {
            // Si une erreur est capturée
            // On retourne un Objet contenant la description de l'erreur
            _this.Error.error = error;
            _this.Error.reason = error.toString();
            return _this.Error;
        });
    };
    /**
     * Méthode retournant la liste des dossiers stockés dans la base
     * @returns {Promise<Array<any>>} Liste des dossiers stockés dans la base
     */
    PageServiceImpl.prototype.getListeDossier = function () {
        var _this = this;
        logger.trace("SERVICE DATA get - PageService.GetListDossier");
        // Récupérer tous les permis de conduires stockés dans la base
        return this.permisDAO.getAllPermis().then(function (permisList) {
            var idPersonneArray = [];
            var idDossierArray = [];
            /* Pour chaque permis de conduire :
                idPersonne : id de la personne auquel appartient le permis
                idDossier : id du dossier concerné par le permis
            */
            permisList.forEach(function (permis) {
                idPersonneArray.push(permis.idPersonne);
                idDossierArray.push(permis.idDossier);
            });
            // Récupérer les listes des personnes et des dossiers stockés dans la base
            var personne = _this.personneDAO.getListePersonne(idPersonneArray);
            var dossier = _this.dossierDAO.getListeDossier(idDossierArray);
            return Promise.all([personne, dossier]).then(function (values) {
                var personneList = values[0];
                var dossierList = values[1];
                var result = [];
                // Concatèner les données relatives à chaque permis
                permisList.forEach(function (permis) {
                    var obj = { "idPermis": permis.idPermis, "numPermis": null, "nom": null, "prenom": null, "dateDeNaissance": null, "dateReceptionDossier": null };
                    obj.numPermis = permis.numPermis;
                    personneList.forEach(function (personne) {
                        if (personne.idPermis == permis.idPermis) {
                            obj.nom = personne.nom;
                            obj.prenom = personne.prenom;
                            obj.dateDeNaissance = Date.parse(personne.dateDeNaissance.toString());
                        }
                    });
                    dossierList.forEach(function (dossier) {
                        if (dossier.idPermis == permis.idPermis) {
                            obj.dateReceptionDossier = Date.parse(dossier.dateReceptionDossier.toString());
                        }
                    });
                    result.push(obj);
                });
                // Retourne le tableau contenant la liste des données correspondant à chaque permis
                return result;
            });
        });
    };
    /**
     * Méthode retournant un dossier
     * @param {{idPermis: number}} data id du Permis relatif au dossier
     * @returns {Promise<Array<any>>} Informations du dossier (Stockées dans un tableau pour une utilisation dans un dataSource)
     */
    PageServiceImpl.prototype.getDossier = function (data) {
        var _this = this;
        logger.trace("SERVICE DATA get - PageService.GetDossier");
        // Récupérer les données de formulaire
        var idPermis = data.idPermis;
        // Récupérer les informations d'un permis de conduire
        return this.permisDAO.getPermis(idPermis).then(function (permis) {
            var result = {};
            result["numPermis"] = permis.num_permis;
            result["dateDeDelivrance"] = permis.date_de_delivrance;
            /* Récupérer les informations relatives à un permis :
                Copie du permis de conduire
                Personne à qui appartient le permis
                Dossier concerné par le permis
                Préfecture ayant délivré le permis
            */
            var copie_permis = _this.copiePermisDAO.getCopiePermis(permis.id_copie_permis_fvm);
            var personne = _this.personneDAO.getPersonne(permis.id_personne_fvm);
            var dossier = _this.dossierDAO.getDossier(permis.id_dossier_fvm);
            var prefecture_delivrance = _this.prefectureDAO.getPrefecture(permis.id_prefecture_delivrance);
            return Promise.all([copie_permis, personne, dossier, prefecture_delivrance]).then(function (values) {
                var copie_permis_value = values[0];
                var personne_value = values[1];
                var dossier_value = values[2];
                var prefecture_value = values[3];
                // Concaténer les données relatives à un permis
                result["copie_permis"] = copie_permis_value;
                result["nom"] = personne_value.nom;
                result["prenom"] = personne_value.prenom;
                result["dateDeNaissance"] = personne_value.date_de_naissance;
                result["sexe"] = personne_value.titre;
                result["villeDeNaissance"] = personne_value.ville_de_naissance;
                result["paysDeNaissance"] = personne_value.pays_de_naissance;
                result["region"] = prefecture_value.region;
                result["departement"] = prefecture_value.departement;
                result["prefecture"] = prefecture_value.prefecture;
                result["adresse"] = prefecture_value.adresse;
                result["codePostal"] = prefecture_value.code_postal;
                result["ville"] = prefecture_value.ville;
                result["dateReceptionDossier"] = dossier_value.date_reception_dossier;
                // Récupérer la copie de la note verbale du MAECI
                return _this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(dossier_value.id_copie_note_verbale_maeci_fvm).then(function (values) {
                    // Concaténer la copie aux autres informations relatives à un permis
                    result["copie_note_verbale_maeci"] = values;
                    return [result];
                });
            });
        });
    };
    /**
     * Méthode retournant une demande d'authentification
     * @param {{idPermis: number}} data id du Permis concerné par la demande d'authentification
     * @returns {Promise<DemandeAuthentificationFVMMetier>} Demande d'authentification
     */
    PageServiceImpl.prototype.getDemandeAuthentification = function (data) {
        logger.trace("SERVICE DATA get - PageService.GetDemandeAuthentification");
        // Récupérer les données de formulaire
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
    /**
     * Méthode retournant la copie d'un permis de conduire
     * @param {number} idCopiePermis id de la copie du permis de conduire
     * @returns {Promise<CopiePermisFVMMetier>} Copie d'un permis de conduire
     */
    PageServiceImpl.prototype.getCopiePermis = function (idCopiePermis) {
        logger.trace("SERVICE DATA get - PageService.GetCopiePermis");
        return this.copiePermisDAO.getCopiePermis(idCopiePermis);
    };
    /**
     * Méthode retournant la copie d'une note verbale du MAECI
     * @param {number} idCopieNoteVerbaleMAECI id de la copie de la note verbale du MAECI
     * @returns {Promise<CopieNoteVerbaleMAECIFVMMetier>} Copie d'une note verbale du MAECI
     */
    PageServiceImpl.prototype.getCopieNoteVerbaleMAECI = function (idCopieNoteVerbaleMAECI) {
        logger.trace("SERVICE DATA get - PageService.GetCopieNoteVerbaleMAECI");
        return this.copieNoteVerbaleMAECIDAO.getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI);
    };
    /**
     * Méthode retournant les informations nécessaires à la génération d'une demande d'authentification en PDF
     * @param {number} idPermis id du Permis concerné par la demande d'authentification
     * @returns {Promise<{dossier: any, demande_authentification: any}>} Informations de la demande d'authentification
     */
    PageServiceImpl.prototype.getPDFDemandeAuthentification = function (idPermis) {
        var _this = this;
        logger.trace("SERVICE DATA get - PageService.GetDossier");
        // Concaténer les informations relatives à une demande d'authentification
        var result = { dossier: null, demandeAuthentification: null };
        // Récupérer les informations d'un dossier
        return this.getDossier({ "idPermis": idPermis }).then(function (dossier) {
            result["dossier"] = dossier;
            // Récupérer la demande d'authentification
            return _this.demandeAuthentificationDAO.getDemandeAuthentificationFromPermis(idPermis).then(function (demandeAuthentification) {
                result["demandeAuthentification"] = demandeAuthentification;
                return result;
            });
        });
    };
    return PageServiceImpl;
}(service_request_1.ServiceRequest));
exports.PageServiceImpl = PageServiceImpl;

//# sourceMappingURL=page-service-impl-data.js.map
