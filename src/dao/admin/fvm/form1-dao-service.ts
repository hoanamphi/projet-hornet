import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { PermisFVMDAO } from "./permis-dao";
import { DossierFVMDAO } from "./dossier-dao";
import { PersonneFVMDAO } from "./personne-dao";
import { CopieNoteVerbaleMAECIFVMDao } from "./copie_note_verbale_MAECI-dao";
import { CopiePermisFVMDao } from "./copie_permis-dao";
import {ServiceRequest} from "hornet-js-core/src/services/service-request";
import {Form1Service} from "../../../services/page/admin/fvm/form1-service";
import {Injector} from "hornet-js-core/src/inject/injector";
import {Transactional} from "hornet-js-database/src/decorators/dec-transactional";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");


export class Form1FVMDAO extends ServiceRequest implements Form1Service {

  private personneDAO = new PersonneFVMDAO();
  private dossierDAO = new DossierFVMDAO();
  private permisDAO = new PermisFVMDAO();
  private copieNoteVerbaleMAECIDAO = new CopieNoteVerbaleMAECIFVMDao();
  private copiePermisDAO = new CopiePermisFVMDao();

  constructor() {
    super();
  }

  @Transactional({configDatabase: Injector.getRegistered("databaseConfigName")})
  insererDonnee(data): Promise<any> {
    let content = JSON.parse(data["content"]);
    let copie_permis = data["copie_permis"];
    let copie_note_verbale_maeci = data["copie_note_verbale_maeci"];

    let idCopieNoteVerbaleMAECI = this.copieNoteVerbaleMAECIDAO.getIdCopieNoteVerbaleMAECI();
    let idDossier = this.dossierDAO.getIdDossier();
    let idPersonne = this.personneDAO.getIdPersonne();
    let idCopiePermis = this.copiePermisDAO.getIdCopiePermis();
    let idPermis = this.permisDAO.getIdPermis();

    let insertCopieNoteVerbaleMAECI =  idDossier.then(idDossier=>{
      return this.copieNoteVerbaleMAECIDAO.insererCopieNoteVerbaleMAECI(copie_note_verbale_maeci.nom, copie_note_verbale_maeci.mimetype, copie_note_verbale_maeci.encoding, copie_note_verbale_maeci.size, copie_note_verbale_maeci.data, idDossier);
    });

    return insertCopieNoteVerbaleMAECI.then(result=>{
      let insertDossier = idCopieNoteVerbaleMAECI.then(idCopieNoteVerbaleMAECI=>{
        return idPermis.then(idPermis=>{
          return this.dossierDAO.insererDossier(idCopieNoteVerbaleMAECI, new Date(), idPermis);
        });
      });

      return insertDossier.then(result=>{
        let insertPersonne = idPermis.then(idPermis=>{
          return this.personneDAO.insererPersonne(content.nom, content.prenom, content.date_de_naissance, content.ville_de_naissance, content.pays_de_naissance, idPermis);
        });

        return insertPersonne.then(result=>{
          let insertCopiePermis = idPermis.then(idPermis=>{
            return this.copiePermisDAO.insererCopiePermis(copie_permis.nom, copie_permis.mimetype, copie_permis.encoding, copie_permis.size, copie_permis.data, idPermis);
          });

          return insertCopiePermis.then(result=>{
            let insertPermis = idCopiePermis.then(idCopiePermis=>{
              return idPersonne.then(idPersonne=>{
                return idDossier.then(idDossier=>{
                  return this.permisDAO.insererPermis(content.num_permis, idCopiePermis, content.date_de_delivrance, idPersonne, idDossier, content.id_prefecture);
                });
              });
            });

            return insertPermis.then(result=>{
              return Promise.resolve("insertion réussie");
            });
          });
        });
      });
    });
  }
}
