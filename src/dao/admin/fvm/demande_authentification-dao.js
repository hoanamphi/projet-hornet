"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parent des Classes de DAO
var entity_dao_1 = require("src/dao/entity-dao");
// Classe métier d'une demande d'authentification
var fvm_mod_1 = require("src/models/fvm/fvm-mod");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
/**
 * Classe de DAO permettant l'interaction avec la table demande_authentification_fvm
 * @extends {EntityDAO}
 */
var DemandeAuthentificationFVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(DemandeAuthentificationFVMDAO, _super);
    /**
     * @constructor
     */
    function DemandeAuthentificationFVMDAO() {
        return _super.call(this) || this;
    }
    /**
     * Méthode insérant une nouvelle demande d'authentification dans la base
     * @param {number} idDemandeAuthentification id du nouveau tuple
     * @param {string} numDemandeAuthentification numéro de la demande d'authentification
     * @param {number} idPermis id du Permis auquel appartient l'entrée
     * @param {number} numValise numéro de la valise diplomatique transportant la demande d'authentification
     * @param {Date} dateValise date de départ du Maroc de la valise diplomatique transportant la demande d'authentification
     * @returns {Promise<number>} id du tuple créé
     */
    DemandeAuthentificationFVMDAO.prototype.insererDemandeAuthentification = function (idDemandeAuthentification, numDemandeAuthentification, idPermis, numValise, dateValise) {
        logger.trace("DAO inser - DemandeAuthentification.Inser");
        return this.modelDAO.demandeAuthenthificationFVMEntity.upsert({
            idDemandeAuthentification: idDemandeAuthentification,
            numDemandeAuthentification: numDemandeAuthentification,
            dateDeCreation: new Date(),
            dateDuTraitement: this.getDateDuTraitement(dateValise),
            idPermis: idPermis,
            numValise: numValise
        }).then(function () {
            return idDemandeAuthentification;
        });
    };
    /**
     * Méthode retournant la date du traitement de la demande d'authentification
     * @param {Date} dateValise date de départ du Maroc de la valise diplomatique transportant la demande d'authentification
     * @returns {Date} date du traitement de l'entrée
     */
    DemandeAuthentificationFVMDAO.prototype.getDateDuTraitement = function (dateValise) {
        logger.trace("DAO get - DemandeAuthentification.GetDateDuTraitement");
        var temp = new Date();
        // La date du traitement est toujours la veille du jour du départ de la valise
        temp.setDate(dateValise.getDate() - 1);
        return temp;
    };
    /**
     * Méthode retournant un id unique pour chaque nouveau tuple
     * @returns {Promise<number>} id du nouveau tuple
     */
    DemandeAuthentificationFVMDAO.prototype.getNewIdDemandeAuthentification = function () {
        var _this = this;
        logger.trace("DAO get - DemandeAuthentification.GetNewId");
        // Compte le nombre de tuples dans la table
        return this.modelDAO.demandeAuthenthificationFVMEntity.count().then(function (count) {
            // S'il y a déjà des tuples dans la table
            if (count > 0) {
                // Retourne l'id le plus grand
                return _this.modelDAO.demandeAuthenthificationFVMEntity.max("idDemandeAuthentification");
            }
            else {
                return -1;
            }
        }).then(function (max) {
            // Retourne l'id le plus grand + 1 ==> nouvel id
            return max + 1;
        });
    };
    /**
     * Méthode retournant une demande d'authentification
     * @param {number} idPermis id du Permis auquel appartient le tuple
     * @returns {Promise<DemandeAuthentificationFVMMetier>} Demande d'authentification
     */
    DemandeAuthentificationFVMDAO.prototype.getDemandeAuthentificationFromPermis = function (idPermis) {
        logger.trace("DAO get - DemandeAuthentification.Get");
        return this.modelDAO.demandeAuthenthificationFVMEntity.find({
            where: {
                idPermis: idPermis
            }
        });
    };
    /**
     * Méthode supprimant une demande d'authentification
     * @param {number} idDemandeAuthentification id du tuple à supprimer
     * @returns {Promise<any>}
     */
    DemandeAuthentificationFVMDAO.prototype.deleteDemandeAuthentification = function (idDemandeAuthentification) {
        logger.trace("DAO delete - DemandeAuthentification.Delete");
        return this.modelDAO.demandeAuthenthificationFVMEntity.destroy({
            where: {
                idDemandeAuthentification: idDemandeAuthentification
            }
        });
    };
    tslib_1.__decorate([
        Map_1.default(fvm_mod_1.DemandeAuthentificationFVMMetier),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", Promise)
    ], DemandeAuthentificationFVMDAO.prototype, "getDemandeAuthentificationFromPermis", null);
    return DemandeAuthentificationFVMDAO;
}(entity_dao_1.EntityDAO));
exports.DemandeAuthentificationFVMDAO = DemandeAuthentificationFVMDAO;

//# sourceMappingURL=demande_authentification-dao.js.map
