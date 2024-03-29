import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

/**
 * Interface définissant les attributs de la table note_verbale_fvm
 * @extends {HornetSequelizeAttributes}
 */
export interface NoteVerbaleFVMAttributes extends HornetSequelizeAttributes {
  idNoteVerbale: number;
  numNoteVerbale: number;
  dateEnvoiDeLaReponseAuMAECI: Date;
}

/**
 * Objet Sequelize définissant le modèle de la table note_verbale_fvm
 * @type {Sequelize.DefineAttributes}
 */
export let NoteVerbaleFVMModel: Sequelize.DefineAttributes = {
  "idNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "id_note_verbale_fvm",
    primaryKey: true,
    allowNull: false,
    unique: "noteverbale_pkey"
  },
  "numNoteVerbale": {
    type: Sequelize.INTEGER,
    field: "num_note_verbale",
    allowNull: false
  },
  "dateEnvoiDeLaReponseAuMAECI": {
    type: Sequelize.DATE,
    field: "date_envoi_de_la_reponse_au_maeci",
    allowNull: false
  }
};
