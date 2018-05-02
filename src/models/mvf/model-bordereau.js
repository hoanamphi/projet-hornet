"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.BordereauMVFModel = {
    "idBordereau": {
        type: Sequelize.INTEGER,
        field: "ID_BORDEREAU_MVF",
        primaryKey: true,
        allowNull: false,
        unique: "bordereau_pkey"
    },
    "numBordereau": {
        type: Sequelize.STRING,
        field: "NUM_BORDEREAU",
        allowNull: false
    },
    "dateEnvoiDeLaReponsePrefecture": {
        type: Sequelize.DATE,
        field: "DATE_ENVOI_DE_LA_REPONSE_PREFECTURE",
        allowNull: false
    },
    "numValise": {
        type: Sequelize.INTEGER,
        field: "NUM_VALISE",
        allowNull: false,
        references: {
            model: "ValiseModel",
            key: "numValise"
        }
    }
};

//# sourceMappingURL=model-bordereau.js.map
