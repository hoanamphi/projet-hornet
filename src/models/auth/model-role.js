"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
exports.RoleModel = {
    "idRole": {
        type: Sequelize.INTEGER,
        field: "id_role",
        primaryKey: true,
        allowNull: false,
        unique: "role_pkey"
    },
    "rolNom": {
        type: Sequelize.STRING(15),
        field: "rol_nom",
        allowNull: false
    }
};

//# sourceMappingURL=model-role.js.map
