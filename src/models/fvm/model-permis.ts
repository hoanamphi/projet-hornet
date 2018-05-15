import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface PermisFVMAttributes extends HornetSequelizeAttributes {
  idPermis: number;
  numPermis: string;
  idCopiePermis: number;
  dateDeDelivrance: Date;
  idPersonne: number;
  idDossier: number;
  idPrefectureDelivrance: number;
}

export let PermisFVMModel: Sequelize.DefineAttributes = {
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "id_permis_fvm",
    primaryKey: true,
    allowNull: false,
    unique: "permis_pkey"
  },
  "numPermis": {
    type: Sequelize.STRING,
    field: "num_permis",
    allowNull: false,
  },
  "idCopiePermis": {
    type: Sequelize.INTEGER,
    field: "id_copie_permis_fvm",
    allowNull: false
  },
  "dateDeDelivrance": {
    type: Sequelize.DATE,
    field: "date_de_delivrance",
    allowNull: false
  },
  "idPersonne": {
    type: Sequelize.INTEGER,
    field: "id_personne_fvm",
    allowNull: false,
    references: {
      model: "PersonneModelFVM",
      key: "idPersonne",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  },
  "idDossier": {
    type: Sequelize.INTEGER,
    field: "id_dossier_fvm",
    allowNull: false,
    references: {
      model: "DossierModelFVM",
      key: "idDossier",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  },
  "idPrefectureDelivrance": {
    type: Sequelize.INTEGER,
    field: "id_prefecture_delivrance",
    allowNull: false,
    references: {
      model: "PrefectureModel",
      key: "idPrefecture",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};
