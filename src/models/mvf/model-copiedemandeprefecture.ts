import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface CopieCourrierPrefectureMVFAttributes extends HornetSequelizeAttributes {
    idCopieDemandePrefecture: number;
    nom: string;
    mimetype: string;
    encoding: string;
    size: number;
    data: Buffer;
    idDossier: number;
}

export let CopieDemandePrefectureMVFModel: Sequelize.DefineAttributes = {
    "idCopieDemandePrefecture": {
        type: Sequelize.INTEGER,
        field: "id_copie_demande_prefecture_mvf",
        primaryKey: true,
        allowNull: false,
        unique: "copiedemande_pkey"
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
    "idDossier": {
        type: Sequelize.INTEGER,
        field: "id_dossier_mvf",
        allowNull: false,
        references: {
            model: "DossierMVFModel",
            key: "idDossier"
        }
    }
};