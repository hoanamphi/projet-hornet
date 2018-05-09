"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.actions.admin.permis_actions");
var Inser = /** @class */ (function (_super) {
    tslib_1.__extends(Inser, _super);
    function Inser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inser.prototype.execute = function () {
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
    return Inser;
}(abstract_routes_1.RouteActionService));
exports.Inser = Inser;
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

//# sourceMappingURL=form1-action.js.map
