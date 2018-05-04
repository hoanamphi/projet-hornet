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
    field: "id_bordereau_mvf",
    primaryKey: true,
    allowNull: false,
    unique: "bordereau_pkey"
  },
  "numBordereau": {
    type: Sequelize.STRING,
    field: "num_bordereau",
    allowNull: false
  },
  "dateEnvoiDeLaReponsePrefecture": {
    type: Sequelize.DATE,
    field: "date_envoi_de_la_reponse_prefecture",
    allowNull: false
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
