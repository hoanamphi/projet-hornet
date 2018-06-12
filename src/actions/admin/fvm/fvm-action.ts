import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe générique parent des Classes d'action
import { RouteActionService } from "hornet-js-core/src/routes/abstract-routes";
// Classe définissant les services utilisés dans les formulaires
import { ServerFormService } from "src/services/page/admin/fvm/server-form-service";
// Classe définissant les services utilisés dans les pages standards
import {ClientListService} from "src/services/page/admin/fvm/client-list-service";
// Classes nécessaires pour la génération de pdfs et l'affichage de fichiers
import {ResultFile} from "hornet-js-core/src/result/result-file";
import {ResultPDF} from "hornet-js-core/src/result/result-pdf";
import {MediaTypes} from "hornet-js-core/src/protocol/media-type";
import {DispositionType} from "hornet-js-core/src/result/disposition-type";
// Classes métier des données stockées dans la base
import {CopieNoteVerbaleMAECIFVMMetier, CopiePermisFVMMetier} from "src/models/fvm/fvm-mod";
import {PrefectureMetier, ValiseMetier} from "src/models/common-mod";

const logger: Logger = Utils.getLogger("projet-hornet.actions.admin.fvm_actions");

/**
 * Classe d'action gérant l'insertion d'un nouveau dossier dans la base
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class InserDossier extends RouteActionService<any, ServerFormService> {

  /* Objet JSON contenant deux attributs :
      error : Classe de l'erreur retournée
      reason : Motif de l'erreur
  */
  private Error = {"error": null, "reason": null};

  /**
   * Méthode exécutant un service d'insertion d'un dossier dans la base de données
   * @returns {Promise<any>}
   */
  execute(): Promise<any> {
    logger.trace("ACTION inser - FormDossierFVMAction.InserDossier");
    
    /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
        body : Objet JSON contenant les données passées dans le corps de la requête
        files : Tableau d'objets Multer.File (Contenu Multipart encapsulant les fichiers importés par l'utilisateur)      
     */
    
    // Variable : Objet JSON : contient les données à passer en entrée du service
    let data = this.req.body;
    
    // Si le tableau contient au moins deux fichiers
    if (this.req.files[0] != null && this.req.files[1] != null) {
      
      // Si les fichiers sont des PDF
      if (this.req.files[0].mimetype != "pdf" && this.req.files[1].mimetype != "pdf") {
        // Concaténer le contenu des objets aux autres données
        data["copie_permis"] = {};
        data["copie_permis"].nom = this.req.files[0].originalname;
        data["copie_permis"].mimetype = this.req.files[0].mimetype;
        data["copie_permis"].encoding = this.req.files[0].encoding;
        data["copie_permis"].size = this.req.files[0].size;
        data["copie_permis"].data = this.req.files[0].buffer;

        data["copie_note_verbale_maeci"] = {};
        data["copie_note_verbale_maeci"].nom = this.req.files[1].originalname;
        data["copie_note_verbale_maeci"].mimetype = this.req.files[1].mimetype;
        data["copie_note_verbale_maeci"].encoding = this.req.files[1].encoding;
        data["copie_note_verbale_maeci"].size = this.req.files[1].size;
        data["copie_note_verbale_maeci"].data = this.req.files[1].buffer;
      } else {
        // Retourner une erreur
        this.Error.error = new Error("FileUploadError");
        this.Error.reason = "Les fichiers doivent être des PDF";
        return Promise.resolve(this.Error);
      }
      
      return this.getService().insererDonnee(data);
    } else {
      // Retourner une erreur
      this.Error.error = new Error("FileUploadError");
      this.Error.reason = "Deux fichiers sont requis en entrée";
      return Promise.resolve(this.Error);
    }
  }
}

/**
 * Classe d'action gérant l'insertion d'une nouvelle demande d'authentification dans la base
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class InserDemandeAuthentification extends RouteActionService<any, ServerFormService> {

  /**
   * Méthode exécutant un service d'insertion d'une demande d'authentification dans la base de données
   * @returns {Promise<any>}
   */
  execute(): Promise<any> {
    logger.trace("ACTION inser - FormDemandeAuthentificationFVMAction.InserDemandeAuthentification");

    /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
        body : Objet JSON contenant les données passées dans le corps de la requête
     */

    // Variable : Objet JSON : contient les données à passer en entrée du service
    let data = this.req.body;

    return this.getService().insererDemandeAuthentification(data);
  }
}

