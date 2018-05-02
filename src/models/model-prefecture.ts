import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface PrefectureAttributes extends HornetSequelizeAttributes {
  idPrefecture: number;
  region: string;
  departement: string;
  prefecture: string;
  adresse: string;
  codePostal: number;
  ville: string;
}

export let PrefectureModel: Sequelize.DefineAttributes = {
    "idPrefecture": {
        type: Sequelize.INTEGER,
        field: "ID_PREFECTURE",
        primaryKey: true,
        allowNull: false,
        unique: "prefecture_pkey"
    },
    "region": {
        type: Sequelize.STRING,
        field: "REGION",
        allowNull: false
    },
    "departement": {
        type: Sequelize.STRING,
        field: "DEPARTEMENT",
        allowNull: false
    },
    "prefecture": {
        type: Sequelize.STRING,
        field: "PREFECTURE",
        allowNull: false
    },
    "adresse": {
        type: Sequelize.STRING,
        field: "ADRESSE",
        allowNull: false
    },
    "codePostal": {
        type: Sequelize.INTEGER,
        field: "CODE_POSTAL",
        allowNull: false
    },
    "ville": {
        type: Sequelize.STRING,
        field: "VILLE",
        allowNull: false
    }
};
