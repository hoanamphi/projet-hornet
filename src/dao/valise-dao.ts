import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parents des Classes de DAO
import { EntityDAO } from "src/dao/entity-dao";
// Classe métier d'une valise diplomatique
import {ValiseMetier} from "src/models/common-mod";
import Map from "hornet-js-bean/src/decorators/Map";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

/**
 * Classe de DAO permettant d'interagir avec la table valise
 * @extends {EntityDAO}
 */
export class ValiseDAO extends EntityDAO {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Méthode insérant une nouvelle valise diplomatique dans la base
   * @param {number} numValise numéro de la valise diplomatique
   * @param {Date} dateValise date de départ du Maroc de la valise diplomatique
   * @returns {Promise<number>} numéro de la valise créée
   */
  insererValise(numValise: number, dateValise: Date): Promise<number> {
    logger.trace("DAO inser - Valise.Inser");

    return this.modelDAO.valiseEntity.create({
      numValise: numValise,
      dateValise: dateValise
    }).then(()=>{
      return numValise;
    });
  }

  /**
   * Méthode retournant la liste des valises diplomatiques stockées dans la base
   * @returns {Promise<Array<ValiseMetier>>} Liste des valises diplomatiques stockées dans la base
   */
  @Map(ValiseMetier)
  getListeValise(): Promise<Array<ValiseMetier>> {
    logger.trace("DAO get - Valise.GetListe");

    return this.modelDAO.valiseEntity.findAll();
  }

  /**
   * Méthode retournant la liste des valises diplomatiques récentes stockées dans la base
   * @returns {Promise<Array<ValiseMetier>>} Liste des valises diplomatiques récentes stockées dans la base (Date de la valise > Date du jour + 1)
   */
  @Map(ValiseMetier)
  getListeValiseRecent(): Promise<Array<ValiseMetier>> {
    logger.trace("DAO get - Valise.GetListeRecent");

    return this.modelDAO.valiseEntity.findAll({
      where: {
        dateValise: {
          // dateValise > Date du jour + 1
          $gt: (new Date()).setDate((new Date()).getDate()+1)
        }
      }
    });
  }

  /**
   * Méthode retournant une valise diplomatique
   * @param {number} numValise numéro de la valise diplomatique à retourner
   * @returns {Promise<ValiseMetier>} Valise
   */
  @Map(ValiseMetier)
  getValise(numValise: number): Promise<ValiseMetier> {
    logger.trace("DAO get - Valise.Get");

    return this.modelDAO.valiseEntity.find({
      where: {
        numValise: numValise
      }
    });
  }
}
