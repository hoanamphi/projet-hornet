import { Utils } from "hornet-js-utils";
// Classe gérant les logs
import { Logger } from "hornet-js-utils/src/logger";
// Classe parente des Classes de DAO
import { EntityDAO } from "src/dao/entity-dao";
// Classe métier d'une Personne
import {PersonneFVMAttributes} from "src/models/fvm/model-personne";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

/**
 * Classe de DAO permettant l'interaction avec la table personne_fvm
 * @extends {EntityDAO}
 */
export class PersonneFVMDAO extends EntityDAO {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Méthode insérant une nouvelle personne dans la base
   * @param {number} idPersonne id du nouveau tuple
   * @param {string} nom nom de la personne
   * @param {string} prenom prenom de la personne
   * @param {Date} dateDeNaissance date de naissance de la personne
   * @param {number} idSexe id permettant de connaître le sexe de la personne
   * @param {string} villeDeNaissance ville de naissance de la personne
   * @param {string} paysDeNaissance pays de naissance de la personne
   * @param {number} idPermis id du Permis appartenant à la personne
   * @returns {Promise<number>} id du tuple créé
   */
  insererPersonne(idPersonne: number, nom: string, prenom: string, dateDeNaissance: Date, idSexe: number, villeDeNaissance: string, paysDeNaissance: string, idPermis: number): Promise<number> {
    logger.trace("DAO inser - Personne.Inser");

    return this.modelDAO.personneFVMEntity.upsert({
      idPersonne: idPersonne,
      nom: nom,
      prenom: prenom,
      dateDeNaissance: dateDeNaissance,
      titre: this.getTitre(idSexe),
      villeDeNaissance: villeDeNaissance,
      paysDeNaissance: paysDeNaissance,
      idPermis: idPermis
    }).then(()=>{
      return idPersonne;
    });
  }

  /**
   * Méthode retournant le titre de civilité correspondant à un sexe
   * @param {number} idSexe id correspondant à un sexe
   * @returns {string} le titre de civilité correspondant au sexe (M: Monsieur, F: Madame)
   */
  getTitre(idSexe: number): string {
    logger.trace("DAO get - Personne.GetTitre");

    // Retourne le titre de civilité correspondant au sexe de la personne
    if(idSexe == 0) {
      return "Monsieur";
    } else {
      return "Madame";
    }
  }

  /**
   * Méthode retournant un id unique pour chaque nouveau tuple
   * @returns {Promise<number>} id du nouveau tuple
   */
  getNewIdPersonne(): Promise<number> {
    logger.trace("DAO get - Personne.GetNewId");

    // Compte le nombre de tuples dans la table
    return this.modelDAO.personneFVMEntity.count().then(count=>{
      // S'il y a déjà des tuples dans la table
      if(count > 0) {
        // Retourne l'id le plus grand
        return this.modelDAO.personneFVMEntity.max("idPersonne");
      } else {
        return -1;
      }
    }).then(max=>{
      // Retourne l'id le plus grand + 1 ==> nouvel id
      return max+1;
    });
  }

  /**
   * Méthode retournant une personne
   * @param {number} idPersonne id du tuple à retourner
   * @returns {Promise<PersonneFVMAttributes>} Personne
   */
  getPersonne(idPersonne: number): Promise<PersonneFVMAttributes> {
    logger.trace("DAO get - Personne.Get");

    return this.modelDAO.personneFVMEntity.find({
      where: {
        idPersonne: idPersonne
      }
    });
  }

  /**
   * Méthode retournant une liste de personnes
   * @param {Array<number>} idPersonne tableau contenant les ids des tuples à retourner
   * @returns {Promise<Array<PersonneFVMAttributes>>} Liste de personnes
   */
  getListePersonne(idPersonne: Array<number>): Promise<Array<PersonneFVMAttributes>> {
    logger.trace("DAO get - Personne.Get");

    return this.modelDAO.personneFVMEntity.findAll({
      where: {
        idPersonne: {
          $in: idPersonne
        }
      }
    });
  }

  /**
   * Méthode retournant l'id d'une personne correspondant à un Permis
   * @param {number} idPermis id du Permis auquel appartient le tuple
   * @returns {Promise<number>} id de la Personne concernée
   */
  getIdPersonneFromPermis(idPermis: number): Promise<number> {
    logger.trace("DAO get - Personne.GetIdFromPermis");

    return this.modelDAO.personneFVMEntity.find({
      attributes: [
        "idPersonne"
      ],
      where: {
        idPermis: idPermis
      }
    });
  }

  /**
   * Méthode supprimant une personne
   * @param {number} idPersonne id du tuple à supprimer
   * @returns {Promise<any>}
   */
  deletePersonne(idPersonne: number): Promise<any> {
    logger.trace("DAO delete - Personne.Delete");

    return this.modelDAO.personneFVMEntity.destroy({
      where: {
        idPersonne: idPersonne
      }
    });
  }
}
