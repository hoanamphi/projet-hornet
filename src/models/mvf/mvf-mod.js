"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Bean_1 = require("hornet-js-bean/src/decorators/Bean");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var Alias_1 = require("hornet-js-bean/src/decorators/Alias");
var PermisMVFMetier = /** @class */ (function () {
    function PermisMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], PermisMVFMetier.prototype, "id_permis_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numPermis"),
        tslib_1.__metadata("design:type", String)
    ], PermisMVFMetier.prototype, "num_permis", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopiePermis"),
        tslib_1.__metadata("design:type", Number)
    ], PermisMVFMetier.prototype, "id_copie_permis_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPersonne"),
        tslib_1.__metadata("design:type", Number)
    ], PermisMVFMetier.prototype, "id_personne_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idDossier"),
        tslib_1.__metadata("design:type", Number)
    ], PermisMVFMetier.prototype, "id_dossier_mvf", void 0);
    PermisMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], PermisMVFMetier);
    return PermisMVFMetier;
}());
exports.PermisMVFMetier = PermisMVFMetier;
var PersonneMVFMetier = /** @class */ (function () {
    function PersonneMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPersonne"),
        tslib_1.__metadata("design:type", Number)
    ], PersonneMVFMetier.prototype, "id_personne_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nom"),
        tslib_1.__metadata("design:type", String)
    ], PersonneMVFMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("prenom"),
        tslib_1.__metadata("design:type", String)
    ], PersonneMVFMetier.prototype, "prenom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateDeNaissance"),
        tslib_1.__metadata("design:type", Date)
    ], PersonneMVFMetier.prototype, "date_de_naissance", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], PersonneMVFMetier.prototype, "id_permis_mvf", void 0);
    PersonneMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], PersonneMVFMetier);
    return PersonneMVFMetier;
}());
exports.PersonneMVFMetier = PersonneMVFMetier;
var DossierMVFMetier = /** @class */ (function () {
    function DossierMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idDossier"),
        tslib_1.__metadata("design:type", Number)
    ], DossierMVFMetier.prototype, "id_dossier_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieDemandePrefecture"),
        tslib_1.__metadata("design:type", Number)
    ], DossierMVFMetier.prototype, "id_copie_demande_prefecture_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateReceptionDossier"),
        tslib_1.__metadata("design:type", Date)
    ], DossierMVFMetier.prototype, "date_reception_dossier", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], DossierMVFMetier.prototype, "id_permis_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPrefectureEnvoi"),
        tslib_1.__metadata("design:type", Number)
    ], DossierMVFMetier.prototype, "id_prefecture_envoi", void 0);
    DossierMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], DossierMVFMetier);
    return DossierMVFMetier;
}());
exports.DossierMVFMetier = DossierMVFMetier;
var NoteVerbalePermisMVFMetier = /** @class */ (function () {
    function NoteVerbalePermisMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idNoteVerbalePermis"),
        tslib_1.__metadata("design:type", Number)
    ], NoteVerbalePermisMVFMetier.prototype, "id_note_verbale_permis_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], NoteVerbalePermisMVFMetier.prototype, "id_permis_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idNoteVerbale"),
        tslib_1.__metadata("design:type", Number)
    ], NoteVerbalePermisMVFMetier.prototype, "id_note_verbale_mvf", void 0);
    NoteVerbalePermisMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], NoteVerbalePermisMVFMetier);
    return NoteVerbalePermisMVFMetier;
}());
exports.NoteVerbalePermisMVFMetier = NoteVerbalePermisMVFMetier;
var NoteVerbaleMVFMetier = /** @class */ (function () {
    function NoteVerbaleMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idNoteVerbale"),
        tslib_1.__metadata("design:type", Number)
    ], NoteVerbaleMVFMetier.prototype, "id_note_verbale_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numNoteVerbale"),
        tslib_1.__metadata("design:type", Number)
    ], NoteVerbaleMVFMetier.prototype, "num_note_verbale", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateDuTraitement"),
        tslib_1.__metadata("design:type", Date)
    ], NoteVerbaleMVFMetier.prototype, "date_du_traitement", void 0);
    NoteVerbaleMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], NoteVerbaleMVFMetier);
    return NoteVerbaleMVFMetier;
}());
exports.NoteVerbaleMVFMetier = NoteVerbaleMVFMetier;
var AttestationMVFMetier = /** @class */ (function () {
    function AttestationMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idAttestation"),
        tslib_1.__metadata("design:type", Number)
    ], AttestationMVFMetier.prototype, "id_attestation_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieAttestation"),
        tslib_1.__metadata("design:type", Number)
    ], AttestationMVFMetier.prototype, "id_copie_attestation_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieNoteVerbaleMAECI"),
        tslib_1.__metadata("design:type", Number)
    ], AttestationMVFMetier.prototype, "id_copie_note_verbale_maeci_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateReceptionAttestation"),
        tslib_1.__metadata("design:type", Date)
    ], AttestationMVFMetier.prototype, "date_reception_attestation", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], AttestationMVFMetier.prototype, "id_permis_mvf", void 0);
    AttestationMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], AttestationMVFMetier);
    return AttestationMVFMetier;
}());
exports.AttestationMVFMetier = AttestationMVFMetier;
var BordereauAttestationMVFMetier = /** @class */ (function () {
    function BordereauAttestationMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idBordereauAttestation"),
        tslib_1.__metadata("design:type", Number)
    ], BordereauAttestationMVFMetier.prototype, "id_bordereau_attestation_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idAttestation"),
        tslib_1.__metadata("design:type", Number)
    ], BordereauAttestationMVFMetier.prototype, "id_attestation_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idBordereau"),
        tslib_1.__metadata("design:type", Number)
    ], BordereauAttestationMVFMetier.prototype, "id_bordereau_mvf", void 0);
    BordereauAttestationMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], BordereauAttestationMVFMetier);
    return BordereauAttestationMVFMetier;
}());
exports.BordereauAttestationMVFMetier = BordereauAttestationMVFMetier;
var BordereauMVFMetier = /** @class */ (function () {
    function BordereauMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idBordereau"),
        tslib_1.__metadata("design:type", Number)
    ], BordereauMVFMetier.prototype, "id_bordereau_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numBordereau"),
        tslib_1.__metadata("design:type", String)
    ], BordereauMVFMetier.prototype, "num_bordereau", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateEnvoiDeLaReponsePrefecture"),
        tslib_1.__metadata("design:type", Date)
    ], BordereauMVFMetier.prototype, "date_envoi_de_la_reponse_prefecture", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numValise"),
        tslib_1.__metadata("design:type", Number)
    ], BordereauMVFMetier.prototype, "num_valise", void 0);
    BordereauMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], BordereauMVFMetier);
    return BordereauMVFMetier;
}());
exports.BordereauMVFMetier = BordereauMVFMetier;
var CopiePermisMVFMetier = /** @class */ (function () {
    function CopiePermisMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopiePermis"),
        tslib_1.__metadata("design:type", Number)
    ], CopiePermisMVFMetier.prototype, "id_copie_permis_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nom"),
        tslib_1.__metadata("design:type", String)
    ], CopiePermisMVFMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("mimetype"),
        tslib_1.__metadata("design:type", String)
    ], CopiePermisMVFMetier.prototype, "mimetype", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("encoding"),
        tslib_1.__metadata("design:type", String)
    ], CopiePermisMVFMetier.prototype, "encoding", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("size"),
        tslib_1.__metadata("design:type", Number)
    ], CopiePermisMVFMetier.prototype, "size", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("data"),
        tslib_1.__metadata("design:type", Buffer)
    ], CopiePermisMVFMetier.prototype, "data", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPermis"),
        tslib_1.__metadata("design:type", Number)
    ], CopiePermisMVFMetier.prototype, "id_permis_mvf", void 0);
    CopiePermisMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], CopiePermisMVFMetier);
    return CopiePermisMVFMetier;
}());
exports.CopiePermisMVFMetier = CopiePermisMVFMetier;
var CopieDemandePrefectureMVFMetier = /** @class */ (function () {
    function CopieDemandePrefectureMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieDemandePrefecture"),
        tslib_1.__metadata("design:type", Number)
    ], CopieDemandePrefectureMVFMetier.prototype, "id_copie_demande_prefecture_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nom"),
        tslib_1.__metadata("design:type", String)
    ], CopieDemandePrefectureMVFMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("mimetype"),
        tslib_1.__metadata("design:type", String)
    ], CopieDemandePrefectureMVFMetier.prototype, "mimetype", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("encoding"),
        tslib_1.__metadata("design:type", String)
    ], CopieDemandePrefectureMVFMetier.prototype, "encoding", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("size"),
        tslib_1.__metadata("design:type", Number)
    ], CopieDemandePrefectureMVFMetier.prototype, "size", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("data"),
        tslib_1.__metadata("design:type", Buffer)
    ], CopieDemandePrefectureMVFMetier.prototype, "data", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idDossier"),
        tslib_1.__metadata("design:type", Number)
    ], CopieDemandePrefectureMVFMetier.prototype, "id_dossier_mvf", void 0);
    CopieDemandePrefectureMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], CopieDemandePrefectureMVFMetier);
    return CopieDemandePrefectureMVFMetier;
}());
exports.CopieDemandePrefectureMVFMetier = CopieDemandePrefectureMVFMetier;
var CopieAttestationMVFMetier = /** @class */ (function () {
    function CopieAttestationMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieAttestation"),
        tslib_1.__metadata("design:type", Number)
    ], CopieAttestationMVFMetier.prototype, "id_copie_attestation_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nom"),
        tslib_1.__metadata("design:type", String)
    ], CopieAttestationMVFMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("mimetype"),
        tslib_1.__metadata("design:type", String)
    ], CopieAttestationMVFMetier.prototype, "mimetype", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("encoding"),
        tslib_1.__metadata("design:type", String)
    ], CopieAttestationMVFMetier.prototype, "encoding", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("size"),
        tslib_1.__metadata("design:type", Number)
    ], CopieAttestationMVFMetier.prototype, "size", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("data"),
        tslib_1.__metadata("design:type", Buffer)
    ], CopieAttestationMVFMetier.prototype, "data", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idAttestation"),
        tslib_1.__metadata("design:type", Number)
    ], CopieAttestationMVFMetier.prototype, "id_attestation_mvf", void 0);
    CopieAttestationMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], CopieAttestationMVFMetier);
    return CopieAttestationMVFMetier;
}());
exports.CopieAttestationMVFMetier = CopieAttestationMVFMetier;
var CopieNoteVerbaleMAECIMVFMetier = /** @class */ (function () {
    function CopieNoteVerbaleMAECIMVFMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idCopieNoteVerbaleMAECI"),
        tslib_1.__metadata("design:type", Number)
    ], CopieNoteVerbaleMAECIMVFMetier.prototype, "id_copie_note_verbale_maeci_mvf", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("nom"),
        tslib_1.__metadata("design:type", String)
    ], CopieNoteVerbaleMAECIMVFMetier.prototype, "nom", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("mimetype"),
        tslib_1.__metadata("design:type", String)
    ], CopieNoteVerbaleMAECIMVFMetier.prototype, "mimetype", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("encoding"),
        tslib_1.__metadata("design:type", String)
    ], CopieNoteVerbaleMAECIMVFMetier.prototype, "encoding", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("size"),
        tslib_1.__metadata("design:type", Number)
    ], CopieNoteVerbaleMAECIMVFMetier.prototype, "size", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("data"),
        tslib_1.__metadata("design:type", Buffer)
    ], CopieNoteVerbaleMAECIMVFMetier.prototype, "data", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idAttestation"),
        tslib_1.__metadata("design:type", Number)
    ], CopieNoteVerbaleMAECIMVFMetier.prototype, "id_attestation_mvf", void 0);
    CopieNoteVerbaleMAECIMVFMetier = tslib_1.__decorate([
        Bean_1.default
    ], CopieNoteVerbaleMAECIMVFMetier);
    return CopieNoteVerbaleMAECIMVFMetier;
}());
exports.CopieNoteVerbaleMAECIMVFMetier = CopieNoteVerbaleMAECIMVFMetier;

//# sourceMappingURL=mvf-mod.js.map
