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

import { CopiePermisFVMAttributes, CopiePermisFVMModel } from "../models/fvm/model-copiepermis";
import { CopieNoteVerbaleMAECIFVMAttributes, CopieNoteVerbaleMAECIFVMModel } from "../models/fvm/model-copienoteverbaleMAECI";
import { CopieReleveFVMAttributes, CopieReleveFVMModel } from "../models/fvm/model-copiereleve";
import { CopieCourrierPrefectureFVMAttributes, CopieCourrierPrefectureFVMModel } from "../models/fvm/model-copiecourrierprefecture";

import { PermisMVFAttributes, PermisMVFModel } from "src/models/mvf/model-permis";
import { PersonneMVFAttributes, PersonneMVFModel } from "src/models/mvf/model-personne";
import { DossierMVFAttributes, DossierMVFModel } from "src/models/mvf/model-dossier";
import { NoteVerbalePermisMVFAttributes, NoteVerbalePermisMVFModel } from "src/models/mvf/model-noteverbale-permis";
import { NoteVerbaleMVFAttributes, NoteVerbaleMVFModel } from "src/models/mvf/model-noteverbale";
import { AttestationMVFAttributes, AttestationMVFModel } from "src/models/mvf/model-attestation";
import { BordereauAttestationMVFAttributes, BordereauAttestationMVFModel } from "src/models/mvf/model-bordereau-attestation";
import { BordereauMVFAttributes, BordereauMVFModel } from "src/models/mvf/model-bordereau";

import { CopiePermisMVFAttributes, CopiePermisMVFModel } from "../models/mvf/model-copiepermis";
import { CopieDemandePrefectureMVFAttributes, CopieDemandePrefectureMVFModel } from "../models/mvf/model-copiedemandeprefecture";
import { CopieAttestationMVFAttributes, CopieAttestationMVFModel } from "../models/mvf/model-copieattestation";
import { CopieNoteVerbaleMAECIMVFAttributes, CopieNoteVerbaleMAECIMVFModel } from "../models/mvf/model-copienoteverbaleMAECI";

import { RoleAttributes, RoleModel } from "../models/auth/model-role";
import { UtilisateurAttributes, UtilisateurModel } from "../models/auth/seq-user-mod";
import { RoleUtilisateurAttributes, RoleUtilisateurModel } from "../models/auth/model-role_utilisateur";

import { Entity } from "hornet-js-database/src/decorators/dec-seq-entity";
import { injectable, Scope, Side } from "hornet-js-core/src/inject/injectable";
import { HornetSequelizeModel } from "hornet-js-database/src/sequelize/hornet-sequelize-model";
import { inject } from "hornet-js-core/src/inject/inject";
import { HornetSequelizeInstanceModel } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";
import {SequelizeUtils} from "hornet-js-database/src/sequelize/sequelize-utils";

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
  public noteVerbaleMVFEntity: HornetSequelizeInstanceModel<NoteVerbaleMVFAttributes>;

  @Entity("attestation_mvf", AttestationMVFModel)
  public attestationMVFEntity: HornetSequelizeInstanceModel<AttestationMVFAttributes>;

  @Entity("bordereau_attestation_mvf", BordereauAttestationMVFModel)
  public bordereauAttestationMVFEntity: HornetSequelizeInstanceModel<BordereauAttestationMVFAttributes>;

  @Entity("bordereau_mvf", BordereauMVFModel)
  public bordereauMVFEntity: HornetSequelizeInstanceModel<BordereauMVFAttributes>;

  @Entity("copie_permis_fvm", CopiePermisFVMModel)
  public copiePermisFVMEntity: HornetSequelizeInstanceModel<CopiePermisFVMAttributes>;

  @Entity("copie_note_verbale_maeci_fvm", CopieNoteVerbaleMAECIFVMModel)
  public copieNoteVerbaleMAECIFVMEntity: HornetSequelizeInstanceModel<CopieNoteVerbaleMAECIFVMAttributes>;

  @Entity("copie_releve_fvm", CopieReleveFVMModel)
  public copieReleveFVMEntity: HornetSequelizeInstanceModel<CopieReleveFVMAttributes>;

  @Entity("copie_courrier_prefecture_fvm", CopieCourrierPrefectureFVMModel)
  public copieCourrierPrefectureFVMEntity: HornetSequelizeInstanceModel<CopieCourrierPrefectureFVMAttributes>;

  @Entity("copie_permis_mvf", CopiePermisMVFModel)
  public copiePermisMVFEntity: HornetSequelizeInstanceModel<CopiePermisMVFAttributes>;

  @Entity("copie_attestation_mvf", CopieAttestationMVFModel)
  public copieAttestationMVFEntity: HornetSequelizeInstanceModel<CopieAttestationMVFAttributes>;

  @Entity("copie_note_verbale_maeci_mvf", CopieNoteVerbaleMAECIMVFModel)
  public copieNoteVerbaleMAECIMVFEntity: HornetSequelizeInstanceModel<CopieNoteVerbaleMAECIMVFAttributes>;

  @Entity("copie_demande_prefecture_mvf", CopieDemandePrefectureMVFModel)
  public copieDemandePrefectureMVFEntity: HornetSequelizeInstanceModel<CopieDemandePrefectureMVFAttributes>;

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
