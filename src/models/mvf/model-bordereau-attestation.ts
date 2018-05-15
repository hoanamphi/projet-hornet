import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface BordereauAttestationMVFAttributes extends HornetSequelizeAttributes {
  idBordereauAttestation: number;
  idAttestation: number;
  idBordereau: number;
}

export let BordereauAttestationMVFModel: Sequelize.DefineAttributes = {
  "idBordereauAttestation": {
    type: Sequelize.INTEGER,
    field: "id_bordereau_attestation_mvf",
    primaryKey: true,
    allowNull: false,
    unique: "bordereau_attestation_pkey"
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
  },
  "idBordereau": {
    type: Sequelize.INTEGER,
    field: "id_bordereau_mvf",
    allowNull: false,
    references: {
      model: "BordereauMVFModel",
      key: "idBordereau",
      deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
    }
  }
};
