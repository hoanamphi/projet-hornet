import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface CopiePermisMVFAttributes extends HornetSequelizeAttributes {
  idCopiePermis: number;
  nom: string;
  mimetype: string;
  encoding: string;
  size: number;
  data: Buffer;
  idPermis: number;
}

export let CopiePermisMVFModel: Sequelize.DefineAttributes = {
    "idCopiePermis": {
      type: Sequelize.INTEGER,
      field: "id_copie_permis_mvf",
      primaryKey: true,
      allowNull: false,
      unique: "copiepermis_pkey"
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
    "idPermis": {
      type: Sequelize.INTEGER,
      field: "id_permis_mvf",
      allowNull: false,
      references: {
        model: "PermisMVFModel",
        key: "idPermis"
      }
    }
};
