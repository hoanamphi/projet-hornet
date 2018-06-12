"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
/**
 * Objet Sequelize définissant le modèle de la table releve_fvm
 * @type {Sequelize.DefineAttributes}
 */
exports.ReleveFVMModel = {
    "idReleve": {
        type: Sequelize.INTEGER,
        field: "id_releve_fvm",
        primaryKey: true,
        allowNull: false,
        unique: "releve_pkey"
    },
    "idCopieReleve": {
        type: Sequelize.INTEGER,
        field: "id_copie_releve_fvm",
        allowNull: false,
        references: {
            model: "CopieReleveFVMModel",
            key: "idCopieReleve",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    },
    "idCopieCourrierPrefecture": {
        type: Sequelize.INTEGER,
        field: "id_copie_courrier_prefecture_fvm",
        allowNull: false,
        references: {
            model: "CopieCourrierPrefectureFVMModel",
            key: "idCopieCourrierPrefecture",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    },
    "dateReceptionReleve": {
        type: Sequelize.DATE,
        field: "date_reception_releve",
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
//# sourceMappingURL=model-releve.js.map