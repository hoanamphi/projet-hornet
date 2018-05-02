"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.ReleveFVMModel = {
    "idReleve": {
        type: Sequelize.INTEGER,
        field: "ID_RELEVE_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "releve_pkey"
    },
    "idCopieReleve": {
        type: Sequelize.INTEGER,
        field: "ID_COPIE_RELEVE_FVM",
        allowNull: false,
        references: {
            model: "CopieReleveFVMModel",
            key: "idCopieReleve"
        }
    },
    "idCopieCourrierPrefecture": {
        type: Sequelize.INTEGER,
        field: "ID_COPIE_COURRIER_PREFECTURE_FVM",
        allowNull: false,
        references: {
            model: "CopieCourrierPrefectureFVMModel",
            key: "idCopieCourrierPrefecture"
        }
    },
    "dateReceptionReleve": {
        type: Sequelize.DATE,
        field: "DATE_RECEPTION_RELEVE",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "ID_PERMIS_FVM",
        allowNull: false,
        references: {
            model: "PermisFVMModel",
            key: "idPermis"
        }
    }
};

//# sourceMappingURL=model-releve.js.map
