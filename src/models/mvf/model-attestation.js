"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.AttestationMVFModel = {
    "idAttestation": {
        type: Sequelize.INTEGER,
        field: "id_attestation_mvf",
        primaryKey: true,
        allowNull: false,
        unique: "attestation_pkey"
    },
    "idCopieAttestation": {
        type: Sequelize.INTEGER,
        field: "id_copie_attestation_mvf",
        allowNull: false,
        references: {
            model: "CopieAttestationMVFModel",
            key: "idCopieAttestation",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    },
    "idCopieNoteVerbaleMAECI": {
        type: Sequelize.INTEGER,
        field: "id_copie_note_verbale_maeci_mvf",
        allowNull: false,
        references: {
            model: "CopieNoteVerbaleMAECIMVFModel",
            key: "idCopieNoteVerbaleMAECI",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    },
    "dateReceptionAttestation": {
        type: Sequelize.DATE,
        field: "date_reception_attestation",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "id_permis_mvf",
        allowNull: false,
        references: {
            model: "PermisMVFModel",
            key: "idPermis",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-attestation.js.map
