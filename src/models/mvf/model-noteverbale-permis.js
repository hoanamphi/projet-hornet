"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.NoteVerbalePermisMVFModel = {
    "idNoteVerbalePermis": {
        type: Sequelize.INTEGER,
        field: "ID_NOTE_VERBALE_PERMIS_MVF",
        primaryKey: true,
        allowNull: false,
        unique: "noteverbale_permis_pkey"
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "ID_PERMIS_MVF",
        allowNull: false,
        references: {
            model: "PermisMVFModel",
            key: "idPermis"
        }
    },
    "idNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "ID_NOTE_VERBALE_MVF",
        allowNull: false,
        references: {
            model: "NoteVerbaleMVFModel",
            key: "idNoteVerbale"
        }
    }
};
//# sourceMappingURL=model-noteverbale-permis.js.map