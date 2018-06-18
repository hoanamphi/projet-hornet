"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de DAO
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.prefecture-dao");
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
     * @returns {Promise<Array<{idPrefecture: number, prefecture: string}>>} Liste des préfectures stockées dans la base
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
     * @returns {Promise<PrefectureAttributes>} Préfecture
     */
    PrefectureDAO.prototype.getPrefecture = function (idPrefecture) {
        logger.trace("DAO get - Prefecture.Get");
        return this.modelDAO.prefectureEntity.find({
            where: {
                idPrefecture: idPrefecture
            }
        });
    };
    return PrefectureDAO;
}(entity_dao_1.EntityDAO));
exports.PrefectureDAO = PrefectureDAO;

//# sourceMappingURL=prefecture-dao.js.map
