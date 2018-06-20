"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
/**
 * Objet Sequelize définissant le modèle de la table valise
 * @type {Sequelize.DefineAttributes}
 */
exports.ValiseModel = {
    "numValise": {
        type: Sequelize.INTEGER,
        field: "num_valise",
        primaryKey: true,
        allowNull: false,
        unique: "valise_ pkey"
    },
    "dateValise": {
        type: Sequelize.DATE,
        field: "date_valise",
        allowNull: false
    }
};

//# sourceMappingURL=model-valise.js.map
