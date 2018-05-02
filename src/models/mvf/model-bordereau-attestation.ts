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
    field: "ID_BORDEREAU_ATTESTATION_MVF",
    primaryKey: true,
    allowNull: false,
    unique: "bordereau_attestation_pkey"
  },
  "idAttestation": {
    type: Sequelize.INTEGER,
    field: "ID_ATTESTATION_MVF",
    allowNull: false,
    references: {
      model: "AttestationMVFModel",
      key: "idAttestation"
    }
  },
  "idBordereau": {
    type: Sequelize.INTEGER,
    field: "ID_BORDEREAU_MVF",
    allowNull: false,
    references: {
      model: "BordereauMVFModel",
      key: "idBordereau"
    }
  }
};
