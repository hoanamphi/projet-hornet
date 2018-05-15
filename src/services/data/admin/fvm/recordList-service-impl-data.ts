import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServiceRequest } from "hornet-js-core/src/services/service-request";
import {PersonneFVMDAO} from "../../../../dao/admin/fvm/personne-dao";
import {CopieNoteVerbaleMAECIFVMDao} from "../../../../dao/admin/fvm/copie_note_verbale_MAECI-dao";
import {DossierFVMDAO} from "../../../../dao/admin/fvm/dossier-dao";
import {PermisFVMDAO} from "../../../../dao/admin/fvm/permis-dao";
import {CopiePermisFVMDao} from "../../../../dao/admin/fvm/copie_permis-dao";
import {PrefectureDAO} from "../../../../dao/prefecture-dao";
import {RecordListService} from "../../../page/admin/fvm/recordList-service";

const logger: Logger = Utils.getLogger("projet-hornet.services.data.admin.admin-service-impl-data");

export class RecordListServiceImpl extends ServiceRequest implements RecordListService {

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  private copiePermisDAO = new CopiePermisFVMDao();
  private prefectureDAO = new PrefectureDAO();

  getListeDossiers(): Promise<any>{

    return Promise.resolve([{"num_permis": "permis", "nom": "nom", "prenom": "prenom", "date_de_naissance": "21/09/1998", "date_reception_dossier": "10/05/2018"}]);
  }
}
