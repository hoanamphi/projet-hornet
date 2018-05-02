"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_page_1 = require("hornet-js-core/src/services/service-page");
var urls_1 = require("src/utils/urls");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.cnt.contact-service-page-impl");
/**
 * Implementation des services pour les contacts
 * @class
 * @implements {ContactService}
 * @extends {ServiceApi}
 */
var ContactServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ContactServiceImpl, _super);
    function ContactServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Envoie d'un message sur contacts
     * @param {object} data message à envoyer
     */
    ContactServiceImpl.prototype.envoyer = function (data) {
        logger.trace("SERVICES - send : ", data);
        return this.fetch({
            method: "post",
            url: this.buildUrl(urls_1.URL_CONTACT),
            data: data
        });
    };
    return ContactServiceImpl;
}(service_page_1.ServicePage));
exports.ContactServiceImpl = ContactServiceImpl;

//# sourceMappingURL=contact-service-page-impl.js.map
