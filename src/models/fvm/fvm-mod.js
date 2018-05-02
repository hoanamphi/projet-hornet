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
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idNoteVerbale"),
        tslib_1.__metadata("design:type", Number)
    ], NoteVerbaleFVMMetier.prototype, "id_note_verbale_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numNoteVerbale"),
        tslib_1.__metadata("design:type", Number)
    ], NoteVerbaleFVMMetier.prototype, "num_note_verbale", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateEnvoiDeLaReponseAuMAECI"),
        tslib_1.__metadata("design:type", Date)
    ], NoteVerbaleFVMMetier.prototype, "date_envoi_de_la_reponse_au_maeci", void 0);
    NoteVerbaleFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], NoteVerbaleFVMMetier);
    return NoteVerbaleFVMMetier;
}());
exports.NoteVerbaleFVMMetier = NoteVerbaleFVMMetier;
var CopiePermisFVMMetier = /** @class */ (function () {
    function CopiePermisFVMMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopiePermis"),
        tslib_1.__metadata("design:type", Number)
    ], CopiePermisFVMMetier.prototype, "id_copie_permis_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nom"),
        tslib_1.__metadata("design:type", String)
    ], CopiePermisFVMMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("mimetype"),
        tslib_1.__metadata("design:type", String)
    ], CopiePermisFVMMetier.prototype, "mimetype", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("encoding"),
        tslib_1.__metadata("design:type", String)
    ], CopiePermisFVMMetier.prototype, "encoding", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("size"),
        tslib_1.__metadata("design:type", Number)
    ], CopiePermisFVMMetier.prototype, "size", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("data"),
        tslib_1.__metadata("design:type", Buffer)
    ], CopiePermisFVMMetier.prototype, "data", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], CopiePermisFVMMetier.prototype, "id_permis_fvm", void 0);
    CopiePermisFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], CopiePermisFVMMetier);
    return CopiePermisFVMMetier;
}());
exports.CopiePermisFVMMetier = CopiePermisFVMMetier;
var CopieNoteVerbaleMAECIFVMMetier = /** @class */ (function () {
    function CopieNoteVerbaleMAECIFVMMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieNoteVerbaleMAECI"),
        tslib_1.__metadata("design:type", Number)
    ], CopieNoteVerbaleMAECIFVMMetier.prototype, "id_copie_note_verbale_maeci_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nom"),
        tslib_1.__metadata("design:type", String)
    ], CopieNoteVerbaleMAECIFVMMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("mimetype"),
        tslib_1.__metadata("design:type", String)
    ], CopieNoteVerbaleMAECIFVMMetier.prototype, "mimetype", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("encoding"),
        tslib_1.__metadata("design:type", String)
    ], CopieNoteVerbaleMAECIFVMMetier.prototype, "encoding", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("size"),
        tslib_1.__metadata("design:type", Number)
    ], CopieNoteVerbaleMAECIFVMMetier.prototype, "size", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("data"),
        tslib_1.__metadata("design:type", Buffer)
    ], CopieNoteVerbaleMAECIFVMMetier.prototype, "data", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idDossier"),
        tslib_1.__metadata("design:type", Number)
    ], CopieNoteVerbaleMAECIFVMMetier.prototype, "id_dossier_fvm", void 0);
    CopieNoteVerbaleMAECIFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], CopieNoteVerbaleMAECIFVMMetier);
    return CopieNoteVerbaleMAECIFVMMetier;
}());
exports.CopieNoteVerbaleMAECIFVMMetier = CopieNoteVerbaleMAECIFVMMetier;
var CopieReleveFVMMetier = /** @class */ (function () {
    function CopieReleveFVMMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieReleve"),
        tslib_1.__metadata("design:type", Number)
    ], CopieReleveFVMMetier.prototype, "id_copie_releve_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nom"),
        tslib_1.__metadata("design:type", String)
    ], CopieReleveFVMMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("mimetype"),
        tslib_1.__metadata("design:type", String)
    ], CopieReleveFVMMetier.prototype, "mimetype", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("encoding"),
        tslib_1.__metadata("design:type", String)
    ], CopieReleveFVMMetier.prototype, "encoding", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("size"),
        tslib_1.__metadata("design:type", Number)
    ], CopieReleveFVMMetier.prototype, "size", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("data"),
        tslib_1.__metadata("design:type", Buffer)
    ], CopieReleveFVMMetier.prototype, "data", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idReleve"),
        tslib_1.__metadata("design:type", Number)
    ], CopieReleveFVMMetier.prototype, "id_releve_fvm", void 0);
    CopieReleveFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], CopieReleveFVMMetier);
    return CopieReleveFVMMetier;
}());
exports.CopieReleveFVMMetier = CopieReleveFVMMetier;
var CopieCourrierPrefectureFVMMetier = /** @class */ (function () {
    function CopieCourrierPrefectureFVMMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieCourrierPrefecture"),
        tslib_1.__metadata("design:type", Number)
    ], CopieCourrierPrefectureFVMMetier.prototype, "id_copie_courrier_prefecture_fvm", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nom"),
        tslib_1.__metadata("design:type", String)
    ], CopieCourrierPrefectureFVMMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("mimetype"),
        tslib_1.__metadata("design:type", String)
    ], CopieCourrierPrefectureFVMMetier.prototype, "mimetype", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("encoding"),
        tslib_1.__metadata("design:type", String)
    ], CopieCourrierPrefectureFVMMetier.prototype, "encoding", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("size"),
        tslib_1.__metadata("design:type", Number)
    ], CopieCourrierPrefectureFVMMetier.prototype, "size", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("data"),
        tslib_1.__metadata("design:type", Buffer)
    ], CopieCourrierPrefectureFVMMetier.prototype, "data", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idReleve"),
        tslib_1.__metadata("design:type", Number)
    ], CopieCourrierPrefectureFVMMetier.prototype, "id_releve_fvm", void 0);
    CopieCourrierPrefectureFVMMetier = tslib_1.__decorate([
        Bean_1.default
    ], CopieCourrierPrefectureFVMMetier);
    return CopieCourrierPrefectureFVMMetier;
}());
exports.CopieCourrierPrefectureFVMMetier = CopieCourrierPrefectureFVMMetier;

//# sourceMappingURL=fvm-mod.js.map
