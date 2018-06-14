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
var datasource_1 = require("hornet-js-core/src/component/datasource/datasource");
var notification_1 = require("hornet-js-react-components/src/widget/notification/notification");
var schema = require("src/resources/admin/fvm/validation-form2.json");
var schemaValise = require("src/resources/admin/fvm/validation-formvalise.json");
var notification_manager_1 = require("hornet-js-core/src/notification/notification-manager");
var datasource_config_page_1 = require("hornet-js-core/src/component/datasource/config/service/datasource-config-page");
var icon_1 = require("hornet-js-react-components/src/widget/icon/icon");
var picto_1 = require("hornet-js-react-components/src/img/picto");
var table_1 = require("hornet-js-react-components/src/widget/table/table");
var columns_1 = require("hornet-js-react-components/src/widget/table/columns");
var content_1 = require("hornet-js-react-components/src/widget/table/content");
var column_1 = require("hornet-js-react-components/src/widget/table/column");
var date_column_1 = require("hornet-js-react-components/src/widget/table/column/date-column");
var header_1 = require("hornet-js-react-components/src/widget/table/header");
var menu_actions_1 = require("hornet-js-react-components/src/widget/table/menu-actions");
var action_button_1 = require("hornet-js-react-components/src/widget/table/action-button");
var modal_1 = require("hornet-js-react-components/src/widget/dialog/modal");
var action_column_1 = require("hornet-js-react-components/src/widget/table/column/action-column");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.gen-form1-page");
var FormulaireDemandeAuthentificationPage = /** @class */ (function (_super) {
    tslib_1.__extends(FormulaireDemandeAuthentificationPage, _super);
    function FormulaireDemandeAuthentificationPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.input = new input_field_1.InputField();
        _this.valise = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().getListeValise), {});
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
    FormulaireDemandeAuthentificationPage.prototype.prepareClient = function () {
        this.valise.fetch(true);
    };
    FormulaireDemandeAuthentificationPage.prototype.onSubmit = function (data) {
        var _this = this;
        data["id_permis"] = this.attributes.idPermis;
        this.getService().insererDemandeAuthentification(data).then(function (result) {
            if (result.error != null) {
                console.error(result.reason);
                console.error(result.error);
                _this.SequelizeErrors.text = result.reason;
                notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
            }
            else {
                notification_manager_1.NotificationManager.notify("SequelizeSuccess", "notif", null, _this.success, null, null, null);
            }
        }).catch(function (reason) {
            _this.SequelizeErrors.text = reason;
            notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
        });
    };
    FormulaireDemandeAuthentificationPage.prototype.render = function () {
        var _this = this;
        var format = this.i18n("forms");
        return (React.createElement("div", null,
            React.createElement(icon_1.Icon, { src: picto_1.Picto.blue.previous, alt: "Retourner \u00E0 la consultation", title: "Retourner \u00E0 la consultation", action: this.retourPage }),
            React.createElement("h2", null, "Formulaire d'entr\u00E9e d'une demande d'authentification"),
            React.createElement(notification_1.Notification, { id: "errors" }),
            React.createElement(notification_1.Notification, { id: "notif" }),
            React.createElement(modal_1.Modal, { ref: function (modal) {
                    _this.modal = modal;
                }, onClickClose: function () { _this.modal.close(); _this.valise.fetch(true); } },
                React.createElement("div", null,
                    React.createElement(form_1.Form, { id: "formValise", schema: schemaValise, formMessages: format, onSubmit: this.submitValise },
                        React.createElement(row_1.Row, null,
                            React.createElement(input_field_1.InputField, { name: "num_valise", label: format.fields.num_valise.label, required: true })),
                        React.createElement(row_1.Row, null,
                            React.createElement(calendar_field_1.CalendarField, { name: "date_valise", label: format.fields.date_valise.label, title: format.fields.date_valise.title, required: true })),
                        React.createElement(buttons_area_1.ButtonsArea, null,
                            React.createElement(button_1.Button, { type: "submit", value: "Valider", className: "hornet-button", label: "valider", title: "valider" }))))),
            React.createElement(table_1.Table, { id: "liste valise" },
                React.createElement(header_1.Header, { title: "Valises diplomatiques disponibles" },
                    React.createElement(menu_actions_1.MenuActions, null,
                        React.createElement(action_button_1.ActionButton, { title: "Ajout", srcImg: picto_1.Picto.white.ajouter, displayedWithoutResult: true, action: this.ajouterValise, priority: true }))),
                React.createElement(content_1.Content, { dataSource: this.valise },
                    React.createElement(columns_1.Columns, null,
                        React.createElement(column_1.Column, { keyColumn: "numValise", title: format.fields.num_valise.label, sortable: false }),
                        React.createElement(date_column_1.DateColumn, { keyColumn: "dateValise", title: format.fields.date_valise.label, sortable: false }),
                        React.createElement(action_column_1.ActionColumn, { keyColumn: "formInput", title: "Remplir le formulaire", srcImg: picto_1.Picto.blue.next, action: this.remplirForm })))),
            React.createElement(form_1.Form, { id: "formValise", schema: schema, formMessages: format, onSubmit: this.onSubmit },
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "num_valise", ref: function (input) { _this.input = input; }, label: format.fields.num_valise.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "num_demande_authentification", label: format.fields.num_demande_authentification.label, required: true })),
                React.createElement(buttons_area_1.ButtonsArea, null,
                    React.createElement(button_1.Button, { type: "submit", value: "Valider", className: "hornet-button", label: "valider", title: "valider" })))));
    };
    FormulaireDemandeAuthentificationPage.prototype.ajouterValise = function () {
        this.modal.open();
    };
    FormulaireDemandeAuthentificationPage.prototype.remplirForm = function (lineSelected) {
        this.input.setCurrentValue(lineSelected.numValise);
    };
    FormulaireDemandeAuthentificationPage.prototype.submitValise = function (data) {
        var _this = this;
        this.getService().insererValise(data).then(function (result) {
            if (result.error != null) {
                console.error(result.reason);
                console.error(result.error);
                _this.SequelizeErrors.text = result.reason;
                notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
            }
            else {
                notification_manager_1.NotificationManager.notify("SequelizeSuccess", "notif", null, _this.success, null, null, null);
            }
        }).catch(function (reason) {
            _this.SequelizeErrors.text = reason;
            notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
        });
    };
    FormulaireDemandeAuthentificationPage.prototype.retourPage = function () {
        this.navigateTo("/fvmrecord/" + this.attributes.idPermis, {}, function () { });
    };
    return FormulaireDemandeAuthentificationPage;
}(hornet_page_1.HornetPage));
exports.FormulaireDemandeAuthentificationPage = FormulaireDemandeAuthentificationPage;

//# sourceMappingURL=fvm-formDemande-page.js.map
