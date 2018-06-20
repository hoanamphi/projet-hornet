import { DataRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
// Classes d'action à effectuer
import {
  DeleteDemandeAuthentification,
  DeleteDossier,
  GetCopieNoteVerbaleMAECI,
  GetCopiePermis,
  GetDemandeAuthentification,
  GetDossier,
  GetPDFDemandeAuthentification,
  ListDossier
} from "src/actions/admin/fvm/fvm-action";
// Classe du service utilisé par la Classe d'action
import {PageServiceImplData} from "src/services/data/admin/fvm/page-service-impl-data";
// Classe de routes client parente de la Classe de routes serveur
import RecordRoutesClient from "src/routes/admin/fvm/record-client-routes";
// Classes permettant de mettre en place l'authentification
import {Roles} from 'src/utils/roles';
import {Injector} from "hornet-js-core/src/inject/injector";

/**
 * Classe définissant les sous-routes Serveur de la lazy route "/fvmrecordserver"
 * @extends {RecordRoutesClient}
 */
export default class RecordListRoutesServer extends RecordRoutesClient {

  /**
   * @constructor
   */
  constructor() {
    super();

    // Route effectuant une action de supression d'un dossier
    // L'action prend un service de type PageService en entrée
    this.addDataRoute("/delete",
      () => new DataRouteInfos(DeleteDossier, null, PageServiceImplData),
      Roles.ADMIN,
      "delete"
    );

    // Route effectuant une action de suppression d'une demande d'authentification
    // L'action prend un service de type PageService en entrée
    this.addDataRoute("/detailsDossiers/demandeauthentification/delete",
      () => new DataRouteInfos(DeleteDemandeAuthentification, null, PageServiceImplData),
      Roles.ADMIN,
      "delete"
    );

    // Route effectuant une action de listage des dossiers stockés dans la base
    // L'action prend un service de type PageService en entrée
    this.addDataRoute("/",
      () => new DataRouteInfos(ListDossier, null, PageServiceImplData),
      PUBLIC_ROUTE,
      "post"
    );

    // Route effectuant une action d'acquisition d'un dossier
    // L'action prend un service de type PageService en entrée
    this.addDataRoute("/detailsDossiers/dossier",
      () => new DataRouteInfos(GetDossier, null, PageServiceImplData),
      PUBLIC_ROUTE,
      "post"
    );

    // Route effectuant une action d'acquisition d'une demande d'authentification
    // L'action prend un service de type PageService en entrée
    this.addDataRoute("/detailsDossiers/demandeauthentification",
      () => new DataRouteInfos(GetDemandeAuthentification, null, PageServiceImplData),
      PUBLIC_ROUTE,
      "post"
    );

    /* TODO
    this.addDataRoute("/detailsDossiers/releve",
      (id) => new DataRouteInfos(GetReleve, null, PageServiceImplData),
      PUBLIC_ROUTE,
      "post"
    );

    this.addDataRoute("/detailsDossiers/noteverbale",
      (id) => new DataRouteInfos(GetNoteVerbale, null, PageServiceImplData),
      PUBLIC_ROUTE,
      "post"
    );
    */

    // Route effectuant une action d'acquisition d'une copie d'un permis de conduire
    // L'action prend un service de type PageService en entrée
    // L'attribut "idCopiePermis" est l'id de la copie du permis de conduire
    this.addDataRoute("/copiePermis/(\\d+)",
      (idCopiePermis) => new DataRouteInfos(GetCopiePermis, {"idCopiePermis": idCopiePermis}, PageServiceImplData),
      PUBLIC_ROUTE,
      "get"
    );

    // Route effectuant une action d'acquisition d'une copie d'une note verbale du MAECI
    // L'action prend un service de type PageService en entrée
    // L'attribut "idCopieNoteVerbaleMAECI" est l'id de la copie de la note verbale du MAECI
    this.addDataRoute("/copieNoteVerbaleMAECI/(\\d+)",
      (idCopieNoteVerbaleMAECI) => new DataRouteInfos(GetCopieNoteVerbaleMAECI, {"idCopieNoteVerbaleMAECI": idCopieNoteVerbaleMAECI}, PageServiceImplData),
      PUBLIC_ROUTE,
      "get"
    );

    // Route effectuant une action d'acquisition d'une demande d'authentification
    // L'action prend un service de type PageService en entrée
    // L'attribut "idPermis" est l'id du permis auquel appartient la demande d'authentification
    // L'attribut "data" contient les chaînes de caractères à donner en paramètre du document PDF
    this.addDataRoute("/pdfMake/demandeAuthentification/(\\d+)/((\\S+|\\s+)+)",
      (idPermis, data) => new DataRouteInfos(GetPDFDemandeAuthentification, {"idPermis": idPermis, "data": data}, PageServiceImplData),
      PUBLIC_ROUTE,
      "get"
    );
  }
}
