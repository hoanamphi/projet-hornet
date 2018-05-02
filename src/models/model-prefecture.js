"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.PrefectureModel = {
    "codePrefecture": {
        type: Sequelize.INTEGER,
        field: "code_prefecture",
        primaryKey: true,
        allowNull: false,
        unique: "role_pkey"
    },
    "Region": {
        type: Sequelize.STRING,
        field: "region",
        allowNull: false
    },
    "Departement": {
        type: Sequelize.STRING,
        field: "departement",
        allowNull: false
    },
    "Prefecture": {
        type: Sequelize.STRING,
        field: "prefecture",
        allowNull: false
    },
    "Adresse": {
        type: Sequelize.STRING,
        field: "adresse",
        allowNull: false
    },
    "codePostal": {
        type: Sequelize.INTEGER,
        field: "code_postal",
        allowNull: false
    },
    "Ville": {
        type: Sequelize.STRING,
        field: "ville",
        allowNull: false
    }
};

//# sourceMappingURL=model-prefecture.js.map
