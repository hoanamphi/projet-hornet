"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.UtilisateurModel = {
    id: {
        type: Sequelize.INTEGER,
        field: "id_utilisateur",
        autoIncrement: true,
        primaryKey: true
    },
    login: {
        type: Sequelize.STRING(10),
        field: "uti_login"
    },
    password: {
        type: Sequelize.STRING(50),
        field: "uti_password"
    },
    enabled: {
        type: Sequelize.BOOLEAN,
        field: "uti_enabled",
        defaultValue: "FALSE"
    }
};

//# sourceMappingURL=seq-user-mod.js.map
