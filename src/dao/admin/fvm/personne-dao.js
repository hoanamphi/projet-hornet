"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
// Classe parente des Classes de DAO
var entity_dao_1 = require("src/dao/entity-dao");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.src.dao.admin.fvm.personne-dao");
/**
 * Classe de DAO permettant l'interaction avec la table personne_fvm
 * @extends {EntityDAO}
 */
var PersonneFVMDAO = /** @class */ (function (_super) {
    tslib_1.__extends(PersonneFVMDAO, _super);
    /**
     * @constructor
     */
    function PersonneFVMDAO() {
        return _super.call(this) || this;
    }
    /**
     * Méthode insérant une nouvelle personne dans la base
     * @param {number} idPersonne - id du nouveau tuple
     * @param {string} nom - nom de la personne
     * @param {string} prenom - prenom de la personne
     * @param {Date} dateDeNaissance - date de naissance de la personne
     * @param {number} idSexe - id permettant de connaître le sexe de la personne
     * @param {string} villeDeNaissance - ville de naissance de la personne
     * @param {string} paysDeNaissance - pays de naissance de la personne
     * @param {number} idPermis - id du Permis appartenant à la personne
     * @returns {Promise<number>} id du tuple créé
     */
    PersonneFVMDAO.prototype.insererPersonne = function (idPersonne, nom, prenom, dateDeNaissance, idSexe, villeDeNaissance, paysDeNaissance, idPermis) {
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
        }).then(function () {
            return idPersonne;
        });
    };
    /**
     * Méthode retournant le titre de civilité correspondant à un sexe
     * @param {number} idSexe - id correspondant à un sexe
     * @returns {string} le titre de civilité correspondant au sexe (M: Monsieur, F: Madame)
     */
    PersonneFVMDAO.prototype.getTitre = function (idSexe) {
        logger.trace("DAO get - Personne.GetTitre");
        // Retourne le titre de civilité correspondant au sexe de la personne
        if (idSexe == 0) {
            return "Monsieur";
        }
        else {
            return "Madame";
        }
    };
    /**
     * Méthode retournant un id unique pour chaque nouveau tuple
     * @returns {Promise<number>} id du nouveau tuple
     */
    PersonneFVMDAO.prototype.getNewIdPersonne = function () {
        var _this = this;
        logger.trace("DAO get - Personne.GetNewId");
        // Compte le nombre de tuples dans la table
        return this.modelDAO.personneFVMEntity.count().then(function (count) {
            // S'il y a déjà des tuples dans la table
            if (count > 0) {
                // Retourne l'id le plus grand
                return _this.modelDAO.personneFVMEntity.max("idPersonne");
            }
            else {
                return -1;
            }
        }).then(function (max) {
            // Retourne l'id le plus grand + 1 ==> nouvel id
            return max + 1;
        });
    };
    /**
     * Méthode retournant une personne
     * @param {number} idPersonne - id du tuple à retourner
     * @returns {Promise<PersonneFVMAttributes>} Personne
     */
    PersonneFVMDAO.prototype.getPersonne = function (idPersonne) {
        logger.trace("DAO get - Personne.Get");
        return this.modelDAO.personneFVMEntity.find({
            where: {
                idPersonne: idPersonne
            }
        });
    };
    /**
     * Méthode retournant une liste de personnes
     * @param {Array<number>} idPersonne - tableau contenant les ids des tuples à retourner
     * @returns {Promise<Array<PersonneFVMAttributes>>} Liste de personnes
     */
    PersonneFVMDAO.prototype.getListePersonne = function (idPersonne) {
        logger.trace("DAO get - Personne.Get");
        return this.modelDAO.personneFVMEntity.findAll({
            where: {
                idPersonne: {
                    $in: idPersonne
                }
            }
        });
    };
    /**
     * Méthode retournant l'id d'une personne correspondant à un Permis
     * @param {number} idPermis - id du Permis auquel appartient le tuple
     * @returns {Promise<number>} id de la Personne concernée
     */
    PersonneFVMDAO.prototype.getIdPersonneFromPermis = function (idPermis) {
        logger.trace("DAO get - Personne.GetIdFromPermis");
        return this.modelDAO.personneFVMEntity.find({
            attributes: [
                "idPersonne"
            ],
            where: {
                idPermis: idPermis
            }
        });
    };
    /**
     * Méthode supprimant une personne
     * @param {number} idPersonne - id du tuple à supprimer
     * @returns {Promise<any>}
     */
    PersonneFVMDAO.prototype.deletePersonne = function (idPersonne) {
        logger.trace("DAO delete - Personne.Delete");
        return this.modelDAO.personneFVMEntity.destroy({
            where: {
                idPersonne: idPersonne
            }
        });
    };
    return PersonneFVMDAO;
}(entity_dao_1.EntityDAO));
exports.PersonneFVMDAO = PersonneFVMDAO;

//# sourceMappingURL=personne-dao.js.map
