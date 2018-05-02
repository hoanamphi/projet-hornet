"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Bean_1 = require("hornet-js-bean/src/decorators/Bean");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var Alias_1 = require("hornet-js-bean/src/decorators/Alias");
var PermisFVMMetier = /** @class */ (function () {
    function PermisFVMMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], PermisFVMMetier.prototype, "id_permis_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numPermis"),
        tslib_1.__metadata("design:type", String)
    ], PermisFVMMetier.prototype, "num_permis", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopiePermis"),
        tslib_1.__metadata("design:type", Number)
    ], PermisFVMMetier.prototype, "id_copie_permis_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateDeDelivrance"),
        tslib_1.__metadata("design:type", Date)
    ], PermisFVMMetier.prototype, "date_de_delivrance", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPersonne"),
        tslib_1.__metadata("design:type", Number)
    ], PermisFVMMetier.prototype, "id_personne_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idDossier"),
        tslib_1.__metadata("design:type", Number)
    ], PermisFVMMetier.prototype, "id_dossier_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPrefecturedelivrance"),
        tslib_1.__metadata("design:type", Number)
    ], PermisFVMMetier.prototype, "id_prefecture_delivrance", void 0);
    PermisFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], PermisFVMMetier);
    return PermisFVMMetier;
}());
exports.PermisFVMMetier = PermisFVMMetier;
var PersonneFVMMetier = /** @class */ (function () {
    function PersonneFVMMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPersonne"),
        tslib_1.__metadata("design:type", Number)
    ], PersonneFVMMetier.prototype, "id_personne_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nom"),
        tslib_1.__metadata("design:type", String)
    ], PersonneFVMMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("prenom"),
        tslib_1.__metadata("design:type", String)
    ], PersonneFVMMetier.prototype, "prenom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateDeNaissance"),
        tslib_1.__metadata("design:type", Date)
    ], PersonneFVMMetier.prototype, "date_de_naissance", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("villeDeNaissance"),
        tslib_1.__metadata("design:type", String)
    ], PersonneFVMMetier.prototype, "ville_de_naissance", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("paysDeNaissance"),
        tslib_1.__metadata("design:type", String)
    ], PersonneFVMMetier.prototype, "pays_de_naissance", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], PersonneFVMMetier.prototype, "id_permis_fvm", void 0);
    PersonneFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], PersonneFVMMetier);
    return PersonneFVMMetier;
}());
exports.PersonneFVMMetier = PersonneFVMMetier;
var DossierFVMMetier = /** @class */ (function () {
    function DossierFVMMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idDossier"),
        tslib_1.__metadata("design:type", Number)
    ], DossierFVMMetier.prototype, "id_dossier_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieNoteVerbaleMAECI"),
        tslib_1.__metadata("design:type", Number)
    ], DossierFVMMetier.prototype, "id_copie_note_verbale_maeci_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateReceptionDossier"),
        tslib_1.__metadata("design:type", Date)
    ], DossierFVMMetier.prototype, "date_reception_dossier", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], DossierFVMMetier.prototype, "id_permis_fvm", void 0);
    DossierFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], DossierFVMMetier);
    return DossierFVMMetier;
}());
exports.DossierFVMMetier = DossierFVMMetier;
var DemandeAuthentificationFVMMetier = /** @class */ (function () {
    function DemandeAuthentificationFVMMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idDemandeAuthentification"),
        tslib_1.__metadata("design:type", Number)
    ], DemandeAuthentificationFVMMetier.prototype, "id_demande_authentification_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numDemandeAuthentification"),
        tslib_1.__metadata("design:type", String)
    ], DemandeAuthentificationFVMMetier.prototype, "num_demande_authentification", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateDuTraitement"),
        tslib_1.__metadata("design:type", Date)
    ], DemandeAuthentificationFVMMetier.prototype, "date_du_traitement", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], DemandeAuthentificationFVMMetier.prototype, "id_permis_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numValise"),
        tslib_1.__metadata("design:type", Number)
    ], DemandeAuthentificationFVMMetier.prototype, "num_valise", void 0);
    DemandeAuthentificationFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], DemandeAuthentificationFVMMetier);
    return DemandeAuthentificationFVMMetier;
}());
exports.DemandeAuthentificationFVMMetier = DemandeAuthentificationFVMMetier;
var ReleveFVMMetier = /** @class */ (function () {
    function ReleveFVMMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idReleve"),
        tslib_1.__metadata("design:type", Number)
    ], ReleveFVMMetier.prototype, "id_releve_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieReleve"),
        tslib_1.__metadata("design:type", Number)
    ], ReleveFVMMetier.prototype, "id_copie_releve_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieCourrierPrefecture"),
        tslib_1.__metadata("design:type", Number)
    ], ReleveFVMMetier.prototype, "id_copie_courrier_prefecture_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateReceptionReleve"),
        tslib_1.__metadata("design:type", Date)
    ], ReleveFVMMetier.prototype, "date_reception_releve", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], ReleveFVMMetier.prototype, "id_permis_fvm", void 0);
    ReleveFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], ReleveFVMMetier);
    return ReleveFVMMetier;
}());
exports.ReleveFVMMetier = ReleveFVMMetier;
var NoteVerbaleReleveFVMMetier = /** @class */ (function () {
    function NoteVerbaleReleveFVMMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idNoteVerbaleReleve"),
        tslib_1.__metadata("design:type", Number)
    ], NoteVerbaleReleveFVMMetier.prototype, "id_note_verbale_releve_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idReleve"),
        tslib_1.__metadata("design:type", Number)
    ], NoteVerbaleReleveFVMMetier.prototype, "id_releve_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idNoteVerbale"),
        tslib_1.__metadata("design:type", Number)
    ], NoteVerbaleReleveFVMMetier.prototype, "id_note_verbale_fvm", void 0);
    NoteVerbaleReleveFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], NoteVerbaleReleveFVMMetier);
    return NoteVerbaleReleveFVMMetier;
}());
exports.NoteVerbaleReleveFVMMetier = NoteVerbaleReleveFVMMetier;
var NoteVerbaleFVMMetier = /** @class */ (function () {
    function NoteVerbaleFVMMetier() {
    }
    NoteVerbaleFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], NoteVerbaleFVMMetier);
    return NoteVerbaleFVMMetier;
}());
exports.NoteVerbaleFVMMetier = NoteVerbaleFVMMetier;
//# sourceMappingURL=fvm-mod.js.map