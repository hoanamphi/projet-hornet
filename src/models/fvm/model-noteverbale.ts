import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface NoteVerbaleFVMAttributes extends HornetSequelizeAttributes {
  idNoteVerbale: number;
  numNoteVerbale: number;
  dateEnvoiDeLaReponseAuMAECI: Date;
}

export let NoteVerbaleFVMModel: Sequelize.DefineAttributes = {
  "idNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "ID_NOTE_VERBALE_FVM",
    primaryKey: true,
    allowNull: false,
    unique: "noteverbale_pkey"
  },
  "numNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "NUM_NOTE_VERBALE",
    allowNull: false
  },
  "dateEnvoiDeLaReponseAuMAECI": {
    type: Sequelize.DATE,
    field: "DATE_ENVOI_DE_LA_REPONSE_AU_MAECI",
    allowNull: false
  }
};
