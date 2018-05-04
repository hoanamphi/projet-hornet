import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface DemandeAuthentificationFVMAttributes extends HornetSequelizeAttributes {
  idDemandeAuthentification: number;
  numDemandeAuthentification: string;
  dateDuTraitement: Date;
  idPermis: number;
  numValise: number;
}

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
      key: "idPermis"
    }
  },
  "numValise": {
    type: Sequelize.INTEGER,
    field: "num_valise",
    allowNull: false,
    references: {
      model: "ValiseModel",
      key: "numValise"
    }
  }
};
