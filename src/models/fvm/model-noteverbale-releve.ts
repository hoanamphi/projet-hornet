import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

/**
 * Interface définissant les attributs de la table note_verbale_releve_fvm
 * @extends {HornetSequelizeAttributes}
 */
export interface NoteVerbaleReleveFVMAttributes extends HornetSequelizeAttributes {
  idNoteVerbaleReleve: number;
  idReleve: number;
  idNoteVerbale: number;
}

/**
 * Objet Sequelize définissant le modèle de la table note_verbale_releve_fvm
 * @type {Sequelize.DefineAttributes}
 */
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
      key: "idReleve",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  },
  "idNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "id_note_verbale_fvm",
    allowNull: false,
    references: {
      model: "NoteVerbaleFVMModel",
      key: "idNoteVerbale",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};
