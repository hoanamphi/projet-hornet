"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Bean_1 = require("hornet-js-bean/src/decorators/Bean");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var Alias_1 = require("hornet-js-bean/src/decorators/Alias");
var RoleMetier = /** @class */ (function () {
    function RoleMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idRole"),
        tslib_1.__metadata("design:type", Number)
    ], RoleMetier.prototype, "id", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("rolNom"),
        tslib_1.__metadata("design:type", String)
    ], RoleMetier.prototype, "name", void 0);
    RoleMetier = tslib_1.__decorate([
        Bean_1.default
    ], RoleMetier);
    return RoleMetier;
}());
exports.RoleMetier = RoleMetier;
var UtilisateurMetier = /** @class */ (function () {
    function UtilisateurMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        tslib_1.__metadata("design:type", Number)
    ], UtilisateurMetier.prototype, "id", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        tslib_1.__metadata("design:type", String)
    ], UtilisateurMetier.prototype, "login", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        tslib_1.__metadata("design:type", String)
    ], UtilisateurMetier.prototype, "password", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        tslib_1.__metadata("design:type", Boolean)
    ], UtilisateurMetier.prototype, "enabled", void 0);
    tslib_1.__decorate([
        Map_1.default(RoleMetier),
        Alias_1.default("listeRole"),
        tslib_1.__metadata("design:type", Array)
    ], UtilisateurMetier.prototype, "roles", void 0);
    UtilisateurMetier = tslib_1.__decorate([
        Bean_1.default
    ], UtilisateurMetier);
    return UtilisateurMetier;
}());
exports.UtilisateurMetier = UtilisateurMetier;
var PermisMetier = /** @class */ (function () {
    function PermisMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numPermis"),
        tslib_1.__metadata("design:type", String)
    ], PermisMetier.prototype, "num_permis", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPersonne"),
        tslib_1.__metadata("design:type", Number)
    ], PermisMetier.prototype, "id_personne", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numDossier"),
        tslib_1.__metadata("design:type", Number)
    ], PermisMetier.prototype, "num_dossier", void 0);
    PermisMetier = tslib_1.__decorate([
        Bean_1.default
    ], PermisMetier);
    return PermisMetier;
}());
exports.PermisMetier = PermisMetier;

//# sourceMappingURL=fvm-mod.js.map