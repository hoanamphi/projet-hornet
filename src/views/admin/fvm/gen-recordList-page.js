"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var datasource_1 = require("hornet-js-core/src/component/datasource/datasource");
var table_1 = require("hornet-js-react-components/src/widget/table/table");
var header_1 = require("hornet-js-react-components/src/widget/table/header");
var menu_actions_1 = require("hornet-js-react-components/src/widget/table/menu-actions");
var action_button_1 = require("hornet-js-react-components/src/widget/table/action-button");
var picto_1 = require("hornet-js-react-components/src/img/picto");
var content_1 = require("hornet-js-react-components/src/widget/table/content");
var column_1 = require("hornet-js-react-components/src/widget/table/column");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.gen-form1-page");
var RecordListPage = /** @class */ (function (_super) {
    tslib_1.__extends(RecordListPage, _super);
    function RecordListPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.entries = new datasource_1.DataSource([{ "num_permis": "permis", "nom": "nom", "prenom": "prenom", "date_de_naissance": "test", "date_reception_dossier": "test" }]);
        return _this;
    }
    RecordListPage.prototype.prepareClient = function () {
    };
    RecordListPage.prototype.onSubmit = function (data) {
    };
    RecordListPage.prototype.render = function () {
        var format = this.i18n("form");
        return (React.createElement("div", null,
            React.createElement(table_1.Table, { id: "tableau des entr\u00E9es" },
                React.createElement(header_1.Header, { title: "Dossiers entrés dans la base" },
                    React.createElement(menu_actions_1.MenuActions, null,
                        React.createElement(action_button_1.ActionButton, { title: "Ajout", srcImg: picto_1.Picto.white.ajouter, action: this.ajouterDossier, priority: true }))),
                React.createElement(content_1.Content, { dataSource: this.entries },
                    React.createElement(column_1.Column, { keyColumn: "num_permis", title: format.fields.num_permis.label, sortable: false }),
                    React.createElement(column_1.Column, { keyColumn: "nom", title: format.fields.nom.label, sortable: false }),
                    React.createElement(column_1.Column, { keyColumn: "prenom", title: format.fields.prenom.label, sortable: false }),
                    React.createElement(column_1.Column, { keyColumn: "date_de_naissance", title: format.fields.date_de_naissance.label, sortable: false }),
                    React.createElement(column_1.Column, { keyColumn: "date_reception_dossier", title: format.fields.date_de_reception_du_dossier.label, sortable: false })))));
    };
    RecordListPage.prototype.ajouterDossier = function () {
        console.log("ajouter");
    };
    return RecordListPage;
}(hornet_page_1.HornetPage));
exports.RecordListPage = RecordListPage;

//# sourceMappingURL=gen-recordList-page.js.map
