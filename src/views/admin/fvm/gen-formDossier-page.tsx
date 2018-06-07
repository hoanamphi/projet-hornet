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

import * as schema from "src/resources/admin/fvm/validation-form1.json";
import {SelectField} from "hornet-js-react-components/src/widget/form/select-field";
import {
  NotificationManager,
  Notifications,
  NotificationType
} from "hornet-js-core/src/notification/notification-manager";
import {DataSourceConfigPage} from "hornet-js-core/src/component/datasource/config/service/datasource-config-page";
import {Icon} from "hornet-js-react-components/src/widget/icon/icon";
import {Picto} from "hornet-js-react-components/src/img/picto";
import {RadiosField} from "hornet-js-react-components/src/widget/form/radios-field";
import {ClientAntivirusConnexion} from "hornet-js-core/src/security/client-antivirus-connexion";
import {SecurityError} from "hornet-js-utils/src/exception/security-error";

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.gen-form1-page");

export class FormulaireDossierPage extends HornetPage<ServerFormService, HornetComponentProps, any> {

  private prefectures;
  private errors;
  private SequelizeErrors;
  private success;
  private SequelizeSuccess;

  constructor(props?: HornetComponentProps, context?: any) {
    super(props, context);

    this.prefectures = new DataSource<any> (new DataSourceConfigPage(this, this.getService().getListePrefectures), {"value": "idPrefecture", "label": "prefecture"}, );
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
    this.prefectures.fetch(true);
  }

  onSubmit(data: any) {
    this.getService().insererDonnee(data).then(result=> {
      if(result.hasError != null){
        console.error(result.hasReason);
        console.error(result.hasError);

        this.SequelizeErrors.text = result.hasReason;
        NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
      } else {
        NotificationManager.notify("SequelizeSuccess","notif", null, this.success, null, null, null);
      }
    }).catch(error=>{
      this.SequelizeErrors.text = error.toString();
      NotificationManager.notify("SequelizeError","errors", this.errors, null, null, null, null);
    });
  }

  render(): JSX.Element {

    let format = this.i18n("forms");

    let radioData = new DataSource<any> ([
      {"value": 0, "label": "M"},
      {"value": 1, "label": "F"}
    ]);

    return (
      <div>
        <Icon src={Picto.blue.previous} alt="Retourner à la page de sélection" title="Retourner à la page de sélection" action={this.retourPage}/>
        <h2>Formulaire d'entrée d'un dossier</h2>
        <Notification id="errors"/>
        <Notification id="notif"/>
        <Form
          id="form1"
          schema={schema}
          onSubmit={this.onSubmit}
          formMessages={format}
        >
          <Row>
            <RadiosField name="id_sexe"
                          label="Sexe"
                          dataSource={radioData}
                          defaultValue={{"value": 0}}/>
          </Row>
          <Row>
            <InputField name="nom"
                        label={format.fields.nom.label}
                  required={true}/>
          </Row>
          <Row>
            <InputField name="prenom"
                        label={format.fields.prenom.label}
                        required={true}/>
          </Row>
          <Row>
            <CalendarField name="date_de_naissance"
                           label={format.fields.date_de_naissance.label}
                           title={format.fields.date_de_naissance.title}
                           required={true}/>
          </Row>
          <Row>
            <InputField name="pays_de_naissance"
                        label={format.fields.pays_de_naissance.label}
                  required={true}/>
          </Row>
          <Row>
            <InputField name="ville_de_naissance"
                        label={format.fields.ville_de_naissance.label}
                  required={true}/>
          </Row>
          <Row>
            <InputField name="num_permis"
                        label={format.fields.num_permis.label}
                        required={true}/>
          </Row>
          <Row>
            <UploadFileField name="copie_permis"
                             label={format.fields.copie_permis.label}
                             buttonLabel={format.fields.copie_permis.buttonLabel}
                             fileSelectedLabel={format.fields.copie_permis.fileSelectedLabel}
                             required = {true}
            />
          </Row>
          <Row>
            <CalendarField name="date_de_delivrance"
                           label={format.fields.date_de_delivrance.label}
                           title={format.fields.date_de_delivrance.title}
                           required={true}/>
          </Row>
          <Row>
            <SelectField dataSource={this.prefectures}
                               label={format.fields.id_prefecture.label}
                        name="id_prefecture"
                        required={true}/>
          </Row>
          <Row>
            <UploadFileField name="copie_note_verbale_maeci"
                             label={format.fields.copie_note_verbale_maeci.label}
                             buttonLabel={format.fields.copie_note_verbale_maeci.buttonLabel}
                             fileSelectedLabel={format.fields.copie_note_verbale_maeci.fileSelectedLabel}
                             required={true}
            />
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

  retourPage(){
    this.navigateTo("/fvmrecord", {}, ()=>{});
  }
}
