import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

/**
 * Interface définissant les attributs de la table personne_fvm
 * @extends {HornetSequelizeAttributes}
 */
export interface PersonneFVMAttributes extends HornetSequelizeAttributes {
  idPersonne: number;
  nom: string;
  prenom: string;
  titre: string;
  dateDeNaissance: Date;
  villeDeNaissance: string;
  paysDeNaissance: string;
  idPermis: number;
}

/**
 * Objet Sequelize définissant le modèle de la table personne_fvm
 * @type {Sequelize.DefineAttributes}
 */
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
  "titre": {
    type: Sequelize.STRING,
    field: "titre",
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
    allowNull: true,
    references: {
      model: "PermisFVMModel",
      key: "idPermis",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};
