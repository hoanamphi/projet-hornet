import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface ReleveFVMAttributes extends HornetSequelizeAttributes {
  idReleve: number;
  idCopieReleve: number;
  idCopieCourrierPrefecture: number;
  dateReceptionReleve: Date;
  idPermis: number;
}

export let ReleveFVMModel: Sequelize.DefineAttributes = {
  "idReleve": {
    type: Sequelize.INTEGER,
    field: "ID_RELEVE_FVM",
    primaryKey: true,
    allowNull: false,
    unique: "releve_pkey"
  },
  "idCopieReleve": {
    type: Sequelize.INTEGER,
    field: "ID_COPIE_RELEVE_FVM",
    allowNull: false,
    references: {
      model: "CopieReleveFVMModel",
      key: "idCopieReleve"
    }
  },
  "idCopieCourrierPrefecture": {
    type: Sequelize.INTEGER,
    field: "ID_COPIE_COURRIER_PREFECTURE_FVM",
    allowNull: false,
    references: {
      model: "CopieCourrierPrefectureFVMModel",
      key: "idCopieCourrierPrefecture"
    }
  },
  "dateReceptionReleve": {
    type: Sequelize.DATE,
    field: "DATE_RECEPTION_RELEVE",
    allowNull: false
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "ID_PERMIS_FVM",
    allowNull: false,
    references: {
      model: "PermisFVMModel",
      key: "idPermis"
    }
  }
};
