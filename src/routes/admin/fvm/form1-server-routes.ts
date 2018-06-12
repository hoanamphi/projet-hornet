import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
// Classes d'action à effectuer
import { InserDossier, ListPrefecture } from "src/actions/admin/fvm/fvm-action";
// Classe du service utilisé par la Classe d'action
import { FormServiceImpl } from "src/services/data/admin/fvm/server-form-service-impl-data";
// Classe de routes client parente de la Classe de routes serveur
import FormulaireDossierRoutesClient from "src/routes/admin/fvm/form1-client-routes";
// Classes permettant de mettre en place l'authentification
import {Roles} from "src/utils/roles";
import {Injector} from "hornet-js-core/src/inject/injector";

/**
 * Classe définissant les sous-routes Serveur de la lazy route "/fvm/form1server"
 * @extends {FormulaireDossierRoutesClient}
 */
export default class FormulaireDossierRoutesServer extends FormulaireDossierRoutesClient {

  /**
   * @constructor
   */
  constructor() {
    super();

    // Route effectuant un action d'insertion d'un dossier
    // L'action prend un service de type FormService en entrée
    this.addDataRoute("/",
       () => new DataRouteInfos(InserDossier, null, FormServiceImpl),
       Roles.ADMIN,
       "post"
    );

    // Route effectuant une action de listage des préfectures stockées dans la base
    // L'action prend un service de type FormService en entrée
    this.addDataRoute("/listPrefectures",
      () => new DataRouteInfos(ListPrefecture, null, FormServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );
  }
}