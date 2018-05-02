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
var PersonneMetier = /** @class */ (function () {
    function PersonneMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPersonne"),
        tslib_1.__metadata("design:type", Number)
    ], PersonneMetier.prototype, "id_personne", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nomPersonne"),
        tslib_1.__metadata("design:type", String)
    ], PersonneMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("prenomPersonne"),
        tslib_1.__metadata("design:type", String)
    ], PersonneMetier.prototype, "prenom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateDeNaissance"),
        tslib_1.__metadata("design:type", Date)
    ], PersonneMetier.prototype, "date_de_naissance", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numPermis"),
        tslib_1.__metadata("design:type", String)
    ], PersonneMetier.prototype, "num_permis", void 0);
    PersonneMetier = tslib_1.__decorate([
        Bean_1.default
    ], PersonneMetier);
    return PersonneMetier;
}());
exports.PersonneMetier = PersonneMetier;
var DossierMetier = /** @class */ (function () {
    function DossierMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numDossier"),
        tslib_1.__metadata("design:type", Number)
    ], DossierMetier.prototype, "num_dossier", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("demandePrefecture"),
        tslib_1.__metadata("design:type", String)
    ], DossierMetier.prototype, "demande_prefecture", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("copiePermis"),
        tslib_1.__metadata("design:type", String)
    ], DossierMetier.prototype, "copie_permis", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateReceptionDossier"),
        tslib_1.__metadata("design:type", Date)
    ], DossierMetier.prototype, "date_reception_dossier", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numPermis"),
        tslib_1.__metadata("design:type", String)
    ], DossierMetier.prototype, "num_permis", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("codePrefecture"),
        tslib_1.__metadata("design:type", Number)
    ], DossierMetier.prototype, "code_prefecture", void 0);
    DossierMetier = tslib_1.__decorate([
        Bean_1.default
    ], DossierMetier);
    return DossierMetier;
}());
exports.DossierMetier = DossierMetier;
var PrefectureMetier = /** @class */ (function () {
    function PrefectureMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("codePrefecture"),
        tslib_1.__metadata("design:type", Number)
    ], PrefectureMetier.prototype, "code_prefecture", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("Region"),
        tslib_1.__metadata("design:type", String)
    ], PrefectureMetier.prototype, "region", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("Departement"),
        tslib_1.__metadata("design:type", String)
    ], PrefectureMetier.prototype, "departement", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("Prefecture"),
        tslib_1.__metadata("design:type", String)
    ], PrefectureMetier.prototype, "prefecture", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("Adresse"),
        tslib_1.__metadata("design:type", String)
    ], PrefectureMetier.prototype, "adresse", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("codePostal"),
        tslib_1.__metadata("design:type", Number)
    ], PrefectureMetier.prototype, "code_postal", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("Ville"),
        tslib_1.__metadata("design:type", String)
    ], PrefectureMetier.prototype, "ville", void 0);
    PrefectureMetier = tslib_1.__decorate([
        Bean_1.default
    ], PrefectureMetier);
    return PrefectureMetier;
}());
exports.PrefectureMetier = PrefectureMetier;

//# sourceMappingURL=user-mod.js.map
