"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.PermisModel = {
    "numPermis": {
        type: Sequelize.STRING(9),
        field: "num_permis",
        primaryKey: true,
        allowNull: false,
        unique: "role_pkey"
    },
    "idPersonne": {
        type: Sequelize.INTEGER,
        field: "id_personne",
        allowNull: false,
        references: {
            model: "PersonneModel",
            key: "idPersonne"
        }
    },
    "numDossier": {
        type: Sequelize.INTEGER,
        field: "num_dossier",
        allowNull: false,
        references: {
            model: "DossierModel",
            key: "numDossier"
        }
    }
};

//# sourceMappingURL=model-permis.js.map
