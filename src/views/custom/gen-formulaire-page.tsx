import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import * as React from "react";
import { HornetPage } from "hornet-js-react-components/src/widget/component/hornet-page";
import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
import { Form } from "hornet-js-react-components/src/widget/form/form";
import { Row } from "hornet-js-react-components/src/widget/form/row";
import { InputField } from "hornet-js-react-components/src/widget/form/input-field";
import { TextAreaField } from "hornet-js-react-components/src/widget/form/textarea-field";
import { CalendarField } from "hornet-js-react-components/src/widget/form/calendar-field";
import { Button } from "hornet-js-react-components/src/widget/button/button";
import { PermisService } from "src/services/page/permis/permis-service";
import { ButtonsArea } from "hornet-js-react-components/src/widget/form/buttons-area";
import { UploadFileField } from "hornet-js-react-components/src/widget/form/upload-file-field";

const logger: Logger = Utils.getLogger("projet-hornet.views.permis.gen-formulaire-page");

export class FormulairePage extends HornetPage<PermisService, HornetComponentProps, any> {

    constructor(props?: HornetComponentProps, context?: any) {
        super(props, context);
    }

    prepareClient(): void {

    }

    onSubmit(data: any) {
        console.log(data);
        console.log(data["fichier"]);
        var request = new Request("/test");
        request.attach = [];
        request.attach.push();
        // this.getService().insererPermis(data).then((result) => {
        //     if (!result.errors) {
        //       console.log("test");
        //       console.log(result);
        //       this.getService().listerPermis(data).then((result) => {
        //           if (!result.errors) {
        //               result.forEach(function(elem){
        //                 console.log(elem);
        //               });
        //           } else {
        //               console.log("errors");
        //           }
        //       });
        //     } else {
        //         console.log("errors");
        //     }
        // });
    }

    render(): JSX.Element {
        return (
            <div>
                <h2>Test formulaire</h2>
                <Form
                    id="contactForm"
                    onSubmit={this.onSubmit}
                >
                    <Row>
                        <InputField name="permis"
                                    label="Numero de permis"
                                    required={true}/>
                    </Row>
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

                        <CalendarField name="date_de_naissance"
                                    label="Date de naissance"
                                    title="Calendrier"
                                    required={true}/>
                    <Row>
                        <InputField name="prefecture"
                                    label="Prefecture"
                                    required={true}/>
                    </Row>
                    <Row>
                        <UploadFileField name="fichier"
                                         label="Fichier"
                                         buttonLabel={"Choisir un fichier"}
                                         fileSelectedLabel={"Fichier choisi"}
                        />
                    </Row>
                    <ButtonsArea>
                        <Button type="submit" id="test" name="action:test"
                                value="Valider" className="hornet-button" label="valider"
                                title="valider"/>
                    </ButtonsArea>
                </Form>
            </div>
        );
    }
}
