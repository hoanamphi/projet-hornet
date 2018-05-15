"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.DossierFVMModel = {
    "idDossier": {
        type: Sequelize.INTEGER,
        field: "id_dossier_fvm",
        primaryKey: true,
        allowNull: false,
        unique: "dossier_pkey"
    },
    "idCopieNoteVerbaleMAECI": {
        type: Sequelize.INTEGER,
        field: "id_copie_note_verbale_maeci_fvm",
        allowNull: false,
        references: {
            model: "CopieNoteVerbaleMAECIFVMModel",
            key: "idCopieNoteVerbaleMAECI",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    },
    "dateReceptionDossier": {
        type: Sequelize.DATE,
        field: "date_reception_dossier",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "id_permis_fvm",
        allowNull: false,
        references: {
            model: "PermisFVMModel",
            key: "idPermis",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-dossier.js.map
