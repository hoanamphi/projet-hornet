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

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.gen-form1-page");

export class RecordListPage extends HornetPage<any, HornetComponentProps, any> {

  private entries;

  constructor(props?: HornetComponentProps, context?: any) {
    super(props, context);

    this.entries = new PaginateDataSource<any> ([], {itemsPerPage: 10}, {});
  }

  prepareClient(): void {
    this.getService().getListeDossiers().then((all)=>{
      this.entries.add(true, all);
    });
  }

  onSubmit(data: any) {
    let criteria = {"num_permis": data.num_permis};
    if(data.nom != null) {
      criteria["nom"] = data.nom;
    }
    if(data.prenom != null) {
      criteria["prenom"] = data.prenom;
    }
    if(data.date_de_naissance != null) {
      criteria["date_de_naissance"] = Date.parse(data.date_de_naissance);
    }
    let subList = this.entries.findAll(criteria);
    console.log(criteria);
    subList.forEach(result=>{
      console.log(result);
    });
    this.entries.deleteAll();
    this.entries.add(true, subList);
  }

  render(): JSX.Element {
    let format = this.i18n("form");

    return (
      <div>
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

          <Content dataSource={this.entries}>
            <Columns>
              <Column keyColumn="num_permis"
                      title={format.fields.num_permis.label}
                      sortable={false}/>
              <Column keyColumn="nom"
                      title={format.fields.nom.label}
                      sortable={true}/>
              <Column keyColumn="prenom"
                      title={format.fields.prenom.label}
                      sortable={false}/>
              <DateColumn keyColumn="date_de_naissance"
                          title={format.fields.date_de_naissance.label}
                          sortable={false}/>
              <DateColumn keyColumn="date_reception_dossier"
                          title={format.fields.date_reception_dossier.label}
                          sortable={true}/>
              <ActionColumn keyColumn="id_permis"
                            srcImg={Picto.black.consulter}
                            url={"/record/:id_permis"}/>
            </Columns>
          </Content>
          <Footer>
            <Pager dataSource={this.entries} id="table-paginate"/>
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
                      title="valider"/>
            </ButtonsArea>
          </Row>

        </Form>
      </div>
    );
  }

  ajouterDossier() {
    this.navigateTo("/form1", {}, ()=>{});
  }

  reloadData() {
    this.entries.deleteAll();
    this.getService().getListeDossiers().then((all)=>{
      this.entries.add(true, all);
    });
  }
}
