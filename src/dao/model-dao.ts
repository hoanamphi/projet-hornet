import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";

import { PrefectureAttributes, PrefectureModel } from "src/models/model-prefecture";
import { ValiseAttributes, ValiseModel } from "src/models/model-valise";

import { PermisFVMAttributes, PermisFVMModel } from "src/models/fvm/model-permis";
import { PersonneFVMAttributes, PersonneFVMModel } from "src/models/fvm/model-personne";
import { DossierFVMAttributes, DossierFVMModel } from "src/models/fvm/model-dossier";
import { DemandeAuthentificationFVMAttributes, DemandeAuthentificationFVMModel } from "src/models/fvm/model-demandeauthentification";
import { ReleveFVMAttributes, ReleveFVMModel } from "src/models/fvm/model-releve";
import { NoteVerbaleReleveFVMAttributes, NoteVerbaleReleveFVMModel } from "src/models/fvm/model-noteverbale-releve";
import { NoteVerbaleFVMAttributes, NoteVerbaleFVMModel } from "src/models/fvm/model-noteverbale";

import { PermisMVFAttributes, PermisMVFModel } from "src/models/mvf/model-permis";
import { PersonneMVFAttributes, PersonneMVFModel } from "src/models/mvf/model-personne";
import { DossierMVFAttributes, DossierMVFModel } from "src/models/mvf/model-dossier";
import { NoteVerbalePermisMVFAttributes, NoteVerbalePermisMVFModel } from "src/models/mvf/model-noteverbale-permis";
import { NoteVerbaleMVFAttributes, NoteVerbaleMVFModel } from "src/models/mvf/model-noteverbale";
import { AttestationMVFAttributes, AttestationMVFModel } from "src/models/mvf/model-attestation";
import { BordereauAttestationMVFAttributes, BordereauAttestationMVFModel } from "src/models/mvf/model-bordereau-attestation";
import { BordereauMVFAttributes, BordereauMVFModel } from "src/models/mvf/model-bordereau";

import { RoleAttributes, RoleModel } from "../models/auth/model-role";
import { UtilisateurAttributes, UtilisateurModel } from "../models/auth/seq-user-mod";
import { RoleUtilisateurAttributes, RoleUtilisateurModel } from "../models/auth/model-role_utilisateur";

import { Entity } from "hornet-js-database/src/decorators/dec-seq-entity";
import { injectable, Scope, Side } from "hornet-js-core/src/inject/injectable";
import { HornetSequelizeModel } from "hornet-js-database/src/sequelize/hornet-sequelize-model";
import { inject } from "hornet-js-core/src/inject/inject";
import { HornetSequelizeInstanceModel } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.model-dao");

@injectable(ModelDAO, Scope.SINGLETON, Side.SERVER)
export class ModelDAO extends HornetSequelizeModel {

  @Entity("prefecture", PrefectureModel)
  public prefectureEntity: HornetSequelizeInstanceModel<PrefectureAttributes>;

  @Entity("valise", ValiseModel)
  public valiseEntity: HornetSequelizeInstanceModel<ValiseAttributes>;

  @Entity("permis_fvm", PermisFVMModel)
  public permisFVMEntity: HornetSequelizeInstanceModel<PermisFVMAttributes>;

  @Entity("permis_mvf", PermisMVFModel)
  public permisMVFEntity: HornetSequelizeInstanceModel<PermisMVFAttributes>;

  @Entity("personne_fvm", PersonneFVMModel)
  public personneFVMEntity: HornetSequelizeInstanceModel<PersonneFVMAttributes>;

  @Entity("personne_mvf", PersonneMVFModel)
  public personneMVFEntity: HornetSequelizeInstanceModel<PersonneMVFAttributes>;

  @Entity("dossier_fvm", DossierFVMModel)
  public dossierFVMEntity: HornetSequelizeInstanceModel<DossierFVMAttributes>;

  @Entity("dossier_mvf", DossierMVFModel)
  public dossierMVFEntity: HornetSequelizeInstanceModel<DossierMVFAttributes>;

  @Entity("demande_authentification_fvm", DemandeAuthentificationFVMModel)
  public demandeAuthenthificationFVMEntity: HornetSequelizeInstanceModel<DemandeAuthentificationFVMAttributes>;

  @Entity("releve_fvm", ReleveFVMModel)
  public releveFVMEntity: HornetSequelizeInstanceModel<ReleveFVMAttributes>;

  @Entity("note_verbale_releve_fvm", NoteVerbaleReleveFVMModel)
  public noteVerbaleReleveFVMEntity: HornetSequelizeInstanceModel<NoteVerbaleReleveFVMAttributes>;

  @Entity("note_verbale_fvm", NoteVerbaleFVMModel)
  public noteVerbaleFVMEntity: HornetSequelizeInstanceModel<NoteVerbaleFVMAttributes>;

  @Entity("note_verbale_permismvf", NoteVerbalePermisMVFModel)
  public noteVerbalePermisMVFEntity: HornetSequelizeInstanceModel<NoteVerbalePermisMVFAttributes>;

  @Entity("note_verbale_mvf", NoteVerbaleMVFModel)
  public MVFEntity: HornetSequelizeInstanceModel<NoteVerbaleMVFAttributes>;

  @Entity("attestation_mvf", AttestationMVFModel)
  public attestationMVFEntity: HornetSequelizeInstanceModel<AttestationMVFAttributes>;

  @Entity("bordereau_attestation_mvf", BordereauAttestationMVFModel)
  public bordereauAttestationMVFEntity: HornetSequelizeInstanceModel<BordereauAttestationMVFAttributes>;

  @Entity("bordereau_mvf", BordereauMVFModel)
  public bordereauMVFEntity: HornetSequelizeInstanceModel<BordereauMVFAttributes>;

  @Entity("utilisateur", UtilisateurModel)
  public utilisateurEntity: HornetSequelizeInstanceModel<UtilisateurAttributes>;

  @Entity("role", RoleModel)
  public roleEntity: HornetSequelizeInstanceModel<RoleAttributes>;

  @Entity("role_utilisateur", RoleUtilisateurModel)
  public roleUtilisateurEntity: HornetSequelizeInstanceModel<RoleUtilisateurAttributes>;

  constructor(@inject("databaseConfigName")conf?: string) {
    super(conf);
  }
}
