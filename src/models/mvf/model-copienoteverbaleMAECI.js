"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.CopieNoteVerbaleMAECIMVFModel = {
    "idCopieNoteVerbaleMAECI": {
        type: Sequelize.INTEGER,
        field: "ID_COPIE_NOTE_VERBALE_MAECI_MVF",
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
    "idAttestation": {
        type: Sequelize.INTEGER,
        field: "ID_ATTESTATION_MVF",
        allowNull: false,
        references: {
            model: "AttestationMVFModel",
            key: "idAttestation"
        }
    }
};
//# sourceMappingURL=model-copienoteverbaleMAECI.js.map