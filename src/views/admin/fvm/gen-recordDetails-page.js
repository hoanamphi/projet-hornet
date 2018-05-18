"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var row_1 = require("hornet-js-react-components/src/widget/form/row");
var datasource_config_page_1 = require("hornet-js-core/src/component/datasource/config/service/datasource-config-page");
var table_1 = require("hornet-js-react-components/src/widget/table/table");
var content_1 = require("hornet-js-react-components/src/widget/table/content");
var column_1 = require("hornet-js-react-components/src/widget/table/column");
var columns_1 = require("hornet-js-react-components/src/widget/table/columns");
var date_column_1 = require("hornet-js-react-components/src/widget/table/column/date-column");
var accordions_1 = require("hornet-js-react-components/src/widget/accordion/accordions");
var accordion_1 = require("hornet-js-react-components/src/widget/accordion/accordion");
var datasource_1 = require("hornet-js-core/src/component/datasource/datasource");
var tabs_1 = require("hornet-js-react-components/src/widget/tab/tabs");
var tab_1 = require("hornet-js-react-components/src/widget/tab/tab");
var tab_content_1 = require("hornet-js-react-components/src/widget/tab/tab-content");
var spinner_1 = require("hornet-js-react-components/src/widget/spinner/spinner");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.gen-form1-page");
var RecordDetailsPage = /** @class */ (function (_super) {
    tslib_1.__extends(RecordDetailsPage, _super);
    function RecordDetailsPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.dossier = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().getDossier), {});
        return _this;
    }
    RecordDetailsPage.prototype.prepareClient = function () {
        var _this = this;
        this.dossier.fetch(true, this.attributes);
        this.dossier.on("fetch", function (Result) {
            _this.tabs.removeElementsById(["test"]);
            _this.tabs.addElements(0, _this.renderDossierTab(Result[0]));
            console.log(Result);
            _this.tabs.refresh();
        });
    };
    RecordDetailsPage.prototype.onSubmit = function (data) {
    };
    RecordDetailsPage.prototype.render = function () {
        var _this = this;
        var format = this.i18n("form");
        return (React.createElement("div", null,
            React.createElement(tabs_1.Tabs, { ref: function (tabs) {
                    _this.tabs = tabs;
                }, id: "tabs", selectedTabIndex: 0 },
                React.createElement(tab_1.Tab, { index: 5, id: "test" },
                    " ",
                    React.createElement(spinner_1.Spinner, { loadingText: "test" }),
                    " "))));
    };
    RecordDetailsPage.prototype.renderDossierTab = function (dossier) {
        var format = this.i18n("form");
        return (React.createElement(tab_1.Tab, { id: "tabDossier", title: "Dossier" },
            React.createElement(tab_content_1.TabContent, null,
                React.createElement(accordions_1.Accordions, { id: "value-accordion", multiSelectable: true },
                    React.createElement(accordion_1.Accordion, { title: "Permis", isOpen: false },
                        React.createElement(row_1.Row, null,
                            React.createElement(table_1.Table, { id: "entr\u00E9e permis" },
                                React.createElement(content_1.Content, { dataSource: this.dossier },
                                    React.createElement(columns_1.Columns, null,
                                        React.createElement(column_1.Column, { keyColumn: "num_permis", title: format.fields.num_permis.label, sortable: false }),
                                        React.createElement(date_column_1.DateColumn, { keyColumn: "date_de_delivrance", title: format.fields.date_de_delivrance.label, sortable: false }))))),
                        React.createElement(row_1.Row, null,
                            React.createElement("div", null,
                                React.createElement("b", null,
                                    " ",
                                    format.fields.id_prefecture.label,
                                    " "),
                                React.createElement(table_1.Table, { id: "entr\u00E9e pr\u00E9fecture" },
                                    React.createElement(content_1.Content, { dataSource: this.dossier },
                                        React.createElement(columns_1.Columns, null,
                                            React.createElement(column_1.Column, { keyColumn: "adresse", title: format.fields.adresse.label, sortable: false }),
                                            React.createElement(column_1.Column, { keyColumn: "code_postal", title: format.fields.code_postal.label, sortable: false }),
                                            React.createElement(column_1.Column, { keyColumn: "ville", title: format.fields.ville.label, sortable: false }),
                                            React.createElement(column_1.Column, { keyColumn: "prefecture", title: format.fields.prefecture.label, sortable: false }),
                                            React.createElement(column_1.Column, { keyColumn: "departement", title: format.fields.departement.label, sortable: false }),
                                            React.createElement(column_1.Column, { keyColumn: "region", title: format.fields.region.label, sortable: false }),
                                            React.createElement(date_column_1.DateColumn, { keyColumn: "date_reception_dossier", title: format.fields.date_reception_dossier.label, sortable: false }))))))),
                    React.createElement(accordion_1.Accordion, { title: "Personne titulaire du permis", isOpen: false },
                        React.createElement(table_1.Table, { id: "entr\u00E9e personne" },
                            React.createElement(content_1.Content, { dataSource: this.dossier },
                                React.createElement(columns_1.Columns, null,
                                    React.createElement(column_1.Column, { keyColumn: "nom", title: format.fields.nom.label, sortable: false }),
                                    React.createElement(column_1.Column, { keyColumn: "prenom", title: format.fields.prenom.label, sortable: false }),
                                    React.createElement(date_column_1.DateColumn, { keyColumn: "date_de_naissance", title: format.fields.date_de_naissance.label, sortable: false }),
                                    React.createElement(column_1.Column, { keyColumn: "ville_de_naissance", title: format.fields.ville_de_naissance.label, sortable: false }),
                                    React.createElement(column_1.Column, { keyColumn: "pays_de_naissance", title: format.fields.pays_de_naissance.label, sortable: false }))))),
                    React.createElement(accordion_1.Accordion, { title: "Annexes", isOpen: false })))));
    };
    RecordDetailsPage.prototype.test = function () {
        console.log(this.dossier.findAll()[0]);
        return "test";
    };
    RecordDetailsPage.prototype.renderCopieNoteVerbaleMAECI = function (file) {
        console.log("test");
        var fileTag = null;
        console.log(file);
        if (file && file.id > -1) {
            var urlfile = hornet_js_utils_1.Utils.buildContextPath("/test");
            var filetarget = "tab";
            fileTag =
                React.createElement("div", { className: "grid-form-field" },
                    React.createElement("div", { className: "" },
                        React.createElement("a", { href: urlfile, "data-pass-thru": "true", target: filetarget }, " ")));
        }
        else if (file && file.name) {
            fileTag = React.createElement(row_1.Row, null,
                React.createElement("div", { className: "blocLabel" },
                    React.createElement("label", { htmlFor: "photo", id: "photoLabel" },
                        React.createElement("span", { className: "inputLabel" }, this.i18n("form").fields.copie_note_verbale_maeci.label))),
                React.createElement("div", { className: "grid-form-field" },
                    React.createElement("div", { className: "" }, file.name)));
        }
        return fileTag;
    };
    return RecordDetailsPage;
}(hornet_page_1.HornetPage));
exports.RecordDetailsPage = RecordDetailsPage;

//# sourceMappingURL=gen-recordDetails-page.js.map
