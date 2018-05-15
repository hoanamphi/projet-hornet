import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface CopieAttestationMVFAttributes extends HornetSequelizeAttributes {
  idCopieAttestation: number;
  nom: string;
  mimetype: string;
  encoding: string;
  size: number;
  data: Buffer;
  idAttestation: number;
}

export let CopieAttestationMVFModel: Sequelize.DefineAttributes = {
  "idCopieAttestation": {
    type: Sequelize.INTEGER,
    field: "id_copie_attestation_mvf",
    primaryKey: true,
    allowNull: false,
    unique: "copieattestation_pkey"
  },
  "nom": {
    type: Sequelize.STRING,
    field: "nom",
    allowNull: false
  },
  "mimetype": {
    type: Sequelize.STRING,
    field: "mimetype",
    allowNull: false
  },
  "encoding": {
    type: Sequelize.STRING,
    field: "encoding",
    allowNull: false
  },
  "size": {
    type: Sequelize.INTEGER,
    field: "size",
    allowNull: false
  },
  "data": {
    type: Sequelize.BLOB,
    field: "data",
    allowNull: false
  },
  "idAttestation": {
    type: Sequelize.INTEGER,
    field: "id_attestation_mvf",
    allowNull: false,
    references: {
      model: "AttestationMVFModel",
      key: "idAttestation",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};