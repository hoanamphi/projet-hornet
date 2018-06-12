"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
/**
 * Objet Sequelize définissant le modèle de la table copie_courrier_prefecture_fvm
 * @type {Sequelize.DefineAttributes}
 */
exports.CopieCourrierPrefectureFVMModel = {
    "idCopieCourrierPrefecture": {
        type: Sequelize.INTEGER,
        field: "id_copie_courrier_prefecture_fvm",
        primaryKey: true,
        allowNull: false,
        unique: "copiecourrier_pkey"
    },
    "nom": {
        type: Sequelize.STRING,
        field: "nom",
        allowNull: false
    },
    "mimetype": {
        type: Sequelize.STRING,
        field: "mimetype",
        allowNull: false
    },
    "encoding": {
        type: Sequelize.STRING,
        field: "encoding",
        allowNull: false
    },
    "size": {
        type: Sequelize.INTEGER,
        field: "size",
        allowNull: false
    },
    "data": {
        type: Sequelize.BLOB,
        field: "data",
        allowNull: false
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
    }
};
//# sourceMappingURL=model-copiecourrierprefecture.js.map