import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServiceRequest } from "hornet-js-core/src/services/service-request";
import { Form1FVMDAO } from "src/dao/admin/fvm/form1-dao-service";
import { Form1Service } from "src/services/page/admin/fvm/form1-service";
import { Template } from "hornet-js-utils/src/template";
import { HornetComponent } from "hornet-js-react-components/src/widget/component/hornet-component";
import { Transactional } from "hornet-js-database/src/decorators/dec-transactional"
import { Injector } from "hornet-js-core/src/inject/injector"

const logger: Logger = Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");

export class Form1ServiceImpl extends ServiceRequest implements Form1Service {

    private formDAO: Form1FVMDAO = new Form1FVMDAO();

    @Transactional({configDatabase: Injector.getRegistered("databaseConfigName")})
    insererDonnee(data): Promise<any> {
        return this.formDAO.insererDonnee(data);
    }
}
