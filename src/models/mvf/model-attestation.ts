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
    field: "id_attestation_mvf",
    primaryKey: true,
    allowNull: false,
    unique: "attestation_pkey"
  },
  "idCopieAttestation": {
    type: Sequelize.INTEGER,
    field: "id_copie_attestation_mvf",
    allowNull: false,
    references: {
      model: "CopieAttestationMVFModel",
      key: "idCopieAttestation"
    }
  },
  "idCopieNoteVerbaleMAECI": {
    type: Sequelize.INTEGER,
    field: "id_copie_note_verbale_maeci_mvf",
    allowNull: false,
    references: {
      model: "CopieNoteVerbaleMAECIMVFModel",
      key: "idCopieNoteVerbaleMAECI"
    }
  },
  "dateReceptionAttestation": {
    type: Sequelize.DATE,
    field: "date_reception_attestation",
    allowNull: false
  },
  "idPermis": {
    type: Sequelize.INTEGER,
    field: "id_permis_mvf",
    allowNull: false,
    references: {
      model: "PermisMVFModel",
      key: "idPermis"
    }
  }
};
