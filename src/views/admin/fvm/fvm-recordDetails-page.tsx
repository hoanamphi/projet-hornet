import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import * as React from "react";
import { HornetPage } from "hornet-js-react-components/src/widget/component/hornet-page";
import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
import { Form } from "hornet-js-react-components/src/widget/form/form";
import { Row } from "hornet-js-react-components/src/widget/form/row";
import { InputField } from "hornet-js-react-components/src/widget/form/input-field";
import { CalendarField } from "hornet-js-react-components/src/widget/form/calendar-field";
import { Button } from "hornet-js-react-components/src/widget/button/button";
import { ButtonsArea } from "hornet-js-react-components/src/widget/form/buttons-area";
import {Notification} from "hornet-js-react-components/src/widget/notification/notification";

import * as schema from "src/resources/admin/fvm/validation-recordList.json";
import {
  NotificationManager,
  Notifications,
  NotificationType
} from "hornet-js-core/src/notification/notification-manager";
import {DataSourceConfigPage} from "hornet-js-core/src/component/datasource/config/service/datasource-config-page";
import {Table} from "hornet-js-react-components/src/widget/table/table";
import {Header} from "hornet-js-react-components/src/widget/table/header";
import {MenuActions} from "hornet-js-react-components/src/widget/table/menu-actions";
import {ActionButton} from "hornet-js-react-components/src/widget/table/action-button";
import {Picto} from "hornet-js-react-components/src/img/picto";
import {Content} from "hornet-js-react-components/src/widget/table/content";
import {Column} from "hornet-js-react-components/src/widget/table/column";
import {Columns} from "hornet-js-react-components/src/widget/table/columns";
import {DateColumn} from "hornet-js-react-components/src/widget/table/column/date-column";
import {Footer} from "hornet-js-react-components/src/widget/table/footer";
import {Pager} from "hornet-js-react-components/src/widget/pager/pager";
import {PaginateDataSource, Pagination} from "hornet-js-core/src/component/datasource/paginate-datasource";
import {ActionColumn} from "hornet-js-react-components/src/widget/table/column/action-column";
import {Accordions} from "hornet-js-react-components/src/widget/accordion/accordions";
import {Accordion} from "hornet-js-react-components/src/widget/accordion/accordion";
import {DataSource} from "hornet-js-core/src/component/datasource/datasource";
import {UploadFileField} from "hornet-js-react-components/src/widget/form/upload-file-field";
import {UploadedFile} from "hornet-js-core/src/data/file";
import {Tabs, TabsProps} from "hornet-js-react-components/src/widget/tab/tabs";
import {Tab, TabProps} from "hornet-js-react-components/src/widget/tab/tab";
import {TabContent} from "hornet-js-react-components/src/widget/tab/tab-content";
import {Spinner} from "hornet-js-react-components/src/widget/spinner/spinner";
import {Icon} from "hornet-js-react-components/src/widget/icon/icon";
import {TabHeader} from "hornet-js-react-components/src/widget/tab/tab-header";
import {RadiosField} from "hornet-js-react-components/src/widget/form/radios-field";
import {SelectField} from "hornet-js-react-components/src/widget/form/select-field";
import {Alert} from "hornet-js-react-components/src/widget/dialog/alert";

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.gen-form1-page");

export class RecordDetailsPage extends HornetPage<any, HornetComponentProps, any> {

  private dossierDatasource;
  private dossier;
  private demandeauthentificationDatasource;
  private demandeAuthentification;

  private errors;
  private SequelizeErrors;
  private success;
  private SequelizeSuccess;

  private tabs = new Tabs<TabsProps>();
  private nom_responsable = new InputField();
  private prenom_responsable = new InputField();
  private intitule_prefecture = new InputField();
  private intitule_service = new InputField();
  private cedex = new SelectField({"name": "cedex"});
  private alert = new Alert();

  constructor(props?: HornetComponentProps, context?: any) {
    super(props, context);

    this.dossierDatasource = new DataSource<any>(new DataSourceConfigPage(this, this.getService().getDossier), {},);
    this.demandeauthentificationDatasource = new DataSource<any>(new DataSourceConfigPage(this, this.getService().getDemandeAuthentification), {},);

    this.errors =  new Notifications();
    this.SequelizeErrors = new NotificationType();
    this.SequelizeErrors.id = "SequelizeError";
    this.errors.addNotification(this.SequelizeErrors);

    this.success =  new Notifications();
    this.SequelizeSuccess = new NotificationType();
    this.SequelizeSuccess.id = "SequelizeSuccess";
    this.SequelizeSuccess.text = "Opération réussie";
    this.success.addNotification(this.SequelizeSuccess);
  }

