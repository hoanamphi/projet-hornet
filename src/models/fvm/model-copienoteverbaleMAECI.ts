import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface CopieNoteVerbaleMAECIFVMAttributes extends HornetSequelizeAttributes {
    idCopieNoteVerbaleMAECI: number;
    nom: string;
    mimetype: string;
    encoding: string;
    size: number;
    data: Buffer;
    idDossier: number;
}

export let CopieNoteVerbaleMAECIFVMModel: Sequelize.DefineAttributes = {
    "idCopieNoteVerbaleMAECI": {
        type: Sequelize.INTEGER,
        field: "ID_COPIE_NOTE_VERBALE_MAECI_FVM",
        primaryKey: true,
        allowNull: false,
        unique: "copienote_pkey"
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
    "idDossier": {
        type: Sequelize.INTEGER,
        field: "ID_DOSSIER_FVM",
        allowNull: false,
        references: {
            model: "DossierFVMModel",
            key: "idDossier"
        }
    }
};