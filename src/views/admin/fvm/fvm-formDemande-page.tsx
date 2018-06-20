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
import { FormService } from "src/services/page/admin/fvm/form-service";
import { ButtonsArea } from "hornet-js-react-components/src/widget/form/buttons-area";
import {DataSource} from "hornet-js-core/src/component/datasource/datasource";
import {Notification} from "hornet-js-react-components/src/widget/notification/notification";
import * as schema from "src/resources/admin/fvm/validation-form2.json";
import * as schemaValise from "src/resources/admin/fvm/validation-formvalise.json";
import {
  NotificationManager,
  Notifications,
  NotificationType
} from "hornet-js-core/src/notification/notification-manager";
import {DataSourceConfigPage} from "hornet-js-core/src/component/datasource/config/service/datasource-config-page";
import {Icon} from "hornet-js-react-components/src/widget/icon/icon";
import {Picto} from "hornet-js-react-components/src/img/picto";
import {Table} from "hornet-js-react-components/src/widget/table/table";
import {Columns} from "hornet-js-react-components/src/widget/table/columns";
import {Content} from "hornet-js-react-components/src/widget/table/content";
import {Column} from "hornet-js-react-components/src/widget/table/column";
import {DateColumn} from "hornet-js-react-components/src/widget/table/column/date-column";
import {Header} from "hornet-js-react-components/src/widget/table/header";
import {MenuActions} from "hornet-js-react-components/src/widget/table/menu-actions";
import {ActionButton} from "hornet-js-react-components/src/widget/table/action-button";
import {Modal} from "hornet-js-react-components/src/widget/dialog/modal";
import {ActionColumn} from "hornet-js-react-components/src/widget/table/column/action-column";

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.fvm.fvm-formDemande-page");

/* HornetPage :
    Classe générique : <Interface de la Classe de service, Props de la page, Context>
*/

/**
 * Page de formulaire permettant de créer une demande d'authentification
 * @extends {HornetPage<FormService, HornetComponentProps, any>}
 */
export class FormulaireDemandeAuthentificationPage extends HornetPage<FormService, HornetComponentProps, any> {

  /**
   * DataSource contenant la liste des valises stockées dans la base
   * @type {DataSource<any>}
   */
  private listeValiseDataSource: DataSource<any>;

  /**
   * Objet permettant l'affichage de messages d'erreur
   * @type {Notifications}
   */
  private errors: Notifications;
  /**
   * Objet contenant un message d'erreur
   * @type {NotificationType}
   */
  private SequelizeErrors: NotificationType;

  /**
   * Objet permettant l'affichage de messages d'information
   * @type {Notifications}
   */
  private success: Notifications;
  /**
   * Objet contenant un message d'information
   * @type {NotificationType}
   */
  private SequelizeSuccess: NotificationType;

  /**
   * Popin permettant d'insérer une nouvelle valise dans la base
   */
  private formValiseModal: Modal;

  /**
   * Champs de texte contenant le numéro de la valise de la demande d'authentification à insérer
   * @type {InputField}
   */
  private numValiseInput = new InputField();

