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
    field: "id_note_verbale_permis_mvf",
    primaryKey: true,
    allowNull: false,
    unique: "noteverbale_permis_pkey"
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "id_permis_mvf",
    allowNull: false,
    references: {
      model: "PermisMVFModel",
      key: "idPermis",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  },
  "idNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "id_note_verbale_mvf",
    allowNull: false,
    references: {
      model: "NoteVerbaleMVFModel",
      key: "idNoteVerbale",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};
