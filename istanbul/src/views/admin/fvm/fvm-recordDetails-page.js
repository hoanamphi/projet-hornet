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
var notification_manager_1 = require("hornet-js-core/src/notification/notification-manager");
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
var radios_field_1 = require("hornet-js-react-components/src/widget/form/radios-field");
var select_field_1 = require("hornet-js-react-components/src/widget/form/select-field");
var alert_1 = require("hornet-js-react-components/src/widget/dialog/alert");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.fvm.fvm-recordDetails-page");
/* HornetPage :
    Classe générique : <Interface de la Classe de service, Props de la page, Context>
*/
/**
 * Page affichant les détails d'un dossier
 * @extends {HornetPage<PageService, HornetComponentProps, any>}
 */
var RecordDetailsPage = /** @class */ (function (_super) {
    tslib_1.__extends(RecordDetailsPage, _super);
    /**
     * @constructor
     * @param {HornetComponentProps} props
     * @param context
     */
    function RecordDetailsPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        /**
         * Onglets
         * @type {Tabs<TabsProps>}
         */
        _this.tabs = new tabs_1.Tabs();
        /**
         * Champs de texte contenant le nom du responsable du service des permis de conduire
         * @type {InputField}
         */
        _this.nomResponsableInput = new input_field_1.InputField();
        /**
         * Champs de texte contenant le prénom du responsable du service des permis de conduire
         * @type {InputField}
         */
        _this.prenomResponsableInput = new input_field_1.InputField();
        /**
         * Champs de texte contenant l'intitulé de la préfecture ayant délivré le permis
         * @type {InputField}
         */
        _this.intitulePrefectureInput = new input_field_1.InputField();
        /**
         * Champs de texte contenant l'intitulé du service des permis de conduire de la préfecture ayant délivré le permis
         * @type {InputField}
         */
        _this.intituleServiceInput = new input_field_1.InputField();
        /**
         * Composant permettant de sélectionner si l'adresse de la préfecture est CEDEX ou non
         * @type {SelectField}
         */
        _this.choixCedexSelect = new select_field_1.SelectField({ "name": "cedex" });
        /**
         * Composant ouvrant une popin validant la suppression d'une demande d'authentification
         * @type {Alert}
         */
        _this.supprAlert = new alert_1.Alert();
        _this.dossierDatasource = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().getDossier), {});
        _this.demandeauthentificationDatasource = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().getDemandeAuthentification), {});
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
    /**
     * Méthode permettant d'effectuer les appels d'API. Elle est appelée au moment où la Page est montée.
     */
    RecordDetailsPage.prototype.prepareClient = function () {
        var _this = this;
        this.dossierDatasource.fetch(true, this.attributes);
        this.dossierDatasource.on("fetch", function (result) {
            // Lorsque les données du datasource ont été récupérées
            _this.dossier = result[0];
            // Rendre l'onglet contenant les détails du dossier
            _this.tabs.addElements(1, _this.renderDossierTab());
            // Enlever l'onglet temporaire
            _this.tabs.removeElementsById("temp");
            _this.tabs.showPanel(1);
            // Récupére la demande d'authentification
            _this.demandeauthentificationDatasource.fetch(true, _this.attributes);
        });
        this.demandeauthentificationDatasource.on("fetch", function (result) {
            // Lorsque les données du datasource ont été récupérées
            _this.demandeAuthentification = result[0];
            // Recharger l'onglet
            _this.tabs.removeElementsByIndex(2);
            _this.tabs.addElements(2, _this.renderDemandeAuthentificationTab());
        });
    };
    /**
     * Méthode effectuant le rendu de la vue
     * @returns {JSX.Element}
     */
    RecordDetailsPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(icon_1.Icon, { src: picto_1.Picto.blue.previous, alt: "Retourner \u00E0 la page de s\u00E9lection", title: "Retourner \u00E0 la page de s\u00E9lection", action: this.retourPage }),
            React.createElement(tabs_1.Tabs, { ref: function (tabs) {
                    _this.tabs = tabs;
                }, id: "tabs", selectedTabIndex: 0 },
                React.createElement(tab_1.Tab, { index: -1, id: "temp" }, " "))));
    };
    /**
     * Méthode effectuant le rendu de l'onglet contenant les détails du dossier
     * @returns {JSX.Element}
     */
    RecordDetailsPage.prototype.renderDossierTab = function () {
        var format = this.i18n("forms");
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
    /**
     * Méthode rendant l'élément permettant de récupérer la copie du permis de conduire
     * @returns {__React.ReactElement<any>}
     */
    RecordDetailsPage.prototype.renderCopiePermis = function () {
        var fileTag;
        var urlfile = hornet_js_utils_1.Utils.buildContextPath("/services/fvmrecordserver/copiePermis/" + this.dossier.copie_permis.idCopiePermis);
        var fileTarget = "newTabForCopiePermis" + this.attributes.idPermis;
        fileTag =
            React.createElement("div", { className: "grid-form-field " },
                React.createElement("div", { className: "copiepermis" },
                    React.createElement("a", { href: urlfile, "data-pass-thru": "true", target: fileTarget }, this.dossier.copie_permis.nom)));
        return fileTag;
    };
    /**
     * Méthode rendant l'élément permettant de récupérer la copie de la note verbale du MAECI
     * @returns {__React.ReactElement<any>}
     */
    RecordDetailsPage.prototype.renderCopieNoteVerbaleMAECI = function () {
        var fileTag;
        var urlfile = hornet_js_utils_1.Utils.buildContextPath("/services/fvmrecordserver/copieNoteVerbaleMAECI/" + this.dossier.copie_note_verbale_maeci.idCopieNoteVerbaleMAECI);
        var fileTarget = "newTabForCopieNoteVerbaleMAECI" + this.attributes.idPermis;
        fileTag =
            React.createElement("div", { className: "grid-form-field " },
                React.createElement("div", { className: "copienoteverbalemaeci" },
                    React.createElement("a", { href: urlfile, "data-pass-thru": "true", target: fileTarget }, this.dossier.copie_note_verbale_maeci.nom)));
        return fileTag;
    };
    /**
     * Méthode effectuant le rendu de l'onglet contenant la demande d'authentification
     * @returns {JSX.Element}
     */
    RecordDetailsPage.prototype.renderDemandeAuthentificationTab = function () {
        var _this = this;
        // Objet Json contenant le format des champs (label, title,etc..)
        var format = this.i18n("forms");
        // Si une demande d'authentification a été insérée
        if (this.demandeAuthentification != null) {
            var fileTag = void 0;
            // Détails de la demande d'authentification
            var dataForm = this.demandeAuthentification;
            dataForm["nom_responsable"] = "Zitouni";
            dataForm["prenom_responsable"] = "Samah";
            dataForm["intitule_prefecture"] = "Préfecture de ";
            dataForm["prefecture"] = this.dossier.prefecture;
            dataForm["intitule_service"] = "Service des permis de conduire";
            var dataCedex = new datasource_1.DataSource([{ "id": "false", "libelle": "non" }, { "id": "true", "libelle": "oui" }], { "value": "id", "label": "libelle" });
            // Paramètre par défaut pour générer le PDF de la demande d'authentification
            var defaultParams = encodeURI(dataForm.nom_responsable + "+" + dataForm.prenom_responsable + "+" + dataForm.intitule_prefecture + "+" + dataForm.intitule_service + "+false");
            var urlfile = hornet_js_utils_1.Utils.buildContextPath("/services/fvmrecordserver/pdfMake/demandeAuthentification/" + this.attributes.idPermis + "/" + defaultParams);
            var fileTarget = "newTabForDemandeAuthentification" + this.attributes.idPermis;
            fileTag =
                React.createElement(tab_1.Tab, { id: "tabDemandeAuthentification", title: "Demande d'Authentification" },
                    React.createElement(tab_content_1.TabContent, { dataSource: this.demandeauthentificationDatasource },
                        React.createElement(notification_1.Notification, { id: "errors" }),
                        React.createElement(alert_1.Alert, { message: "Êtes vous sûr de vouloir supprimer cette demande ?", ref: function (alert) { _this.supprAlert = alert; }, onClickOk: this.supprimerDemande, onClickClose: this.closeAlert, validTitle: "Supprimer la demande", isVisible: false }),
                        React.createElement("h6", null, " Vous avez g\u00E9n\u00E9r\u00E9 une demande d'authentification pour ce dossier "),
                        React.createElement(icon_1.Icon, { src: picto_1.Picto.blue.supprimer, alt: "Supprimer la demande d'authentification", title: "Supprimer la demande d'authentification", action: this.openAlert }),
                        React.createElement(form_1.Form, { id: "demandeAuthentificationForm", defaultValues: dataForm },
                            React.createElement(input_field_1.InputField, { name: "numDemandeAuthentification", label: format.fields.num_demande_authentification.label, readOnly: true }),
                            React.createElement(calendar_field_1.CalendarField, { name: "dateDeCreation", label: format.fields.date_de_creation.label, readOnly: true }),
                            React.createElement(input_field_1.InputField, { name: "numValise", label: format.fields.num_valise.label, readOnly: true }),
                            React.createElement(calendar_field_1.CalendarField, { name: "dateDuTraitement", label: format.fields.date_du_traitement.label, readOnly: true }),
                            React.createElement(row_1.Row, null,
                                React.createElement(input_field_1.InputField, { name: "nom_responsable", ref: function (input) { _this.nomResponsableInput = input; }, onChange: this.handleUrl, label: format.fields.nom_responsable.label, readOnly: false }),
                                React.createElement(input_field_1.InputField, { name: "prenom_responsable", ref: function (input) { _this.prenomResponsableInput = input; }, onChange: this.handleUrl, label: format.fields.prenom_responsable.label, readOnly: false })),
                            React.createElement(row_1.Row, null,
                                React.createElement(input_field_1.InputField, { name: "intitule_prefecture", ref: function (input) { _this.intitulePrefectureInput = input; }, onChange: this.handleUrl, label: format.fields.intitule_prefecture.label, readOnly: false }),
                                React.createElement(input_field_1.InputField, { name: "prefecture", label: format.fields.prefecture.label, readOnly: true })),
                            React.createElement(input_field_1.InputField, { name: "intitule_service", ref: function (input) { _this.intituleServiceInput = input; }, onChange: this.handleUrl, label: format.fields.intitule_prefecture.label, readOnly: false }),
                            React.createElement(select_field_1.SelectField, { name: "cedex", ref: function (select) { _this.choixCedexSelect = select; }, onClick: this.handleUrl, label: format.fields.cedex.label, dataSource: dataCedex, inline: radios_field_1.RadiosField.Inline.FIELD })),
                        React.createElement("div", { className: "grid-form-field " },
                            React.createElement("div", { className: "demandeauthentification" },
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
    /**
     * Méthode ouvrant une popin permettant de valider la suppression d'une demande d'authentification
     */
    RecordDetailsPage.prototype.openAlert = function () {
        this.supprAlert.open();
    };
    /**
     * Méthode fermant la popin permettant de valider la suppression d'une demande d'authentification
     */
    RecordDetailsPage.prototype.closeAlert = function () {
        this.supprAlert.close();
    };
    /**
     * Méthode appelant le service de suppression de la demande d'authentification
     */
    RecordDetailsPage.prototype.supprimerDemande = function () {
        var _this = this;
        this.getService().deleteDemandeAuthentification({ idDemandeAuthentification: this.demandeAuthentification.idDemandeAuthentification }).then(function (result) {
            // Si le résultat contient une erreur
            if (result.hasError != null) {
                console.error(result.hasReason);
                console.error(result.hasError);
                // Afficher un message d'erreur
                _this.SequelizeErrors.text = result.hasReason;
                notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
            }
            else {
                // Recharger l'onglet
                _this.demandeauthentificationDatasource.fetch(true);
                // Afficher un message d'information
                notification_manager_1.NotificationManager.notify("SequelizeSuccess", "notif", null, _this.success, null, null, null);
            }
        }).catch(function (reason) {
            _this.SequelizeErrors.text = reason;
            notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
        });
    };
    /**
     * Méthode mofifiant l'URL permettant d'accéder au PDF de la demande d'authentification
     */
    RecordDetailsPage.prototype.handleUrl = function () {
        var params = encodeURI(this.nomResponsableInput.getCurrentValue() + "+" + this.prenomResponsableInput.getCurrentValue() + "+" + this.intitulePrefectureInput.getCurrentValue() + "+" + this.intituleServiceInput.getCurrentValue() + "+" + this.choixCedexSelect.getCurrentValue());
        var a;
        a = document.querySelector(".demandeauthentification a");
        a.href = hornet_js_utils_1.Utils.buildContextPath("/services/fvmrecordserver/pdfMake/demandeAuthentification/" + this.attributes.idPermis + "/" + params);
    };
    /**
     * Méthode permettant de naviguer jusqu'à la page de sélection d'un dossier
     */
    RecordDetailsPage.prototype.retourPage = function () {
        this.navigateTo("/fvmrecord", {}, function () { });
    };
    /**
     * Méthode permettant de naviguer jusqu'à la page du formulaire d'insertion d'une demande d'authentification
     */
    RecordDetailsPage.prototype.genererDemande = function () {
        this.navigateTo("/fvmform2/" + this.attributes.idPermis, {}, function () { });
    };
    return RecordDetailsPage;
}(hornet_page_1.HornetPage));
exports.RecordDetailsPage = RecordDetailsPage;

//# sourceMappingURL=fvm-recordDetails-page.js.map
