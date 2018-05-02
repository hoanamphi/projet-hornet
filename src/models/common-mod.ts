import Bean from "hornet-js-bean/src/decorators/Bean";
import Map from "hornet-js-bean/src/decorators/Map";
import Alias from "hornet-js-bean/src/decorators/Alias";
import {BeanUtils} from "hornet-js-bean/src/bean-utils";

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

@Bean
export class ValiseMetier {
  @Map()
  @Alias("numValise")
  num_valise: number;

  @Map()
  @Alias("dateValise")
  date_valise: Date;
}