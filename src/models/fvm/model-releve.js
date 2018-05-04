"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.ReleveFVMModel = {
    "idReleve": {
        type: Sequelize.INTEGER,
        field: "id_releve_fvm",
        primaryKey: true,
        allowNull: false,
        unique: "releve_pkey"
    },
    "idCopieReleve": {
        type: Sequelize.INTEGER,
        field: "id_copie_releve_fvm",
        allowNull: false,
        references: {
            model: "CopieReleveFVMModel",
            key: "idCopieReleve"
        }
    },
    "idCopieCourrierPrefecture": {
        type: Sequelize.INTEGER,
        field: "id_copie_courrier_prefecture_fvm",
        allowNull: false,
        references: {
            model: "CopieCourrierPrefectureFVMModel",
            key: "idCopieCourrierPrefecture"
        }
    },
    "dateReceptionReleve": {
        type: Sequelize.DATE,
        field: "date_reception_releve",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "id_permis_fvm",
        allowNull: false,
        references: {
            model: "PermisFVMModel",
            key: "idPermis"
        }
    }
};

//# sourceMappingURL=model-releve.js.map