  prepareClient(): void {
    this.dossierDatasource.fetch(true, this.attributes);
    this.dossierDatasource.on("fetch", (Result)=>{
      this.dossier = Result[0];
      this.tabs.addElements(1, this.renderDossierTab());
      this.tabs.removeElementsById("temp");
      this.tabs.showPanel(1);
      this.demandeauthentificationDatasource.fetch(true, this.attributes);
    });
    this.demandeauthentificationDatasource.on("fetch", result=>{
      this.demandeAuthentification = result[0];
      this.tabs.removeElementsByIndex(2);
      this.tabs.addElements(2, this.renderDemandeAuthentificationTab());
    });
  }

  render(): JSX.Element {
    let format = this.i18n("forms");

    return (
      <div>
        <Icon src={Picto.blue.previous} alt="Retourner à la page de sélection" title="Retourner à la page de sélection" action={this.retourPage}/>
        <Tabs ref={(tabs)=>{
          this.tabs = tabs;
        }} id="tabs" selectedTabIndex={0}
        >
          <Tab index={-1} id="temp"> </Tab>
        </Tabs>
      </div>
    );
  }

  renderDossierTab(): JSX.Element {
    let format = this.i18n("forms");

    return (
      <Tab id="tabDossier" title="Dossier">
        <TabContent>
          <Accordions id="value-accordion"
                      multiSelectable={true}>
            <Accordion title="Permis" isOpen={false}>
              <Row>
                <Table id="entrée permis">
                  <Content dataSource={this.dossierDatasource}>
                    <Columns>
                      <Column keyColumn="numPermis"
                              title={format.fields.num_permis.label}
                              sortable={false}/>
                      <DateColumn keyColumn="dateDeDelivrance"
                                  title={format.fields.date_de_delivrance.label}
                                  sortable={false}/>
                    </Columns>
                  </Content>
                </Table>
              </Row>
              <Row>
                <div>
                  <b> {format.fields.id_prefecture.label} </b>
                  <Table id="entrée préfecture">
                    <Content dataSource={this.dossierDatasource}>
                      <Columns>
                        <Column keyColumn="adresse"
                                title={format.fields.adresse.label}
                                sortable={false}/>
                        <Column keyColumn="codePostal"
                                title={format.fields.code_postal.label}
                                sortable={false}/>
                        <Column keyColumn="ville"
                                title={format.fields.ville.label}
                                sortable={false}/>
                        <Column keyColumn="prefecture"
                                title={format.fields.prefecture.label}
                                sortable={false}/>
                        <Column keyColumn="departement"
                                title={format.fields.departement.label}
                                sortable={false}/>
                        <Column keyColumn="region"
                                title={format.fields.region.label}
                                sortable={false}/>
                        <DateColumn keyColumn="dateReceptionDossier"
                                    title={format.fields.date_reception_dossier.label}
                                    sortable={false}/>
                      </Columns>
                    </Content>
                  </Table>
                </div>
              </Row>
            </Accordion>
            <Accordion title="Personne titulaire du permis" isOpen={false}>
              <Table id="entrée personne">
                <Content dataSource={this.dossierDatasource}>
                  <Columns>
                    <Column keyColumn="nom"
                            title={format.fields.nom.label}
                            sortable={false}/>
                    <Column keyColumn="prenom"
                            title={format.fields.prenom.label}
                            sortable={false}/>
                    <DateColumn keyColumn="dateDeNaissance"
                                title={format.fields.date_de_naissance.label}
                                sortable={false}/>
                    <Column keyColumn="villeDeNaissance"
                            title={format.fields.ville_de_naissance.label}
                            sortable={false}/>
                    <Column keyColumn="paysDeNaissance"
                            title={format.fields.pays_de_naissance.label}
                            sortable={false}/>
                  </Columns>
                </Content>
              </Table>
            </Accordion>
            <Accordion title="Annexes" isOpen={false}>
              <Form id="fileform" readOnly={true} defaultValues={this.dossier}>
                <UploadFileField name="copie_permis"
                                 readOnly={true}
                                 label={format.fields.copie_permis.label}
                                 renderPreviewFile={this.renderCopiePermis}
                                 buttonLabel={format.fields.copie_permis.buttonLabel}
                                 fileSelectedLabel={format.fields.copie_permis.fileSelectedLabel}
                />
                <UploadFileField name="copie_note_verbale_maeci"
                                 readOnly={true}
                                 label={format.fields.copie_note_verbale_maeci.label}
                                 renderPreviewFile={this.renderCopieNoteVerbaleMAECI}
                                 buttonLabel={format.fields.copie_note_verbale_maeci.buttonLabel}
                                 fileSelectedLabel={format.fields.copie_note_verbale_maeci.fileSelectedLabel}
                />
              </Form>
            </Accordion>
          </Accordions>
        </TabContent>
      </Tab>
    );
  }