/**
 * Classe d'action gérant l'insertion d'une nouvelle valise dans la base
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class InserValise extends RouteActionService<any, ServerFormService> {

  /**
   * Méthode exécutant un service d'insertion d'une valise dans la base de données
   * @returns {Promise<any>}
   */
  execute(): Promise<any> {
    logger.trace("ACTION inser - FormDemandeAuthentificationFVMAction.InserValise");

    /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
        body : Objet JSON contenant les données passées dans le corps de la requête
     */

    // Variable : Objet JSON : contient les données à passer en entrée du service
    let data = this.req.body;
    
    return this.getService().insererValise(data);
  }
}

/**
 * Classe d'action gérant la suppression d'un dossier dans la base
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class DeleteDossier extends RouteActionService<any, ClientListService> {

  /**
   * Méthode exécutant un service de suppression d'un dossier dans la base de données
   * @returns {Promise<any>}
   */
  execute(): Promise<any> {
    logger.trace("ACTION delete - RecordListFVMAction.DeleteDossier");

    /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
        body : Objet JSON contenant les données passées dans le corps de la requête
     */

    // Variable : Objet JSON : contient les données à passer en entrée du service
    let data = this.req.body;

    return this.getService().deleteDossier(data);
  }
}

/**
 * Classe d'action gérant la suppression d'une demande d'authentification dans la base
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class DeleteDemandeAuthentification extends RouteActionService<any, ClientListService> {

  /**
   * Méthode exécutant un service de suppression d'une demande d'authentification dans la base de données
   * @returns {Promise<any>}
   */
  execute(): Promise<any> {
    logger.trace("ACTION delete - RecordDetailsFVMAction.DeleteDemandeAuthentification");

    /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
        body : Objet JSON contenant les données passées dans le corps de la requête
     */

    // Variable : Objet JSON : contient les données à passer en entrée du service
    let data = this.req.body;

    return this.getService().deleteDemandeAuthentification(data);
  }
}

/**
 * Classe d'action gérant le listage des préfectures stockées dans la base de données
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class ListPrefecture extends RouteActionService<any, ServerFormService> {

  /**
   * Méthode retournant la liste des préfectures stockées dans la base de données
   * @returns {Promise<Array<PrefectureMetier>>} Liste des préfectures stockées dans la base
   */
  execute(): Promise<Array<PrefectureMetier>> {
    logger.trace("ACTION list - FormDossierFVMAction.ListPrefecture");

    return this.getService().getListePrefectures();
  }
}

/**
 * Classe d'action gérant le listage des valises stockées dans la base
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class ListValise extends RouteActionService<any, ServerFormService> {

  /**
   * Méthode retournant la liste des valises stockées dans la base de donénes
   * @returns {Promise<Array<ValiseMetier>>} Liste des valises stockées dans la base
   */
  execute(): Promise<Array<ValiseMetier>> {
    logger.trace("ACTION list - FormDemandeAuthentificationFVMAction.ListValise");

    return this.getService().getListeValises();
  }
}

/**
 * Classe d'action gérant le listage des dossiers stockés dans la base
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class ListDossier extends RouteActionService<any, ClientListService> {

  /**
   * Méthode retournant la liste des dossiers stockés dans la base de données
   * @returns {Promise<Array<any>>} Liste des dossiers stockés dans la base
   */
  execute(): Promise<Array<any>> {
    logger.trace("ACTION list - RecordListFVMAction.ListDossier");

    return this.getService().getListeDossiers();
  }
}

/**
 * Classe d'action gérant le retour du dossier correspondant aux attributs donnés en entrée
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class GetDossier extends RouteActionService<any, ClientListService> {

  /**
   * Méthode retournant le dossier correspondant aux attributs donnés en entrée
   * @returns {Promise<any>} Dossier correspondant aux attributs donnés en entrée
   */
  execute(): Promise<any> {
    logger.trace("ACTION list - RecordDetailsFVMAction.GetDossier");

    /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
        body : Objet JSON contenant les données passées dans le corps de la requête
     */

    // Variable : Objet JSON : contient les données à passer en entrée du service
    let data = this.req.body;

    return this.getService().getDossier(data);
  }
}

