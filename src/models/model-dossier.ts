import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface DossierAttributes extends HornetSequelizeAttributes {
  numDossier: number;
  demandePrefecture: string;
  copiePermis: string;
  dateReceptionDossier: Date;
  numPermis: number;
  codePrefecture: number;
}

export let DossierModel: Sequelize.DefineAttributes = {
    "numDossier": {
        type: Sequelize.INTEGER,
        field: "num_dossier",
        primaryKey: true,
        allowNull: false,
        unique: "role_pkey"
    },
    "demandePrefecture": {
        type: Sequelize.STRING,
        field: "demande_prefecture",
        allowNull: false
    },
    "copiePermis": {
        type: Sequelize.STRING,
        field: "copie_permis",
        allowNull: false
    },
    "dateReceptionDossier": {
        type: Sequelize.DATE,
        field: "date_reception_dossier",
        allowNull: false
    },
    "numPermis": {
        type: Sequelize.STRING(9),
        field: "num_permis",
        allowNull: false,
        references: {
            model: "PermisModel",
            key: "numPermis"
        }
    },
    "codePrefecture": {
        type: Sequelize.INTEGER,
        field: "code_prefecture",
        allowNull: false,
        references: {
            model: "PrefectureModel",
            key: "codePrefecture"
        }
    }
};
