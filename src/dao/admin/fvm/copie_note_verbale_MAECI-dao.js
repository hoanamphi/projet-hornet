"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de DAO
var entity_dao_1 = require("src/dao/entity-dao");
// Classe métier de la copie d'une note verbale du MAECI
var fvm_mod_1 = require("src/models/fvm/fvm-mod");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
/**
 * Classe de DAO permettant l'interaction avec la table copie_note_verbale_maeci_fvm
 * @extends {EntityDAO}
 */
var CopieNoteVerbaleMAECIFVMDao = /** @class */ (function (_super) {
    tslib_1.__extends(CopieNoteVerbaleMAECIFVMDao, _super);
    /**
     * @constructor
     */
    function CopieNoteVerbaleMAECIFVMDao() {
        return _super.call(this) || this;
    }
    /**
     * Methode insérant une nouvelle copie d'une note verbale du MAECI dans la base
     * @param {number} idCopieNoteVerbaleMAECI id du nouveau tuple
     * @param {string} mimetype format du fichier
     * @param {string} encoding encodage du fichier
     * @param {number} size taille du fichier
     * @param {Buffer} data contenu du fichier
     * @param {number} idDossier id du Dossier auquel appartient cette entrée
     * @returns {Promise<number>} id du tuple créé
     */
    CopieNoteVerbaleMAECIFVMDao.prototype.insererCopieNoteVerbaleMAECI = function (idCopieNoteVerbaleMAECI, mimetype, encoding, size, data, idDossier) {
        logger.trace("DAO inser - CopieNoteVerbaleMAECIDAO.Inser");
        return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.upsert({
            idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
            nom: this.getNewNom(idCopieNoteVerbaleMAECI),
            mimetype: mimetype,
            encoding: encoding,
            size: size,
            data: data,
            idDossier: idDossier
        }).then(function () {
            return idCopieNoteVerbaleMAECI;
        });
    };
    /**
     * Méthode retournant un nom unique pour chaque nouveau tuple
     * @param {number} idCopieNoteVerbaleMAECI id du nouveau tuple
     * @returns {string} nom de l'entrée
     */
    CopieNoteVerbaleMAECIFVMDao.prototype.getNewNom = function (idCopieNoteVerbaleMAECI) {
        logger.trace("DAO get - CopieNoteVerbaleMAECIDAO.GetNewNom");
        // Le nouveau nom est au format : [Type de document][id du nouveau tuple][Date du jour]
        return ("copieNoteVerbaleMAECI" + idCopieNoteVerbaleMAECI + (new Date())).replace(/\s+/g, "_");
    };
    /**
     * Méthode retournant un id unique pour chaque nouveau tuple
     * @returns {Promise<number>} id du nouveau tuple
     */
    CopieNoteVerbaleMAECIFVMDao.prototype.getNewIdCopieNoteVerbaleMAECI = function () {
        var _this = this;
        logger.trace("DAO get - CopieNoteVerbaleMAECIDAO.GetNewId");
        // Compte le nombre de tuples dans la table
        return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.count().then(function (count) {
            // Si il y a déjà des tuples dans la table
            if (count > 0) {
                // Retourne l'id le plus grand
                return _this.modelDAO.copieNoteVerbaleMAECIFVMEntity.max("idCopieNoteVerbaleMAECI");
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
     * Méthode retournant une copie d'une note verbale du MAECI
     * @param {number} idCopieNoteVerbaleMAECI id du tuple à retourner
     * @returns {Promise<CopieNoteVerbaleMAECIFVMMetier>} Copie d'une note verbale du MAECI
     */
    CopieNoteVerbaleMAECIFVMDao.prototype.getCopieNoteVerbaleMAECI = function (idCopieNoteVerbaleMAECI) {
        logger.trace("DAO get - CopieNoteVerbaleMAECIDAO.Get");
        return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.find({
            where: {
                idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI
            }
        });
    };
    /**
     * Méthode supprimant une copie d'une note verbale du MAECI
     * @param {number} idDossier id du Dossier auquel appartient le tuple
     * @returns {Promise<any>}
     */
    CopieNoteVerbaleMAECIFVMDao.prototype.deleteCopieNoteVerbaleMAECIFromDossier = function (idDossier) {
        logger.trace("DAO delete - CopieNoteVerbaleMAECIDAO.Delete");
        return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.destroy({
            where: {
                idDossier: idDossier
            }
        });
    };
    tslib_1.__decorate([
        Map_1.default(fvm_mod_1.CopieNoteVerbaleMAECIFVMMetier),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CopieNoteVerbaleMAECIFVMDao.prototype, "getCopieNoteVerbaleMAECI", null);
    return CopieNoteVerbaleMAECIFVMDao;
}(entity_dao_1.EntityDAO));
exports.CopieNoteVerbaleMAECIFVMDao = CopieNoteVerbaleMAECIFVMDao;

//# sourceMappingURL=copie_note_verbale_MAECI-dao.js.map
