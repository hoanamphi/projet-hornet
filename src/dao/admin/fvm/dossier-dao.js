"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de DAO
var entity_dao_1 = require("src/dao/entity-dao");
// Classe métier d'un dossier
var fvm_mod_1 = require("src/models/fvm/fvm-mod");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
/**
 * Classe de DAO permettant l'interaction avec la table dossier_fvm
 * @extends {EntityDAO}
 */
var DossierFVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(DossierFVMDAO, _super);
    /**
     * @constructor
     */
    function DossierFVMDAO() {
        return _super.call(this) || this;
    }
    /**
     * Méthode insérant un nouveau dossier dans la base
     * @param {number} idDossier id du nouveau tuple
     * @param {number} idCopieNoteVerbaleMAECI id de la copie de la note verbale du MAECI
     * @param {number} idPermis id du Permis auquel appartient l'entrée
     * @returns {Promise<number>} id du tuple créé
     */
    DossierFVMDAO.prototype.insererDossier = function (idDossier, idCopieNoteVerbaleMAECI, idPermis) {
        logger.trace("DAO inser - Dossier.Inser");
        return this.modelDAO.dossierFVMEntity.upsert({
            idDossier: idDossier,
            idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
            dateReceptionDossier: new Date(),
            idPermis: idPermis
        }).then(function () {
            return idDossier;
        });
    };
    /**
     * Méthode retournant un id unique pour chaque nouveau tuple
     * @returns {Promise<number>} id du nouveau tuple
     */
    DossierFVMDAO.prototype.getNewIdDossier = function () {
        var _this = this;
        logger.trace("DAO get - Dossier.GetNewId");
        // Compte le nombre de tuples dans la table
        return this.modelDAO.dossierFVMEntity.count().then(function (count) {
            // S'il y a déjà des tuples dans la table
            if (count > 0) {
                // Retourne l'id le plus grand
                return _this.modelDAO.dossierFVMEntity.max("idDossier");
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
     * Méthode retournant un dossier
     * @param {number} idDossier id du tuple à retourner
     * @returns {Promise<DossierFVMMetier>} Dossier
     */
    DossierFVMDAO.prototype.getDossier = function (idDossier) {
        logger.trace("DAO get - Dossier.Get");
        return this.modelDAO.dossierFVMEntity.find({
            where: {
                idDossier: idDossier
            }
        });
    };
    /**
     * Méthode retournant une liste de dossier
     * @param {Array<number>} idDossier tableau contenant les ids des tuples à retourner
     * @returns {Promise<Array<DossierFVMMetier>>} Liste de dossiers
     */
    DossierFVMDAO.prototype.getListeDossier = function (idDossier) {
        logger.trace("DAO get - Dossier.Get");
        return this.modelDAO.dossierFVMEntity.findAll({
            where: {
                idDossier: {
                    $in: idDossier
                }
            }
        });
    };
    /**
     * Méthode retournant l'id du dossier correspondant à un Permis
     * @param {number} idPermis id du Permis auquel appartient le tuple
     * @returns {Promise<number>} id du Dossier concerné
     */
    DossierFVMDAO.prototype.getIdDossierFromPermis = function (idPermis) {
        logger.trace("DAO get - Dossier.GetIdFromPermis");
        return this.modelDAO.dossierFVMEntity.find({
            attributes: [
                "idDossier"
            ],
            where: {
                idPermis: idPermis
            }
        });
    };
    /**
     * Méthode supprimant un dossier
     * @param {number} idDossier id du tuple à supprimer
     * @returns {Promise<any>}
     */
    DossierFVMDAO.prototype.deleteDossier = function (idDossier) {
        logger.trace("DAO delete - Dossier.Delete");
        return this.modelDAO.dossierFVMEntity.destroy({
            where: {
                idDossier: idDossier
            }
        });
    };
    tslib_1.__decorate([
        Map_1.default(fvm_mod_1.DossierFVMMetier),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", Promise)
    ], DossierFVMDAO.prototype, "getDossier", null);
    return DossierFVMDAO;
}(entity_dao_1.EntityDAO));
exports.DossierFVMDAO = DossierFVMDAO;

//# sourceMappingURL=dossier-dao.js.map