  renderCopiePermis(file: UploadedFile): React.ReactElement<any> {
    let format = this.i18n("forms");
    let fileTag: React.ReactElement<any> = null;
    let urlfile: string = Utils.buildContextPath("/services/fvmrecordserver/copiePermis/"+this.dossier.copie_permis.idCopiePermis);

    let fileTarget = "newTabForCopiePermis" + this.attributes.idPermis;

    fileTag =
      <div className="grid-form-field ">
        <div className="copiepermis">
          <a href={urlfile} data-pass-thru="true"
             target={fileTarget}>{this.dossier.copie_permis.nom}</a>
        </div>
      </div>;

    return fileTag;
  }

  renderCopieNoteVerbaleMAECI(file: UploadedFile): React.ReactElement<any> {
    let format = this.i18n("forms");
    let fileTag: React.ReactElement<any> = null;

    let urlfile: string = Utils.buildContextPath("/services/fvmrecordserver/copieNoteVerbaleMAECI/"+this.dossier.copie_note_verbale_maeci.idCopieNoteVerbaleMAECI);

    let fileTarget = "newTabForCopieNoteVerbaleMAECI" + this.attributes.idPermis;

    fileTag =
      <div className="grid-form-field ">
        <div className="copienoteverbalemaeci">
          <a href={urlfile} data-pass-thru="true"
             target={fileTarget}>{this.dossier.copie_note_verbale_maeci.nom}</a>
        </div>
      </div>;

    return fileTag;
  }

