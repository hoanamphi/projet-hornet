"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.PersonneFVMModel = {
    "idPersonne": {
        type: Sequelize.INTEGER,
        field: "id_personne_fvm",
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
    "sexe": {
        type: Sequelize.STRING,
        field: "sexe",
        allowNull: false
    },
    "dateDeNaissance": {
        type: Sequelize.DATE,
        field: "date_de_naissance",
        allowNull: false
    },
    "villeDeNaissance": {
        type: Sequelize.STRING,
        field: "ville_de_naissance",
        allowNull: false
    },
    "paysDeNaissance": {
        type: Sequelize.STRING,
        field: "pays_de_naissance",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "id_permis_fvm",
        allowNull: false,
        references: {
            model: "PermisFVMModel",
            key: "idPersonne",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-personne.js.map
