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
var auto_complete_field_1 = require("hornet-js-react-components/src/widget/form/auto-complete-field");
var datasource_1 = require("hornet-js-core/src/component/datasource/datasource");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.gen-formulaire-page");
var FormulairePage = /** @class */ (function (_super) {
    tslib_1.__extends(FormulairePage, _super);
    function FormulairePage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.prefectures = new datasource_1.DataSource(null, { "value": "idPrefecture", "text": "prefecture" });
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
            if (result.hasError != null) {
                console.log(result.hasError);
            }
        }).catch(function (reason) {
            throw new Error(reason);
        });
    };
    FormulairePage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Formulaire 1"),
            React.createElement(form_1.Form, { id: "form1", onSubmit: this.onSubmit },
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "nom", label: "Nom", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "prenom", label: "Prenom", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(calendar_field_1.CalendarField, { name: "date_de_naissance", label: "Date de naissance", title: "Calendrier", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "pays_de_naissance", label: "Pays de Naissance", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "ville_de_naissance", label: "Ville de Naissance", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "num_permis", label: "Numero de permis", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(upload_file_field_1.UploadFileField, { name: "copie_permis", label: "Photocopie du permis de conduire", buttonLabel: "Choisir un fichier", fileSelectedLabel: "Fichier choisi" })),
                React.createElement(row_1.Row, null,
                    React.createElement(calendar_field_1.CalendarField, { name: "date_de_delivrance", label: "Date de d\u00E9livrance", title: "Calendrier", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(auto_complete_field_1.AutoCompleteField, { dataSource: this.prefectures, name: "id_prefecture", label: "Prefecture de delivrance", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(upload_file_field_1.UploadFileField, { name: "copie_note_verbale_maeci", label: "Photocopie de la note verbale du MAECI", buttonLabel: "Choisir un fichier", fileSelectedLabel: "Fichier choisi" })),
                React.createElement(buttons_area_1.ButtonsArea, null,
                    React.createElement(button_1.Button, { type: "submit", value: "Valider", className: "hornet-button", label: "valider", title: "valider" })))));
    };
    return FormulairePage;
}(hornet_page_1.HornetPage));
exports.FormulairePage = FormulairePage;

//# sourceMappingURL=gen-form1-page.js.map
