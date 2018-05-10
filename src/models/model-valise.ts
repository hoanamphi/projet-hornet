import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface ValiseAttributes extends HornetSequelizeAttributes {
  numValise: number;
  dateValise: Date;
}

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
