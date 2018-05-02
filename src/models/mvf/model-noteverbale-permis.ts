import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface NoteVerbalePermisMVFAttributes extends HornetSequelizeAttributes {
  idNoteVerbalePermis: number;
  idPermis: number;
  idNoteVerbale: number;
}

export let NoteVerbalePermisMVFModel: Sequelize.DefineAttributes = {
  "idNoteVerbalePermis": {
    type: Sequelize.INTEGER,
    field: "ID_NOTE_VERBALE_PERMIS_MVF",
    primaryKey: true,
    allowNull: false,
    unique: "noteverbale_permis_pkey"
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "ID_PERMIS_MVF",
    allowNull: false,
    references: {
      model: "PermisMVFModel",
      key: "idPermis"
    }
  },
  "idNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "ID_NOTE_VERBALE_MVF",
    allowNull: false,
    references: {
      model: "NoteVerbaleMVFModel",
      key: "idNoteVerbale"
    }
  }
};
