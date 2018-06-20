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
import {PaginateDataSource} from "hornet-js-core/src/component/datasource/paginate-datasource";
import {ActionColumn} from "hornet-js-react-components/src/widget/table/column/action-column";
import {Icon} from "hornet-js-react-components/src/widget/icon/icon";
import {PageService} from "src/services/page/admin/fvm/page-service";

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.fvm.fvm-recordList-page");

/* HornetPage :
    Classe générique : <Interface de la Classe de service, Props de la page, Context>
*/

/**
 * Page affichant la liste des dossiers stockés dans la base
 * @extends {HornetPage<PageService, HornetComponentProps, any>}
 */
export class RecordListPage extends HornetPage<PageService, HornetComponentProps, any> {

  private listeDossierDataSource: PaginateDataSource<any>;

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
   * @constructor
   * @param {HornetComponentProps} props
   * @param context
   */
  constructor(props?: HornetComponentProps, context?: any) {
    super(props, context);

    this.listeDossierDataSource = new PaginateDataSource<any> ([], {itemsPerPage: 10}, {});

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
    this.getService().getListeDossier().then((all)=>{
      this.listeDossierDataSource.add(true, all);
    });
  }

  /**
   * Méthode appelée à la soumission du formulaire de recherche avec critères
   * @param data - critères sélectionnés
   */
  onSubmit(data: any) {
    let criteria = {"numPermis": data.num_permis};
    if(data.nom != null) {
      criteria["nom"] = data.nom;
    }
    if(data.prenom != null) {
      criteria["prenom"] = data.prenom;
    }
    if(data.date_de_naissance != null) {
      criteria["dateDeNaissance"] = Date.parse(data.date_de_naissance);
    }
    let subList = this.listeDossierDataSource.findAll(criteria);
    this.listeDossierDataSource.deleteAll();
    this.listeDossierDataSource.add(true, subList);
  }

  /**
   * Méthode effectuant le rendu de la vue
   * @returns {JSX.Element}
   */
  render(): JSX.Element {
    let format = this.i18n("forms");

    return (
      <div>
        <Icon src={Picto.blue.previous} alt="Retourner à la page d'accueil" title="Retourner à la page d'accueil" action={this.retourPage}/>
        <Notification id="errors"/>
        <Notification id="notif"/>

        <Table id="tableau des entrées">
          <Header title={"Dossiers entrés dans la base"}>
            <MenuActions>
              <ActionButton title={"Ajout"}
                            srcImg={Picto.white.ajouter}
                            displayedWithoutResult={true}
                            action={this.ajouterDossier} priority={true}/>
            </MenuActions>
          </Header>

          <Content dataSource={this.listeDossierDataSource}>
            <Columns>
              <Column keyColumn="numPermis"
                      title={format.fields.num_permis.label}
                      sortable={false}/>
              <Column keyColumn="nom"
                      title={format.fields.nom.label}
                      sortable={true}/>
              <Column keyColumn="prenom"
                      title={format.fields.prenom.label}
                      sortable={false}/>
              <DateColumn keyColumn="dateDeNaissance"
                          title={format.fields.date_de_naissance.label}
                          sortable={false}/>
              <DateColumn keyColumn="dateReceptionDossier"
                          title={format.fields.date_reception_dossier.label}
                          sortable={true}/>
              <ActionColumn keyColumn="idPermis"
                            srcImg={Picto.black.consulter}
                            action={this.consulterDossier}/>
              <ActionColumn keyColumn="idPermis"
                            srcImg={Picto.black.supprimer}
                            messageAlert={"Êtes vous sûr de vouloir supprimer ce dossier ?"}
                            action={this.supprimerDossier}/>
            </Columns>
          </Content>
          <Footer>
            <Pager dataSource={this.listeDossierDataSource} id="table-paginate"/>
          </Footer>
        </Table>

        <h3> Recherche d'un dossier </h3>
        <Form id="entrycriteriaform"
              schema={schema}
              onSubmit={this.onSubmit}
              formMessages={format}>
          <Row>
            <InputField name="num_permis"
                        label={ format.fields.num_permis.label}
                        required={true}/>
            <InputField name="nom"
                        label={ format.fields.nom.label}
                        required={false}/>
            <InputField name="prenom"
                        label={ format.fields.prenom.label}
                        required={false}/>
            <CalendarField name="date_de_naissance"
                           label={format.fields.date_de_naissance.label}
                           title={format.fields.date_de_naissance.title}
                           required={false}/>
            <ButtonsArea>
              <Button type="button" onClick={this.reloadData} label="annuler"/>
              <Button type="submit"
                      value="Valider" className="hornet-button" label="valider"
                      title="Effectuer une recherche selon ces critères"/>
            </ButtonsArea>
          </Row>

        </Form>
      </div>
    );
  }

  /**
   * Méthode supprimant le dossier sélectionné
   * @param lineSelected - ligne sélectionnée dans le tableau listant les dossiers
   */
  supprimerDossier(lineSelected) {
    this.getService().deleteDossier({idPermis: lineSelected.idPermis}).then(result=> {

      // Si le résultat contient une erreur
      if(result.hasError != null){
        console.error(result.hasReason);
        console.error(result.hasError);

        // Afficher un message d'erreur
        this.SequelizeErrors.text = result.hasReason;
        NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
      } else {
        // Recharger les données du tableau
        this.reloadData();
        // Afficher un message d'information
        NotificationManager.notify("SequelizeSuccess","notif", null, this.success, null, null, null);
      }
    }).catch(reason=>{
      this.SequelizeErrors.text = reason;
      NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
    });
  }

  /**
   * Méthode permettant de consulter les détails du dossier sélectionné
   * @param lineSelected - ligne sélectionnée dans le tableau listant les dossier
   */
  consulterDossier(lineSelected) {
    this.navigateTo("/fvmrecord/"+lineSelected.idPermis, {}, ()=>{});
  }

  /**
   * Méthode permettant de naviguer jusqu'à la page d'accueil
   */
  retourPage() {
    this.navigateTo("/accueil", {}, ()=>{});
  }

  /**
   * Méthode permettant de naviguer jusqu'à la page du formulaire d'insertion d'un dossier
   */
  ajouterDossier() {
    this.navigateTo("/fvmform1", {}, ()=>{});
  }

  // Recharge les données du tableau listant les dossier
  reloadData() {
    this.listeDossierDataSource.deleteAll();
    this.getService().getListeDossier().then((all)=>{
      this.listeDossierDataSource.add(true, all);
    });
  }
}
