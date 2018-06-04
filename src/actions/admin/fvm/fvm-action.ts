import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { RouteActionService } from "hornet-js-core/src/routes/abstract-routes";
import { ServerFormService } from "src/services/page/admin/fvm/server-form-service";
import {ClientListService} from "../../../services/page/admin/fvm/client-list-service";
import {ResultDOC} from "hornet-js-core/src/result/result-doc";
import {ResultFile} from "hornet-js-core/src/result/result-file";
import {MediaTypes} from "hornet-js-core/src/protocol/media-type";
import {CopieNoteVerbaleMAECIFVMMetier, CopiePermisFVMMetier} from "../../../models/fvm/fvm-mod";
import {ResultJSON} from "hornet-js-core/src/result/result-json";
import {ResultPDF} from "hornet-js-core/src/result/result-pdf";
import merge = require("lodash/merge");
import mergeWith = require("lodash/mergeWith");
import {DispositionType} from "hornet-js-core/src/result/disposition-type";
import {OptionsPDF} from "hornet-js-core/src/result/hornet-result-interface";

const logger: Logger = Utils.getLogger("projet-hornet.actions.admin.permis_actions");

export class InserDossier extends RouteActionService<any, ServerFormService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    if(this.req.files[0] != null){
      data["copie_permis"] = {};
      data["copie_permis"].nom = this.req.files[0].originalname;
      data["copie_permis"].mimetype = this.req.files[0].mimetype;
      data["copie_permis"].encoding = this.req.files[0].encoding;
      data["copie_permis"].size = this.req.files[0].size;
      data["copie_permis"].data = this.req.files[0].buffer;
    }

    if(this.req.files[1] != null){
      data["copie_note_verbale_maeci"] = {};
      data["copie_note_verbale_maeci"].nom = this.req.files[1].originalname;
      data["copie_note_verbale_maeci"].mimetype = this.req.files[1].mimetype;
      data["copie_note_verbale_maeci"].encoding = this.req.files[1].encoding;
      data["copie_note_verbale_maeci"].size = this.req.files[1].size;
      data["copie_note_verbale_maeci"].data = this.req.files[1].buffer;
    }

    return this.getService().insererDonnee(data);
  }
}

export class InserDemandeAuthentification extends RouteActionService<any, ServerFormService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().insererDemandeAuthentification(data);
  }
}

export class InserValise extends RouteActionService<any, ServerFormService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;
    
    return this.getService().insererValise(data);
  }
}

export class ListePrefecture extends RouteActionService<any, ServerFormService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    return this.getService().getListePrefectures();
  }
}

export class ListeValise extends RouteActionService<any, ServerFormService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    return this.getService().getListeValises();
  }
}

export class ListeDossiers extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    return this.getService().getListeDossiers();
  }
}

export class GetDossier extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getDossier(data);
  }
}

export class GetDemandeAuthentification extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getDemandeAuthentification(data);
  }
}

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

export class GetCopiePermis extends RouteActionService<{"idCopiePermis": number}, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    return this.getService().getCopiePermis(this.attributes.idCopiePermis).then((copiePermis: CopiePermisFVMMetier) => {
      return new ResultFile({"data": copiePermis.data,
          "filename": copiePermis.nom,
          "encoding": copiePermis.encoding,
          "size": copiePermis.size,
          "dispositionType": DispositionType.INLINE
        }, MediaTypes.fromMime(copiePermis.mimetype));
    });
  }
}

export class GetCopieNoteVerbaleMAECI extends RouteActionService<{"idCopieNoteVerbaleMAECI": number}, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    return this.getService().getCopieNoteVerbaleMAECI(this.attributes.idCopieNoteVerbaleMAECI).then((copieNoteVerbaleMAECI: CopieNoteVerbaleMAECIFVMMetier) => {
      return new ResultFile({"data": copieNoteVerbaleMAECI.data,
        "filename": copieNoteVerbaleMAECI.nom,
        "encoding": copieNoteVerbaleMAECI.encoding,
        "size": copieNoteVerbaleMAECI.size,
        "dispositionType": DispositionType.INLINE
      }, MediaTypes.fromMime(copieNoteVerbaleMAECI.mimetype));
    });
  }
}

export class GetPDFDemandeAuthentification extends RouteActionService<{"idPermis": number, "data": string}, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let dataString = this.attributes.data.split("+");

    return this.getService().getPDFDemandeAuthentification(this.attributes.idPermis).then(result=>{
      let dossier = result.dossier[0];
      let demandeAuthentification = result.demandeAuthentification[0];

      return Promise.resolve(new ResultPDF({
        fonts: {
          Times_New_Roman: {
            normal: "src/resources/fonts/Times_New_Roman_Normal.ttf",
            bold: "src/resources/fonts/Times_New_Roman_Bold.ttf",
            italics: "src/resources/fonts/Times_New_Roman_Italic.ttf",
            bolditalics: "src/resources/fonts/Times_New_Roman_BoldItalic.ttf"
          }
        },
        definition: {
          pageSize: "A4",
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
              margin: [150, 60, 0, 70]
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
      }));
    });
  }

  capitalize(entry: string): string {
    return entry[0].toUpperCase()+entry.slice(1).toLowerCase();
  }
}