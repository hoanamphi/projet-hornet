"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parents des Classes de DAO
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.valise-dao");
/**
 * Classe de DAO permettant d'interagir avec la table valise
 * @extends {EntityDAO}
 */
var ValiseDAO = /** @class */ (function (_super) {
    tslib_1.__extends(ValiseDAO, _super);
    /**
     * @constructor
     */
    function ValiseDAO() {
        return _super.call(this) || this;
    }
    /**
     * Méthode insérant une nouvelle valise diplomatique dans la base
     * @param {number} numValise numéro de la valise diplomatique
     * @param {Date} dateValise date de départ du Maroc de la valise diplomatique
     * @returns {Promise<number>} numéro de la valise créée
     */
    ValiseDAO.prototype.insererValise = function (numValise, dateValise) {
        logger.trace("DAO inser - Valise.Inser");
        return this.modelDAO.valiseEntity.create({
            numValise: numValise,
            dateValise: dateValise
        }).then(function () {
            return numValise;
        });
    };
    /**
     * Méthode retournant la liste des valises diplomatiques stockées dans la base
     * @returns {Promise<Array<ValiseAttributes>>} Liste des valises diplomatiques stockées dans la base
     */
    ValiseDAO.prototype.getListeValise = function () {
        logger.trace("DAO get - Valise.GetListe");
        return this.modelDAO.valiseEntity.findAll();
    };
    /**
     * Méthode retournant la liste des valises diplomatiques récentes stockées dans la base
     * @returns {Promise<Array<ValiseAttributes>>} Liste des valises diplomatiques récentes stockées dans la base (Date de la valise > Date du jour + 1)
     */
    ValiseDAO.prototype.getListeValiseRecent = function () {
        logger.trace("DAO get - Valise.GetListeRecent");
        return this.modelDAO.valiseEntity.findAll({
            where: {
                dateValise: {
                    // dateValise > Date du jour + 1
                    $gt: (new Date()).setDate((new Date()).getDate() + 1)
                }
            }
        });
    };
    /**
     * Méthode retournant une valise diplomatique
     * @param {number} numValise numéro de la valise diplomatique à retourner
     * @returns {Promise<ValiseAttributes>} Valise
     */
    ValiseDAO.prototype.getValise = function (numValise) {
        logger.trace("DAO get - Valise.Get");
        return this.modelDAO.valiseEntity.find({
            where: {
                numValise: numValise
            }
        });
    };
    return ValiseDAO;
}(entity_dao_1.EntityDAO));
exports.ValiseDAO = ValiseDAO;

//# sourceMappingURL=valise-dao.js.map
