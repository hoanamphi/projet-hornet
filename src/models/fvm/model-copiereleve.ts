import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

/**
 * Interface définissant les attributs de la table copie_releve_fvm
 * @extends {HornetSequelizeAttributes}
 */
export interface CopieReleveFVMAttributes extends HornetSequelizeAttributes {
  idCopieReleve: number;
  nom: string;
  mimetype: string;
  encoding: string;
  size: number;
  data: Buffer;
  idReleve: number;
}

/**
 * Objet Sequelize définissant le modèle de la table copie_releve_fvm
 * @type {Sequelize.DefineAttributes}
 */
export let CopieReleveFVMModel: Sequelize.DefineAttributes = {
  "idCopieReleve": {
    type: Sequelize.INTEGER,
    field: "id_releve_fvm",
    primaryKey: true,
    allowNull: false,
    unique: "copiereleve_pkey"
  },
  "nom": {
    type: Sequelize.STRING,
    field: "nom",
    allowNull: false
  },
  "mimetype": {
    type: Sequelize.STRING,
    field: "mimetype",
    allowNull: false
  },
  "encoding": {
    type: Sequelize.STRING,
    field: "encoding",
    allowNull: false
  },
  "size": {
    type: Sequelize.INTEGER,
    field: "size",
    allowNull: false
  },
  "data": {
    type: Sequelize.BLOB,
    field: "data",
    allowNull: false
  },
  "idReleve": {
    type: Sequelize.INTEGER,
    field: "id_releve_fvm",
    allowNull: false,
    references: {
      model: "ReleveFVMModel",
      key: "idReleve",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};