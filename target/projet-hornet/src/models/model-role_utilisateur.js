"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.RoleUtilisateurModel = {
    "idRole": {
        type: Sequelize.INTEGER,
        field: "id_role",
        primaryKey: true,
        allowNull: false,
        unique: "pk_role_utilisateur",
        references: {
            model: "RoleModel",
            key: "idRole"
        }
    },
    "idUtilisateur": {
        type: Sequelize.INTEGER,
        field: "id_utilisateur",
        primaryKey: true,
        allowNull: false,
        unique: "pk_role_utilisateur",
        references: {
            model: "UtilisateurModel",
            key: "idUtilisateur"
        }
    }
};

//# sourceMappingURL=model-role_utilisateur.js.map
