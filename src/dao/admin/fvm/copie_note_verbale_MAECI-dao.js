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
    CopieNoteVerbaleMAECIFVMDao.prototype.insererCopieNoteVerbaleMAECI = function (idCopieNoteVerbaleMAECI, mimetype, encoding, size, data, idDossier) {
        return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.upsert({
            idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
            nom: this.getNewNom(idCopieNoteVerbaleMAECI),
            mimetype: mimetype,
            encoding: encoding,
            size: size,
            data: data,
            idDossier: idDossier
        }).then(function (result) {
            return Promise.resolve(idCopieNoteVerbaleMAECI);
        });
    };
    CopieNoteVerbaleMAECIFVMDao.prototype.getNewNom = function (idCopieNoteVerbaleMAECI) {
        return ("copieNoteVerbaleMAECI" + idCopieNoteVerbaleMAECI + (new Date())).replace(/\s+/g, "_");
    };
    CopieNoteVerbaleMAECIFVMDao.prototype.getNewIdCopieNoteVerbaleMAECI = function () {
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
    CopieNoteVerbaleMAECIFVMDao.prototype.getCopieNoteVerbaleMAECI = function (idCopieNoteVerbaleMAECI) {
        return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.findAll({
            where: {
                idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI
            }
        });
    };
    CopieNoteVerbaleMAECIFVMDao.prototype.deleteCopieNoteVerbaleMAECIFromDossier = function (idDossier) {
        return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.destroy({
            where: {
                idDossier: idDossier
            }
        });
    };
    return CopieNoteVerbaleMAECIFVMDao;
}(entity_dao_1.EntityDAO));
exports.CopieNoteVerbaleMAECIFVMDao = CopieNoteVerbaleMAECIFVMDao;

//# sourceMappingURL=copie_note_verbale_MAECI-dao.js.map
