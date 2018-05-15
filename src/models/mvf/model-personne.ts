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
    field: "id_personne_mvf",
    primaryKey: true,
    allowNull: false,
    unique: "personne_pkey"
  },
  "nom": {
    type: Sequelize.STRING,
    field: "nom",
    allowNull: false
  },
  "prenom": {
    type: Sequelize.STRING,
    field: "prenom",
    allowNull: false
  },
  "dateDeNaissance": {
    type: Sequelize.DATE,
    field: "date_de_naissance",
    allowNull: false
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "id_permis_mvf",
    allowNull: false,
    references: {
      model: "PermisMVFModel",
      key: "idPersonne",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};
