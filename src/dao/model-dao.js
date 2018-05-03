"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var model_prefecture_1 = require("src/models/model-prefecture");
var model_valise_1 = require("src/models/model-valise");
var model_permis_1 = require("src/models/fvm/model-permis");
var model_personne_1 = require("src/models/fvm/model-personne");
var model_dossier_1 = require("src/models/fvm/model-dossier");
var model_demandeauthentification_1 = require("src/models/fvm/model-demandeauthentification");
var model_releve_1 = require("src/models/fvm/model-releve");
var model_noteverbale_releve_1 = require("src/models/fvm/model-noteverbale-releve");
var model_noteverbale_1 = require("src/models/fvm/model-noteverbale");
var model_permis_2 = require("src/models/mvf/model-permis");
var model_personne_2 = require("src/models/mvf/model-personne");
var model_dossier_2 = require("src/models/mvf/model-dossier");
var model_noteverbale_permis_1 = require("src/models/mvf/model-noteverbale-permis");
var model_noteverbale_2 = require("src/models/mvf/model-noteverbale");
var model_attestation_1 = require("src/models/mvf/model-attestation");
var model_bordereau_attestation_1 = require("src/models/mvf/model-bordereau-attestation");
var model_bordereau_1 = require("src/models/mvf/model-bordereau");
var model_role_1 = require("../models/auth/model-role");
var seq_user_mod_1 = require("../models/auth/seq-user-mod");
var model_role_utilisateur_1 = require("../models/auth/model-role_utilisateur");
var dec_seq_entity_1 = require("hornet-js-database/src/decorators/dec-seq-entity");
var injectable_1 = require("hornet-js-core/src/inject/injectable");
var hornet_sequelize_model_1 = require("hornet-js-database/src/sequelize/hornet-sequelize-model");
var inject_1 = require("hornet-js-core/src/inject/inject");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.model-dao");
var ModelDAO = /** @class */ (function (_super) {
    tslib_1.__extends(ModelDAO, _super);
    function ModelDAO(conf) {
        return _super.call(this, conf) || this;
    }
    ModelDAO_1 = ModelDAO;
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("prefecture", model_prefecture_1.PrefectureModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "prefectureEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("valise", model_valise_1.ValiseModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "valiseEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("permisFVM", model_permis_1.PermisFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "permisFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("permisMVF", model_permis_2.PermisMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "permisMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("personneFVM", model_personne_1.PersonneFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "personneFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("personneMVF", model_personne_2.PersonneMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "personneMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("dossierFVM", model_dossier_1.DossierFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "dossierFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("dossierMVF", model_dossier_2.DossierMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "dossierMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("demandeAuthentificationFVM", model_demandeauthentification_1.DemandeAuthentificationFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "demandeAuthenthificationFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("releveFVM", model_releve_1.ReleveFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "releveFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("noteVerbaleReleveFVM", model_noteverbale_releve_1.NoteVerbaleReleveFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "noteVerbaleReleveFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("noteVerbaleFVM", model_noteverbale_1.NoteVerbaleFVMModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "noteVerbaleFVMEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("noteVerbalePermisMVF", model_noteverbale_permis_1.NoteVerbalePermisMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "noteVerbalePermisMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("noteVerbaleMVF", model_noteverbale_2.NoteVerbaleMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "MVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("attestationMVF", model_attestation_1.AttestationMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "attestationMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("bordereauAttestationMVF", model_bordereau_attestation_1.BordereauAttestationMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "bordereauAttestationMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("bordereauMVF", model_bordereau_1.BordereauMVFModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "bordereauMVFEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("utilisateur", seq_user_mod_1.UtilisateurModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "utilisateurEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("role", model_role_1.RoleModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "roleEntity", void 0);
    tslib_1.__decorate([
        dec_seq_entity_1.Entity("role_utilisateur", model_role_utilisateur_1.RoleUtilisateurModel),
        tslib_1.__metadata("design:type", Object)
    ], ModelDAO.prototype, "roleUtilisateurEntity", void 0);
    ModelDAO = ModelDAO_1 = tslib_1.__decorate([
        injectable_1.injectable(ModelDAO_1, injectable_1.Scope.SINGLETON, injectable_1.Side.SERVER),
        tslib_1.__param(0, inject_1.inject("databaseConfigName")),
        tslib_1.__metadata("design:paramtypes", [String])
    ], ModelDAO);
    return ModelDAO;
    var ModelDAO_1;
}(hornet_sequelize_model_1.HornetSequelizeModel));
exports.ModelDAO = ModelDAO;

//# sourceMappingURL=model-dao.js.map
