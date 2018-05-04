"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.CopieAttestationMVFModel = {
    "idCopieAttestation": {
        type: Sequelize.INTEGER,
        field: "id_copie_attestation_mvf",
        primaryKey: true,
        allowNull: false,
        unique: "copieattestation_pkey"
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

//# sourceMappingURL=model-copieattestation.js.map
