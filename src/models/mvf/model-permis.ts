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
    field: "ID_PERMIS_MVF",
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
    field: "ID_COPIE_PERMIS_MVF",
    allowNull: false
  },
  "idPersonne": {
    type: Sequelize.INTEGER,
    field: "ID_PERSONNE_MVF",
    allowNull: false,
    references: {
      model: "PersonneModelMVF",
      key: "ID_PERSONNE_MVF"
    }
  },
  "idDossier": {
    type: Sequelize.INTEGER,
    field: "ID_DOSSIER_MVF",
    allowNull: false,
    references: {
      model: "DossierModelMVF",
      key: "ID_DOSSIER_MVF"
    }
  }
};