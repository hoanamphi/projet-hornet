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
import { Form1Service } from "src/services/page/admin/fvm/form1-service";
import { ButtonsArea } from "hornet-js-react-components/src/widget/form/buttons-area";
import { UploadFileField } from "hornet-js-react-components/src/widget/form/upload-file-field";
import {DataSource} from "hornet-js-core/src/component/datasource/datasource";
import {Notification} from "hornet-js-react-components/src/widget/notification/notification";

import * as schema from "src/resources/admin/fvm/validation-form.json";
import {SelectField} from "hornet-js-react-components/src/widget/form/select-field";
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

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.gen-form1-page");

export class RecordListPage extends HornetPage<any, HornetComponentProps, any> {

  private entries;

  constructor(props?: HornetComponentProps, context?: any) {
    super(props, context);

    this.entries = new DataSource([{"num_permis": "permis", "nom": "nom", "prenom": "prenom", "date_de_naissance": "test", "date_reception_dossier": "test"}]);

  }

  prepareClient(): void {
  }

  onSubmit(data: any) {

  }

  render(): JSX.Element {
    let format = this.i18n("form");

    return (
      <div>
        <Table id="tableau des entrées">
          <Header title={"Dossiers entrés dans la base"}>
            <MenuActions>
              <ActionButton title={"Ajout"}
                            srcImg={Picto.white.ajouter}
                            action={this.ajouterDossier} priority={true}/>
            </MenuActions>
          </Header>

          <Content dataSource={this.entries}>
            <Column keyColumn={"num_permis"} title={format.fields.num_permis.label} sortable={false}/>
            <Column keyColumn={"nom"} title={format.fields.nom.label} sortable={false}/>
            <Column keyColumn={"prenom"} title={format.fields.prenom.label} sortable={false}/>
            <Column keyColumn={"date_de_naissance"} title={format.fields.date_de_naissance.label} sortable={false}/>
            <Column keyColumn={"date_reception_dossier"} title={format.fields.date_de_reception_du_dossier.label} sortable={false}/>
          </Content>
        </Table>

        {/*<Form id="entrycriteriaform"*/}
              {/*schema={schema}*/}
              {/*onSubmit={this.onSubmit}*/}
              {/*formMessages={format}>*/}
          {/*<Row>*/}
            {/*<InputField name="num_permis"*/}
                        {/*label={ format.fields.num_permis.label}*/}
                        {/*required={true}/>*/}
            {/*<InputField name="nom"*/}
                        {/*label={ format.fields.nom.label}*/}
                        {/*required={false}/>*/}
            {/*<InputField name="prenom"*/}
                        {/*label={ format.fields.prenom.label}*/}
                        {/*required={false}/>*/}
            {/*<CalendarField name="date_de_naissance"*/}
                           {/*label={format.fields.date_de_naissance.label}*/}
                           {/*title={format.fields.date_de_naissance.title}*/}
                           {/*required={false}/>*/}
            {/*<CalendarField name="date_de_reception_du_dossier"*/}
                           {/*label={format.fields.date_de_reception_du_dossier.label}*/}
                           {/*title={format.fields.date_de_reception_du_dossier.title}*/}
                           {/*required={false}/>*/}
            {/*<ButtonsArea>*/}
              {/*<Button type="submit"*/}
                      {/*value="Valider" className="hornet-button" label="valider"*/}
                      {/*title="valider"/>*/}
            {/*</ButtonsArea>*/}
          {/*</Row>*/}

        {/*</Form>*/}
      </div>
    );
  }

  ajouterDossier() {
    console.log("ajouter");
  }
}
