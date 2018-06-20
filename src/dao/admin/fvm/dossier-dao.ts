import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de DAO
import { EntityDAO } from "src/dao/entity-dao";
// Classe métier d'un dossier
import {DossierFVMAttributes} from "src/models/fvm/model-dossier";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.admin.fvm.dossier-dao");

/**
 * Classe de DAO permettant l'interaction avec la table dossier_fvm
 * @extends {EntityDAO}
 */
export class DossierFVMDAO extends EntityDAO {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Méthode insérant un nouveau dossier dans la base
   * @param {number} idDossier - id du nouveau tuple
   * @param {number} idCopieNoteVerbaleMAECI - id de la copie de la note verbale du MAECI
   * @param {number} idPermis - id du Permis auquel appartient l'entrée
   * @returns {Promise<number>} id du tuple créé
   */
  insererDossier(idDossier: number, idCopieNoteVerbaleMAECI: number, idPermis: number): Promise<number> {
    logger.trace("DAO inser - Dossier.Inser");

    return this.modelDAO.dossierFVMEntity.upsert({
      idDossier: idDossier,
      idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
      dateReceptionDossier: new Date(),
      idPermis: idPermis
    }).then(()=>{
      return idDossier;
    });
  }

  /**
   * Méthode retournant un id unique pour chaque nouveau tuple
   * @returns {Promise<number>} id du nouveau tuple
   */
  getNewIdDossier(): Promise<number> {
    logger.trace("DAO get - Dossier.GetNewId");

    // Compte le nombre de tuples dans la table
    return this.modelDAO.dossierFVMEntity.count().then(count=>{
      // S'il y a déjà des tuples dans la table
      if(count > 0) {
        // Retourne l'id le plus grand
        return this.modelDAO.dossierFVMEntity.max("idDossier");
      } else {
        return -1;
      }
    }).then(max=>{
      // Retourne l'id le plus grand + 1 ==> nouvel id
      return max+1;
    });
  }

  /**
   * Méthode retournant un dossier
   * @param {number} idDossier - id du tuple à retourner
   * @returns {Promise<DossierFVMAttributes>} Dossier
   */
  getDossier(idDossier: number): Promise<DossierFVMAttributes> {
    logger.trace("DAO get - Dossier.Get");

    return this.modelDAO.dossierFVMEntity.find({
      where: {
        idDossier: idDossier
      }
    });
  }

  /**
   * Méthode retournant une liste de dossier
   * @param {Array<number>} idDossier - tableau contenant les ids des tuples à retourner
   * @returns {Promise<Array<DossierFVMAttributes>>} Liste de dossiers
   */
  getListeDossier(idDossier: Array<number>): Promise<Array<DossierFVMAttributes>> {
    logger.trace("DAO get - Dossier.Get");

    return this.modelDAO.dossierFVMEntity.findAll({
      where: {
        idDossier: {
          $in: idDossier
        }
      }
    });
  }

  /**
   * Méthode retournant l'id du dossier correspondant à un Permis
   * @param {number} idPermis - id du Permis auquel appartient le tuple
   * @returns {Promise<number>} id du Dossier concerné
   */
  getIdDossierFromPermis(idPermis: number): Promise<number> {
    logger.trace("DAO get - Dossier.GetIdFromPermis");

    return this.modelDAO.dossierFVMEntity.find({
      attributes: [
        "idDossier"
      ],
      where: {
        idPermis: idPermis
      }
    });
  }

  /**
   * Méthode supprimant un dossier
   * @param {number} idDossier - id du tuple à supprimer
   * @returns {Promise<any>}
   */
  deleteDossier(idDossier: number): Promise<any> {
    logger.trace("DAO delete - Dossier.Delete");

    return this.modelDAO.dossierFVMEntity.destroy({
      where: {
        idDossier: idDossier
      }
    });
  }
}
