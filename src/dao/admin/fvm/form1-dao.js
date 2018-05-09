"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var permis_dao_1 = require("./permis-dao");
var dossier_dao_1 = require("./dossier-dao");
var personne_dao_1 = require("./personne-dao");
var copie_note_verbale_MAECI_dao_1 = require("./copie_note_verbale_MAECI-dao");
var copie_permis_dao_1 = require("./copie_permis-dao");
var entity_dao_1 = require("../../entity-dao");
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
        var _this = this;
        var content = JSON.parse(data["content"]);
        var copie_permis = data["copie_permis"];
        var copie_note_verbale_maeci = data["copie_note_verbale_maeci"];
        var idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getIdCopieNoteVerbaleMAECI();
        var idDossier = this.dossierDAO.getIdDossier();
        var idPersonne = this.personneDAO.getIdPersonne();
        var idCopiePermis = this.copiePermisDAO.getIdCopiePermis();
        var idPermis = this.permisDAO.getIdPermis();
        return Promise.all([idCopieNoteVerbaleMAECI, idDossier, idPersonne, idCopiePermis, idPermis]).then(function (values) {
            var insertCopieNoteVerbaleMAECI = _this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(copie_note_verbale_maeci.nom, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, values[1]);
            var insertDossier = _this.dossierDAO.insererDossier(values[0], new Date(), values[4]);
            var insertPersonne = _this.personneDAO.insererPersonne(content.nom, content.prenom, content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, values[4]);
            var insertCopiePermis = _this.copiePermisDAO.insererCopiePermis(copie_permis.nom, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, values[4]);
            var insertPermis = _this.permisDAO.insererPermis(content.num_permis, values[3], content.date_de_delivrance, values[2], values[1], content.id_prefecture);
            return Promise.all([insertCopieNoteVerbaleMAECI, insertDossier, insertPersonne, insertCopiePermis, insertPermis]);
        });
        // return idDossier.then(idDossier=>{
        //
        //   return this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(copie_note_verbale_maeci.nom, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, idDossier).then(insertCopieNoteVerbaleMAECI=>{
        //
        //     return idCopieNoteVerbaleMAECI.then(idCopieNoteVerbaleMAECI=>{
        //
        //       return idPermis.then(idPermis=>{
        //
        //         return this.dossierDAO.insererDossier(idCopieNoteVerbaleMAECI, new Date(), idPermis).then(insertDossier=>{
        //
        //           return this.personneDAO.insererPersonne(content.nom, content.prenom, content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, idPermis).then(insertPersonne=>{
        //
        //             return this.copiePermisDAO.insererCopiePermis(copie_permis.nom, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, idPermis).then(insertCopiePermis=> {
        //
        //               return this.permisDAO.insererPermis(content.num_permis, idCopiePermis, content.date_de_delivrance, idPersonne, idDossier, content.id_prefecture);
        //             });
        //           });
        //         });
        //       });
        //     });
        //   });
        // });
    };
    return Form1FVMDAO;
}(entity_dao_1.EntityDAO));
exports.Form1FVMDAO = Form1FVMDAO;

//# sourceMappingURL=form1-dao.js.map
