import Bean from "hornet-js-bean/src/decorators/Bean";
import Map from "hornet-js-bean/src/decorators/Map";
import Alias from "hornet-js-bean/src/decorators/Alias";

@Bean
export class PermisFVMMetier {
  @Map()
  @Alias("idPermis")
  id_permis_fvm: number;

  @Map()
  @Alias("numPermis")
  num_permis: string;

  @Map()
  @Alias("idCopiePermis")
  id_copie_permis_fvm: number;

  @Map()
  @Alias("dateDeDelivrance")
  date_de_delivrance: Date;

  @Map()
  @Alias("idPersonne")
  id_personne_fvm: number;

  @Map()
  @Alias("idDossier")
  id_dossier_fvm: number;

  @Map()
  @Alias("idPrefecturedelivrance")
  id_prefecture_delivrance: number;
}

@Bean
export class PersonneFVMMetier {
  @Map()
  @Alias("idPersonne")
  id_personne_fvm: number;

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
  @Alias("villeDeNaissance")
  ville_de_naissance: string;

  @Map()
  @Alias("paysDeNaissance")
  pays_de_naissance: string;

  @Map()
  @Alias("idPermis")
  id_permis_fvm: number;
}

@Bean
export class DossierFVMMetier {
  @Map()
  @Alias("idDossier")
  id_dossier_fvm: number;

  @Map()
  @Alias("idCopieNoteVerbaleMAECI")
  id_copie_note_verbale_maeci_fvm: number;

  @Map()
  @Alias("dateReceptionDossier")
  date_reception_dossier: Date;

  @Map()
  @Alias("idPermis")
  id_permis_fvm: number;
}

@Bean
export class DemandeAuthentificationFVMMetier {
  @Map()
  @Alias("idDemandeAuthentification")
  id_demande_authentification_fvm: number;

  @Map()
  @Alias("numDemandeAuthentification")
  num_demande_authentification: string;

  @Map()
  @Alias("dateDuTraitement")
  date_du_traitement: Date;

  @Map()
  @Alias("idPermis")
  id_permis_fvm: number;

  @Map()
  @Alias("numValise")
  num_valise: number;
}

@Bean
export class ReleveFVMMetier {
  @Map()
  @Alias("idReleve")
  id_releve_fvm: number;

  @Map()
  @Alias("idCopieReleve")
  id_copie_releve_fvm: number;

  @Map()
  @Alias("idCopieCourrierPrefecture")
  id_copie_courrier_prefecture_fvm: number;

  @Map()
  @Alias("dateReceptionReleve")
  date_reception_releve: Date;

  @Map()
  @Alias("idPermis")
  id_permis_fvm: number;
}

@Bean
export class NoteVerbaleReleveFVMMetier {
  @Map()
  @Alias("idNoteVerbaleReleve")
  id_note_verbale_releve_fvm: number;

  @Map()
  @Alias("idReleve")
  id_releve_fvm: number;

  @Map()
  @Alias("idNoteVerbale")
  id_note_verbale_fvm: number;
}

@Bean
export class NoteVerbaleFVMMetier {
  @Map()
  @Alias("idNoteVerbale")
  id_note_verbale_fvm: number;

  @Map()
  @Alias("numNoteVerbale")
  num_note_verbale: number;

  @Map()
  @Alias("dateEnvoiDeLaReponseAuMAECI")
  date_envoi_de_la_reponse_au_maeci: Date;
}

@Bean
export class CopiePermisFVMMetier {
  @Map()
  @Alias("idCopiePermis")
  id_copie_permis_fvm: number;

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
  id_permis_fvm: number;
}

@Bean
export class CopieNoteVerbaleMAECIFVMMetier {
  @Map()
  @Alias("idCopieNoteVerbaleMAECI")
  id_copie_note_verbale_maeci_fvm: number;

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
  id_dossier_fvm: number;
}

@Bean
export class CopieReleveFVMMetier {
  @Map()
  @Alias("idCopieReleve")
  id_copie_releve_fvm: number;

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
  @Alias("idReleve")
  id_releve_fvm: number;
}

@Bean
export class CopieCourrierPrefectureFVMMetier {
  @Map()
  @Alias("idCopieCourrierPrefecture")
  id_copie_courrier_prefecture_fvm: number;

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
  @Alias("idReleve")
  id_releve_fvm: number;
}