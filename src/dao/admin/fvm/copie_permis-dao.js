"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");
var CopiePermisFVMDao = /** @class */ (function (_super) {
    tslib_1.__extends(CopiePermisFVMDao, _super);
    function CopiePermisFVMDao() {
        return _super.call(this) || this;
    }
    CopiePermisFVMDao.prototype.insererCopiePermis = function (nom, mimetype, encoding, size, data, idPermis) {
        var _this = this;
        return this.getIdCopiePermis().then(function (result) {
            return _this.modelDAO.copiePermisFVMEntity.create({
                idCopiePermis: result,
                nom: nom,
                mimetype: mimetype,
                encoding: encoding,
                size: size,
                data: data,
                idPermis: idPermis
            }).catch(function (reason) {
                return Promise.reject("Problème de stockage de la copie du permis : " + reason);
            });
        });
    };
    CopiePermisFVMDao.prototype.getIdCopiePermis = function () {
        var _this = this;
        return this.modelDAO.copiePermisFVMEntity.count().then(function (count) {
            if (count > 0) {
                return _this.modelDAO.copiePermisFVMEntity.max("idCopiePermis").then(function (max) {
                    return Promise.resolve(max + 1);
                }).catch(function (reason) {
                    return Promise.reject("Problème de calcul de l'id : " + reason);
                });
            }
            else {
                return Promise.resolve(0);
            }
        }).catch(function (reason) {
            return Promise.reject("Problème de comptage : " + reason);
        });
    };
    return CopiePermisFVMDao;
}(entity_dao_1.EntityDAO));
exports.CopiePermisFVMDao = CopiePermisFVMDao;

//# sourceMappingURL=copie_permis-dao.js.map
