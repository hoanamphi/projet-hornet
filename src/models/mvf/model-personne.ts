import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface PersonneMVFAttributes extends HornetSequelizeAttributes {
  idPersonne: number;
  nom: string;
  prenom: string;
  dateDeNaissance: Date;
  idPermis: number;
}

export let PersonneMVFModel: Sequelize.DefineAttributes = {
  "idPersonne": {
    type: Sequelize.INTEGER,
    field: "ID_PERSONNE_MVF",
    primaryKey: true,
    allowNull: false,
    unique: "personne_pkey"
  },
  "nom": {
    type: Sequelize.STRING,
    field: "NOM",
    allowNull: false
  },
  "prenom": {
    type: Sequelize.STRING,
    field: "PRENOM",
    allowNull: false
  },
  "dateDeNaissance": {
    type: Sequelize.DATE,
    field: "DATE_DE_NAISSANCE",
    allowNull: false
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "ID_PERMIS_MVF",
    allowNull: false,
    references: {
      model: "PermisMVFModel",
      key: "idPersonne"
    }
  }
};
