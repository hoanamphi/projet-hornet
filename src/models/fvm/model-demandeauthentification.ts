import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

/**
 * Interface définissant les attributs de la table demande_authentification_fvm
 * @extends {HornetSequelizeAttributes}
 */
export interface DemandeAuthentificationFVMAttributes extends HornetSequelizeAttributes {
  idDemandeAuthentification: number;
  numDemandeAuthentification: string;
  dateDeCreation: Date;
  dateDuTraitement: Date;
  idPermis: number;
  numValise: number;
}

/**
 * Objet Sequelize définissant le modèle de la table demande_authentification_fvm
 * @type {Sequelize.DefineAttributes}
 */
export let DemandeAuthentificationFVMModel: Sequelize.DefineAttributes = {
  "idDemandeAuthentification": {
    type: Sequelize.INTEGER,
    field: "id_demande_authentification_fvm",
    primaryKey: true,
    allowNull: false,
    unique: "demandeauthentification_pkey"
  },
  "numDemandeAuthentification": {
    type: Sequelize.STRING,
    field: "num_demande_authentification",
    allowNull: false
  },
  "dateDeCreation": {
    type: Sequelize.DATE,
    field: "date_de_creation",
    allowNull: false
  },
  "dateDuTraitement": {
    type: Sequelize.DATE,
    field: "date_du_traitement",
    allowNull: false
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "id_permis_fvm",
    allowNull: false,
    references: {
      model: "PermisFVMModel",
      key: "idPermis",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  },
  "numValise": {
    type: Sequelize.INTEGER,
    field: "num_valise",
    allowNull: false,
    references: {
      model: "ValiseModel",
      key: "numValise",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};
