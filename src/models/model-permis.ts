import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface PermisAttributes extends HornetSequelizeAttributes {
    numPermis: string;
    idPersonne: number;
    numDossier: number;
}

export let PermisModel: Sequelize.DefineAttributes = {
    "numPermis": {
        type: Sequelize.STRING(9),
        field: "num_permis",
        primaryKey: true,
        allowNull: false,
        unique: "role_pkey"
    },
    "idPersonne": {
        type: Sequelize.INTEGER,
        field: "id_personne",
        allowNull: false,
        references: {
            model: "PersonneModel",
            key: "idPersonne"
        }
    },
    "numDossier": {
        type: Sequelize.INTEGER,
        field: "num_dossier",
        allowNull: false,
        references: {
            model: "DossierModel",
            key: "numDossier"
        }
    }
};
