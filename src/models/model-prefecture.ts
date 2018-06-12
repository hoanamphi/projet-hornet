import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

/**
 * Interface définissant les attributs de la table prefecture
 * @extends {HornetSequelizeAttributes}
 */
export interface PrefectureAttributes extends HornetSequelizeAttributes {
  idPrefecture: number;
  region: string;
  departement: string;
  prefecture: string;
  adresse: string;
  codePostal: number;
  ville: string;
}

/**
 * Objet Sequelize définissant le modèle de la table prefecture
 * @type {Sequelize.DefineAttributes}
 */
export let PrefectureModel: Sequelize.DefineAttributes = {
  "idPrefecture": {
    type: Sequelize.INTEGER,
    field: "id_prefecture",
    primaryKey: true,
    allowNull: false,
    unique: "prefecture_pkey"
  },
  "region": {
    type: Sequelize.STRING,
    field: "region",
    allowNull: false
  },
  "departement": {
    type: Sequelize.STRING,
    field: "departement",
    allowNull: false
  },
  "prefecture": {
    type: Sequelize.STRING,
    field: "prefecture",
    allowNull: false
  },
  "adresse": {
    type: Sequelize.STRING,
    field: "adresse",
    allowNull: false
  },
  "codePostal": {
    type: Sequelize.INTEGER,
    field: "code_postal",
    allowNull: false
  },
  "ville": {
    type: Sequelize.STRING,
    field: "ville",
    allowNull: false
  }
};
