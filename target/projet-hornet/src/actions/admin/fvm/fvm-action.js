"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe générique parent des Classes d'action
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
// Classes nécessaires pour la génération de pdfs et l'affichage de fichiers
var result_file_1 = require("hornet-js-core/src/result/result-file");
var result_pdf_1 = require("hornet-js-core/src/result/result-pdf");
var media_type_1 = require("hornet-js-core/src/protocol/media-type");
var disposition_type_1 = require("hornet-js-core/src/result/disposition-type");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.actions.admin.fvm.fvm_action");
/* RouteActionService :
    Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
*/
/**
 * Classe d'action gérant l'insertion d'un nouveau dossier dans la base
 * @extends {RouteActionService<any, FormService>}
 */
var InserDossier = /** @class */ (function (_super) {
    tslib_1.__extends(InserDossier, _super);
    function InserDossier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Objet JSON contenant deux attributs : error : Classe de l'erreur retournée, reason : Motif de l'erreur
         * @type {{error: null, reason: null}}
         */
        _this.Error = { "error": null, "reason": null };
        return _this;
    }
    /**
     * Méthode exécutant un service d'insertion d'un dossier dans la base de données
     * @returns {Promise<any>}
     */
    InserDossier.prototype.execute = function () {
        logger.trace("ACTION inser - FormDossierFVMAction.InserDossier");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
            files : Tableau d'objets Multer.File (Contenu Multipart encapsulant les fichiers importés par l'utilisateur)
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
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
            }
            else {
                // Retourner une erreur
                this.Error.error = new Error("FileUploadError");
                this.Error.reason = "Les fichiers doivent être des PDF";
                return Promise.resolve(this.Error);
            }
            return this.getService().insererDossier(data);
        }
        else {
            // Retourner une erreur
            this.Error.error = new Error("FileUploadError");
            this.Error.reason = "Deux fichiers sont requis en entrée";
            return Promise.resolve(this.Error);
        }
    };
    return InserDossier;
}(abstract_routes_1.RouteActionService));
exports.InserDossier = InserDossier;
/**
 * Classe d'action gérant l'insertion d'une nouvelle demande d'authentification dans la base
 * @extends {RouteActionService<any, FormService>}
 */
var InserDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(InserDemandeAuthentification, _super);
    function InserDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode exécutant un service d'insertion d'une demande d'authentification dans la base de données
     * @returns {Promise<any>}
     */
    InserDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION inser - FormDemandeAuthentificationFVMAction.InserDemandeAuthentification");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().insererDemandeAuthentification(data);
    };
    return InserDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.InserDemandeAuthentification = InserDemandeAuthentification;
/**
 * Classe d'action gérant l'insertion d'une nouvelle valise dans la base
 * @extends {RouteActionService<any, FormService>}
 */
var InserValise = /** @class */ (function (_super) {
    tslib_1.__extends(InserValise, _super);
    function InserValise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode exécutant un service d'insertion d'une valise dans la base de données
     * @returns {Promise<any>}
     */
    InserValise.prototype.execute = function () {
        logger.trace("ACTION inser - FormDemandeAuthentificationFVMAction.InserValise");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().insererValise(data);
    };
    return InserValise;
}(abstract_routes_1.RouteActionService));
exports.InserValise = InserValise;
/**
 * Classe d'action gérant la suppression d'un dossier dans la base
 * @extends {RouteActionService<any, FormService>}
 */
var DeleteDossier = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteDossier, _super);
    function DeleteDossier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode exécutant un service de suppression d'un dossier dans la base de données
     * @returns {Promise<any>}
     */
    DeleteDossier.prototype.execute = function () {
        logger.trace("ACTION delete - RecordListFVMAction.DeleteDossier");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().deleteDossier(data);
    };
    return DeleteDossier;
}(abstract_routes_1.RouteActionService));
exports.DeleteDossier = DeleteDossier;
/**
 * Classe d'action gérant la suppression d'une demande d'authentification dans la base
 * @extends {RouteActionService<any, FormService>}
 */
var DeleteDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteDemandeAuthentification, _super);
    function DeleteDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode exécutant un service de suppression d'une demande d'authentification dans la base de données
     * @returns {Promise<any>}
     */
    DeleteDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION delete - RecordDetailsFVMAction.DeleteDemandeAuthentification");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().deleteDemandeAuthentification(data);
    };
    return DeleteDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.DeleteDemandeAuthentification = DeleteDemandeAuthentification;
/**
 * Classe d'action gérant le listage des préfectures stockées dans la base de données
 * @extends {RouteActionService<any, FormService>}
 */
var ListPrefecture = /** @class */ (function (_super) {
    tslib_1.__extends(ListPrefecture, _super);
    function ListPrefecture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la liste des préfectures stockées dans la base de données
     * @returns {Promise<Array<any>>} Liste des préfectures stockées dans la base
     */
    ListPrefecture.prototype.execute = function () {
        logger.trace("ACTION list - FormDossierFVMAction.ListPrefecture");
        return this.getService().getListePrefecture();
    };
    return ListPrefecture;
}(abstract_routes_1.RouteActionService));
exports.ListPrefecture = ListPrefecture;
/**
 * Classe d'action gérant le listage des valises stockées dans la base
 * @extends {RouteActionService<any, FormService>}
 */
var ListValise = /** @class */ (function (_super) {
    tslib_1.__extends(ListValise, _super);
    function ListValise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la liste des valises stockées dans la base de donénes
     * @returns {Promise<Array<ValiseAttributes>>} Liste des valises stockées dans la base
     */
    ListValise.prototype.execute = function () {
        logger.trace("ACTION list - FormDemandeAuthentificationFVMAction.ListValise");
        return this.getService().getListeValise();
    };
    return ListValise;
}(abstract_routes_1.RouteActionService));
exports.ListValise = ListValise;
/**
 * Classe d'action gérant le listage des dossiers stockés dans la base
 * @extends {RouteActionService<any, FormService>}
 */
var ListDossier = /** @class */ (function (_super) {
    tslib_1.__extends(ListDossier, _super);
    function ListDossier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la liste des dossiers stockés dans la base de données
     * @returns {Promise<Array<any>>} Liste des dossiers stockés dans la base
     */
    ListDossier.prototype.execute = function () {
        logger.trace("ACTION list - RecordListFVMAction.ListDossier");
        return this.getService().getListeDossier();
    };
    return ListDossier;
}(abstract_routes_1.RouteActionService));
exports.ListDossier = ListDossier;
/**
 * Classe d'action gérant le retour du dossier correspondant aux attributs donnés en entrée
 * @extends {RouteActionService<any, FormService>}
 */
var GetDossier = /** @class */ (function (_super) {
    tslib_1.__extends(GetDossier, _super);
    function GetDossier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant le dossier correspondant aux attributs donnés en entrée
     * @returns {Promise<Array<any>>} Dossier correspondant aux attributs donnés en entrée (Stocké dans un tableau pour une utilisation dans un dataSource)
     */
    GetDossier.prototype.execute = function () {
        logger.trace("ACTION list - RecordDetailsFVMAction.GetDossier");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().getDossier(data);
    };
    return GetDossier;
}(abstract_routes_1.RouteActionService));
exports.GetDossier = GetDossier;
/**
 * Classe d'action gérant le retour de la demande d'authentification correspondant aux attributs donnés en entrée
 * @extends {RouteActionService<any, FormService>}
 */
var GetDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(GetDemandeAuthentification, _super);
    function GetDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la demande d'authentification correspondant aux attributs donnés en entrée
     * @returns {Promise<DemandeAuthentificationFVMAttributes>} Demande d'authentification correspondant aux attributs donnés en entrée
     */
    GetDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION list - RecordDetailsFVMAction.GetDemandeAuthentification");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().getDemandeAuthentification(data);
    };
    return GetDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.GetDemandeAuthentification = GetDemandeAuthentification;
