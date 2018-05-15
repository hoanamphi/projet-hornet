"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var personne_dao_1 = require("../../../../dao/admin/fvm/personne-dao");
var copie_note_verbale_MAECI_dao_1 = require("../../../../dao/admin/fvm/copie_note_verbale_MAECI-dao");
var dossier_dao_1 = require("../../../../dao/admin/fvm/dossier-dao");
var permis_dao_1 = require("../../../../dao/admin/fvm/permis-dao");
var copie_permis_dao_1 = require("../../../../dao/admin/fvm/copie_permis-dao");
var prefecture_dao_1 = require("../../../../dao/prefecture-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");
var RecordListServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(RecordListServiceImpl, _super);
    function RecordListServiceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.personneDAO = new personne_dao_1.PersonneFVMDAO();
        _this.dossierDAO = new dossier_dao_1.DossierFVMDAO();
        _this.permisDAO = new permis_dao_1.PermisFVMDAO();
        _this.copieNoteVerbaleMAECIDAO = new copie_note_verbale_MAECI_dao_1.CopieNoteVerbaleMAECIFVMDao();
        _this.copiePermisDAO = new copie_permis_dao_1.CopiePermisFVMDao();
        _this.prefectureDAO = new prefecture_dao_1.PrefectureDAO();
        return _this;
    }
    RecordListServiceImpl.prototype.getListeDossiers = function () {
        return Promise.resolve([{ "num_permis": "permis", "nom": "nom", "prenom": "prenom", "date_de_naissance": "21/09/1998", "date_reception_dossier": "10/05/2018" }]);
    };
    return RecordListServiceImpl;
}(service_request_1.ServiceRequest));
exports.RecordListServiceImpl = RecordListServiceImpl;

//# sourceMappingURL=recordList-service-impl-data.js.map
