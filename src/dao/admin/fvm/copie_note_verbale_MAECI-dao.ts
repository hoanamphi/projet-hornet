import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de DAO
import { EntityDAO } from "src/dao/entity-dao";
// Classe métier de la copie d'une note verbale du MAECI
import {CopieNoteVerbaleMAECIFVMAttributes} from "src/models/fvm/model-copienoteverbaleMAECI";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.admin.fvm.copie_note_verbale_maeci-dao");

/**
 * Classe de DAO permettant l'interaction avec la table copie_note_verbale_maeci_fvm
 * @extends {EntityDAO}
 */
export class CopieNoteVerbaleMAECIFVMDao extends EntityDAO {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Methode insérant une nouvelle copie d'une note verbale du MAECI dans la base
   * @param {number} idCopieNoteVerbaleMAECI - id du nouveau tuple
   * @param {string} mimetype - format du fichier
   * @param {string} encoding - encodage du fichier
   * @param {number} size - taille du fichier
   * @param {Buffer} data - contenu du fichier
   * @param {number} idDossier - id du Dossier auquel appartient cette entrée
   * @returns {Promise<number>} id du tuple créé
   */
  insererCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI: number, mimetype: string, encoding: string, size: number, data: Buffer, idDossier: number): Promise<number> {
    logger.trace("DAO inser - CopieNoteVerbaleMAECIDAO.Inser");

    return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.upsert({
      idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI,
      nom: this.getNewNom(idCopieNoteVerbaleMAECI),
      mimetype: mimetype,
      encoding: encoding,
      size: size,
      data: data,
      idDossier: idDossier
    }).then(()=>{
      return idCopieNoteVerbaleMAECI;
    });
  }

  /**
   * Méthode retournant un nom unique pour chaque nouveau tuple
   * @param {number} idCopieNoteVerbaleMAECI - id du nouveau tuple
   * @returns {string} nom de l'entrée
   */
  getNewNom(idCopieNoteVerbaleMAECI: number): string {
    logger.trace("DAO get - CopieNoteVerbaleMAECIDAO.GetNewNom");

    // Le nouveau nom est au format : [Type de document][id du nouveau tuple][Date du jour]
    return ("copieNoteVerbaleMAECI"+idCopieNoteVerbaleMAECI+(new Date())).replace(/\s+/g, "_");
  }

  /**
   * Méthode retournant un id unique pour chaque nouveau tuple
   * @returns {Promise<number>} id du nouveau tuple
   */
  getNewIdCopieNoteVerbaleMAECI(): Promise<number> {
    logger.trace("DAO get - CopieNoteVerbaleMAECIDAO.GetNewId");

    // Compte le nombre de tuples dans la table
    return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.count().then(count=>{
      // Si il y a déjà des tuples dans la table
      if(count > 0) {
        // Retourne l'id le plus grand
        return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.max("idCopieNoteVerbaleMAECI");
      } else {
        return -1;
      }
    }).then(max=>{
      // Retourne l'id le plus grand + 1 ==> nouvel id
      return max+1;
    });
  }

  /**
   * Méthode retournant une copie d'une note verbale du MAECI
   * @param {number} idCopieNoteVerbaleMAECI - id du tuple à retourner
   * @returns {Promise<CopieNoteVerbaleMAECIFVMAttributes>} Copie d'une note verbale du MAECI
   */
  getCopieNoteVerbaleMAECI(idCopieNoteVerbaleMAECI: number): Promise<CopieNoteVerbaleMAECIFVMAttributes> {
    logger.trace("DAO get - CopieNoteVerbaleMAECIDAO.Get");

    return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.find({
      where: {
        idCopieNoteVerbaleMAECI: idCopieNoteVerbaleMAECI
      }
    });
  }

  /**
   * Méthode supprimant une copie d'une note verbale du MAECI
   * @param {number} idDossier - id du Dossier auquel appartient le tuple
   * @returns {Promise<any>}
   */
  deleteCopieNoteVerbaleMAECIFromDossier(idDossier: number): Promise<any> {
    logger.trace("DAO delete - CopieNoteVerbaleMAECIDAO.Delete");

    return this.modelDAO.copieNoteVerbaleMAECIFVMEntity.destroy({
      where: {
        idDossier: idDossier
      }
    });
  }
}
