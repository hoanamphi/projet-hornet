"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.NoteVerbaleMVFModel = {
    "idNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "ID_NOTE_VERBALE_MVF",
        primaryKey: true,
        allowNull: false,
        unique: "noteverbale_pkey"
    },
    "numNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "NUM_NOTE_VERBALE",
        allowNull: false
    },
    "dateDuTraitement": {
        type: Sequelize.DATE,
        field: "DATE_DU_TRAITEMENT",
        allowNull: false
    }
};
//# sourceMappingURL=model-noteverbale.js.map