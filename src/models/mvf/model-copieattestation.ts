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
        field: "ID_COPIE_ATTESTATION_MVF",
        primaryKey: true,
        allowNull: false,
        unique: "copieattestation_pkey"
    },
    "nom": {
        type: Sequelize.STRING,
        field: "NOM",
        allowNull: false
    },
    "mimetype": {
        type: Sequelize.STRING,
        field: "MIMETYPE",
        allowNull: false
    },
    "encoding": {
        type: Sequelize.STRING,
        field: "ENCODING",
        allowNull: false
    },
    "size": {
        type: Sequelize.INTEGER,
        field: "SIZE",
        allowNull: false
    },
    "data": {
        type: Sequelize.BLOB,
        field: "DATA",
        allowNull: false
    },
    "idAttestation": {
        type: Sequelize.INTEGER,
        field: "ID_ATTESTATION_MVF",
        allowNull: false,
        references: {
            model: "AttestationMVFModel",
            key: "idAttestation"
        }
    }
};