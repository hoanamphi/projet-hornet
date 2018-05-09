"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var CopieNoteVerbaleMAECIFVMDao = /** @class */ (function (_super) {
    tslib_1.__extends(CopieNoteVerbaleMAECIFVMDao, _super);
    function CopieNoteVerbaleMAECIFVMDao() {
        return _super.call(this) || this;
    }
    CopieNoteVerbaleMAECIFVMDao.prototype.insererCopieNoteVerbaleMAECI = function (nom, mimetype, encoding, size, data, idDossier) {
        var _this = this;
        return this.getIdCopieNoteVerbaleMAECI().then(function (idCopieNoteVerbaleMAECI) {
            return _this.modelDAO.copieNoteVerbaleMAECIFVMEntity.create({
                idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
                nom: nom,
                mimetype: mimetype,
                encoding: encoding,
                size: size,
                data: data,
                idDossier: idDossier
            });
        });
    };
    CopieNoteVerbaleMAECIFVMDao.prototype.getIdCopieNoteVerbaleMAECI = function () {
        var _this = this;
        return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.count().then(function (count) {
            if (count > 0) {
                return _this.modelDAO.copieNoteVerbaleMAECIFVMEntity.max("idCopieNoteVerbaleMAECI");
            }
            else {
                return Promise.resolve(-1);
            }
        }).then(function (max) {
            return Promise.resolve(max + 1);
        });
    };
    return CopieNoteVerbaleMAECIFVMDao;
}(entity_dao_1.EntityDAO));
exports.CopieNoteVerbaleMAECIFVMDao = CopieNoteVerbaleMAECIFVMDao;

//# sourceMappingURL=copie_note_verbale_MAECI-dao.js.map
