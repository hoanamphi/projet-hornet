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
    field: "id_note_verbale_mvf",
    primaryKey: true,
    allowNull: false,
    unique: "noteverbale_pkey"
  },
  "numNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "num_note_verbale",
    allowNull: false
  },
  "dateDuTraitement": {
    type: Sequelize.DATE,
    field: "date_du_traitement",
    allowNull: false
  }
};
