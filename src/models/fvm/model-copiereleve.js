"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.CopieReleveFVMModel = {
    "idCopieReleve": {
        type: Sequelize.INTEGER,
        field: "ID_RELEVE_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "copiereleve_pkey"
    },
    "nom": {
        type: Sequelize.STRING,
        field: "NOM",
        allowNull: false
    },
    "mimetype": {
        type: Sequelize.STRING,
        field: "MIMETYPE",
        allowNull: false
    },
    "encoding": {
        type: Sequelize.STRING,
        field: "ENCODING",
        allowNull: false
    },
    "size": {
        type: Sequelize.INTEGER,
        field: "SIZE",
        allowNull: false
    },
    "data": {
        type: Sequelize.BLOB,
        field: "DATA",
        allowNull: false
    },
    "idReleve": {
        type: Sequelize.INTEGER,
        field: "ID_RELEVE_FVM",
        allowNull: false,
        references: {
            model: "ReleveFVMModel",
            key: "idReleve"
        }
    }
};

//# sourceMappingURL=model-copiereleve.js.map
