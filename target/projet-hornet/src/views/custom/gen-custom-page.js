"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var hornet_js_utils_1 = require("hornet-js-utils");
var button_1 = require("hornet-js-react-components/src/widget/button/button");
var form_1 = require("hornet-js-react-components/src/widget/form/form");
var buttons_area_1 = require("hornet-js-react-components/src/widget/form/buttons-area");
var input_field_1 = require("hornet-js-react-components/src/widget/form/input-field");
var notification_1 = require("hornet-js-react-components/src/widget/notification/notification");
var upload_file_field_1 = require("hornet-js-react-components/src/widget/form/upload-file-field");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.custom.gen-custom-page");
var CustomPage = /** @class */ (function (_super) {
    tslib_1.__extends(CustomPage, _super);
    function CustomPage(props, context) {
        return _super.call(this, props, context) || this;
    }
    CustomPage.prototype.prepareClient = function () {
    };
    /**
     * @inheritDoc
     */
    CustomPage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Contact"),
            React.createElement(notification_1.Notification, { id: "notif" }),
            React.createElement(form_1.Form, { id: "form-example", onSubmit: this.onSubmit },
                React.createElement(input_field_1.InputField, { name: "nom", label: "Nom" }),
                React.createElement(upload_file_field_1.UploadFileField, { name: "photo", label: "Photo", buttonLabel: "Choisir un fichier", fileSelectedLabel: "Un fichier choisit" }),
                React.createElement(buttons_area_1.ButtonsArea, null,
                    React.createElement(button_1.Button, { type: "submit", id: "envoi", name: "action:envoi", value: "Valider", className: "hornet-button", label: "Valider", title: "Validation du formulaire" })))));
    };
    CustomPage.prototype.onSubmit = function (data) {
        alert(data["nom"] + data["photo"].name);
    };
    return CustomPage;
}(hornet_page_1.HornetPage));
exports.CustomPage = CustomPage;

//# sourceMappingURL=gen-custom-page.js.map
