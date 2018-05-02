import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface AttestationMVFAttributes extends HornetSequelizeAttributes {
  idAttestation: number;
  idCopieAttestation: number;
  idCopieNoteVerbaleMAECI: number;
  dateReceptionAttestation: Date;
  idPermis: number;
}

export let AttestationMVFModel: Sequelize.DefineAttributes = {
  "idAttestation": {
    type: Sequelize.INTEGER,
    field: "ID_ATTESTATION_MVF",
    primaryKey: true,
    allowNull: false,
    unique: "attestation_pkey"
  },
  "idCopieAttestation": {
    type: Sequelize.INTEGER,
    field: "ID_COPIE_ATTESTATION_MVF",
    allowNull: false,
    references: {
      model: "CopieAttestationMVFModel",
      key: "idCopieAttestation"
    }
  },
  "idCopieNoteVerbaleMAECI": {
    type: Sequelize.INTEGER,
    field: "ID_COPIE_NOTE_VERBALE_MAECI_MVF",
    allowNull: false,
    references: {
      model: "CopieNoteVerbaleMAECIMVFModel",
      key: "idCopieNoteVerbaleMAECI"
    }
  },
  "dateReceptionAttestation": {
    type: Sequelize.DATE,
    field: "DATE_RECEPTION_ATTESTATION",
    allowNull: false
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "ID_PERMIS_MVF",
    allowNull: false,
    references: {
      model: "PermisMVFModel",
      key: "idPermis"
    }
  }
};
