import Bean from "hornet-js-bean/src/decorators/Bean";
import Map from "hornet-js-bean/src/decorators/Map";
import Alias from "hornet-js-bean/src/decorators/Alias";

@Bean
export class PermisMVFMetier {
  @Map()
  @Alias("idPermis")
  id_permis_mvf: number;

  @Map()
  @Alias("numPermis")
  num_permis: string;

  @Map()
  @Alias("idCopiePermis")
  id_copie_permis_mvf: number;

  @Map()
  @Alias("idPersonne")
  id_personne_mvf: number;

  @Map()
  @Alias("idDossier")
  id_dossier_mvf: number;
}

@Bean
export class PersonneMVFMetier {
  @Map()
  @Alias("idPersonne")
  id_personne_mvf: number;

  @Map()
  @Alias("nom")
  nom: string;

  @Map()
  @Alias("prenom")
  prenom: string;

  @Map()
  @Alias("dateDeNaissance")
  date_de_naissance: Date;

  @Map()
  @Alias("idPermis")
  id_permis_mvf: number;
}

@Bean
export class DossierMVFMetier {
  @Map()
  @Alias("idDossier")
  id_dossier_mvf: number;

  @Map()
  @Alias("idCopieDemandePrefecture")
  id_copie_demande_prefecture_mvf: number;

  @Map()
  @Alias("dateReceptionDossier")
  date_reception_dossier: Date;

  @Map()
  @Alias("idPermis")
  id_permis_mvf: number;

  @Map()
  @Alias("idPrefectureEnvoi")
  id_prefecture_envoi: number;
}

@Bean
export class NoteVerbalePermisMVFMetier {
  @Map()
  @Alias("idNoteVerbalePermis")
  id_note_verbale_permis_mvf: number;

  @Map()
  @Alias("idPermis")
  id_permis_mvf: number;

  @Map()
  @Alias("idNoteVerbale")
  id_note_verbale_mvf: number;
}

@Bean
export class NoteVerbaleMVFMetier {
  @Map()
  @Alias("idNoteVerbale")
  id_note_verbale_mvf: number;

  @Map()
  @Alias("numNoteVerbale")
  num_note_verbale: number;

  @Map()
  @Alias("dateDuTraitement")
  date_du_traitement: Date;
}

@Bean
export class AttestationMVFMetier {
  @Map()
  @Alias("idAttestation")
  id_attestation_mvf: number;

  @Map()
  @Alias("idCopieAttestation")
  id_copie_attestation_mvf: number;

  @Map()
  @Alias("idCopieNoteVerbaleMAECI")
  id_copie_note_verbale_maeci_mvf: number;

  @Map()
  @Alias("dateReceptionAttestation")
  date_reception_attestation: Date;

  @Map()
  @Alias("idPermis")
  id_permis_mvf: number;
}

@Bean
export class BordereauAttestationMVFMetier {
  @Map()
  @Alias("idBordereauAttestation")
  id_bordereau_attestation_mvf: number;

  @Map()
  @Alias("idAttestation")
  id_attestation_mvf: number;

  @Map()
  @Alias("idBordereau")
  id_bordereau_mvf: number;
}

@Bean
export class BordereauMVFMetier {
  @Map()
  @Alias("idBordereau")
  id_bordereau_mvf: number;

  @Map()
  @Alias("numBordereau")
  num_bordereau: string;

  @Map()
  @Alias("dateEnvoiDeLaReponsePrefecture")
  date_envoi_de_la_reponse_prefecture: Date;

  @Map()
  @Alias("numValise")
  num_valise: number;
}

@Bean
export class CopiePermisMVFMetier {
  @Map()
  @Alias("idCopiePermis")
  id_copie_permis_mvf: number;

  @Map()
  @Alias("nom")
  nom: string;

  @Map()
  @Alias("mimetype")
  mimetype: string;

  @Map()
  @Alias("encoding")
  encoding: string;

  @Map()
  @Alias("size")
  size: number;

  @Map()
  @Alias("data")
  data: Buffer;

  @Map()
  @Alias("idPermis")
  id_permis_mvf: number;
}

@Bean
export class CopieDemandePrefectureMVFMetier {
  @Map()
  @Alias("idCopieDemandePrefecture")
  id_copie_demande_prefecture_mvf: number;

  @Map()
  @Alias("nom")
  nom: string;

  @Map()
  @Alias("mimetype")
  mimetype: string;

  @Map()
  @Alias("encoding")
  encoding: string;

  @Map()
  @Alias("size")
  size: number;

  @Map()
  @Alias("data")
  data: Buffer;

  @Map()
  @Alias("idDossier")
  id_dossier_mvf: number;
}

@Bean
export class CopieAttestationMVFMetier {
  @Map()
  @Alias("idCopieAttestation")
  id_copie_attestation_mvf: number;

  @Map()
  @Alias("nom")
  nom: string;

  @Map()
  @Alias("mimetype")
  mimetype: string;

  @Map()
  @Alias("encoding")
  encoding: string;

  @Map()
  @Alias("size")
  size: number;

  @Map()
  @Alias("data")
  data: Buffer;

  @Map()
  @Alias("idAttestation")
  id_attestation_mvf: number;
}

@Bean
export class CopieNoteVerbaleMAECIMVFMetier {
  @Map()
  @Alias("idCopieNoteVerbaleMAECI")
  id_copie_note_verbale_maeci_mvf: number;

  @Map()
  @Alias("nom")
  nom: string;

  @Map()
  @Alias("mimetype")
  mimetype: string;

  @Map()
  @Alias("encoding")
  encoding: string;

  @Map()
  @Alias("size")
  size: number;

  @Map()
  @Alias("data")
  data: Buffer;

  @Map()
  @Alias("idAttestation")
  id_attestation_mvf: number;
}