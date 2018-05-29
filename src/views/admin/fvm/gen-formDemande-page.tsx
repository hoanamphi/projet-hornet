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
import { ServerFormService } from "src/services/page/admin/fvm/server-form-service";
import { ButtonsArea } from "hornet-js-react-components/src/widget/form/buttons-area";
import { UploadFileField } from "hornet-js-react-components/src/widget/form/upload-file-field";
import {DataSource} from "hornet-js-core/src/component/datasource/datasource";
import {Notification} from "hornet-js-react-components/src/widget/notification/notification";

import * as schema from "src/resources/admin/fvm/validation-form2.json";
import {SelectField} from "hornet-js-react-components/src/widget/form/select-field";
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
import {CheckColumn} from "hornet-js-react-components/src/widget/table/column/check-column";
import {Header} from "hornet-js-react-components/src/widget/table/header";
import {MenuActions} from "hornet-js-react-components/src/widget/table/menu-actions";
import {ActionButton} from "hornet-js-react-components/src/widget/table/action-button";
import {Footer} from "hornet-js-react-components/src/widget/table/footer";
import {Pager} from "hornet-js-react-components/src/widget/pager/pager";
import {PaginateDataSource} from "hornet-js-core/src/component/datasource/paginate-datasource";

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.gen-form1-page");

export class FormulaireDemandeAuthentificationPage extends HornetPage<ServerFormService, HornetComponentProps, any> {

  private valise;
  private selectedLine;
  private errors;
  private SequelizeErrors;

  constructor(props?: HornetComponentProps, context?: any) {
    super(props, context);

    this.valise = new DataSource<any> (new DataSourceConfigPage(this, this.getService().getListeValises), {}, );
    this.selectedLine = new Array<any>();
    this.errors =  new Notifications();
    this.SequelizeErrors = new NotificationType();
    this.SequelizeErrors.id = "SequelizeError";
    this.errors.addNotification(this.SequelizeErrors);
  }

  prepareClient(): void {
    this.valise.fetch(true);
  }

  onSubmit(data: any) {
    console.log(data);
    console.log(this.selectedLine);
    // this.getService().insererDonnee(data).then(result=> {
    //   if(result.hasError != null){
    //     console.error(result.hasReason);
    //     console.error(result.hasError);
    //
    //     this.SequelizeErrors.text = result.hasReason;
    //     NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
    //   }
    // }).catch(reason=>{
    //   console.error(reason);
    // });
  }

  render(): JSX.Element {

    let format = this.i18n("form");

    return (
      <div>
        <h2>Formulaire d'entrée d'une demande d'authentification</h2>
        <Notification id="errors"/>
        <Notification id="notif"/>
        <Form
          id="form2"
          schema={schema}
          onSubmit={this.onSubmit}
          formMessages={format}
        >
          <Row>
            <Table id="liste valise">
              <Header title={"Valises diplomatiques disponibles"}>
                <MenuActions>
                  <ActionButton title={"Ajout"}
                                srcImg={Picto.white.ajouter}
                                displayedWithoutResult={true}
                                action={this.ajouterValise} priority={true}/>
                </MenuActions>
              </Header>
              <Content dataSource={this.valise} idForm="form2">
                <Columns>
                  <CheckColumn keyColumn="selectedLine" toggleSelectLines={(item:any, all?:boolean)=>{console.log(item)}}/>
                  <Column keyColumn="numValise"
                          title={format.fields.num_valise.label}
                          sortable={true}/>
                  <DateColumn keyColumn="dateValise"
                              title={format.fields.date_valise.label}
                              sortable={true}/>
                </Columns>
                <Footer>

                </Footer>
              </Content>
            </Table>
          </Row>
          <Row>
            <InputField name="num_demande_authentification"
                        label={format.fields.num_demande_authentification.label}
                        required={true}/>
          </Row>
          <ButtonsArea>
            <Icon src={Picto.blue.previous} alt="Retourner à la consultation" title="Retourner à la consultation" action={this.retourPage}/>
            <Button type="submit"
                    value="Valider" className="hornet-button" label="valider"
                    title="valider"/>
          </ButtonsArea>
        </Form>
      </div>
    );
  }

  ajouterValise() {
    console.log("ajout");
  }

  retourPage(){
    this.navigateTo("/record/"+this.attributes.id, {}, ()=>{});
  }
}
