"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.NoteVerbalePermisMVFModel = {
    "idNoteVerbalePermis": {
        type: Sequelize.INTEGER,
        field: "id_note_verbale_permis_mvf",
        primaryKey: true,
        allowNull: false,
        unique: "noteverbale_permis_pkey"
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
    },
    "idNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "id_note_verbale_mvf",
        allowNull: false,
        references: {
            model: "NoteVerbaleMVFModel",
            key: "idNoteVerbale",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-noteverbale-permis.js.map
