"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var datasource_config_page_1 = require("hornet-js-core/src/component/datasource/config/service/datasource-config-page");
var table_1 = require("hornet-js-react-components/src/widget/table/table");
var content_1 = require("hornet-js-react-components/src/widget/table/content");
var column_1 = require("hornet-js-react-components/src/widget/table/column");
var columns_1 = require("hornet-js-react-components/src/widget/table/columns");
var date_column_1 = require("hornet-js-react-components/src/widget/table/column/date-column");
var accordions_1 = require("hornet-js-react-components/src/widget/accordion/accordions");
var accordion_1 = require("hornet-js-react-components/src/widget/accordion/accordion");
var datasource_1 = require("hornet-js-core/src/component/datasource/datasource");
var upload_file_field_1 = require("hornet-js-react-components/src/widget/form/upload-file-field");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.gen-form1-page");
var RecordDetailsPage = /** @class */ (function (_super) {
    tslib_1.__extends(RecordDetailsPage, _super);
    function RecordDetailsPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.dossier = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().getDossier), {});
        return _this;
    }
    RecordDetailsPage.prototype.prepareClient = function () {
        this.dossier.fetch(true, this.attributes);
    };
    RecordDetailsPage.prototype.onSubmit = function (data) {
    };
    RecordDetailsPage.prototype.render = function () {
        var format = this.i18n("form");
        return (React.createElement("div", null,
            React.createElement(accordions_1.Accordions, { id: "value-accordion", multiSelectable: true },
                React.createElement(accordion_1.Accordion, { title: "Permis", isOpen: false },
                    React.createElement("h3", null, " Permis re\u00E7u "),
                    React.createElement(table_1.Table, { id: "entr\u00E9e permis" },
                        React.createElement(content_1.Content, { dataSource: this.dossier },
                            React.createElement(columns_1.Columns, null,
                                React.createElement(column_1.Column, { keyColumn: "num_permis", title: format.fields.num_permis.label, sortable: false }),
                                React.createElement(date_column_1.DateColumn, { keyColumn: "date_de_delivrance", title: format.fields.date_de_delivrance.label, sortable: false })))),
                    React.createElement("h3", null, " Pr\u00E9fecture de d\u00E9livrance "),
                    React.createElement(table_1.Table, { id: "entr\u00E9e pr\u00E9fecture" },
                        React.createElement(content_1.Content, { dataSource: this.dossier },
                            React.createElement(columns_1.Columns, null,
                                React.createElement(column_1.Column, { keyColumn: "adresse", title: format.fields.adresse.label, sortable: false }),
                                React.createElement(column_1.Column, { keyColumn: "code_postal", title: format.fields.code_postal.label, sortable: false }),
                                React.createElement(column_1.Column, { keyColumn: "ville", title: format.fields.ville.label, sortable: false }),
                                React.createElement(column_1.Column, { keyColumn: "prefecture", title: format.fields.prefecture.label, sortable: false }),
                                React.createElement(column_1.Column, { keyColumn: "departement", title: format.fields.departement.label, sortable: false }),
                                React.createElement(column_1.Column, { keyColumn: "region", title: format.fields.region.label, sortable: false }),
                                React.createElement(date_column_1.DateColumn, { keyColumn: "date_reception_dossier", title: format.fields.date_reception_dossier.label, sortable: false }))))),
                React.createElement(accordion_1.Accordion, { title: "Personne titulaire du permis", isOpen: false },
                    React.createElement("h3", null, " Relev\u00E9 d'identit\u00E9 "),
                    React.createElement(table_1.Table, { id: "entr\u00E9e personne" },
                        React.createElement(content_1.Content, { dataSource: this.dossier },
                            React.createElement(columns_1.Columns, null,
                                React.createElement(column_1.Column, { keyColumn: "nom", title: format.fields.nom.label, sortable: false }),
                                React.createElement(column_1.Column, { keyColumn: "prenom", title: format.fields.prenom.label, sortable: false }),
                                React.createElement(date_column_1.DateColumn, { keyColumn: "date_de_naissance", title: format.fields.date_de_naissance.label, sortable: false }),
                                React.createElement(column_1.Column, { keyColumn: "ville_de_naissance", title: format.fields.ville_de_naissance.label, sortable: false }),
                                React.createElement(column_1.Column, { keyColumn: "pays_de_naissance", title: format.fields.pays_de_naissance.label, sortable: false }))))),
                React.createElement(accordion_1.Accordion, { title: "Annexes", isOpen: false },
                    React.createElement(upload_file_field_1.UploadFileField, { name: "copie_note_verbale_maeci", readOnly: false, label: format.fields.copie_note_verbale_maeci.label, renderPreviewFile: this.renderCopieNoteVerbaleMAECI, buttonLabel: format.fields.copie_note_verbale_maeci.buttonLabel, fileSelectedLabel: format.fields.copie_note_verbale_maeci.fileSelectedLabel })))));
    };
    RecordDetailsPage.prototype.renderCopieNoteVerbaleMAECI = function (file) {
        var fileTag = null;
    };
    return RecordDetailsPage;
}(hornet_page_1.HornetPage));
exports.RecordDetailsPage = RecordDetailsPage;

//# sourceMappingURL=gen-recordDetails-page.js.map
