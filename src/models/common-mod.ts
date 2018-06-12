import Bean from "hornet-js-bean/src/decorators/Bean";
import Map from "hornet-js-bean/src/decorators/Map";
import Alias from "hornet-js-bean/src/decorators/Alias";

/* Classes métiers des objets utilisés dans les Classes de DAO
   Les attributes de la Classe métier sont définis ainsi :
    @Map( [Autre Classe métier] ) (si le type de l'attribut est une Classe métier)
    @Alias( [alias de l'attribut dans la Classe de DAO] )
    [nom de l'attribut dans la base de données] : [type de l'attribut]
*/

/**
 * Classe métier de la table prefecture
 */
@Bean
export class PrefectureMetier {
  @Map()
  @Alias("idPrefecture")
  id_prefecture: number;

  @Map()
  @Alias("region")
  region: string;

  @Map()
  @Alias("departement")
  departement: string;

  @Map()
  @Alias("prefecture")
  prefecture: string;

  @Map()
  @Alias("adresse")
  adresse: string;

  @Map()
  @Alias("codePostal")
  code_postal: number;

  @Map()
  @Alias("ville")
  ville: string;
}

/**
 * Classe métier de la table valise
 */
@Bean
export class ValiseMetier {
  @Map()
  @Alias("numValise")
  num_valise: number;

  @Map()
  @Alias("dateValise")
  date_valise: Date;
}