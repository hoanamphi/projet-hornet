"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.BordereauAttestationMVFModel = {
    "idBordereauAttestation": {
        type: Sequelize.INTEGER,
        field: "ID_BORDEREAU_ATTESTATION_MVF",
        primaryKey: true,
        allowNull: false,
        unique: "bordereau_attestation_pkey"
    },
    "idAttestation": {
        type: Sequelize.INTEGER,
        field: "ID_ATTESTATION_MVF",
        allowNull: false,
        references: {
            model: "AttestationMVFModel",
            key: "idAttestation"
        }
    },
    "idBordereau": {
        type: Sequelize.INTEGER,
        field: "ID_BORDEREAU_MVF",
        allowNull: false,
        references: {
            model: "BordereauMVFModel",
            key: "idBordereau"
        }
    }
};
//# sourceMappingURL=model-bordereau-attestation.js.map