import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
// Classes d'action à effectuer
import { InserDossier, ListPrefecture } from "src/actions/admin/fvm/fvm-action";
// Classe du service utilisé par la Classe d'action
import { FormServiceImplData } from "src/services/data/admin/fvm/form-service-impl-data";
// Classe de routes client parente de la Classe de routes serveur
import FormulaireDossierRoutesClient from "src/routes/admin/fvm/form1-client-routes";
// Classes permettant de mettre en place l'authentification
import {Roles} from "src/utils/roles";
import {Injector} from "hornet-js-core/src/inject/injector";

/**
 * Classe définissant les sous-routes Serveur de la lazy route "/fvmform1server"
 * @extends {FormulaireDossierRoutesClient}
 */
export default class FormulaireDossierRoutesServer extends FormulaireDossierRoutesClient {

  /**
   * @constructor
   */
  constructor() {
    super();

    // Route effectuant une action d'insertion d'un dossier
    // L'action prend un service de type FormService en entrée
    this.addDataRoute("/",
       () => new DataRouteInfos(InserDossier, null, FormServiceImplData),
       Roles.ADMIN,
       "post"
    );

    // Route effectuant une action de listage des préfectures stockées dans la base
    // L'action prend un service de type FormService en entrée
    this.addDataRoute("/listPrefectures",
      () => new DataRouteInfos(ListPrefecture, null, FormServiceImplData),
      PUBLIC_ROUTE,
      "post"
    );
  }
}