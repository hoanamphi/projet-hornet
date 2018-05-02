"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.CopieDemandePrefectureMVFModel = {
    "idCopieDemandePrefecture": {
        type: Sequelize.INTEGER,
        field: "ID_COPIE_DEMANDE_PREFECTURE_MVF",
        primaryKey: true,
        allowNull: false,
        unique: "copiedemande_pkey"
    },
    "nom": {
        type: Sequelize.STRING,
        field: "NOM",
        allowNull: false
    },
    "mimetype": {
        type: Sequelize.STRING,
        field: "MIMETYPE",
        allowNull: false
    },
    "encoding": {
        type: Sequelize.STRING,
        field: "ENCODING",
        allowNull: false
    },
    "size": {
        type: Sequelize.INTEGER,
        field: "SIZE",
        allowNull: false
    },
    "data": {
        type: Sequelize.BLOB,
        field: "DATA",
        allowNull: false
    },
    "idDossier": {
        type: Sequelize.INTEGER,
        field: "ID_DOSSIER_MVF",
        allowNull: false,
        references: {
            model: "DossierMVFModel",
            key: "idDossier"
        }
    }
};
//# sourceMappingURL=model-copiedemandeprefecture.js.map