import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
// Classes d'action à effectuer
import {InserDemandeAuthentification, InserValise, ListValise} from "src/actions/admin/fvm/fvm-action";
// Classe du service utilisé par la Classe d'action
import { FormServiceImpl } from "src/services/data/admin/fvm/server-form-service-impl-data";
// Classe de routes client parente de la Classe de routes serveur
import FormulaireDemandeAuthentificationRoutesClient from "src/routes/admin/fvm/form2-client-routes";
// Classes permettant de mettre en place l'authentification
import {Roles} from "src/utils/roles";
import {Injector} from "hornet-js-core/src/inject/injector";

/**
 * Classe définissant les sous-routes Serveur de la lazy route "/fvm/form2server"
 * @extends {FormulaireDemandeAuthentificationRoutesClient}
 */
export default class FormulaireDemandeAuthentificationRoutesServer extends FormulaireDemandeAuthentificationRoutesClient {

  /**
   * @constructor
   */
  constructor() {
    super();

    // Route effectuant un action d'insertion d'une demande d'authentification
    // L'action prend un service de type FormService en entrée
    this.addDataRoute("/",
      () => new DataRouteInfos(InserDemandeAuthentification, null, FormServiceImpl),
      Roles.ADMIN,
      "post"
    );

    // Route effectuant un action d'insertion d'une valise
    // L'action prend un service de type FormService en entrée
    this.addDataRoute("/insertValise",
      () => new DataRouteInfos(InserValise, null, FormServiceImpl),
      Roles.ADMIN,
      "post"
    );

    // Route effectuant un action de listage des valises stockées dans la base
    // L'action prend un service de type FormService en entrée
    this.addDataRoute("/listValises",
      () => new DataRouteInfos(ListValise, null, FormServiceImpl),
      PUBLIC_ROUTE,
      "post"
    );
  }
}