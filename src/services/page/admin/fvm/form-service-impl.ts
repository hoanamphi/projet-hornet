import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de service PAGE
import { ServicePage } from "hornet-js-core/src/services/service-page";
// Classe implémentée par la Classe de service
import { FormService } from "src/services/page/admin/fvm/form-service";
// Classe permettant d'effectuer des requêtes HTTP sur le serveur
import {HornetRequest} from "hornet-js-core/src/services/hornet-superagent-request";

const logger: Logger = Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");

/**
 * Classe de service Page utilisée par les formulaires
 * @extends {ServicePage}
 * @implements {FormService}
 */
export class FormServiceImpl extends ServicePage implements FormService {

  /**
   * Méthode effectuant une requête HTTP permettant l'insertion d'un dossier dans la base de données
   * @param data données de formulaire
   * @returns {Promise<any>}
   */
  insererDossier(data: any): Promise<any> {
    logger.trace("SERVICE PAGE inser - PageService.InserDossier");

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmform1server"),
      data: data,
    };

    // Passer les fichiers uploadés en pièce jointe de la requête
    request.attach = [];
    request.attach.push({field: "copie_permis", file: data.copie_permis, fileName: data.copie_permis.name});
    request.attach.push({field: "copie_note_verbale_maeci", file: data.copie_note_verbale_maeci, fileName: data.copie_note_verbale_maeci.name});

    return this.fetch(request);
  }

  /**
   * Méthode effectuant une requête HTTP permettant l'insertion d'une demande d'authentification dans la base de données
   * @param data données de formulaire
   * @returns {Promise<any>}
   */
  insererDemandeAuthentification(data: {"num_valise": number, "num_demande_authentification": any, "id_permis": number}): Promise<any> {
    logger.trace("SERVICE PAGE inser - PageService.InserDemandeAuthentification");

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmform2server"),
      data: data
    };

    return this.fetch(request);
  }

  /**
   * Méthode effectuant une requête HTTP permettant l'insertion d'une valise dans la base de données
   * @param data données de formulaire
   * @returns {Promise<any>}
   */
  insererValise(data: {"num_valise": number, "date_valise": Date}): Promise<any> {
    logger.trace("SERVICE PAGE inser - PageService.InserValise");

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmform2server/insertValise"),
      data: data
    };

    return this.fetch(request);
  }

  /**
   * Méthode effectuant une requête HTTP permettant la récupération de la liste des préfectures stockées dans la base
   * @returns {Promise<Array<any>>} Liste des préfectures stockées dans la base
   */
  getListePrefecture(): Promise<Array<any>> {
    logger.trace("SERVICE PAGE get - PageService.GetListPrefecture");

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmform1server/listPrefectures")
    };

    return this.fetch(request);
  }

  /**
   * Méthode effectuant une requête HTTP permettant la récupération de la liste des valises stockées dans la base
   * @returns {Promise<Array<any>>} Liste des valises stockées dans la base
   */
  getListeValise(): Promise<Array<any>> {
    logger.trace("SERVICE PAGE get - PageService.GetListValise");

    let request: HornetRequest = {
      method: "post",
      url: this.buildUrl("/fvmform2server/listValises")
    };

    return this.fetch(request);
  }
}
