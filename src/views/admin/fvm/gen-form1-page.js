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
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.gen-formulaire-page");
var FormulairePage = /** @class */ (function (_super) {
    tslib_1.__extends(FormulairePage, _super);
    function FormulairePage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.prefectures = new datasource_1.DataSource(null, { "value": "idPrefecture", "label": "prefecture" });
        return _this;
    }
    FormulairePage.prototype.prepareClient = function () {
        var _this = this;
        this.getService().getListePrefectures().then(function (liste) {
            _this.prefectures.add(true, liste);
        });
    };
    FormulairePage.prototype.onSubmit = function (data) {
        this.getService().insererDonnee(data).then(function (result) {
            if (result.hasError != null || result.hasReason != null) {
                console.log("error" + result["hasError"]);
                console.log("reason" + result["hasReason"]);
            }
            else {
                console.log(result);
            }
        }).catch(function (reason) {
            throw new Error(reason);
        });
    };
    FormulairePage.prototype.render = function () {
        var format = this.i18n("form1");
        return (React.createElement("div", null,
            React.createElement("h2", null, "Formulaire d'entr\u00E9e d'une demande d'authentification"),
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
                    React.createElement(button_1.Button, { type: "submit", value: "Valider", className: "hornet-button", label: "valider", title: "valider" })))));
    };
    return FormulairePage;
}(hornet_page_1.HornetPage));
exports.FormulairePage = FormulairePage;

//# sourceMappingURL=gen-form1-page.js.map
