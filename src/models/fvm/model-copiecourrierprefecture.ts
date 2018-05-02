import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface CopieCourrierPrefectureFVMAttributes extends HornetSequelizeAttributes {
    idCopieCourrierPrefecture: number;
    nom: string;
    mimetype: string;
    encoding: string;
    size: number;
    data: Buffer;
    idReleve: number;
}

export let CopieCourrierPrefectureFVMModel: Sequelize.DefineAttributes = {
    "idCopieCourrierPrefecture": {
        type: Sequelize.INTEGER,
        field: "ID_COPIE_COURRIER_PREFECTURE_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "copiecourrier_pkey"
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