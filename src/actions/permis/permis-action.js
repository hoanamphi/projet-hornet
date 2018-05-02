"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.actions.permis.permis_actions");
/**
 * Appel le service distant pour réaliser l"envoi de la demande de contact.
 */
var Liste = /** @class */ (function (_super) {
    tslib_1.__extends(Liste, _super);
    function Liste() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Liste.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        if (this.req.body) {
            return this.getService().listerPermis(this.req.body);
        }
    };
    return Liste;
}(abstract_routes_1.RouteActionService));
exports.Liste = Liste;
var Inser = /** @class */ (function (_super) {
    tslib_1.__extends(Inser, _super);
    function Inser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inser.prototype.execute = function () {
        logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");
        if (this.req.body) {
            return this.getService().insererPermis(this.req.body);
        }
    };
    return Inser;
}(abstract_routes_1.RouteActionService));
exports.Inser = Inser;

//# sourceMappingURL=permis-action.js.map
