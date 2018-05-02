"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.DemandeAuthentificationFVMModel = {
    "idDemandeAuthentification": {
        type: Sequelize.INTEGER,
        field: "ID_DEMANDE_AUTHENTIFICATION_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "demandeauthentification_pkey"
    },
    "numDemandeAuthentification": {
        type: Sequelize.STRING,
        field: "NUM_DEMANDE_AUTHENTIFICATION",
        allowNull: false
    },
    "dateDuTraitement": {
        type: Sequelize.DATE,
        field: "DATE_DU_TRAITEMENT",
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
    },
    "numValise": {
        type: Sequelize.INTEGER,
        field: "NUM_VALISE",
        allowNull: false,
        references: {
            model: "ValiseModel",
            key: "numValise"
        }
    }
};

//# sourceMappingURL=model-demandeauthentification.js.map