/* TODO
export class GetReleve extends RouteActionService<any, PageService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getReleve(data);
  }
}

export class GetNoteVerbale extends RouteActionService<any, PageService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getNoteVerbale(data);
  }
}
*/
/**
 * Classe d'action gérant le retour de la copie d'un permis de conduire
 * @extends {RouteActionService<any, FormService>}
 */
var GetCopiePermis = /** @class */ (function (_super) {
    tslib_1.__extends(GetCopiePermis, _super);
    function GetCopiePermis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la copie d'un permis de conduire
     * @returns {Promise<ResultFile>} Copie d'un permis de conduire sous la forme d'un HornetResult
     */
    GetCopiePermis.prototype.execute = function () {
        logger.trace("ACTION file - RecordDetailsFVMAction.GetCopiePermis");
        return this.getService().getCopiePermis(this.attributes.idCopiePermis).then(function (copiePermis) {
            // Réponse de type fichier joint
            return new result_file_1.ResultFile({
                // Contenu du fichier
                "data": copiePermis.data,
                "filename": copiePermis.nom,
                "encoding": copiePermis.encoding,
                "size": copiePermis.size,
                // Affichage du contenu du fichier directement dans le navigateur
                "dispositionType": disposition_type_1.DispositionType.INLINE
            }, media_type_1.MediaTypes.fromMime(copiePermis.mimetype));
        });
    };
    return GetCopiePermis;
}(abstract_routes_1.RouteActionService));
exports.GetCopiePermis = GetCopiePermis;
/**
 * Classe d'action gérant le retour de la copie d'une note verbale du MAECI
 * @extends {RouteActionService<any, FormService>}
 */
var GetCopieNoteVerbaleMAECI = /** @class */ (function (_super) {
    tslib_1.__extends(GetCopieNoteVerbaleMAECI, _super);
    function GetCopieNoteVerbaleMAECI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la copie d'une note verbale du MAECI
     * @returns {Promise<ResultFile>} Copie d'une note verbale du MAECI sous la forme d'un HornetResult
     */
    GetCopieNoteVerbaleMAECI.prototype.execute = function () {
        logger.trace("ACTION file - RecordDetailsFVMAction.getCopieNoteVerbaleMAECI");
        return this.getService().getCopieNoteVerbaleMAECI(this.attributes.idCopieNoteVerbaleMAECI).then(function (copieNoteVerbaleMAECI) {
            // Réponse de type fichier joint
            return new result_file_1.ResultFile({
                // Contenu du fichier
                "data": copieNoteVerbaleMAECI.data,
                "filename": copieNoteVerbaleMAECI.nom,
                "encoding": copieNoteVerbaleMAECI.encoding,
                "size": copieNoteVerbaleMAECI.size,
                // Affichage du contenu du fichier directement dans le navigateur
                "dispositionType": disposition_type_1.DispositionType.INLINE
            }, media_type_1.MediaTypes.fromMime(copieNoteVerbaleMAECI.mimetype));
        });
    };
    return GetCopieNoteVerbaleMAECI;
}(abstract_routes_1.RouteActionService));
exports.GetCopieNoteVerbaleMAECI = GetCopieNoteVerbaleMAECI;
/**
 * Classe d'action gérant la génération d'un document de demande d'authentification
 * @extends {RouteActionService<any, FormService>}
 */
var GetPDFDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(GetPDFDemandeAuthentification, _super);
    function GetPDFDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode générant un document de demande d'authentification
     * @returns {Promise<ResultPDF>} Demande d'authentification sous la forme d'un Hornet Result
     */
    GetPDFDemandeAuthentification.prototype.execute = function () {
        var _this = this;
        logger.trace("ACTION file - RecordDetailsFVMAction.GetPDFDemandeAuthentification");
        // Variable : Tableau de chaînes de caractères : paramètres variables entrés par l'utilisateur
        var dataString = this.attributes.data.split("+");
        if (dataString[4] == "false") {
            dataString[4] = "";
        }
        else {
            dataString[4] = "CEDEX";
        }
        return this.getService().getPDFDemandeAuthentification(this.attributes.idPermis).then(function (result) {
            // Variables : Objets JSON : paramètres variables dans le modèle de la demande d'authentification
            var dossier = result.dossier;
            var demandeAuthentification = result.demandeAuthentification;
            // Réponse de type PDF
            return new result_pdf_1.ResultPDF({
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
                                        { text: "AMBASSADE DE FRANCE AU MAROC", bold: true, fontSize: 11 },
                                        { text: "__________", margin: [0, 0, 0, 30] },
                                        { text: "SERVICE COMMUN DE GESTION", margin: [0, 0, 0, 10], bold: true, italics: true, fontSize: 9 },
                                        { text: "N°" + demandeAuthentification.numDemandeAuthentification + "/SCG", margin: [0, 0, 0, 30], fontSize: 10 },
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
                        { text: "Service des Permis de Conduire", bold: true, italics: true, fontSize: 10 },
                        { text: "Affaire suivie par", bold: true, italics: true, fontSize: 10 },
                        { text: "MME " + dataString[0].toUpperCase() + " " + _this.capitalize(dataString[1]), margin: [5, 0, 0, 0], bold: true, italics: true, fontSize: 10 },
                        { text: _this.capitalize(dataString[1]) + "." + _this.capitalize(dataString[0]) + "@diplomatie.gouv.fr", fontSize: 10 },
                        {
                            stack: [
                                { text: dataString[2].toUpperCase() + " " + dossier.prefecture.toUpperCase() },
                                { text: dataString[3].toUpperCase() },
                                { text: dossier.adresse.toUpperCase() },
                                { text: (dossier.codePostal + " " + dossier.ville).toUpperCase() + " " + dataString[4] }
                            ],
                            margin: [100, 60, 0, 70],
                            alignment: "center"
                        },
                        { text: "OBJET : Demande d'authentification d'un permis de conduire", margin: [0, 0, 0, 30] },
                        {
                            stack: [
                                { text: "Madame, Monsieur,", margin: [0, 0, 0, 30] },
                                { text: "Je vous demande de bien vouloir certifier l'authenticité du titre, dont vous trouverez ci-joint copie appartenant à :", margin: [0, 0, 0, 30] },
                                {
                                    stack: [
                                        { text: dossier.sexe + " " + dossier.nom.toUpperCase() + " " + (dossier.prenom[0].toUpperCase() + dossier.prenom.slice(1)) },
                                        { text: "Né(e) le " + new Date(dossier.dateDeNaissance).toLocaleDateString() },
                                        { text: "À " + dossier.villeDeNaissance.toUpperCase() + " / " + dossier.paysDeNaissance.toUpperCase() }
                                    ],
                                    margin: [0, 0, 0, 30]
                                },
                                {
                                    stack: [
                                        { text: "À déposé son permis de conduire" },
                                        { text: "N° " + dossier.numPermis },
                                        { text: "Délivré le " + new Date(dossier.dateDeDelivrance).toLocaleDateString() },
                                        { text: "Catégorie(s) mentionnée(s) sur le permis" }
                                    ],
                                    margin: [0, 0, 0, 30]
                                },
                                { text: "En vue d'obtenir un permis Marocain.", margin: [0, 0, 0, 30] },
                                { text: "Je vous prie d'agréer, Madame, Monsieur, l'assurance de ma considération distinguée.", margin: [0, 0, 0, 30] }
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
    };
    /**
     * Méthode mettant la première lettre d'un mot en majuscule
     * @param {string} entry - Chaîne de caractères à mettre sous le format : [A-Z]{1}[a-z]*
     * @returns {string} Chaîne de caractères mise sous le format : [A-Z]{1}[a-z]*
     */
    GetPDFDemandeAuthentification.prototype.capitalize = function (entry) {
        return entry[0].toUpperCase() + entry.slice(1).toLowerCase();
    };
    return GetPDFDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.GetPDFDemandeAuthentification = GetPDFDemandeAuthentification;

//# sourceMappingURL=fvm-action.js.map
