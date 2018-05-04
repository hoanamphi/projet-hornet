"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.NoteVerbaleFVMModel = {
    "idNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "id_note_verbale_fvm",
        primaryKey: true,
        allowNull: false,
        unique: "noteverbale_pkey"
    },
    "numNoteVerbale": {
        type: Sequelize.INTEGER,
        field: "num_note_verbale",
        allowNull: false
    },
    "dateEnvoiDeLaReponseAuMAECI": {
        type: Sequelize.DATE,
        field: "date_envoi_de_la_reponse_au_maeci",
        allowNull: false
    }
};

//# sourceMappingURL=model-noteverbale.js.map
