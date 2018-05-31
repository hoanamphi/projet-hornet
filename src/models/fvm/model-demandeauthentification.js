"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.DemandeAuthentificationFVMModel = {
    "idDemandeAuthentification": {
        type: Sequelize.INTEGER,
        field: "id_demande_authentification_fvm",
        primaryKey: true,
        allowNull: false,
        unique: "demandeauthentification_pkey"
    },
    "numDemandeAuthentification": {
        type: Sequelize.STRING,
        field: "num_demande_authentification",
        allowNull: false
    },
    "dateDeCreation": {
        type: Sequelize.DATE,
        field: "date_de_creation",
        allowNull: false
    },
    "dateDuTraitement": {
        type: Sequelize.DATE,
        field: "date_du_traitement",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "id_permis_fvm",
        allowNull: false,
        references: {
            model: "PermisFVMModel",
            key: "idPermis",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    },
    "numValise": {
        type: Sequelize.INTEGER,
        field: "num_valise",
        allowNull: false,
        references: {
            model: "ValiseModel",
            key: "numValise",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-demandeauthentification.js.map
