import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface PermisMVFAttributes extends HornetSequelizeAttributes {
  idPermis: number;
  numPermis: string;
  idCopiePermis: number;
  idPersonne: number;
  idDossier: number;
}

export let PermisMVFModel: Sequelize.DefineAttributes = {
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "id_permis_mvf",
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
    field: "id_copie_permis_mvf",
    allowNull: false
  },
  "idPersonne": {
    type: Sequelize.INTEGER,
    field: "id_personne_mvf",
    allowNull: false,
    references: {
      model: "PersonneModelMVF",
      key: "idPersonne",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  },
  "idDossier": {
    type: Sequelize.INTEGER,
    field: "id_dossier_mvf",
    allowNull: false,
    references: {
      model: "DossierModelMVF",
      key: "idDossier",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};
