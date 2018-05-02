import Bean from "hornet-js-bean/src/decorators/Bean";
import Map from "hornet-js-bean/src/decorators/Map";
import Alias from "hornet-js-bean/src/decorators/Alias";

@Bean
export class RoleMetier {
    @Map()
    @Alias("idRole")
    id: number;
    @Map()
    @Alias("rolNom")
    name: string;
}

@Bean
export class UtilisateurMetier {
    @Map()
    id: number;

    @Map()
    login: string;

    @Map()
    password: string;

    @Map()
    enabled: boolean;

    @Map(RoleMetier)
    @Alias("listeRole")
    roles: Array<RoleMetier>;
}

@Bean
export class PermisMetier {
    @Map()
    @Alias("numPermis")
    num_permis: string;

    @Map()
    @Alias("idPersonne")
    id_personne: number;

    @Map()
    @Alias("numDossier")
    num_dossier: number;
}

@Bean
export class PersonneMetier {
    @Map()
    @Alias("idPersonne")
    id_personne: number;

    @Map()
    @Alias("nomPersonne")
    nom: string;

    @Map()
    @Alias("prenomPersonne")
    prenom: string;

    @Map()
    @Alias("dateDeNaissance")
    date_de_naissance: Date;

    @Map()
    @Alias("numPermis")
    num_permis: string;
}

@Bean
export class DossierMetier {
    @Map()
    @Alias("numDossier")
    num_dossier: number;

    @Map()
    @Alias("demandePrefecture")
    demande_prefecture: string;

    @Map()
    @Alias("copiePermis")
    copie_permis: string;

    @Map()
    @Alias("dateReceptionDossier")
    date_reception_dossier: Date;

    @Map()
    @Alias("numPermis")
    num_permis: string;

    @Map()
    @Alias("codePrefecture")
    code_prefecture: number;
}

@Bean
export class PrefectureMetier {
    @Map()
    @Alias("codePrefecture")
    code_prefecture: number;

    @Map()
    @Alias("Region")
    region: string;

    @Map()
    @Alias("Departement")
    departement: string;

    @Map()
    @Alias("Prefecture")
    prefecture: string;

    @Map()
    @Alias("Adresse")
    adresse: string;

    @Map()
    @Alias("codePostal")
    code_postal: number;

    @Map()
    @Alias("Ville")
    ville: string;
}
