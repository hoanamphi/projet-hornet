"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.PrefectureModel = {
    "idPrefecture": {
        type: Sequelize.INTEGER,
        field: "ID_PREFECTURE",
        primaryKey: true,
        allowNull: false,
        unique: "prefecture_pkey"
    },
    "region": {
        type: Sequelize.STRING,
        field: "REGION",
        allowNull: false
    },
    "departement": {
        type: Sequelize.STRING,
        field: "DEPARTEMENT",
        allowNull: false
    },
    "prefecture": {
        type: Sequelize.STRING,
        field: "PREFECTURE",
        allowNull: false
    },
    "adresse": {
        type: Sequelize.STRING,
        field: "ADRESSE",
        allowNull: false
    },
    "codePostal": {
        type: Sequelize.INTEGER,
        field: "CODE_POSTAL",
        allowNull: false
    },
    "ville": {
        type: Sequelize.STRING,
        field: "VILLE",
        allowNull: false
    }
};
//# sourceMappingURL=model-prefecture.js.map