import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface DossierMVFAttributes extends HornetSequelizeAttributes {
  idDossier: number;
  idCopieDemandePrefecture: number;
  dateReceptionDossier: Date;
  idPermis: number;
  idPrefectureEnvoi: number;
}

export let DossierMVFModel: Sequelize.DefineAttributes = {
  "idDossier": {
    type: Sequelize.INTEGER,
    field: "ID_DOSSIER_MVF",
    primaryKey: true,
    allowNull: false,
    unique: "dossier_pkey"
  },
  "idCopieDemandePrefecture": {
    type: Sequelize.INTEGER,
    field: "ID_COPIE_DEMANDE_PREFECTURE_MVF",
    allowNull: false,
    references: {
      model: "CopieDemandePrefectureMVFModel",
      key: "idCopieDemandePrefecture"
    }
  },
  "dateReceptionDossier": {
    type: Sequelize.DATE,
    field: "DATE_RECEPTION_DOSSIER",
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
  },
  "idPrefectureEnvoi": {
    type: Sequelize.INTEGER,
    field: "ID_PREFECTURE_ENVOI",
    allowNull: false,
    references: {
      model: "PrefectureModel",
      key: "idPrefecture"
    }
  }
};
