import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface PersonneFVMAttributes extends HornetSequelizeAttributes {
  idPersonne: number;
  nom: string;
  prenom: string;
  dateDeNaissance: Date;
  villeDeNaissance: string;
  paysDeNaissance: string;
  idPermis: number;
}

export let PersonneFVMModel: Sequelize.DefineAttributes = {
  "idPersonne": {
    type: Sequelize.INTEGER,
    field: "id_personne_fvm",
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
  "villeDeNaissance": {
    type: Sequelize.STRING,
    field: "ville_de_naissance",
    allowNull: false
  },
  "paysDeNaissance": {
    type: Sequelize.STRING,
    field: "pays_de_naissance",
    allowNull: false
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "id_permis_fvm",
    allowNull: false,
    references: {
      model: "PermisFVMModel",
      key: "idPersonne"
    }
  }
};
