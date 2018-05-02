import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface CopieReleveFVMAttributes extends HornetSequelizeAttributes {
    idCopieReleve: number;
    nom: string;
    mimetype: string;
    encoding: string;
    size: number;
    data: Buffer;
    idReleve: number;
}

export let CopieReleveFVMModel: Sequelize.DefineAttributes = {
    "idCopieReleve": {
        type: Sequelize.INTEGER,
        field: "ID_RELEVE_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "copiereleve_pkey"
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
    "idReleve": {
        type: Sequelize.INTEGER,
        field: "ID_RELEVE_FVM",
        allowNull: false,
        references: {
            model: "ReleveFVMModel",
            key: "idReleve"
        }
    }
};