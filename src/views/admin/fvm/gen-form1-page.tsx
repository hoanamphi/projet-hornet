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

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.gen-formulaire-page");

export class FormulairePage extends HornetPage<Form1Service, HornetComponentProps, any> {

  constructor(props?: HornetComponentProps, context?: any) {
    super(props, context);
  }

  prepareClient(): void {

  }

  onSubmit(data: any) {
    this.getService().insererDonnee(data).then(result=>{
      console.log(result);
    }).catch(error=>{
      console.log("test");
    });

  }

  render(): JSX.Element {
    return (
      <div>
        <h2>Formulaire 1</h2>
        <Form
          id="form1"
          onSubmit={this.onSubmit}
        >
          <Row>
            <InputField name="nom"
                  label="Nom"
                  required={true}/>
          </Row>
          <Row>
            <InputField name="prenom"
                  label="Prenom"
                  required={true}/>
          </Row>
          <Row>
            <CalendarField name="date_de_naissance"
                  label="Date de naissance"
                  title="Calendrier"
                  required={true}/>
          </Row>
          <Row>
            <InputField name="pays_de_naissance"
                  label="Pays de Naissance"
                  required={true}/>
          </Row>
          <Row>
            <InputField name="ville_de_naissance"
                  label="Ville de Naissance"
                  required={true}/>
          </Row>
          <Row>
            <InputField name="num_permis"
                        label="Numero de permis"
                        required={true}/>
          </Row>
          <Row>
            <UploadFileField name="copie_permis"
                     label="Photocopie du permis de conduire"
                     buttonLabel={"Choisir un fichier"}
                     fileSelectedLabel={"Fichier choisi"}
            />
          </Row>
          <Row>
            <CalendarField name="date_de_delivrance"
                           label="Date de délivrance"
                           title="Calendrier"
                           required={true}/>
          </Row>
          <Row>
            <InputField name="id_prefecture"
                        label="Id de la prefecture de delivrance"
                        required={true}/>
          </Row>
          <Row>
            <UploadFileField name="copie_note_verbale_maeci"
                             label="Photocopie de la note verbale du MAECI"
                             buttonLabel={"Choisir un fichier"}
                             fileSelectedLabel={"Fichier choisi"}
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
