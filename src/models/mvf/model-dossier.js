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
            key: "idCopieDemandePrefecture"
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
            key: "idPermis"
        }
    },
    "idPrefectureEnvoi": {
        type: Sequelize.INTEGER,
        field: "id_prefecture_envoi",
        allowNull: false,
        references: {
            model: "PrefectureModel",
            key: "idPrefecture"
        }
    }
};

//# sourceMappingURL=model-dossier.js.map
