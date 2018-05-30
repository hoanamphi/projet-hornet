"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var form_1 = require("hornet-js-react-components/src/widget/form/form");
var row_1 = require("hornet-js-react-components/src/widget/form/row");
var input_field_1 = require("hornet-js-react-components/src/widget/form/input-field");
var calendar_field_1 = require("hornet-js-react-components/src/widget/form/calendar-field");
var button_1 = require("hornet-js-react-components/src/widget/button/button");
var buttons_area_1 = require("hornet-js-react-components/src/widget/form/buttons-area");
var upload_file_field_1 = require("hornet-js-react-components/src/widget/form/upload-file-field");
var datasource_1 = require("hornet-js-core/src/component/datasource/datasource");
var notification_1 = require("hornet-js-react-components/src/widget/notification/notification");
var schema = require("src/resources/admin/fvm/validation-form1.json");
var select_field_1 = require("hornet-js-react-components/src/widget/form/select-field");
var notification_manager_1 = require("hornet-js-core/src/notification/notification-manager");
var datasource_config_page_1 = require("hornet-js-core/src/component/datasource/config/service/datasource-config-page");
var icon_1 = require("hornet-js-react-components/src/widget/icon/icon");
var picto_1 = require("hornet-js-react-components/src/img/picto");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.gen-form1-page");
var FormulaireDossierPage = /** @class */ (function (_super) {
    tslib_1.__extends(FormulaireDossierPage, _super);
    function FormulaireDossierPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.prefectures = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().getListePrefectures), { "value": "idPrefecture", "label": "prefecture" });
        _this.errors = new notification_manager_1.Notifications();
        _this.SequelizeErrors = new notification_manager_1.NotificationType();
        _this.SequelizeErrors.id = "SequelizeError";
        _this.errors.addNotification(_this.SequelizeErrors);
        _this.success = new notification_manager_1.Notifications();
        _this.SequelizeSuccess = new notification_manager_1.NotificationType();
        _this.SequelizeSuccess.id = "SequelizeSuccess";
        _this.SequelizeSuccess.text = "Opération réussie";
        _this.success.addNotification(_this.SequelizeSuccess);
        return _this;
    }
    FormulaireDossierPage.prototype.prepareClient = function () {
        this.prefectures.fetch(true);
    };
    FormulaireDossierPage.prototype.onSubmit = function (data) {
        var _this = this;
        this.getService().insererDonnee(data).then(function (result) {
            if (result.hasError != null) {
                console.error(result.hasReason);
                console.error(result.hasError);
                _this.SequelizeErrors.text = result.hasReason;
                notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
            }
            else {
                notification_manager_1.NotificationManager.notify("SequelizeSuccess", "notif", null, _this.success, null, null, null);
            }
        }).catch(function (reason) {
            console.error(reason);
        });
    };
    FormulaireDossierPage.prototype.render = function () {
        var format = this.i18n("form");
        return (React.createElement("div", null,
            React.createElement("h2", null, "Formulaire d'entr\u00E9e d'un dossier"),
            React.createElement(notification_1.Notification, { id: "errors" }),
            React.createElement(notification_1.Notification, { id: "notif" }),
            React.createElement(form_1.Form, { id: "form1", schema: schema, onSubmit: this.onSubmit, formMessages: format },
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "nom", label: format.fields.nom.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "prenom", label: format.fields.prenom.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(calendar_field_1.CalendarField, { name: "date_de_naissance", label: format.fields.date_de_naissance.label, title: format.fields.date_de_naissance.title, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "pays_de_naissance", label: format.fields.pays_de_naissance.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "ville_de_naissance", label: format.fields.ville_de_naissance.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "num_permis", label: format.fields.num_permis.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(upload_file_field_1.UploadFileField, { name: "copie_permis", label: format.fields.copie_permis.label, buttonLabel: format.fields.copie_permis.buttonLabel, fileSelectedLabel: format.fields.copie_permis.fileSelectedLabel, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(calendar_field_1.CalendarField, { name: "date_de_delivrance", label: format.fields.date_de_delivrance.label, title: format.fields.date_de_delivrance.title, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(select_field_1.SelectField, { dataSource: this.prefectures, label: format.fields.id_prefecture.label, name: "id_prefecture", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(upload_file_field_1.UploadFileField, { name: "copie_note_verbale_maeci", label: format.fields.copie_note_verbale_maeci.label, buttonLabel: format.fields.copie_note_verbale_maeci.buttonLabel, fileSelectedLabel: format.fields.copie_note_verbale_maeci.fileSelectedLabel, required: true })),
                React.createElement(buttons_area_1.ButtonsArea, null,
                    React.createElement(icon_1.Icon, { src: picto_1.Picto.blue.previous, alt: "Retourner \u00E0 la page de s\u00E9lection", title: "Retourner \u00E0 la page de s\u00E9lection", action: this.retourPage }),
                    React.createElement(button_1.Button, { type: "submit", value: "Valider", className: "hornet-button", label: "valider", title: "valider" })))));
    };
    FormulaireDossierPage.prototype.retourPage = function () {
        this.navigateTo("/record", {}, function () { });
    };
    return FormulaireDossierPage;
}(hornet_page_1.HornetPage));
exports.FormulaireDossierPage = FormulaireDossierPage;

//# sourceMappingURL=gen-formDossier-page.js.map
