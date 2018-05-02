import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { EntityDAO } from "src/dao/entity-dao";
import Map from "hornet-js-bean/src/decorators/Map";
import { PermisFVMMetier } from "src/models/fvm/fvm-mod";

const logger: Logger = Utils.getLogger("projet-hornet.src.dao.utilisateurs-dao");

export class PermisDAO extends EntityDAO {

    constructor() {
        super();
    }

    @Map(PermisFVMMetier)
    listerPermis(data): Promise<Array<PermisFVMMetier>> {
        return this.modelDAO.permisFVMEntity.findAll();
    }

    // insererPermis(data): Promise<boolean> {
    //     var promise;
    //     this.modelDAO.permisFVMEntity.create({
    //       numPermis: data['permis'],
    //       idPersonne: 1,
    //       numDossier: 1
    //     }).then(function(result){
    //       promise = true;
    //     }).catch(function(err){
    //       promise = false;
    //     });
    //
    //     return new Promise(function(resolve, reject){
    //       resolve(promise);
    //     });
    // }
    //
    // insererPersonne(data): Promise<boolean> {
    //     var promise;
    //     this.modelDAO.personneEntity.create({
    //         idPersonne: 1,
    //         nomPersonne: data['nom'],
    //         prenomPersonne: data['prenom'],
    //         dateDeNaissance: data['date_de_naissance'],
    //         numPermis: data['permis']
    //     }).then(function(result){
    //       promise = true;
    //     }).catch(function(err){
    //       promise = false;
    //     });
    //
    //     return new Promise(function(resolve, reject){
    //       resolve(promise);
    //     });
    // }
    //
    // insererDossier(data): Promise<boolean> {
    //     var promise;
    //     this.modelDAO.dossierEntity.create({
    //       numDossier: 1,
    //       demandePrefecture: "demande prefecture",
    //       copiePermis: "copiePermis",
    //       dateReceptionDossier: data['date_de_naissance'],
    //       numPermis: data['permis'],
    //       codePrefecture: 2
    //     }).then(function(result){
    //       promise = true;
    //     }).catch(function(err){
    //       promise = false;
    //     });
    //
    //     return new Promise(function(resolve, reject){
    //       resolve(promise);
    //     });
    // }
}
