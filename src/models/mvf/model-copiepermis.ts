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
      field: "ID_COPIE_PERMIS_MVF",
      primaryKey: true,
      allowNull: false,
      unique: "copiepermis_pkey"
    },
    "nom": {
      type: Sequelize.STRING,
      field: "NOM",
      allowNull: false
    },
    "mimetype": {
      type: Sequelize.STRING,
      field: "MIMETYPE",
      allowNull: false
    },
    "encoding": {
      type: Sequelize.STRING,
      field: "ENCODING",
      allowNull: false
    },
    "size": {
      type: Sequelize.INTEGER,
      field: "SIZE",
      allowNull: false
    },
    "data": {
      type: Sequelize.BLOB,
      field: "DATA",
      allowNull: false
    },
    "idPermis": {
      type: Sequelize.INTEGER,
      field: "ID_PERMIS_MVF",
      allowNull: false,
      references: {
        model: "PermisMVFModel",
        key: "idPermis"
      }
    }
};
