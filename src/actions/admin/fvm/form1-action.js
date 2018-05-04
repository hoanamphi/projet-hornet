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
        // if(this.req.files[0] != null){
        //     data["copie_permis"] = {};
        //     data["copie_permis"].nom = this.req.files[0].originalname;
        //     data["copie_permis"].mimetype = this.req.files[0].mimetype;
        //     data["copie_permis"].encoding = this.req.files[0].encoding;
        //     data["copie_permis"].size = this.req.files[0].size;
        //     data["copie_permis"].contenu = this.req.files[0].buffer;
        // }
        return this.getService().insererDonnee(data);
    };
    return Inser;
}(abstract_routes_1.RouteActionService));
exports.Inser = Inser;

//# sourceMappingURL=form1-action.js.map
