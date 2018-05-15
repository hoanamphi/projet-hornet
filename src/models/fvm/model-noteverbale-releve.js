"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.NoteVerbaleReleveFVMModel = {
    "idNoteVerbaleReleve": {
        type: Sequelize.INTEGER,
        field: "id_note_verbale_releve_fvm",
        primaryKey: true,
        allowNull: false,
        unique: "noteverbale_releve_pkey"
    },
    "idReleve": {
        type: Sequelize.INTEGER,
        field: "id_releve_fvm",
        allowNull: false,
        references: {
            model: "ReleveFVMModel",
            key: "idReleve",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    },
    "idNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "id_note_verbale_fvm",
        allowNull: false,
        references: {
            model: "NoteVerbaleFVMModel",
            key: "idNoteVerbale",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-noteverbale-releve.js.map
