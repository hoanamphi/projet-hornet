"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.PersonneModel = {
    "idPersonne": {
        type: Sequelize.INTEGER,
        field: "id_personne",
        primaryKey: true,
        allowNull: false,
        unique: "role_pkey"
    },
    "nomPersonne": {
        type: Sequelize.STRING,
        field: "nom",
        allowNull: false
    },
    "prenomPersonne": {
        type: Sequelize.STRING,
        field: "prenom",
        allowNull: false
    },
    "dateDeNaissance": {
        type: Sequelize.DATE,
        field: "date_de_naissance",
        allowNull: false
    },
    "numPermis": {
        type: Sequelize.STRING(9),
        field: "num_permis",
        allowNull: false,
        references: {
            model: "PermisModel",
            key: "numPermis"
        }
    }
};

//# sourceMappingURL=model-personne.js.map
