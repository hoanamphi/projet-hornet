"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.BordereauAttestationMVFModel = {
    "idBordereauAttestation": {
        type: Sequelize.INTEGER,
        field: "id_bordereau_attestation_mvf",
        primaryKey: true,
        allowNull: false,
        unique: "bordereau_attestation_pkey"
    },
    "idAttestation": {
        type: Sequelize.INTEGER,
        field: "id_attestation_mvf",
        allowNull: false,
        references: {
            model: "AttestationMVFModel",
            key: "idAttestation"
        }
    },
    "idBordereau": {
        type: Sequelize.INTEGER,
        field: "id_bordereau_mvf",
        allowNull: false,
        references: {
            model: "BordereauMVFModel",
            key: "idBordereau"
        }
    }
};

//# sourceMappingURL=model-bordereau-attestation.js.map
