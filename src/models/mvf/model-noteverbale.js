"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.NoteVerbaleMVFModel = {
    "idNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "id_note_verbale_mvf",
        primaryKey: true,
        allowNull: false,
        unique: "noteverbale_pkey"
    },
    "numNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "num_note_verbale",
        allowNull: false
    },
    "dateDuTraitement": {
        type: Sequelize.DATE,
        field: "date_du_traitement",
        allowNull: false
    }
};

//# sourceMappingURL=model-noteverbale.js.map
