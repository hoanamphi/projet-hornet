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
var datasource_config_page_1 = require("hornet-js-core/src/component/datasource/config/service/datasource-config-page");
var table_1 = require("hornet-js-react-components/src/widget/table/table");
var picto_1 = require("hornet-js-react-components/src/img/picto");
var content_1 = require("hornet-js-react-components/src/widget/table/content");
var column_1 = require("hornet-js-react-components/src/widget/table/column");
var columns_1 = require("hornet-js-react-components/src/widget/table/columns");
var date_column_1 = require("hornet-js-react-components/src/widget/table/column/date-column");
var accordions_1 = require("hornet-js-react-components/src/widget/accordion/accordions");
var accordion_1 = require("hornet-js-react-components/src/widget/accordion/accordion");
var datasource_1 = require("hornet-js-core/src/component/datasource/datasource");
var upload_file_field_1 = require("hornet-js-react-components/src/widget/form/upload-file-field");
var tabs_1 = require("hornet-js-react-components/src/widget/tab/tabs");
var tab_1 = require("hornet-js-react-components/src/widget/tab/tab");
var tab_content_1 = require("hornet-js-react-components/src/widget/tab/tab-content");
var icon_1 = require("hornet-js-react-components/src/widget/icon/icon");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.gen-form1-page");
var RecordDetailsPage = /** @class */ (function (_super) {
    tslib_1.__extends(RecordDetailsPage, _super);
    function RecordDetailsPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.tabs = new tabs_1.Tabs();
        _this.dossierDatasource = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().getDossier), {});
        _this.demandeauthentificationDatasource = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().getDemandeAuthentification), {});
        return _this;
    }
    RecordDetailsPage.prototype.prepareClient = function () {
        var _this = this;
        this.dossierDatasource.fetch(true, this.attributes);
        this.demandeauthentificationDatasource.fetch(true, this.attributes);
        this.dossierDatasource.on("fetch", function (Result) {
            _this.tabs.addElements(1, _this.renderDossierTab(Result[0]));
            _this.tabs.removeElementsById("temp");
        });
        this.demandeauthentificationDatasource.on("fetch", function (Result) {
            _this.tabs.addElements(2, _this.renderDemandeAuthentificationTab(Result));
        });
    };
    RecordDetailsPage.prototype.onSubmit = function (data) {
    };
    RecordDetailsPage.prototype.render = function () {
        var _this = this;
        var format = this.i18n("forms");
        return (React.createElement("div", null,
            React.createElement(icon_1.Icon, { src: picto_1.Picto.blue.previous, alt: "Retourner \u00E0 la page de s\u00E9lection", title: "Retourner \u00E0 la page de s\u00E9lection", action: this.retourPage }),
            React.createElement(tabs_1.Tabs, { ref: function (tabs) {
                    _this.tabs = tabs;
                }, id: "tabs", selectedTabIndex: 0 },
                React.createElement(tab_1.Tab, { index: -1, id: "temp" }, " "))));
    };
    RecordDetailsPage.prototype.renderDossierTab = function (dossier) {
        var format = this.i18n("forms");
        this.dossier = dossier;
        return (React.createElement(tab_1.Tab, { id: "tabDossier", title: "Dossier" },
            React.createElement(tab_content_1.TabContent, null,
                React.createElement(accordions_1.Accordions, { id: "value-accordion", multiSelectable: true },
                    React.createElement(accordion_1.Accordion, { title: "Permis", isOpen: false },
                        React.createElement(row_1.Row, null,
                            React.createElement(table_1.Table, { id: "entr\u00E9e permis" },
                                React.createElement(content_1.Content, { dataSource: this.dossierDatasource },
                                    React.createElement(columns_1.Columns, null,
                                        React.createElement(column_1.Column, { keyColumn: "numPermis", title: format.fields.num_permis.label, sortable: false }),
                                        React.createElement(date_column_1.DateColumn, { keyColumn: "dateDeDelivrance", title: format.fields.date_de_delivrance.label, sortable: false }))))),
                        React.createElement(row_1.Row, null,
                            React.createElement("div", null,
                                React.createElement("b", null,
                                    " ",
                                    format.fields.id_prefecture.label,
                                    " "),
                                React.createElement(table_1.Table, { id: "entr\u00E9e pr\u00E9fecture" },
                                    React.createElement(content_1.Content, { dataSource: this.dossierDatasource },
                                        React.createElement(columns_1.Columns, null,
                                            React.createElement(column_1.Column, { keyColumn: "adresse", title: format.fields.adresse.label, sortable: false }),
                                            React.createElement(column_1.Column, { keyColumn: "codePostal", title: format.fields.code_postal.label, sortable: false }),
                                            React.createElement(column_1.Column, { keyColumn: "ville", title: format.fields.ville.label, sortable: false }),
                                            React.createElement(column_1.Column, { keyColumn: "prefecture", title: format.fields.prefecture.label, sortable: false }),
                                            React.createElement(column_1.Column, { keyColumn: "departement", title: format.fields.departement.label, sortable: false }),
                                            React.createElement(column_1.Column, { keyColumn: "region", title: format.fields.region.label, sortable: false }),
                                            React.createElement(date_column_1.DateColumn, { keyColumn: "dateReceptionDossier", title: format.fields.date_reception_dossier.label, sortable: false }))))))),
                    React.createElement(accordion_1.Accordion, { title: "Personne titulaire du permis", isOpen: false },
                        React.createElement(table_1.Table, { id: "entr\u00E9e personne" },
                            React.createElement(content_1.Content, { dataSource: this.dossierDatasource },
                                React.createElement(columns_1.Columns, null,
                                    React.createElement(column_1.Column, { keyColumn: "nom", title: format.fields.nom.label, sortable: false }),
                                    React.createElement(column_1.Column, { keyColumn: "prenom", title: format.fields.prenom.label, sortable: false }),
                                    React.createElement(date_column_1.DateColumn, { keyColumn: "dateDeNaissance", title: format.fields.date_de_naissance.label, sortable: false }),
                                    React.createElement(column_1.Column, { keyColumn: "villeDeNaissance", title: format.fields.ville_de_naissance.label, sortable: false }),
                                    React.createElement(column_1.Column, { keyColumn: "paysDeNaissance", title: format.fields.pays_de_naissance.label, sortable: false }))))),
                    React.createElement(accordion_1.Accordion, { title: "Annexes", isOpen: false },
                        React.createElement(form_1.Form, { id: "fileform", readOnly: true, defaultValues: this.dossier },
                            React.createElement(upload_file_field_1.UploadFileField, { name: "copie_permis", readOnly: true, label: format.fields.copie_permis.label, renderPreviewFile: this.renderCopiePermis, buttonLabel: format.fields.copie_permis.buttonLabel, fileSelectedLabel: format.fields.copie_permis.fileSelectedLabel }),
                            React.createElement(upload_file_field_1.UploadFileField, { name: "copie_note_verbale_maeci", readOnly: true, label: format.fields.copie_note_verbale_maeci.label, renderPreviewFile: this.renderCopieNoteVerbaleMAECI, buttonLabel: format.fields.copie_note_verbale_maeci.buttonLabel, fileSelectedLabel: format.fields.copie_note_verbale_maeci.fileSelectedLabel })))))));
    };
    RecordDetailsPage.prototype.renderCopiePermis = function (file) {
        var format = this.i18n("forms");
        var fileTag = null;
        var urlfile = hornet_js_utils_1.Utils.buildContextPath("/services/recordserver/copiePermis/" + this.dossier.copie_permis.idCopiePermis);
        var fileTarget = "newTabForCopiePermis" + this.attributes.idPermis;
        fileTag =
            React.createElement("div", { className: "grid-form-field " },
                React.createElement("div", { className: "" },
                    React.createElement("a", { href: urlfile, "data-pass-thru": "true", target: fileTarget }, this.dossier.copie_permis.nom)));
        return fileTag;
    };
    RecordDetailsPage.prototype.renderCopieNoteVerbaleMAECI = function (file) {
        var format = this.i18n("forms");
        var fileTag = null;
        var urlfile = hornet_js_utils_1.Utils.buildContextPath("/services/recordserver/copieNoteVerbaleMAECI/" + this.dossier.copie_note_verbale_maeci.idCopieNoteVerbaleMAECI);
        var fileTarget = "newTabForCopieNoteVerbaleMAECI" + this.attributes.idPermis;
        fileTag =
            React.createElement("div", { className: "grid-form-field " },
                React.createElement("div", { className: "" },
                    React.createElement("a", { href: urlfile, "data-pass-thru": "true", target: fileTarget }, this.dossier.copie_note_verbale_maeci.nom)));
        return fileTag;
    };
    RecordDetailsPage.prototype.renderDemandeAuthentificationTab = function (demandeAuthentificationList) {
        var format = this.i18n("forms");
        if (demandeAuthentificationList.length > 0) {
            var fileTag = null;
            var urlfile = hornet_js_utils_1.Utils.buildContextPath("/services/recordserver/pdfMake/demandeAuthentification/" + this.attributes.idPermis);
            var fileTarget = "newTabForDemandeAuthentification" + this.attributes.idPermis;
            fileTag =
                React.createElement(tab_1.Tab, { id: "tabDemandeAuthentification", title: "Demande d'Authentification" },
                    React.createElement(tab_content_1.TabContent, null,
                        React.createElement("h6", null, " Vous avez g\u00E9n\u00E9r\u00E9 une demande d'authentification pour ce dossier "),
                        React.createElement(form_1.Form, { id: "demandeAuthentificationForm", readOnly: true, defaultValues: demandeAuthentificationList[0] },
                            React.createElement(input_field_1.InputField, { name: "numDemandeAuthentification", label: format.fields.num_demande_authentification.label, readOnly: true }),
                            React.createElement(calendar_field_1.CalendarField, { name: "dateDeCreation", label: format.fields.date_de_creation.label, readOnly: true }),
                            React.createElement(input_field_1.InputField, { name: "numValise", label: format.fields.num_valise.label, readOnly: true }),
                            React.createElement(calendar_field_1.CalendarField, { name: "dateDuTraitement", label: format.fields.date_du_traitement.label, readOnly: true })),
                        React.createElement("div", { className: "grid-form-field " },
                            React.createElement("div", { className: "" },
                                React.createElement("a", { href: urlfile, "data-pass-thru": "true", target: fileTarget }, "Demande d'authentification générée")))));
            return fileTag;
        }
        else {
            return (React.createElement(tab_1.Tab, { id: "tabDemandeAuthentification", title: "Demande d'Authentification" },
                React.createElement(tab_content_1.TabContent, null,
                    React.createElement("h6", null, " Vous n'avez pas encore g\u00E9n\u00E9r\u00E9 de demande d'authentification pour ce dossier "),
                    React.createElement(buttons_area_1.ButtonsArea, null,
                        React.createElement(button_1.Button, { type: "submit", onClick: this.genererDemande, value: "Valider", className: "hornet-button", label: "g\u00E9n\u00E9rer une demande d'authentification", title: "valider" })))));
        }
    };
    RecordDetailsPage.prototype.retourPage = function () {
        this.navigateTo("/record", {}, function () { });
    };
    RecordDetailsPage.prototype.genererDemande = function () {
        this.navigateTo("/form2/" + this.attributes.idPermis, {}, function () { });
    };
    return RecordDetailsPage;
}(hornet_page_1.HornetPage));
exports.RecordDetailsPage = RecordDetailsPage;

//# sourceMappingURL=gen-recordDetails-page.js.map
