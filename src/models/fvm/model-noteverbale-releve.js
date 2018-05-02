"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.NoteVerbaleReleveFVMModel = {
    "idNoteVerbaleReleve": {
        type: Sequelize.INTEGER,
        field: "ID_NOTE_VERBALE_RELEVE_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "noteverbale_releve_pkey"
    },
    "idReleve": {
        type: Sequelize.INTEGER,
        field: "ID_RELEVE_FVM",
        allowNull: false,
        references: {
            model: "ReleveFVMModel",
            key: "idReleve"
        }
    },
    "idNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "ID_NOTE_VERBALE_FVM",
        allowNull: false,
        references: {
            model: "NoteVerbaleFVMModel",
            key: "idNoteVerbale"
        }
    }
};

//# sourceMappingURL=model-noteverbale-releve.js.map
