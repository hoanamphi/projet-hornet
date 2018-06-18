"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de DAO
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.admin.fvm.copie_permis-dao");
/**
 * Classe de DAO permettant l'interaction avec la table copie_permis_fvm
 * @extends {EntityDAO}
 */
var CopiePermisFVMDao = /** @class */ (function (_super) {
    tslib_1.__extends(CopiePermisFVMDao, _super);
    /**
     * @constructor
     */
    function CopiePermisFVMDao() {
        return _super.call(this) || this;
    }
    /**
     * Méthode insérant une nouvelle copie d'un permis de conduire dans la base
     * @param {number} idCopiePermis id du nouveau tuple
     * @param {string} mimetype format du fichier
     * @param {string} encoding encodage du fichier
     * @param {number} size taille du fichier
     * @param {Buffer} data contenu du fichier
     * @param {number} idPermis id du Permis auquel appartient l'entrée
     * @returns {Promise<number>} id du tuple créé
     */
    CopiePermisFVMDao.prototype.insererCopiePermis = function (idCopiePermis, mimetype, encoding, size, data, idPermis) {
        logger.trace("DAO inser - CopiePermis.Inser");
        return this.modelDAO.copiePermisFVMEntity.upsert({
            idCopiePermis: idCopiePermis,
            nom: this.getNewNom(idCopiePermis),
            mimetype: mimetype,
            encoding: encoding,
            size: size,
            data: data,
            idPermis: idPermis
        }).then(function () {
            return idCopiePermis;
        });
    };
    /**
     * Méthode retournant un nom unique pour chaque nouveau tuple
     * @param {number} idCopiePermis id du nouveau tuple
     * @returns {string} nom de l'entrée
     */
    CopiePermisFVMDao.prototype.getNewNom = function (idCopiePermis) {
        logger.trace("DAO get - CopiePermis.GetNewNom");
        // Le nouveau nom est au format : [Type de document][id du nouveau tuple][Date du jour]
        return ("copiePermis" + idCopiePermis + (new Date())).replace(/\s+/g, "_");
    };
    /**
     * Méthode retournant un id unique pour chaque nouveau tuple
     * @returns {Promise<number>} id du nouveau tuple
     */
    CopiePermisFVMDao.prototype.getNewIdCopiePermis = function () {
        var _this = this;
        logger.trace("DAO get - CopiePermis.GetNewId");
        // Compte le nombre de tuples dans la table
        return this.modelDAO.copiePermisFVMEntity.count().then(function (count) {
            // S'il y a déjà des tuples dans la table
            if (count > 0) {
                //Retourne l'id le plus grand
                return _this.modelDAO.copiePermisFVMEntity.max("idCopiePermis");
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
     * Méthode retournant une copie d'un permis de conduire
     * @param {number} idCopiePermis id du tuple à retourner
     * @returns {Promise<CopiePermisFVMAttributes>} Copie d'un permis de conduire
     */
    CopiePermisFVMDao.prototype.getCopiePermis = function (idCopiePermis) {
        logger.trace("DAO get - CopiePermis.Get");
        return this.modelDAO.copiePermisFVMEntity.find({
            where: {
                idCopiePermis: idCopiePermis
            }
        });
    };
    /**
     * Méthode supprimant une copie d'un permis de conduire
     * @param {number} idPermis id du Permis auquel appartient le tuple
     * @returns {Promise<any>}
     */
    CopiePermisFVMDao.prototype.deleteCopiePermisFromPermis = function (idPermis) {
        logger.trace("DAO delete - CopiePermis.Delete");
        return this.modelDAO.copiePermisFVMEntity.destroy({
            where: {
                idPermis: idPermis
            }
        });
    };
    return CopiePermisFVMDao;
}(entity_dao_1.EntityDAO));
exports.CopiePermisFVMDao = CopiePermisFVMDao;

//# sourceMappingURL=copie_permis-dao.js.map
