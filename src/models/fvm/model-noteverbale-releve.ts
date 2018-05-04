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
    field: "id_note_verbale_releve_fvm",
    primaryKey: true,
    allowNull: false,
    unique: "noteverbale_releve_pkey"
  },
  "idReleve": {
    type: Sequelize.INTEGER,
    field: "id_releve_fvm",
    allowNull: false,
    references: {
      model: "ReleveFVMModel",
      key: "idReleve"
    }
  },
  "idNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "id_note_verbale_fvm",
    allowNull: false,
    references: {
      model: "NoteVerbaleFVMModel",
      key: "idNoteVerbale"
    }
  }
};
