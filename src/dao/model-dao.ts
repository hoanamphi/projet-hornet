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

  @Entity("permisFVM", PermisFVMModel)
  public permisFVMEntity: HornetSequelizeInstanceModel<PermisFVMAttributes>;

  @Entity("permisMVF", PermisMVFModel)
  public permisMVFEntity: HornetSequelizeInstanceModel<PermisMVFAttributes>;

  @Entity("personneFVM", PersonneFVMModel)
  public personneFVMEntity: HornetSequelizeInstanceModel<PersonneFVMAttributes>;

  @Entity("personneMVF", PersonneMVFModel)
  public personneMVFEntity: HornetSequelizeInstanceModel<PersonneMVFAttributes>;

  @Entity("dossierFVM", DossierFVMModel)
  public dossierFVMEntity: HornetSequelizeInstanceModel<DossierFVMAttributes>;

  @Entity("dossierMVF", DossierMVFModel)
  public dossierMVFEntity: HornetSequelizeInstanceModel<DossierMVFAttributes>;

  @Entity("demandeAuthentificationFVM", DemandeAuthentificationFVMModel)
  public demandeAuthenthificationFVMEntity: HornetSequelizeInstanceModel<DemandeAuthentificationFVMAttributes>;

  @Entity("releveFVM", ReleveFVMModel)
  public releveFVMEntity: HornetSequelizeInstanceModel<ReleveFVMAttributes>;

  @Entity("noteVerbaleReleveFVM", NoteVerbaleReleveFVMModel)
  public noteVerbaleReleveFVMEntity: HornetSequelizeInstanceModel<NoteVerbaleReleveFVMAttributes>;

  @Entity("noteVerbaleFVM", NoteVerbaleFVMModel)
  public noteVerbaleFVMEntity: HornetSequelizeInstanceModel<NoteVerbaleFVMAttributes>;

  @Entity("noteVerbalePermisMVF", NoteVerbalePermisMVFModel)
  public noteVerbalePermisMVFEntity: HornetSequelizeInstanceModel<NoteVerbalePermisMVFAttributes>;

  @Entity("noteVerbaleMVF", NoteVerbaleMVFModel)
  public MVFEntity: HornetSequelizeInstanceModel<NoteVerbaleMVFAttributes>;

  @Entity("attestationMVF", AttestationMVFModel)
  public attestationMVFEntity: HornetSequelizeInstanceModel<AttestationMVFAttributes>;

  @Entity("bordereauAttestationMVF", BordereauAttestationMVFModel)
  public bordereauAttestationMVFEntity: HornetSequelizeInstanceModel<BordereauAttestationMVFAttributes>;

  @Entity("bordereauMVF", BordereauMVFModel)
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