  renderDemandeAuthentificationTab(): JSX.Element {
    let format = this.i18n("forms");

    if(this.demandeAuthentification != null) {
      let fileTag: React.ReactElement<any> = null;

      let dataForm = this.demandeAuthentification;
      dataForm["nom_responsable"] = "Zitouni";
      dataForm["prenom_responsable"] = "Samah";
      dataForm["intitule_prefecture"] = "Préfecture de ";
      dataForm["prefecture"] = this.dossier.prefecture;
      dataForm["intitule_service"] = "Service des permis de conduire";

      let dataCedex = new DataSource<any>([{"id": "false", "libelle": "non"}, {"id": "true", "libelle": "oui"}], {"value": "id", "label": "libelle"});

      let defaultParams = encodeURI(dataForm.nom_responsable+"+"+dataForm.prenom_responsable+"+"+dataForm.intitule_prefecture+"+"+dataForm.intitule_service+"+false");

      let urlfile: string = Utils.buildContextPath("/services/fvmrecordserver/pdfMake/demandeAuthentification/"+this.attributes.idPermis+"/"+defaultParams);

      let fileTarget = "newTabForDemandeAuthentification" + this.attributes.idPermis;

      fileTag =
        <Tab id="tabDemandeAuthentification" title="Demande d'Authentification">
          <TabContent dataSource={this.demandeauthentificationDatasource}>
            <Notification id="errors"/>

            <Alert message={"Êtes vous sûr de vouloir supprimer cette demande ?"}
                   ref={(alert)=>{this.alert = alert;}}
                   onClickOk={this.supprimerDemande}
                   onClickClose={this.closeAlert}
                   validTitle={"Supprimer la demande"}
                   isVisible={false}/>

            <h6> Vous avez généré une demande d'authentification pour ce dossier </h6>
            <Icon src={Picto.blue.supprimer} alt="Supprimer la demande d'authentification" title="Supprimer la demande d'authentification" action={this.openAlert}/>
            <Form id="demandeAuthentificationForm" defaultValues={dataForm}>
              <InputField name="numDemandeAuthentification"
                          label={format.fields.num_demande_authentification.label}
                          readOnly={true}/>
              <CalendarField name="dateDeCreation"
                             label={format.fields.date_de_creation.label}
                             readOnly={true}/>
              <InputField name="numValise"
                          label={format.fields.num_valise.label}
                          readOnly={true}/>
              <CalendarField name="dateDuTraitement"
                             label={format.fields.date_du_traitement.label}
                             readOnly={true}/>
              <Row>
                <InputField name="nom_responsable" ref={(input)=>{this.nom_responsable = input;}} onChange={this.handleUrl}
                            label={format.fields.nom_responsable.label}
                            readOnly={false}/>
                <InputField name="prenom_responsable" ref={(input)=>{this.prenom_responsable = input;}} onChange={this.handleUrl}
                            label={format.fields.prenom_responsable.label}
                            readOnly={false}/>
              </Row>
              <Row>
                <InputField name="intitule_prefecture" ref={(input)=>{this.intitule_prefecture = input;}} onChange={this.handleUrl}
                            label={format.fields.intitule_prefecture.label}
                            readOnly={false}/>
                <InputField name="prefecture"
                            label={format.fields.prefecture.label}
                            readOnly={true}/>
              </Row>
              <InputField name="intitule_service" ref={(input)=>{this.intitule_service = input;}} onChange={this.handleUrl}
                          label={format.fields.intitule_service.label}
                          readOnly={false}/>
              <SelectField name="cedex" ref={(select)=>{this.cedex = select;}} onClick={this.handleUrl}
                          label={format.fields.cedex.label}
                           dataSource={dataCedex}
                          inline={RadiosField.Inline.FIELD}/>
            </Form>
            <div className="grid-form-field ">
              <div className="demandeauthentification">
                <a href={urlfile} data-pass-thru="true"
                   target={fileTarget}>{"Demande d'authentification générée"}</a>
              </div>
            </div>
          </TabContent>
        </Tab>;

      return fileTag;
    } else {
      return (
        <Tab id="tabDemandeAuthentification" title="Demande d'Authentification">
          <TabContent>
            <h6> Vous n'avez pas encore généré de demande d'authentification pour ce dossier </h6>
            <ButtonsArea>
              <Button type="submit" onClick={this.genererDemande}
                      value="Valider" className="hornet-button" label="générer une demande d'authentification"
                      title="valider"/>
            </ButtonsArea>
          </TabContent>
        </Tab>
      );
    }
  }

  openAlert() {
    this.alert.open();
  }

  closeAlert() {
    this.alert.close();
  }

  supprimerDemande() {
    this.getService().deleteDemandeAuthentification({idDemandeAuthentification: this.demandeAuthentification.idDemandeAuthentification}).then(result=> {
      if(result.hasError != null){
        console.error(result.hasReason);
        console.error(result.hasError);

        this.SequelizeErrors.text = result.hasReason;
        NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
      } else {
        this.demandeauthentificationDatasource.fetch(true);
        NotificationManager.notify("SequelizeSuccess","notif", null, this.success, null, null, null);
      }
    }).catch(reason=>{
      this.SequelizeErrors.text = reason;
      NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
    });
  }

  handleUrl() {
    let params = encodeURI(this.nom_responsable.getCurrentValue()+"+"+this.prenom_responsable.getCurrentValue()+"+"+this.intitule_prefecture.getCurrentValue()+"+"+this.intitule_service.getCurrentValue()+"+"+this.cedex.getCurrentValue());
    let a : HTMLAnchorElement;
    a = document.querySelector(".demandeauthentification a");
    a.href = Utils.buildContextPath("/services/fvmrecordserver/pdfMake/demandeAuthentification/"+this.attributes.idPermis+"/"+params);
  }

  retourPage(){
    this.navigateTo("/fvmrecord", {}, ()=>{});
  }

  genererDemande() {
    this.navigateTo("/fvmform2/"+this.attributes.idPermis, {}, ()=>{});
  }
}
