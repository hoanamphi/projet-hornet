// Classes métiers et Classes modèles des tables de la base de données
import { PrefectureAttributes, PrefectureModel } from "src/models/model-prefecture";
import { ValiseAttributes, ValiseModel } from "src/models/model-valise";

import { PermisFVMAttributes, PermisFVMModel } from "src/models/fvm/model-permis";
import { PersonneFVMAttributes, PersonneFVMModel } from "src/models/fvm/model-personne";
import { DossierFVMAttributes, DossierFVMModel } from "src/models/fvm/model-dossier";
import { DemandeAuthentificationFVMAttributes, DemandeAuthentificationFVMModel } from "src/models/fvm/model-demandeauthentification";
import { ReleveFVMAttributes, ReleveFVMModel } from "src/models/fvm/model-releve";
import { NoteVerbaleReleveFVMAttributes, NoteVerbaleReleveFVMModel } from "src/models/fvm/model-noteverbale-releve";
import { NoteVerbaleFVMAttributes, NoteVerbaleFVMModel } from "src/models/fvm/model-noteverbale";

import { CopiePermisFVMAttributes, CopiePermisFVMModel } from "src/models/fvm/model-copiepermis";
import { CopieNoteVerbaleMAECIFVMAttributes, CopieNoteVerbaleMAECIFVMModel } from "src/models/fvm/model-copienoteverbaleMAECI";
import { CopieReleveFVMAttributes, CopieReleveFVMModel } from "src/models/fvm/model-copiereleve";
import { CopieCourrierPrefectureFVMAttributes, CopieCourrierPrefectureFVMModel } from "src/models/fvm/model-copiecourrierprefecture";

import { PermisMVFAttributes, PermisMVFModel } from "src/models/mvf/model-permis";
import { PersonneMVFAttributes, PersonneMVFModel } from "src/models/mvf/model-personne";
import { DossierMVFAttributes, DossierMVFModel } from "src/models/mvf/model-dossier";
import { NoteVerbalePermisMVFAttributes, NoteVerbalePermisMVFModel } from "src/models/mvf/model-noteverbale-permis";
import { NoteVerbaleMVFAttributes, NoteVerbaleMVFModel } from "src/models/mvf/model-noteverbale";
import { AttestationMVFAttributes, AttestationMVFModel } from "src/models/mvf/model-attestation";
import { BordereauAttestationMVFAttributes, BordereauAttestationMVFModel } from "src/models/mvf/model-bordereau-attestation";
import { BordereauMVFAttributes, BordereauMVFModel } from "src/models/mvf/model-bordereau";

import { CopiePermisMVFAttributes, CopiePermisMVFModel } from "src/models/mvf/model-copiepermis";
import { CopieDemandePrefectureMVFAttributes, CopieDemandePrefectureMVFModel } from "src/models/mvf/model-copiedemandeprefecture";
import { CopieAttestationMVFAttributes, CopieAttestationMVFModel } from "src/models/mvf/model-copieattestation";
import { CopieNoteVerbaleMAECIMVFAttributes, CopieNoteVerbaleMAECIMVFModel } from "src/models/mvf/model-copienoteverbaleMAECI";

import { RoleAttributes, RoleModel } from "src/models/auth/model-role";
import { UtilisateurAttributes, UtilisateurModel } from "src/models/auth/seq-user-mod";
import { RoleUtilisateurAttributes, RoleUtilisateurModel } from "src/models/auth/model-role_utilisateur";

// Décorateur définissant une entité de la base de données
import { Entity } from "hornet-js-database/src/decorators/dec-seq-entity";
// Décorateur permettant la connexion à la base de données
import { injectable, Scope, Side } from "hornet-js-core/src/inject/injectable";
import { inject } from "hornet-js-core/src/inject/inject";
// Classe parente des Classes définissant les entités de la DAO
import { HornetSequelizeModel } from "hornet-js-database/src/sequelize/hornet-sequelize-model";
// Classe des entités de la DAO
import { HornetSequelizeInstanceModel } from "hornet-js-database/src/sequelize/hornet-sequelize-attributes";
// Classe permettant d'initialiser des relations entre des tables de la base
import {SequelizeUtils} from "hornet-js-database/src/sequelize/sequelize-utils";

/**
 * Classe définissant les entités (tables) de la DAO
 * @extends {HornetSequelizeModel}
 */
@injectable(ModelDAO, Scope.SINGLETON, Side.SERVER)
export class ModelDAO extends HornetSequelizeModel {

  /* Une entité de la DAO est basée sur les tables de la base de données :
      @Entity( [nom de la table dans la base de données], [Modèle de la table] )
      public [Entité] : HornetSequelizeInstanceModel<[Attributs de la table]>
   */

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

  /**
   * @constructor
   * @param {string} conf - chaîne de caractères permettant la connexion à la base
   */
  constructor(@inject("databaseConfigName")conf?: string) {
    super(conf);

    // Initialise les relations entre les tables role et utilisateur
    this.initUtilisateurEntity();
    this.initRoleEntity();
  }

  /**
   * Méthode créant une relation One to Many entre la table utilisateur et la table role, au travers de la table role_utilisateur
   */
  private initUtilisateurEntity(): void {
    SequelizeUtils.initRelationBelongsToMany({ fromEntity: this.utilisateurEntity, toEntity: this.roleEntity, alias: "listeRole", foreignKey: "id_utilisateur", throughTable: "role_utilisateur" });
  }

  /**
   * Méthode créant une relation One to Many entre la table role et la table utilisateur, au travers de la table role_utilisateur
   */
  private initRoleEntity(): void {
    SequelizeUtils.initRelationBelongsToMany({ fromEntity: this.roleEntity, toEntity: this.utilisateurEntity, alias: "listeUser", foreignKey: "id_role", throughTable: "role_utilisateur" });
  }
}
