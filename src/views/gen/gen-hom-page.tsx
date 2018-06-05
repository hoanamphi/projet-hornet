import * as React from "react";
import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { HornetPage } from "hornet-js-react-components/src/widget/component/hornet-page";
import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
import {Button} from "hornet-js-react-components/src/widget/button/button";

const logger: Logger = Utils.getLogger("projet-hornet.views.gen.gen-hom-page");

/**
 * Ecran de page d'accueil de l'application
 */
export class HomePage extends HornetPage<any, HornetComponentProps,any> {

  prepareClient() {
  }

  /**
   * @inheritDoc
   */
  render(): JSX.Element {
    logger.info("VIEW HomePage render");
    return (
      <div id="pageAccueil">
        <h2>Accueil</h2>
        <Button type="submit" onClick={this.goToFVM}
            value="Valider" className="hornet-button" label="Equivalence France vers Maroc"
            title="Permis Français ayant demandé une équivalence marocaine"/>
      </div>
    );
  }

  goToFVM() {
    this.navigateTo("/fvmrecord", {}, ()=>{});
  }
}