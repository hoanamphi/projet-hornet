"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var form_1 = require("hornet-js-react-components/src/widget/form/form");
var row_1 = require("hornet-js-react-components/src/widget/form/row");
var input_field_1 = require("hornet-js-react-components/src/widget/form/input-field");
var textarea_field_1 = require("hornet-js-react-components/src/widget/form/textarea-field");
var notification_1 = require("hornet-js-react-components/src/widget/notification/notification");
var notification_manager_1 = require("hornet-js-core/src/notification/notification-manager");
var button_1 = require("hornet-js-react-components/src/widget/button/button");
var buttons_area_1 = require("hornet-js-react-components/src/widget/form/buttons-area");
var schema = require("src/views/cnt/gen-cnt-page-validation.json");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.cnt.gen-cnt-page");
var ContactPage = /** @class */ (function (_super) {
    tslib_1.__extends(ContactPage, _super);
    function ContactPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.formI18n = _this.i18n("contactPage.form");
        return _this;
    }
    /**
     * Alimente le tableau de liste des secteurs.
     * @override
     */
    ContactPage.prototype.prepareClient = function () {
    };
    /**
     * Déclenche le submit du formulaire de contact
     * @param data
     */
    ContactPage.prototype.onSubmit = function (data) {
        var _this = this;
        this.getService().envoyer(data).then(function (result) {
            if (!result.errors) {
                notification_manager_1.NotificationManager.notify(null, "contactForm", null, notification_manager_1.Notifications.makeSingleNotification("", _this.i18n("info.message.IN-GE-CNT-01")));
            }
            else {
                var errors = new notification_manager_1.Notifications();
                var notif = new notification_manager_1.NotificationType();
                notif.id = result.errors.reportId;
                notif.text = result.errors.message;
                errors.addNotification(notif);
                notification_manager_1.NotificationManager.notify(null, "contactForm", errors, null);
            }
        });
    };
    /**
     * @inheritDoc
     */
    ContactPage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, this.i18n("contactPage.title")),
            React.createElement(notification_1.Notification, { id: "notif" }),
            React.createElement(form_1.Form, { id: "contactForm", schema: schema, formMessages: this.formI18n, onSubmit: this.onSubmit },
                React.createElement(row_1.Row, { className: "row" },
                    React.createElement(input_field_1.InputField, { name: "nom", label: this.formI18n.fields.nom.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "prenom", label: this.formI18n.fields.prenom.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "mail", label: this.formI18n.fields.mail.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(textarea_field_1.TextAreaField, { name: "message", label: this.formI18n.fields.message.label, required: true, cols: 60, rows: 6 })),
                React.createElement(buttons_area_1.ButtonsArea, null,
                    React.createElement(button_1.Button, { type: "submit", id: "envoi", name: "action:envoi", value: "Valider", className: "hornet-button", label: this.i18n("form.valid"), title: this.i18n("contactPage.form.validTitle") })))));
    };
    return ContactPage;
}(hornet_page_1.HornetPage));
exports.ContactPage = ContactPage;

//# sourceMappingURL=gen-cnt-page.js.map
