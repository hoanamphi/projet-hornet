"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de DAO
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.admin.fvm.permis-dao");
/**
 * Classe de DAO permettant l'interaction avec la table permis_fvm
 * @extends {EntityDAO}
 */
var PermisFVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(PermisFVMDAO, _super);
    /**
     * @constructor
     */
    function PermisFVMDAO() {
        return _super.call(this) || this;
    }
    /**
     * Méthode insérant un nouveau permis dans la base
     * @param {number} idPermis id du nouveau tuple
     * @param {string} numPermis numéro du permis de conduire
     * @param {number} idCopiePermis id de la copie du permis de conduire
     * @param {Date} dateDeDelivrance date de délivrance du permis de conduire
     * @param {number} idPersonne id de la personne auquel appartient le permis
     * @param {number} idDossier id du dossier concerné par le permis
     * @param {number} idPrefectureDelivrance id de la préfecture ayant délivré le permis
     * @returns {Promise<number>} id du tuple créé
     */
    PermisFVMDAO.prototype.insererPermis = function (idPermis, numPermis, idCopiePermis, dateDeDelivrance, idPersonne, idDossier, idPrefectureDelivrance) {
        logger.trace("DAO inser - Permis.Inser");
        return this.modelDAO.permisFVMEntity.upsert({
            idPermis: idPermis,
            numPermis: numPermis,
            idCopiePermis: idCopiePermis,
            dateDeDelivrance: dateDeDelivrance,
            idPersonne: idPersonne,
            idDossier: idDossier,
            idPrefectureDelivrance: idPrefectureDelivrance
        }).then(function () {
            return idPermis;
        });
    };
    /**
     * Méthode retournant un id unique pour chaque nouveau tuple
     * @returns {Promise<number>} id du nouveau tuple
     */
    PermisFVMDAO.prototype.getNewIdPermis = function () {
        var _this = this;
        logger.trace("DAO get - Permis.GetNewId");
        // Compte le nombre de tuples dans la table
        return this.modelDAO.permisFVMEntity.count().then(function (count) {
            // S'il y a déjà des tuples dans la table
            if (count > 0) {
                // Retourne l'id le plus grand
                return _this.modelDAO.permisFVMEntity.max("idPermis");
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
     * Méthode retournant la liste des permis stockés dans la base
     * @returns {Promise<Array<PermisFVMAttributes>>} Liste des permis stockés dans la base
     */
    PermisFVMDAO.prototype.getAllPermis = function () {
        logger.trace("DAO get - Permis.GetAll");
        return this.modelDAO.permisFVMEntity.findAll();
    };
    /**
     * Méthode retournant un permis de conduire
     * @param {number} idPermis id du tuple à retourner
     * @returns {Promise<PermisFVMAttributes>} Permis
     */
    PermisFVMDAO.prototype.getPermis = function (idPermis) {
        logger.trace("DAO get - Permis.Get");
        return this.modelDAO.permisFVMEntity.find({
            where: {
                idPermis: idPermis
            }
        });
    };
    /**
     * Méthode supprimant un permis de conduire
     * @param {number} idPermis id du tuple à supprimer
     * @returns {Promise<any>}
     */
    PermisFVMDAO.prototype.deletePermis = function (idPermis) {
        logger.trace("DAO delete - Permis.Delete");
        return this.modelDAO.permisFVMEntity.destroy({
            where: {
                idPermis: idPermis
            }
        });
    };
    return PermisFVMDAO;
}(entity_dao_1.EntityDAO));
exports.PermisFVMDAO = PermisFVMDAO;

//# sourceMappingURL=permis-dao.js.map
