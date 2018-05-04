"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.CopieNoteVerbaleMAECIMVFModel = {
    "idCopieNoteVerbaleMAECI": {
        type: Sequelize.INTEGER,
        field: "id_copie_note_verbale_maeci_mvf",
        primaryKey: true,
        allowNull: false,
        unique: "copienote_pkey"
    },
    "nom": {
        type: Sequelize.STRING,
        field: "nom",
        allowNull: false
    },
    "mimetype": {
        type: Sequelize.STRING,
        field: "mimetype",
        allowNull: false
    },
    "encoding": {
        type: Sequelize.STRING,
        field: "encoding",
        allowNull: false
    },
    "size": {
        type: Sequelize.INTEGER,
        field: "size",
        allowNull: false
    },
    "data": {
        type: Sequelize.BLOB,
        field: "data",
        allowNull: false
    },
    "idAttestation": {
        type: Sequelize.INTEGER,
        field: "id_attestation_mvf",
        allowNull: false,
        references: {
            model: "AttestationMVFModel",
            key: "idAttestation"
        }
    }
};

//# sourceMappingURL=model-copienoteverbaleMAECI.js.map
