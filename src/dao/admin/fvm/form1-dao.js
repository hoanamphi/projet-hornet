"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var permis_dao_1 = require("./permis-dao");
var dossier_dao_1 = require("./dossier-dao");
var personne_dao_1 = require("./personne-dao");
var copie_note_verbale_MAECI_dao_1 = require("./copie_note_verbale_MAECI-dao");
var copie_permis_dao_1 = require("./copie_permis-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var Form1FVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(Form1FVMDAO, _super);
    function Form1FVMDAO() {
        var _this = _super.call(this) || this;
        _this.personneDAO = new personne_dao_1.PersonneFVMDAO();
        _this.dossierDAO = new dossier_dao_1.DossierFVMDAO();
        _this.permisDAO = new permis_dao_1.PermisFVMDAO();
        _this.copieNoteVerbaleMAECIDAO = new copie_note_verbale_MAECI_dao_1.CopieNoteVerbaleMAECIFVMDao();
        _this.copiePermisDAO = new copie_permis_dao_1.CopiePermisFVMDao();
        return _this;
    }
    Form1FVMDAO.prototype.insererDonnee = function (data) {
        var content = JSON.parse(data["content"]);
        var copie_permis = data["copie_permis"];
        // let copie_note_verbale_maeci = data["copie_note_verbale_maeci"];
        var idPermis = this.permisDAO.getIdPermis();
        var idPersonne = this.personneDAO.getIdPersonne();
        var idDossier = this.dossierDAO.getIdDossier();
        var idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getIdCopieNoteVerbaleMAECI();
        var idCopiePermis = this.copiePermisDAO.getIdCopiePermis();
        // return this.personneDAO.insererPersonne(content.nom, content.prenom, content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, idPermis).then(result=>{
        //   let idPersonne = result;
        //   return this.dossierDAO.insererDossier(1, new Date(), idPermis).then(result=>{
        //     let idDossier = result;
        //     return this.permisDAO.insererPermis(content.permis, 2, content.date_de_delivrance, idPersonne, idDossier, parseInt(content.id_prefecture)).then(result=>{
        //       return Promise.resolve([idPermis, idPersonne, idDossier, data["copie_permis"]]);
        //     });
        //   });
        // });
    };
    return Form1FVMDAO;
}(entity_dao_1.EntityDAO));
exports.Form1FVMDAO = Form1FVMDAO;

//# sourceMappingURL=form1-dao.js.map
