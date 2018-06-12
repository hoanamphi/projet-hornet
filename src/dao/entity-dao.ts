// Décorateurs permettant la connexion à la base de données
import { inject } from "hornet-js-core/src/inject/inject";
import { injectable } from "hornet-js-core/src/inject/injectable";
// Classe parente du connecteur à la base de données
import { HornetSequelizeEntity } from "hornet-js-database/src/sequelize/hornet-sequelize-entity";
// Classe définissant les entités de la DAO
import { ModelDAO } from "src/dao/model-dao";

/**
 * Classe permettant la connexion à la base de données
 * @extends {HornetSequelizeEntity<ModelDAO>} Classe générique : <Classe définissant les entités de la DAO>
 */
@injectable()
export class EntityDAO extends HornetSequelizeEntity<ModelDAO> {

  /**
   * @constructor
   * @param {ModelDAO} modelDAO Sert d'interface avec la base de donnée et permet d'effectuer des requêtes Sequelize sur celle-ci
   */
  constructor(@inject(ModelDAO) modelDAO?: ModelDAO) {
        super(modelDAO);
    }
}
