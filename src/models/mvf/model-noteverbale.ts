import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface NoteVerbaleMVFAttributes extends HornetSequelizeAttributes {
  idNoteVerbale: number;
  numNoteVerbale: number;
  dateDuTraitement: Date;
}

export let NoteVerbaleMVFModel: Sequelize.DefineAttributes = {
  "idNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "ID_NOTE_VERBALE_MVF",
    primaryKey: true,
    allowNull: false,
    unique: "noteverbale_pkey"
  },
  "numNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "NUM_NOTE_VERBALE",
    allowNull: false
  },
  "dateDuTraitement": {
    type: Sequelize.DATE,
    field: "DATE_DU_TRAITEMENT",
    allowNull: false
  }
};