/**
 * Classe d'action gérant le retour de la demande d'authentification correspondant aux attributs donnés en entrée
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class GetDemandeAuthentification extends RouteActionService<any, ClientListService> {

  /**
   * Méthode retournant la demande d'authentification correspondant aux attributs donnés en entrée
   * @returns {Promise<any>} Demande d'authentification correspondant aux attributs donnés en entrée
   */
  execute(): Promise<any> {
    logger.trace("ACTION list - RecordDetailsFVMAction.GetDemandeAuthentification");

    /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
        body : Objet JSON contenant les données passées dans le corps de la requête
     */

    // Variable : Objet JSON : contient les données à passer en entrée du service
    let data = this.req.body;

    return this.getService().getDemandeAuthentification(data);
  }
}

/* TODO
export class GetReleve extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getReleve(data);
  }
}

export class GetNoteVerbale extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getNoteVerbale(data);
  }
}
*/

/**
 * Classe d'action gérant le retour de la copie d'un permis de conduire
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class GetCopiePermis extends RouteActionService<{"idCopiePermis": number}, ClientListService> {

  /**
   * Méthode retournant la copie d'un permis de conduire
   * @returns {Promise<ResultFile>} Copie d'un permis de conduire sous la forme d'un HornetResult
   */
  execute(): Promise<ResultFile> {
    logger.trace("ACTION file - RecordDetailsFVMAction.GetCopiePermis");

    return this.getService().getCopiePermis(this.attributes.idCopiePermis).then((copiePermis: CopiePermisFVMMetier) => {

      // Réponse de type fichier joint
      return new ResultFile(
        {
          // Contenu du fichier
          "data": copiePermis.data,
          "filename": copiePermis.nom,
          "encoding": copiePermis.encoding,
          "size": copiePermis.size,
          // Affichage du contenu du fichier directement dans le navigateur
          "dispositionType": DispositionType.INLINE
        }, MediaTypes.fromMime(copiePermis.mimetype)
      );
    });
  }
}

/**
 * Classe d'action gérant le retour de la copie d'une note verbale du MAECI
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class GetCopieNoteVerbaleMAECI extends RouteActionService<{"idCopieNoteVerbaleMAECI": number}, ClientListService> {

  /**
   * Méthode retournant la copie d'une note verbale du MAECI
   * @returns {Promise<ResultFile>} Copie d'une note verbale du MAECI sous la forme d'un HornetResult
   */
  execute(): Promise<ResultFile> {
    logger.trace("ACTION file - RecordDetailsFVMAction.getCopieNoteVerbaleMAECI");

    return this.getService().getCopieNoteVerbaleMAECI(this.attributes.idCopieNoteVerbaleMAECI).then((copieNoteVerbaleMAECI: CopieNoteVerbaleMAECIFVMMetier) => {

      // Réponse de type fichier joint
      return new ResultFile(
        {
          // Contenu du fichier
          "data": copieNoteVerbaleMAECI.data,
          "filename": copieNoteVerbaleMAECI.nom,
          "encoding": copieNoteVerbaleMAECI.encoding,
          "size": copieNoteVerbaleMAECI.size,
          // Affichage du contenu du fichier directement dans le navigateur
          "dispositionType": DispositionType.INLINE
        }, MediaTypes.fromMime(copieNoteVerbaleMAECI.mimetype)
      );
    });
  }
}

