"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.DossierMVFModel = {
    "idDossier": {
        type: Sequelize.INTEGER,
        field: "id_dossier_mvf",
        primaryKey: true,
        allowNull: false,
        unique: "dossier_pkey"
    },
    "idCopieDemandePrefecture": {
        type: Sequelize.INTEGER,
        field: "id_copie_demande_prefecture_mvf",
        allowNull: false,
        references: {
            model: "CopieDemandePrefectureMVFModel",
            key: "idCopieDemandePrefecture",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    },
    "dateReceptionDossier": {
        type: Sequelize.DATE,
        field: "date_reception_dossier",
        allowNull: false
    },
    "idPermis": {
        type: Sequelize.INTEGER,
        field: "id_permis_mvf",
        allowNull: false,
        references: {
            model: "PermisMVFModel",
            key: "idPermis",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    },
    "idPrefectureEnvoi": {
        type: Sequelize.INTEGER,
        field: "id_prefecture_envoi",
        allowNull: false,
        references: {
            model: "PrefectureModel",
            key: "idPrefecture",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-dossier.js.map
