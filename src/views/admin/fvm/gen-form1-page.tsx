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

import * as schema from "src/resources/admin/fvm/validation-form1.json";
import {SelectField} from "hornet-js-react-components/src/widget/form/select-field";

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.gen-formulaire-page");

export class FormulairePage extends HornetPage<Form1Service, HornetComponentProps, any> {

  private prefectures;

  constructor(props?: HornetComponentProps, context?: any) {
    super(props, context);

    this.prefectures = new DataSource<any> (null, {"value": "idPrefecture", "label": "prefecture"}, );
  }

  prepareClient(): void {

    this.getService().getListePrefectures().then(liste=>{
      this.prefectures.add(true, liste);
    });
  }

  onSubmit(data: any) {
    this.getService().insererDonnee(data).then(result=> {
      if(result.hasError != null || result.hasReason != null){
        console.log("error" + result["hasError"]);
        console.log("reason"+ result["hasReason"]);
      } else {
        console.log(result);
      }
    }).catch(reason=>{
      throw new Error(reason);
    });
  }

  render(): JSX.Element {

    let format = this.i18n("form1");

    return (
      <div>
        <h2>Formulaire d'entrée d'une demande d'authentification</h2>
        <Notification id="notif"/>
        <Form
          id="form1"
          schema={schema}
          onSubmit={this.onSubmit}
          formMessages={format}
        >
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
}
