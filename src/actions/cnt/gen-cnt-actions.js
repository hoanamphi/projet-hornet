"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.actions.cnt.gen-cnt-actions");
/**
 * Appel le service distant pour réaliser l"envoi de la demande de contact.
 */
var Send = /** @class */ (function (_super) {
    tslib_1.__extends(Send, _super);
    function Send() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Send.prototype.execute = function () {
        logger.trace("ACTION Send - Appel API : ContactApi.send - Dispatch CONTACT_SENT");
        if (this.req.body) {
            return this.getService().envoyer(this.req.body);
        }
    };
    return Send;
}(abstract_routes_1.RouteActionService));
exports.Send = Send;

//# sourceMappingURL=gen-cnt-actions.js.map
