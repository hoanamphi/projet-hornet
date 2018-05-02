import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface DossierFMVAttributes extends HornetSequelizeAttributes {
  idDossier: number;
  idCopieNoteVerbaleMAECI: number;
  dateReceptionDossier: Date;
  idPermis: number;
}

export let DossierFVMModel: Sequelize.DefineAttributes = {
  "idDossier": {
    type: Sequelize.INTEGER,
    field: "ID_DOSSIER_FVM",
    primaryKey: true,
    allowNull: false,
    unique: "dossier_pkey"
  },
  "idCopieNoteVerbaleMAECI": {
    type: Sequelize.INTEGER,
    field: "ID_COPIE_NOTE_VERBALE_MAECI_FVM",
    allowNull: false,
    references: {
      model: "CopieNoteVerbaleMAECIFVMModel",
      key: "idCopieNoteVerbaleMAECI"
    }
  },
  "dateReceptionDossier": {
    type: Sequelize.DATE,
    field: "DATE_RECEPTION_DOSSIER",
    allowNull: false
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "ID_PERMIS_FVM",
    allowNull: false,
    references: {
      model: "PermisFVMModel",
      key: "idPermis"
    }
  }
};
