import * as React from "react";
import { HornetPage } from "hornet-js-react-components/src/widget/component/hornet-page";
import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";

import { TextAreaField } from "hornet-js-react-components/src/widget/form/textarea-field";
import { Row } from "hornet-js-react-components/src/widget/form/row";
import { Button } from "hornet-js-react-components/src/widget/button/button";
import { Form } from "hornet-js-react-components/src/widget/form/form";
import { ButtonsArea } from "hornet-js-react-components/src/widget/form/buttons-area";
import { InputField } from "hornet-js-react-components/src/widget/form/input-field";
import { Notification } from "hornet-js-react-components/src/widget/notification/notification";
import { UploadFileField } from "hornet-js-react-components/src/widget/form/upload-file-field";

import { PermisService } from "src/services/data/permis/permis_service";

const logger: Logger = Utils.getLogger("projet-hornet.views.admin.gen-admin-page");

export class CustomPage extends HornetPage<any, HornetComponentProps, any> {

    constructor(props?: HornetComponentProps, context?: any) {
        super(props, context);
    }

    prepareClient() {

    }

    /**
     * @inheritDoc
     */
    render(): JSX.Element {

        return (
          <div>
            <h2>Contact</h2>
            <Notification id="notif"/>
            <Form id="form-example"
                onSubmit={this.onSubmit}
            >
                <InputField
                    name="nom"
                    label={"Nom"}
                />
                <UploadFileField
                  name="photo"
                  label="Photo"
                  buttonLabel={"Choisir un fichier"}
                  fileSelectedLabel={"Un fichier choisit"}/>
                <ButtonsArea>
                    <Button type="submit" id="envoi" name="action:envoi" value="Valider"
                        className="hornet-button" label="Valider" title="Validation du formulaire" />
                </ButtonsArea>
            </Form>
          </div>
        );
    }

    onSubmit(data: any) {
        alert(data["nom"]+data["photo"].name)
    }
}
