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
var notification_1 = require("hornet-js-react-components/src/widget/notification/notification");
var schema = require("src/resources/admin/fvm/validation-recordList.json");
var notification_manager_1 = require("hornet-js-core/src/notification/notification-manager");
var table_1 = require("hornet-js-react-components/src/widget/table/table");
var header_1 = require("hornet-js-react-components/src/widget/table/header");
var menu_actions_1 = require("hornet-js-react-components/src/widget/table/menu-actions");
var action_button_1 = require("hornet-js-react-components/src/widget/table/action-button");
var picto_1 = require("hornet-js-react-components/src/img/picto");
var content_1 = require("hornet-js-react-components/src/widget/table/content");
var column_1 = require("hornet-js-react-components/src/widget/table/column");
var columns_1 = require("hornet-js-react-components/src/widget/table/columns");
var date_column_1 = require("hornet-js-react-components/src/widget/table/column/date-column");
var footer_1 = require("hornet-js-react-components/src/widget/table/footer");
var pager_1 = require("hornet-js-react-components/src/widget/pager/pager");
var paginate_datasource_1 = require("hornet-js-core/src/component/datasource/paginate-datasource");
var action_column_1 = require("hornet-js-react-components/src/widget/table/column/action-column");
var icon_1 = require("hornet-js-react-components/src/widget/icon/icon");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.fvm.fvm-recordList-page");
var RecordListPage = /** @class */ (function (_super) {
    tslib_1.__extends(RecordListPage, _super);
    function RecordListPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.entries = new paginate_datasource_1.PaginateDataSource([], { itemsPerPage: 10 }, {});
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
    RecordListPage.prototype.prepareClient = function () {
        var _this = this;
        this.getService().getListeDossier().then(function (all) {
            _this.entries.add(true, all);
        });
    };
    RecordListPage.prototype.onSubmit = function (data) {
        var criteria = { "numPermis": data.num_permis };
        if (data.nom != null) {
            criteria["nom"] = data.nom;
        }
        if (data.prenom != null) {
            criteria["prenom"] = data.prenom;
        }
        if (data.date_de_naissance != null) {
            criteria["dateDeNaissance"] = Date.parse(data.date_de_naissance);
        }
        var subList = this.entries.findAll(criteria);
        this.entries.deleteAll();
        this.entries.add(true, subList);
    };
    RecordListPage.prototype.render = function () {
        var format = this.i18n("forms");
        return (React.createElement("div", null,
            React.createElement(icon_1.Icon, { src: picto_1.Picto.blue.previous, alt: "Retourner \u00E0 la page d'accueil", title: "Retourner \u00E0 la page d'accueil", action: this.retourPage }),
            React.createElement(notification_1.Notification, { id: "errors" }),
            React.createElement(notification_1.Notification, { id: "notif" }),
            React.createElement(table_1.Table, { id: "tableau des entr\u00E9es" },
                React.createElement(header_1.Header, { title: "Dossiers entrés dans la base" },
                    React.createElement(menu_actions_1.MenuActions, null,
                        React.createElement(action_button_1.ActionButton, { title: "Ajout", srcImg: picto_1.Picto.white.ajouter, displayedWithoutResult: true, action: this.ajouterDossier, priority: true }))),
                React.createElement(content_1.Content, { dataSource: this.entries },
                    React.createElement(columns_1.Columns, null,
                        React.createElement(column_1.Column, { keyColumn: "numPermis", title: format.fields.num_permis.label, sortable: false }),
                        React.createElement(column_1.Column, { keyColumn: "nom", title: format.fields.nom.label, sortable: true }),
                        React.createElement(column_1.Column, { keyColumn: "prenom", title: format.fields.prenom.label, sortable: false }),
                        React.createElement(date_column_1.DateColumn, { keyColumn: "dateDeNaissance", title: format.fields.date_de_naissance.label, sortable: false }),
                        React.createElement(date_column_1.DateColumn, { keyColumn: "dateReceptionDossier", title: format.fields.date_reception_dossier.label, sortable: true }),
                        React.createElement(action_column_1.ActionColumn, { keyColumn: "idPermis", srcImg: picto_1.Picto.black.consulter, action: this.consulterDossier }),
                        React.createElement(action_column_1.ActionColumn, { keyColumn: "idPermis", srcImg: picto_1.Picto.black.supprimer, messageAlert: "Êtes vous sûr de vouloir supprimer ce dossier ?", action: this.supprimerDossier }))),
                React.createElement(footer_1.Footer, null,
                    React.createElement(pager_1.Pager, { dataSource: this.entries, id: "table-paginate" }))),
            React.createElement("h3", null, " Recherche d'un dossier "),
            React.createElement(form_1.Form, { id: "entrycriteriaform", schema: schema, onSubmit: this.onSubmit, formMessages: format },
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "num_permis", label: format.fields.num_permis.label, required: true }),
                    React.createElement(input_field_1.InputField, { name: "nom", label: format.fields.nom.label, required: false }),
                    React.createElement(input_field_1.InputField, { name: "prenom", label: format.fields.prenom.label, required: false }),
                    React.createElement(calendar_field_1.CalendarField, { name: "date_de_naissance", label: format.fields.date_de_naissance.label, title: format.fields.date_de_naissance.title, required: false }),
                    React.createElement(buttons_area_1.ButtonsArea, null,
                        React.createElement(button_1.Button, { type: "button", onClick: this.reloadData, label: "annuler" }),
                        React.createElement(button_1.Button, { type: "submit", value: "Valider", className: "hornet-button", label: "valider", title: "Effectuer une recherche selon ces crit\u00E8res" }))))));
    };
    RecordListPage.prototype.supprimerDossier = function (lineSelected) {
        var _this = this;
        this.getService().deleteDossier({ idPermis: lineSelected.idPermis }).then(function (result) {
            if (result.hasError != null) {
                console.error(result.hasReason);
                console.error(result.hasError);
                _this.SequelizeErrors.text = result.hasReason;
                notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
            }
            else {
                _this.reloadData();
                notification_manager_1.NotificationManager.notify("SequelizeSuccess", "notif", null, _this.success, null, null, null);
            }
        }).catch(function (reason) {
            _this.SequelizeErrors.text = reason;
            notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
        });
    };
    RecordListPage.prototype.consulterDossier = function (lineSelected) {
        this.navigateTo("/fvmrecord/" + lineSelected.idPermis, {}, function () { });
    };
    RecordListPage.prototype.retourPage = function () {
        this.navigateTo("/accueil", {}, function () { });
    };
    RecordListPage.prototype.ajouterDossier = function () {
        this.navigateTo("/fvmform1", {}, function () { });
    };
    RecordListPage.prototype.reloadData = function () {
        var _this = this;
        this.entries.deleteAll();
        this.getService().getListeDossier().then(function (all) {
            _this.entries.add(true, all);
        });
    };
    return RecordListPage;
}(hornet_page_1.HornetPage));
exports.RecordListPage = RecordListPage;

//# sourceMappingURL=fvm-recordList-page.js.map
