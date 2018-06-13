"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
/**
 * Objet Sequelize définissant le modèle de la table prefecture
 * @type {Sequelize.DefineAttributes}
 */
exports.PrefectureModel = {
    "idPrefecture": {
        type: Sequelize.INTEGER,
        field: "id_prefecture",
        primaryKey: true,
        allowNull: false,
        unique: "prefecture_pkey"
    },
    "region": {
        type: Sequelize.STRING,
        field: "region",
        allowNull: false
    },
    "departement": {
        type: Sequelize.STRING,
        field: "departement",
        allowNull: false
    },
    "prefecture": {
        type: Sequelize.STRING,
        field: "prefecture",
        allowNull: false
    },
    "adresse": {
        type: Sequelize.STRING,
        field: "adresse",
        allowNull: false
    },
    "codePostal": {
        type: Sequelize.INTEGER,
        field: "code_postal",
        allowNull: false
    },
    "ville": {
        type: Sequelize.STRING,
        field: "ville",
        allowNull: false
    }
};

//# sourceMappingURL=model-prefecture.js.map
