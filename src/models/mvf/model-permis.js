"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.PermisMVFModel = {
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "ID_PERMIS_MVF",
        primaryKey: true,
        allowNull: false,
        unique: "permis_pkey"
    },
    "numPermis": {
        type: Sequelize.STRING,
        field: "num_permis",
        allowNull: false,
    },
    "idCopiePermis": {
        type: Sequelize.INTEGER,
        field: "ID_COPIE_PERMIS_MVF",
        allowNull: false
    },
    "idPersonne": {
        type: Sequelize.INTEGER,
        field: "ID_PERSONNE_MVF",
        allowNull: false,
        references: {
            model: "PersonneModelMVF",
            key: "ID_PERSONNE_MVF"
        }
    },
    "idDossier": {
        type: Sequelize.INTEGER,
        field: "ID_DOSSIER_MVF",
        allowNull: false,
        references: {
            model: "DossierModelMVF",
            key: "ID_DOSSIER_MVF"
        }
    }
};

//# sourceMappingURL=model-permis.js.map
