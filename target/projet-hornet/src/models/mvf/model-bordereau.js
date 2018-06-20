"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.BordereauMVFModel = {
    "idBordereau": {
        type: Sequelize.INTEGER,
        field: "id_bordereau_mvf",
        primaryKey: true,
        allowNull: false,
        unique: "bordereau_pkey"
    },
    "numBordereau": {
        type: Sequelize.STRING,
        field: "num_bordereau",
        allowNull: false
    },
    "dateEnvoiDeLaReponsePrefecture": {
        type: Sequelize.DATE,
        field: "date_envoi_de_la_reponse_prefecture",
        allowNull: false
    },
    "numValise": {
        type: Sequelize.INTEGER,
        field: "num_valise",
        allowNull: false,
        references: {
            model: "ValiseModel",
            key: "numValise",
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        }
    }
};

//# sourceMappingURL=model-bordereau.js.map