  /**
   * @constructor
   * @param {HornetComponentProps} props
   * @param context
   */
  constructor(props?: HornetComponentProps, context?: any) {
    super(props, context);

    this.listeValiseDataSource = new DataSource<any> (new DataSourceConfigPage(this, this.getService().getListeValise), {}, );

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

  /**
   * Méthode permettant d'effectuer les appels d'API. Elle est appelée au moment où la Page est montée.
   */
  prepareClient(): void {
    this.listeValiseDataSource.fetch(true);
  }

  /**
   * Méthode appelée à la soumission du formulaire d'insertion d'une nouvelle demande d'authentification
   * @param data - données de formulaire
   */
  onSubmit(data: any) {
    data["id_permis"] = this.attributes.idPermis;

    this.getService().insererDemandeAuthentification(data).then(result=> {

      // Si le résultat contient une erreur
      if(result.error != null){
        console.error(result.reason);
        console.error(result.error);

        // Afficher un message d'erreur
        this.SequelizeErrors.text = result.reason;
        NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
      } else {
        // Afficher un message d'information
        NotificationManager.notify("SequelizeSuccess","notif", null, this.success, null, null, null);
      }
    }).catch(reason=>{
      this.SequelizeErrors.text = reason;
      NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
    });
  }

  /**
   * Méthode effectuant le rendu de la vue
   * @returns {JSX.Element}
   */
  render(): JSX.Element {

    // Objet Json contenant le format des champs (label, title,etc..)
    let format = this.i18n("forms");

    return (

      <div>

        {/* Icône permettant de retourner à la page de consultation d'un dossier */}
        <Icon src={Picto.blue.previous} alt="Retourner à la consultation" title="Retourner à la consultation" action={this.retourPage}/>

        <h2>Formulaire d'entrée d'une demande d'authentification</h2>
        {/* Composants permettant d'afficher les messages */}
        <Notification id="errors"/>
        <Notification id="notif"/>

        {/* Composant définissant la popin permettant d'insérer une nouvelle valise */}
        <Modal ref={(modal)=>{
          this.formValiseModal = modal;
        }} onClickClose={()=>{this.formValiseModal.close();this.listeValiseDataSource.fetch(true);}}>
          <div>
            <Form
              id="formValise"
              schema={schemaValise}
              formMessages={format}
              onSubmit={this.submitValise}
            >
              <Row>
                <InputField name="num_valise"
                            label={format.fields.num_valise.label}
                            required={true}/>
              </Row>
              <Row>
                <CalendarField name="date_valise"
                               label={format.fields.date_valise.label}
                               title={format.fields.date_valise.title}
                               required={true}/>
              </Row>
              <ButtonsArea>
                <Button type="submit"
                        value="Valider" className="hornet-button" label="valider"
                        title="valider"/>
              </ButtonsArea>
            </Form>
          </div>
        </Modal>

        {/* Composant tableau contenant la liste des valise stockées dans la base */}
        <Table id="liste valise">
          <Header title={"Valises diplomatiques disponibles"}>
            <MenuActions>
              <ActionButton title={"Ajout"}
                            srcImg={Picto.white.ajouter}
                            displayedWithoutResult={true}
                            action={this.ajouterValise} priority={true}/>
            </MenuActions>
          </Header>
          <Content dataSource={this.listeValiseDataSource}>
            <Columns>
              <Column keyColumn="numValise"
                      title={format.fields.num_valise.label}
                      sortable={false}/>
              <DateColumn keyColumn="dateValise"
                          title={format.fields.date_valise.label}
                          sortable={false}/>
              <ActionColumn keyColumn="formInput"
                            title="Remplir le formulaire"
                            srcImg={Picto.blue.next}
                            action={this.remplirForm}/>
            </Columns>
          </Content>
        </Table>

        {/* Formulaire d'insertion d'une nouvelle demande d'authentification */}
        <Form
          id="formValise"
          schema={schema}
          formMessages={format}
          onSubmit={this.onSubmit}
        >
          <Row>
            <InputField name="num_valise" ref={(input)=> {this.numValiseInput = input;}}
                        label={format.fields.num_valise.label}
                        required={true}/>
          </Row>
          <Row>
            <InputField name="num_demande_authentification"
                        label={format.fields.num_demande_authentification.label}
                        required={true}/>
          </Row>
          <ButtonsArea>
            <Button type="submit"
                    value="Valider" className="hornet-button" label="valider"
                    title="valider"/>
          </ButtonsArea>
        </Form>
      </div>
    );
  }

  /**
   * Méthode ouvrant la popin permettant d'insérer une nouvelle valise
   */
  ajouterValise() {
    this.formValiseModal.open();
  }

  /**
   * Méthode remplissant le champs "numéro de la valise" à la sélection d'une valise
   * @param lineSelected - ligne sélectionnée dans le tableau listant les valises
   */
  remplirForm(lineSelected) {
    this.numValiseInput.setCurrentValue(lineSelected.numValise);
  }

  /**
   * Méthode appelée à la soumission du formulaire d'insertion d'une  nouvelle valise
   * @param data - données de formulaire
   */
  submitValise(data: any) {
    this.getService().insererValise(data).then(result=> {
      if(result.error != null){
        console.error(result.reason);
        console.error(result.error);

        this.SequelizeErrors.text = result.reason;
        NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
      } else {
        NotificationManager.notify("SequelizeSuccess","notif", null, this.success, null, null, null);
      }
    }).catch(reason=>{
      this.SequelizeErrors.text = reason;
      NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
    });
  }

  /**
   * Méthode permettant de naviguer jusqu'à la page de consultation d'un dossier
   */
  retourPage(){
    this.navigateTo("/fvmrecord/"+this.attributes.idPermis, {}, ()=>{});
  }
}
