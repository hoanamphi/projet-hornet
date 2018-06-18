"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de service DATA
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
/**
 * Classe de service Data utilisée par les formulaires
 * @extends {ServiceRequest}
 * @implements {FormService}
 */
var FormServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(FormServiceImpl, _super);
    function FormServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Objets contenant les erreurs retournées par une méthode
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
    /**
     * Méthode effectuant l'insertion d'un dossier dans la base de données
     * @param {{content: any, copie_permis: any, copie_note_verbale_maeci: any}} data données de formulaire
     * @returns {Promise<any>}
     */
    FormServiceImpl.prototype.insererDossier = function (data) {
        var _this = this;
        logger.trace("SERVICE DATA inser - FormService.InserDonnee");
        // Récupérer les données de formulaire
        var content = JSON.parse(data.content);
        var copie_permis = data.copie_permis;
        var copie_note_verbale_maeci = data.copie_note_verbale_maeci;
        // Obtenir des ids pour les entrées à insérer
        var idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getNewIdCopieNoteVerbaleMAECI();
        var idDossier = this.dossierDAO.getNewIdDossier();
        var idPersonne = this.personneDAO.getNewIdPersonne();
        var idCopiePermis = this.copiePermisDAO.getNewIdCopiePermis();
        var idPermis = this.permisDAO.getNewIdPermis();
        return Promise.all([idCopieNoteVerbaleMAECI, idDossier, idPersonne, idCopiePermis, idPermis]).then(function (values) {
            var idCopieNoteVerbaleMAECI_value = values[0];
            var idDossier_value = values[1];
            var idPersonne_value = values[2];
            var idCopiePermis_value = values[3];
            var idPermis_value = values[4];
            // Insérer la copie de la note verbale MAECI
            return _this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI_value, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, null).then(function () {
                // Si la promesse de résultat est remplie (sans erreurs)
                // Insérer les autres entrées
                var insertDossier = _this.dossierDAO.insererDossier(idDossier_value, idCopieNoteVerbaleMAECI_value, null);
                var insertPersonne = _this.personneDAO.insererPersonne(idPersonne_value, content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.id_sexe, content.ville_de_naissance, content.pays_de_naissance, null);
                var insertCopiePermis = _this.copiePermisDAO.insererCopiePermis(idCopiePermis_value, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, null);
                return Promise.all([insertDossier, insertPersonne, insertCopiePermis]).then(function () {
                    // Si la promesse de résultat est remplie (sans erreurs)
                    // Insérer le permis de conduire
                    return _this.permisDAO.insererPermis(idPermis_value, content.num_permis, idCopiePermis_value, content.date_de_delivrance, idPersonne_value, idDossier_value, content.id_prefecture).then(function () {
                        // Toutes les insertions se sont déroulées sans erreur
                        // On met à jour les entrées en ajoutant les clés étrangères
                        var updateCopieNoteVerbaleMAECI = _this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI_value, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, idDossier_value);
                        var updateDossier = _this.dossierDAO.insererDossier(idDossier_value, idCopieNoteVerbaleMAECI_value, idPermis_value);
                        var updatePersonne = _this.personneDAO.insererPersonne(idPersonne_value, content.nom.toLowerCase(), content.prenom.toLowerCase(), content.date_de_naissance, content.id_sexe, content.ville_de_naissance, content.pays_de_naissance, idPermis_value);
                        var updateCopiePermis = _this.copiePermisDAO.insererCopiePermis(idCopiePermis_value, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, idPermis_value);
                        return Promise.all([updateCopieNoteVerbaleMAECI, updateDossier, updatePersonne, updateCopiePermis]);
                    });
                });
            });
        }).catch(function (error) {
            // Si une erreur est capturée
            // On retourne un Objet contenant la description de l'erreur
            _this.Error.error = error;
            _this.Error.reason = error.toString();
            return _this.Error;
        });
    };
    /**
     * Méthode effectuant l'insertion d'une demande d'authentification dans la base de données
     * @param {{num_valise: number, num_demande_authentification: string, id_permis: number}} data données de formulaire
     * @returns {Promise<any>}
     */
    FormServiceImpl.prototype.insererDemandeAuthentification = function (data) {
        var _this = this;
        logger.trace("SERVICE DATA inser - FormService.InserDemandeAuthentification");
        // Récupérer les informations de la valise diplomatique
        return this.valiseDAO.getValise(data.num_valise).then(function (values) {
            var valise = values;
            // Obtenir un id pour l'entrée à insérer
            return _this.demandeAuthentificationDAO.getNewIdDemandeAuthentification().then(function (idDemandeAuthentification) {
                // Insérer la demande d'authentification
                return _this.demandeAuthentificationDAO.insererDemandeAuthentification(idDemandeAuthentification, data.num_demande_authentification, data.id_permis, data.num_valise, new Date(valise.dateValise.toString()));
            });
        }).catch(function (error) {
            // Si une erreur est capturée
            // On retourne un Objet contenant la description de l'erreur
            _this.Error.error = error;
            _this.Error.reason = error.toString();
            return _this.Error;
        });
    };
    /**
     * Méthode effectuant l'insertion d'une valise dans la base de données
     * @param {{num_valise: number, date_valise: Date}} data données de formulaire
     * @returns {Promise<any>}
     */
    FormServiceImpl.prototype.insererValise = function (data) {
        var _this = this;
        logger.trace("SERVICE DATA inser - FormService.InserValise");
        // Insérer la valise
        return this.valiseDAO.insererValise(data.num_valise, data.date_valise).catch(function (error) {
            // Si une erreur est capturée
            // On retourne un Objet contenant la description de l'erreur
            _this.Error.error = error;
            _this.Error.reason = error.toString();
            return _this.Error;
        });
    };
    /**
     * Méthode retournant la liste des préfectures stockées dans la base
     * @returns {Promise<Array<{idPrefecture: number, prefecture: string}>>} Liste des préfectures stockées dans la base
     */
    FormServiceImpl.prototype.getListePrefecture = function () {
        logger.trace("SERVICE DATA get - FormService.GetListPrefecture");
        return this.prefectureDAO.getListePrefecture();
    };
    /**
     * Méthode retournant la liste des valises stockées dans la base
     * @returns {Promise<Array<ValiseAttributes>>} Liste des valises stockées dans la base
     */
    FormServiceImpl.prototype.getListeValise = function () {
        logger.trace("SERVICE DATA get - FormService.GetListValise");
        return this.valiseDAO.getListeValise().then(function (valiseList) {
            var tmp = [];
            valiseList.forEach(function (valise) {
                tmp.push({ numValise: valise.numValise, dateValise: Date.parse(valise.dateValise.toString()) });
            });
            return tmp;
        });
    };
    tslib_1.__decorate([
        dec_transactional_1.Transactional({ configDatabase: injector_1.Injector.getRegistered("databaseConfigName") }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], FormServiceImpl.prototype, "insererDossier", null);
    return FormServiceImpl;
}(service_request_1.ServiceRequest));
exports.FormServiceImpl = FormServiceImpl;

//# sourceMappingURL=form-service-impl-data.js.map
