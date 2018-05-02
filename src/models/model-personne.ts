import * as Sequelize from "sequelize";
import { HornetSequelizeAttributes } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

export interface PersonneAttributes extends HornetSequelizeAttributes {
  idPersonne: number;
  nomPersonne: string;
  prenomPersonne: string;
  dateDeNaissance: Date;
  numPermis: string;
}

export let PersonneModel: Sequelize.DefineAttributes = {
    "idPersonne": {
        type: Sequelize.INTEGER,
        field: "id_personne",
        primaryKey: true,
        allowNull: false,
        unique: "role_pkey"
    },
    "nomPersonne": {
        type: Sequelize.STRING,
        field: "nom",
        allowNull: false
    },
    "prenomPersonne": {
        type: Sequelize.STRING,
        field: "prenom",
        allowNull: false
    },
    "dateDeNaissance": {
        type: Sequelize.DATE,
        field: "date_de_naissance",
        allowNull: false
    },
    "numPermis": {
        type: Sequelize.STRING(9),
        field: "num_permis",
        allowNull: false,
        references: {
            model: "PermisModel",
            key: "numPermis"
        }
    }
};