/**
 * Classe d'action gérant la génération d'un document de demande d'authentification
 * @extends {RouteActionService<any, ServerFormService>} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
export class GetPDFDemandeAuthentification extends RouteActionService<{"idPermis": number, "data": string}, ClientListService> {

  /**
   * Méthode générant un document de demande d'authentification
   * @returns {Promise<ResultPDF>} Demande d'authentification sous la forme d'un Hornet Result
   */
  execute(): Promise<ResultPDF> {
    logger.trace("ACTION file - RecordDetailsFVMAction.GetPDFDemandeAuthentification");

    // Variable : Tableau de chaînes de caractères : paramètres variables entrés par l'utilisateur
    let dataString = this.attributes.data.split("+");
    if(dataString[4] == null) {
      dataString[4] = "";
    }

    return this.getService().getPDFDemandeAuthentification(this.attributes.idPermis).then(result=>{
      // Variables : Objets JSON : paramètres variables dans le modèle de la demande d'authentification
      let dossier = result.dossier[0];
      let demandeAuthentification = result.demandeAuthentification[0];

      // Réponse de type PDF
      return new ResultPDF({
        fonts: {
          // Fichiers sources définissant la police TimesNewRoman
          Times_New_Roman: {
            normal: "src/resources/fonts/Times_New_Roman_Normal.ttf",
            bold: "src/resources/fonts/Times_New_Roman_Bold.ttf",
            italics: "src/resources/fonts/Times_New_Roman_Italic.ttf",
            bolditalics: "src/resources/fonts/Times_New_Roman_BoldItalic.ttf"
          }
        },

        // Définition du fichier PDF
        definition: {
          pageSize: "A4",

          // Contenu du fichier PDF
          content: [
            {
              columns: [
                {
                  width: "30%",
                  stack: [
                    {text: "AMBASSADE DE FRANCE AU MAROC", bold: true, fontSize: 11},
                    {text:"__________", margin: [0,0,0,30]},
                    {text:"SERVICE COMMUN DE GESTION", margin: [0,0,0,10], bold: true, italics: true, fontSize: 9},
                    {text: "N°"+demandeAuthentification.numDemandeAuthentification+"/SCG", margin: [0,0,0,30], fontSize: 10},
                  ],
                  alignment: "center"
                },
                {
                  width: "80",
                  image: "src/resources/img/RepubliqueFrancaiseImage.png",
                  alignment: "center"
                }
              ],
              columnGap: 30
            },

            {text:"Service des Permis de Conduire", bold: true, italics: true, fontSize: 10},

            {text:"Affaire suivie par", bold: true, italics: true, fontSize: 10},

            {text:"MME "+dataString[0].toUpperCase()+" "+this.capitalize(dataString[1]), margin: [5,0,0,0], bold: true, italics: true, fontSize: 10},

            {text:this.capitalize(dataString[1])+"."+this.capitalize(dataString[0])+"@diplomatie.gouv.fr", fontSize: 10},

            {
              stack: [
                {text: dataString[2].toUpperCase()+" "+dossier.prefecture.toUpperCase()},
                {text: dataString[3].toUpperCase()},
                {text: dossier.adresse.toUpperCase()},
                {text: (dossier.codePostal+" "+dossier.ville).toUpperCase()+" "+dataString[4]}
              ],
              margin: [100, 60, 0, 70],
              alignment: "center"
            },

            {text: "OBJET : Demande d'authentification d'un permis de conduire", margin: [0,0,0,30]},

            {
              stack: [
                {text: "Madame, Monsieur,", margin: [0, 0, 0, 30]},
                {text: "Je vous demande de bien vouloir certifier l'authenticité du titre, dont vous trouverez ci-joint copie appartenant à :", margin: [0, 0, 0, 30]},
                {
                  stack: [
                    {text: dossier.sexe+" "+dossier.nom.toUpperCase()+" "+(dossier.prenom[0].toUpperCase()+dossier.prenom.slice(1))},
                    {text: "Né(e) le "+new Date(dossier.dateDeNaissance).toLocaleDateString()},
                    {text: "À "+dossier.villeDeNaissance.toUpperCase()+" / "+dossier.paysDeNaissance.toUpperCase()}
                  ],
                  margin: [0, 0, 0, 30]
                },
                {
                  stack: [
                    {text: "À déposé son permis de conduire"},
                    {text: "N° "+dossier.numPermis},
                    {text: "Délivré le "+new Date(dossier.dateDeDelivrance).toLocaleDateString()},
                    {text: "Catégorie(s) mentionnée(s) sur le permis"}
                  ],
                  margin: [0, 0, 0, 30]
                },
                {text: "En vue d'obtenir un permis Marocain.", margin: [0, 0, 0, 30]},
                {text: "Je vous prie d'agréer, Madame, Monsieur, l'assurance de ma considération distinguée.", margin: [0, 0, 0, 30]}
              ],
              margin: [50, 0, 0, 0]
            }
          ],

          defaultStyle: {
            font: "Times_New_Roman",
            alignment: "justify",
            fontSize: 12
          }
        }
      });
    });
  }

  /**
   * Méthode mettant la première lettre d'un mot en majuscule
   * @param {string} entry Chaîne de caractères à mettre sous le format : [A-Z]{1}[a-z]*
   * @returns {string} Chaîne de caractères mise sous le format : [A-Z]{1}[a-z]*
   */
  capitalize(entry: string): string {

    return entry[0].toUpperCase()+entry.slice(1).toLowerCase();
  }
}