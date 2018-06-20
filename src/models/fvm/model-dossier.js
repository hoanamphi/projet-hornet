"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
/**
 * Objet Sequelize définissant le modèle de la table dossier_fvm
 * @type {Sequelize.DefineAttributes}
 */
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
    },
    "dateReceptionDossier": {
        type: Sequelize.DATE,
        field: "date_reception_dossier",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "id_permis_fvm",
        allowNull: true,
        references: {
            model: "PermisFVMModel",
            key: "idPermis",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-dossier.js.map
