"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.PersonneMVFModel = {
    "idPersonne": {
        type: Sequelize.INTEGER,
        field: "id_personne_mvf",
        primaryKey: true,
        allowNull: false,
        unique: "personne_pkey"
    },
    "nom": {
        type: Sequelize.STRING,
        field: "nom",
        allowNull: false
    },
    "prenom": {
        type: Sequelize.STRING,
        field: "prenom",
        allowNull: false
    },
    "dateDeNaissance": {
        type: Sequelize.DATE,
        field: "date_de_naissance",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "id_permis_mvf",
        allowNull: false,
        references: {
            model: "PermisMVFModel",
            key: "idPersonne",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-personne.js.map
