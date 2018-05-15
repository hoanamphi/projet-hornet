"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.CopieReleveFVMModel = {
    "idCopieReleve": {
        type: Sequelize.INTEGER,
        field: "id_releve_fvm",
        primaryKey: true,
        allowNull: false,
        unique: "copiereleve_pkey"
    },
    "nom": {
        type: Sequelize.STRING,
        field: "nom",
        allowNull: false
    },
    "mimetype": {
        type: Sequelize.STRING,
        field: "mimetype",
        allowNull: false
    },
    "encoding": {
        type: Sequelize.STRING,
        field: "encoding",
        allowNull: false
    },
    "size": {
        type: Sequelize.INTEGER,
        field: "size",
        allowNull: false
    },
    "data": {
        type: Sequelize.BLOB,
        field: "data",
        allowNull: false
    },
    "idReleve": {
        type: Sequelize.INTEGER,
        field: "id_releve_fvm",
        allowNull: false,
        references: {
            model: "ReleveFVMModel",
            key: "idReleve",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-copiereleve.js.map
