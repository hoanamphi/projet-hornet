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
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.permis.gen-formulaire-page");
var FormulairePage = /** @class */ (function (_super) {
    tslib_1.__extends(FormulairePage, _super);
    function FormulairePage(props, context) {
        return _super.call(this, props, context) || this;
    }
    FormulairePage.prototype.prepareClient = function () {
    };
    FormulairePage.prototype.onSubmit = function (data) {
        console.log(data);
        console.log(data["fichier"]);
        var request = new Request("/test");
        request.attach = [];
        request.attach.push();
        // this.getService().insererPermis(data).then((result) => {
        //     if (!result.errors) {
        //       console.log("test");
        //       console.log(result);
        //       this.getService().listerPermis(data).then((result) => {
        //           if (!result.errors) {
        //               result.forEach(function(elem){
        //                 console.log(elem);
        //               });
        //           } else {
        //               console.log("errors");
        //           }
        //       });
        //     } else {
        //         console.log("errors");
        //     }
        // });
    };
    FormulairePage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Test formulaire"),
            React.createElement(form_1.Form, { id: "contactForm", onSubmit: this.onSubmit },
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "permis", label: "Numero de permis", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "nom", label: "Nom", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "prenom", label: "Prenom", required: true })),
                React.createElement(calendar_field_1.CalendarField, { name: "date_de_naissance", label: "Date de naissance", title: "Calendrier", required: true }),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "prefecture", label: "Prefecture", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(upload_file_field_1.UploadFileField, { name: "fichier", label: "Fichier", buttonLabel: "Choisir un fichier", fileSelectedLabel: "Fichier choisi" })),
                React.createElement(buttons_area_1.ButtonsArea, null,
                    React.createElement(button_1.Button, { type: "submit", id: "test", name: "action:test", value: "Valider", className: "hornet-button", label: "valider", title: "valider" })))));
    };
    return FormulairePage;
}(hornet_page_1.HornetPage));
exports.FormulairePage = FormulairePage;

//# sourceMappingURL=gen-formulaire-page.js.map
