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
    field: "ID_DEMANDE_AUTHENTIFICATION_FVM",
    primaryKey: true,
    allowNull: false,
    unique: "demandeauthentification_pkey"
  },
  "numDemandeAuthentification": {
    type: Sequelize.STRING,
    field: "NUM_DEMANDE_AUTHENTIFICATION",
    allowNull: false
  },
  "dateDuTraitement": {
    type: Sequelize.DATE,
    field: "DATE_DU_TRAITEMENT",
    allowNull: false
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "ID_PERMIS_FVM",
    allowNull: false,
    references: {
      model: "PermisFVMModel",
      key: "idPermis"
    }
  },
  "numValise": {
    type: Sequelize.INTEGER,
    field: "NUM_VALISE",
    allowNull: false,
    references: {
      model: "ValiseModel",
      key: "numValise"
    }
  }
};
