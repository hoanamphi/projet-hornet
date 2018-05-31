"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var result_file_1 = require("hornet-js-core/src/result/result-file");
var media_type_1 = require("hornet-js-core/src/protocol/media-type");
var result_pdf_1 = require("hornet-js-core/src/result/result-pdf");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.actions.admin.permis_actions");
var InserDossier = /** @class */ (function (_super) {
    tslib_1.__extends(InserDossier, _super);
    function InserDossier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InserDossier.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        if (this.req.files[0] != null) {
            data["copie_permis"] = {};
            data["copie_permis"].nom = this.req.files[0].originalname;
            data["copie_permis"].mimetype = this.req.files[0].mimetype;
            data["copie_permis"].encoding = this.req.files[0].encoding;
            data["copie_permis"].size = this.req.files[0].size;
            data["copie_permis"].data = this.req.files[0].buffer;
        }
        if (this.req.files[1] != null) {
            data["copie_note_verbale_maeci"] = {};
            data["copie_note_verbale_maeci"].nom = this.req.files[1].originalname;
            data["copie_note_verbale_maeci"].mimetype = this.req.files[1].mimetype;
            data["copie_note_verbale_maeci"].encoding = this.req.files[1].encoding;
            data["copie_note_verbale_maeci"].size = this.req.files[1].size;
            data["copie_note_verbale_maeci"].data = this.req.files[1].buffer;
        }
        return this.getService().insererDonnee(data);
    };
    return InserDossier;
}(abstract_routes_1.RouteActionService));
exports.InserDossier = InserDossier;
var InserDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(InserDemandeAuthentification, _super);
    function InserDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InserDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().insererDemandeAuthentification(data);
    };
    return InserDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.InserDemandeAuthentification = InserDemandeAuthentification;
var InserValise = /** @class */ (function (_super) {
    tslib_1.__extends(InserValise, _super);
    function InserValise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InserValise.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().insererValise(data);
    };
    return InserValise;
}(abstract_routes_1.RouteActionService));
exports.InserValise = InserValise;
var ListePrefecture = /** @class */ (function (_super) {
    tslib_1.__extends(ListePrefecture, _super);
    function ListePrefecture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListePrefecture.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getListePrefectures();
    };
    return ListePrefecture;
}(abstract_routes_1.RouteActionService));
exports.ListePrefecture = ListePrefecture;
var ListeValise = /** @class */ (function (_super) {
    tslib_1.__extends(ListeValise, _super);
    function ListeValise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListeValise.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getListeValises();
    };
    return ListeValise;
}(abstract_routes_1.RouteActionService));
exports.ListeValise = ListeValise;
var ListeDossiers = /** @class */ (function (_super) {
    tslib_1.__extends(ListeDossiers, _super);
    function ListeDossiers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListeDossiers.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getListeDossiers();
    };
    return ListeDossiers;
}(abstract_routes_1.RouteActionService));
exports.ListeDossiers = ListeDossiers;
var GetDossier = /** @class */ (function (_super) {
    tslib_1.__extends(GetDossier, _super);
    function GetDossier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetDossier.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().getDossier(data);
    };
    return GetDossier;
}(abstract_routes_1.RouteActionService));
exports.GetDossier = GetDossier;
var GetDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(GetDemandeAuthentification, _super);
    function GetDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().getDemandeAuthentification(data);
    };
    return GetDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.GetDemandeAuthentification = GetDemandeAuthentification;
var GetReleve = /** @class */ (function (_super) {
    tslib_1.__extends(GetReleve, _super);
    function GetReleve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetReleve.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().getReleve(data);
    };
    return GetReleve;
}(abstract_routes_1.RouteActionService));
exports.GetReleve = GetReleve;
var GetNoteVerbale = /** @class */ (function (_super) {
    tslib_1.__extends(GetNoteVerbale, _super);
    function GetNoteVerbale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetNoteVerbale.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        var data = this.req.body;
        return this.getService().getNoteVerbale(data);
    };
    return GetNoteVerbale;
}(abstract_routes_1.RouteActionService));
exports.GetNoteVerbale = GetNoteVerbale;
var GetCopiePermis = /** @class */ (function (_super) {
    tslib_1.__extends(GetCopiePermis, _super);
    function GetCopiePermis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetCopiePermis.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getCopiePermis(this.attributes.idCopiePermis).then(function (copiePermis) {
            return new result_file_1.ResultFile({ "data": copiePermis.data,
                "filename": copiePermis.nom,
                "encoding": copiePermis.encoding,
                "size": copiePermis.size
            }, media_type_1.MediaTypes.fromMime(copiePermis.mimetype));
        });
    };
    return GetCopiePermis;
}(abstract_routes_1.RouteActionService));
exports.GetCopiePermis = GetCopiePermis;
var GetCopieNoteVerbaleMAECI = /** @class */ (function (_super) {
    tslib_1.__extends(GetCopieNoteVerbaleMAECI, _super);
    function GetCopieNoteVerbaleMAECI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetCopieNoteVerbaleMAECI.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        return this.getService().getCopieNoteVerbaleMAECI(this.attributes.idCopieNoteVerbaleMAECI).then(function (copieNoteVerbaleMAECI) {
            return new result_file_1.ResultFile({ "data": copieNoteVerbaleMAECI.data,
                "filename": copieNoteVerbaleMAECI.nom,
                "encoding": copieNoteVerbaleMAECI.encoding,
                "size": copieNoteVerbaleMAECI.size
            }, media_type_1.MediaTypes.fromMime(copieNoteVerbaleMAECI.mimetype));
        });
    };
    return GetCopieNoteVerbaleMAECI;
}(abstract_routes_1.RouteActionService));
exports.GetCopieNoteVerbaleMAECI = GetCopieNoteVerbaleMAECI;
var GetPDFDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(GetPDFDemandeAuthentification, _super);
    function GetPDFDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetPDFDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        // return Promise.resolve(new ResultPDF({
        //   definition: [
        //     {
        //       pageSize: "A4",
        //       content: [
        //         {text: "test"}
        //       ]
        //     },
        //     {
        //       pageSize: "A4",
        //       content: [
        //         {text: "test2"}
        //       ]
        //     }
        //   ]
        // }));
        return Promise.resolve(new result_pdf_1.ResultPDF({
            definition: {
                pageSize: "A4",
                content: [
                    { text: "test" },
                    { text: "test", pageBreak: 'before' }
                ]
            }
        }));
        // return this.getService().getPDFDemandeAuthentification(this.attributes.idPermis).then((copieNoteVerbaleMAECI: CopieNoteVerbaleMAECIFVMMetier) => {
        //   return new ResultFile({"data": copieNoteVerbaleMAECI.data,
        //     "filename": copieNoteVerbaleMAECI.nom,
        //     "encoding": copieNoteVerbaleMAECI.encoding,
        //     "size": copieNoteVerbaleMAECI.size
        //   }, MediaTypes.fromMime(copieNoteVerbaleMAECI.mimetype));
        // });
    };
    return GetPDFDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.GetPDFDemandeAuthentification = GetPDFDemandeAuthentification;

//# sourceMappingURL=fvm-action.js.map
