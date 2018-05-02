import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface NoteVerbaleReleveFVMAttributes extends HornetSequelizeAttributes {
  idNoteVerbaleReleve: number;
  idReleve: number;
  idNoteVerbale: number;
}

export let NoteVerbaleReleveFVMModel: Sequelize.DefineAttributes = {
  "idNoteVerbaleReleve": {
    type: Sequelize.INTEGER,
    field: "ID_NOTE_VERBALE_RELEVE_FVM",
    primaryKey: true,
    allowNull: false,
    unique: "noteverbale_releve_pkey"
  },
  "idReleve": {
    type: Sequelize.INTEGER,
    field: "ID_RELEVE_FVM",
    allowNull: false,
    references: {
      model: "ReleveFVMModel",
      key: "idReleve"
    }
  },
  "idNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "ID_NOTE_VERBALE_FVM",
    allowNull: false,
    references: {
      model: "NoteVerbaleFVMModel",
      key: "idNoteVerbale"
    }
  }
};
