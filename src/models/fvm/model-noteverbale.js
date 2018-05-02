"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.NoteVerbaleFVMModel = {
    "idNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "ID_NOTE_VERBALE_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "noteverbale_pkey"
    },
    "numNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "NUM_NOTE_VERBALE",
        allowNull: false
    },
    "dateEnvoiDeLaReponseAuMAECI": {
        type: Sequelize.DATE,
        field: "DATE_ENVOI_DE_LA_REPONSE_AU_MAECI",
        allowNull: false
    }
};
//# sourceMappingURL=model-noteverbale.js.map