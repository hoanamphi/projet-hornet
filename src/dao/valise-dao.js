"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var ValiseDAO = /** @class */ (function (_super) {
    tslib_1.__extends(ValiseDAO, _super);
    function ValiseDAO() {
        return _super.call(this) || this;
    }
    ValiseDAO.prototype.insererValise = function (numValise, dateValise) {
        return this.modelDAO.valiseEntity.create({
            numValise: numValise,
            dateValise: dateValise
        }).then(function (result) {
            return Promise.resolve(numValise);
        });
    };
    ValiseDAO.prototype.getListeValise = function () {
        return this.modelDAO.valiseEntity.findAll({
            attributes: ["numValise", "dateValise"],
            where: {
                dateValise: {
                    $gt: (new Date()).setDate((new Date()).getDate() + 1)
                }
            }
        });
    };
    ValiseDAO.prototype.getValise = function (numValise) {
        return this.modelDAO.valiseEntity.findAll({
            where: {
                numValise: numValise
            }
        });
    };
    return ValiseDAO;
}(entity_dao_1.EntityDAO));
exports.ValiseDAO = ValiseDAO;

//# sourceMappingURL=valise-dao.js.map
