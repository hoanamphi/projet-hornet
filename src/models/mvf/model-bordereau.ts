import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface BordereauMVFAttributes extends HornetSequelizeAttributes {
  idBordereau: number;
  numBordereau: string;
  dateEnvoiDeLaReponseAuMAECI: Date;
  numValise: number;
}

export let BordereauMVFModel: Sequelize.DefineAttributes = {
  "idBordereau": {
    type: Sequelize.INTEGER,
    field: "ID_BORDEREAU_MVF",
    primaryKey: true,
    allowNull: false,
    unique: "bordereau_pkey"
  },
  "numBordereau": {
    type: Sequelize.STRING,
    field: "NUM_BORDEREAU",
    allowNull: false
  },
  "dateEnvoiDeLaReponseAuMAECI": {
    type: Sequelize.DATE,
    field: "DATE_ENVOI_DE_LA_REPONSE_AU_MAECI",
    allowNull: false
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
