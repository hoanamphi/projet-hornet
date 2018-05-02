"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.ValiseModel = {
    "numValise": {
        type: Sequelize.INTEGER,
        field: "NUM_VALISE",
        primaryKey: true,
        allowNull: false,
        unique: "valise_ pkey"
    },
    "dateValise": {
        type: Sequelize.DATE,
        field: "DATE_VALISE",
        allowNull: false
    }
};
//# sourceMappingURL=model-valise.js.map