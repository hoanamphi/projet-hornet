"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de DAO
var entity_dao_1 = require("src/dao/entity-dao");
// Classe métier d'une préfecture
var common_mod_1 = require("src/models/common-mod");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
/**
 * Méthode permettant l'interaction avec la table prefecture
 * @extends {EntityDAO}
 */
var PrefectureDAO = /** @class */ (function (_super) {
    tslib_1.__extends(PrefectureDAO, _super);
    /**
     * @constructor
     */
    function PrefectureDAO() {
        return _super.call(this) || this;
    }
    /**
     * Méthode retournant la liste des préfectures stockées dans la base
     * @returns {Promise<Array<any>>} Liste des préfectures stockées dans la base
     */
    PrefectureDAO.prototype.getListePrefecture = function () {
        logger.trace("DAO get - Prefecture.GetListe");
        return this.modelDAO.prefectureEntity.findAll({
            attributes: ["idPrefecture", "prefecture"]
        });
    };
    /**
     * Méthode retournant une préfecture
     * @param {number} idPrefecture id du tuple à retourner
     * @returns {Promise<PrefectureMetier>} Préfecture
     */
    PrefectureDAO.prototype.getPrefecture = function (idPrefecture) {
        logger.trace("DAO get - Prefecture.Get");
        return this.modelDAO.prefectureEntity.find({
            where: {
                idPrefecture: idPrefecture
            }
        });
    };
    tslib_1.__decorate([
        Map_1.default(common_mod_1.PrefectureMetier),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Promise)
    ], PrefectureDAO.prototype, "getListePrefecture", null);
    tslib_1.__decorate([
        Map_1.default(common_mod_1.PrefectureMetier),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", Promise)
    ], PrefectureDAO.prototype, "getPrefecture", null);
    return PrefectureDAO;
}(entity_dao_1.EntityDAO));
exports.PrefectureDAO = PrefectureDAO;
//# sourceMappingURL=prefecture-dao.js.map