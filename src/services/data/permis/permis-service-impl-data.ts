import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServiceRequest } from "hornet-js-core/src/services/service-request";
import { PermisDAO } from "src/dao/admin/fvm/permis-dao";
import { PermisService } from "src/services/page/permis/permis-service";
import { Template } from "hornet-js-utils/src/template";
import { HornetComponent } from "hornet-js-react-components/src/widget/component/hornet-component";
import { Transactional } from "hornet-js-database/src/decorators/dec-transactional"
import { Injector } from "hornet-js-core/src/inject/injector"

const logger: Logger = Utils.getLogger("projet-hornet.services.data.permis.permis-service-impl-data");

export class PermisServiceImpl extends ServiceRequest implements PermisService {

    private permisDAO: PermisDAO = new PermisDAO();

    listerPermis(data): Promise<any> {
        return this.permisDAO.listerPermis(data);
    }

    @Transactional({configDatabase: Injector.getRegistered("databaseConfigName")})
    insererPermis(data): Promise<any> {
        var promise;
        promise = this.permisDAO.insererPersonne(data);
        promise = this.permisDAO.insererDossier(data);
        promise = this.permisDAO.insererPermis(data);
        return promise;
    }
}
