"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var PrefectureDAO = /** @class */ (function (_super) {
    tslib_1.__extends(PrefectureDAO, _super);
    function PrefectureDAO() {
        return _super.call(this) || this;
    }
    PrefectureDAO.prototype.getListePrefecture = function () {
        return this.modelDAO.prefectureEntity.findAll({
            attributes: ["idPrefecture", "prefecture"]
        });
    };
    return PrefectureDAO;
}(entity_dao_1.EntityDAO));
exports.PrefectureDAO = PrefectureDAO;

//# sourceMappingURL=prefecture-dao.js.map
