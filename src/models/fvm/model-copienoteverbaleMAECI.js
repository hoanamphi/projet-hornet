"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.CopieNoteVerbaleMAECIFVMModel = {
    "idCopieNoteVerbaleMAECI": {
        type: Sequelize.INTEGER,
        field: "ID_COPIE_NOTE_VERBALE_MAECI_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "copienote_pkey"
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
        field: "ID_DOSSIER_FVM",
        allowNull: false,
        references: {
            model: "DossierFVMModel",
            key: "idDossier"
        }
    }
};
//# sourceMappingURL=model-copienoteverbaleMAECI.js.map