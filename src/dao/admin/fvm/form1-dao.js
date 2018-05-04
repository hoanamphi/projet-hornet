"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var permis_dao_1 = require("./permis-dao");
var dossier_dao_1 = require("./dossier-dao");
var personne_dao_1 = require("./personne-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var Form1FVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(Form1FVMDAO, _super);
    function Form1FVMDAO() {
        var _this = _super.call(this) || this;
        _this.personneDAO = new personne_dao_1.PersonneFVMDAO();
        _this.dossierDAO = new dossier_dao_1.DossierFVMDAO();
        _this.permisDAO = new permis_dao_1.PermisFVMDAO();
        return _this;
    }
    Form1FVMDAO.prototype.insererDonnee = function (data) {
        var _this = this;
        return this.permisDAO.getIdPermis().then(function (result) {
            var idPermis = result;
            return _this.personneDAO.insererPersonne(data["nom"], data["prenom"], data["date_de_naissance"], data["ville_de_naissance"], data["pays_de_naissance"], idPermis).then(function (result) {
                var idPersonne = result;
                return _this.dossierDAO.insererDossier(1, new Date(), idPermis).then(function (result) {
                    var idDossier = result;
                    return _this.permisDAO.insererPermis(data["admin"], 2, data["date_de_delivrance"], idPersonne, idDossier, parseInt(data["id_prefecture"])).then(function (result) {
                        return Promise.resolve([idPermis, idPersonne, idDossier, data["copie_permis"]]);
                    });
                });
            });
        });
    };
    return Form1FVMDAO;
}(entity_dao_1.EntityDAO));
exports.Form1FVMDAO = Form1FVMDAO;

//# sourceMappingURL=form1-dao.js.map
