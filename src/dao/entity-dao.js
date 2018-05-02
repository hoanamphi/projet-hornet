"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var injectable_1 = require("hornet-js-core/src/inject/injectable");
var hornet_sequelize_entity_1 = require("hornet-js-database/src/sequelize/hornet-sequelize-entity");
var inject_1 = require("hornet-js-core/src/inject/inject");
var model_dao_1 = require("src/dao/model-dao");
var EntityDAO = /** @class */ (function (_super) {
    tslib_1.__extends(EntityDAO, _super);
    function EntityDAO(modelDAO) {
        return _super.call(this, modelDAO) || this;
    }
    EntityDAO = tslib_1.__decorate([
        injectable_1.injectable(),
        tslib_1.__param(0, inject_1.inject(model_dao_1.ModelDAO)),
        tslib_1.__metadata("design:paramtypes", [model_dao_1.ModelDAO])
    ], EntityDAO);
    return EntityDAO;
}(hornet_sequelize_entity_1.HornetSequelizeEntity));
exports.EntityDAO = EntityDAO;
//# sourceMappingURL=entity-dao.js.map