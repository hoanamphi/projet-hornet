"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var mailer_1 = require("hornet-js-core/src/mail/mailer");
var template_1 = require("hornet-js-utils/src/template");
var hornet_component_1 = require("hornet-js-react-components/src/widget/component/hornet-component");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.data.cnt.contact-service-data-impl");
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
        var valuesToWriteIntoMessage = {
            name: data.nom,
            firstname: data.prenom,
            mail: data.mail,
            content: data.message
        };
        var templatedMessage = new template_1.Template(hornet_component_1.HornetComponent.getI18n("contactPage.mailTemplate"))
            .process(valuesToWriteIntoMessage, "?");
        var mailToSend = {
            from: hornet_js_utils_1.Utils.config.getOrDefault("mail.mailSender", undefined),
            to: hornet_js_utils_1.Utils.config.getOrDefault("mail.mailReceiver", undefined),
            subject: hornet_component_1.HornetComponent.getI18n("contactPage.subject"),
            text: templatedMessage
        };
        return new Promise(function (resolve) {
            return mailer_1.Mailer.sendMail(mailToSend, hornet_js_utils_1.Utils.config.getOrDefault("mail.config", undefined))
                .then(function (result) {
                resolve({ resolve: result });
            }).catch(function (error) {
                resolve({ errors: error });
            });
        });
    };
    return ContactServiceImpl;
}(service_request_1.ServiceRequest));
exports.ContactServiceImpl = ContactServiceImpl;

//# sourceMappingURL=contact-service-data-impl.js.map
