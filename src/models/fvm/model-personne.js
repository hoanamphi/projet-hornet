"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.PersonneFVMModel = {
    "idPersonne": {
        type: Sequelize.INTEGER,
        field: "ID_PERSONNE_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "personne_pkey"
    },
    "nom": {
        type: Sequelize.STRING,
        field: "NOM",
        allowNull: false
    },
    "prenom": {
        type: Sequelize.STRING,
        field: "PRENOM",
        allowNull: false
    },
    "dateDeNaissance": {
        type: Sequelize.DATE,
        field: "DATE_DE_NAISSANCE",
        allowNull: false
    },
    "villeDeNaissance": {
        type: Sequelize.STRING,
        field: "VILLE_DE_NAISSANCE",
        allowNull: false
    },
    "paysDeNaissance": {
        type: Sequelize.STRING,
        field: "PAYS_DE_NAISSANCE",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "ID_PERMIS_FVM",
        allowNull: false,
        references: {
            model: "PermisFVMModel",
            key: "idPersonne"
        }
    }
};

//# sourceMappingURL=model-personne.js.map
