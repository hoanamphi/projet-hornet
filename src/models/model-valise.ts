import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

/**
 * Interface définissant les attributs de la table valise
 * @extends {HornetSequelizeAttributes}
 */
export interface ValiseAttributes extends HornetSequelizeAttributes {
  numValise: number;
  dateValise: Date;
}

/**
 * Objet Sequelize définissant le modèle de la table valise
 * @type {Sequelize.DefineAttributes}
 */
export let ValiseModel: Sequelize.DefineAttributes = {
  "numValise": {
    type: Sequelize.INTEGER,
    field: "num_valise",
    primaryKey: true,
    allowNull: false,
    unique: "valise_ pkey"
  },
  "dateValise": {
    type: Sequelize.DATE,
    field: "date_valise",
    allowNull: false
  }
};
