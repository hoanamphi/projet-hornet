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

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.gen-form1-page");

export class RecordDetailsPage extends HornetPage<any, HornetComponentProps, any> {

  private dossier;
  private demandeauthentification;
  private releve;
  private noteverbale;

  constructor(props?: HornetComponentProps, context?: any) {
    super(props, context);

    this.dossier = new DataSource<any>(new DataSourceConfigPage(this, this.getService().getDossier), {},);
  }

  prepareClient(): void {
    this.dossier.fetch(true, this.attributes);
  }

  onSubmit(data: any) {

  }

  render(): JSX.Element {
    let format = this.i18n("form");

    return (
      <div>
        <Accordions id="value-accordion"
                    multiSelectable={true}>
          <Accordion title="Permis" isOpen={false}>
            <h3> Permis reçu </h3>
            <Table id="entrée permis">
              <Content dataSource={this.dossier}>
                <Columns>
                  <Column keyColumn="num_permis"
                          title={format.fields.num_permis.label}
                          sortable={false}/>
                  <DateColumn keyColumn="date_de_delivrance"
                              title={format.fields.date_de_delivrance.label}
                              sortable={false}/>
                </Columns>
              </Content>
            </Table>
            <h3> Préfecture de délivrance </h3>
            <Table id="entrée préfecture">
              <Content dataSource={this.dossier}>
                <Columns>
                  <Column keyColumn="adresse"
                          title={format.fields.adresse.label}
                          sortable={false}/>
                  <Column keyColumn="code_postal"
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
                  <DateColumn keyColumn="date_reception_dossier"
                              title={format.fields.date_reception_dossier.label}
                              sortable={false}/>
                </Columns>
              </Content>
            </Table>
          </Accordion>
          <Accordion title="Personne titulaire du permis" isOpen={false}>
            <h3> Relevé d'identité </h3>
            <Table id="entrée personne">
              <Content dataSource={this.dossier}>
                <Columns>
                  <Column keyColumn="nom"
                          title={format.fields.nom.label}
                          sortable={false}/>
                  <Column keyColumn="prenom"
                          title={format.fields.prenom.label}
                          sortable={false}/>
                  <DateColumn keyColumn="date_de_naissance"
                              title={format.fields.date_de_naissance.label}
                              sortable={false}/>
                  <Column keyColumn="ville_de_naissance"
                          title={format.fields.ville_de_naissance.label}
                          sortable={false}/>
                  <Column keyColumn="pays_de_naissance"
                          title={format.fields.pays_de_naissance.label}
                          sortable={false}/>
                </Columns>
              </Content>
            </Table>
          </Accordion>
          <Accordion title="Annexes" isOpen={false}>
            <UploadFileField name="copie_note_verbale_maeci"
                             readOnly={false}
                             label={format.fields.copie_note_verbale_maeci.label}
                             renderPreviewFile={this.renderCopieNoteVerbaleMAECI}
                             buttonLabel={format.fields.copie_note_verbale_maeci.buttonLabel}
                             fileSelectedLabel={format.fields.copie_note_verbale_maeci.fileSelectedLabel}
            />
          </Accordion>
        </Accordions>
      </div>
    );
  }

  private renderCopieNoteVerbaleMAECI(file: UploadedFile): React.ReactElement<any> {
    let fileTag: react.ReactElement<any> = null;
  }
}
