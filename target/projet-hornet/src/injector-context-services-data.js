"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var injector_1 = require("hornet-js-core/src/inject/injector");
var injectable_1 = require("hornet-js-core/src/inject/injectable");
var hornet_js_utils_1 = require("hornet-js-utils");
var auth_service_1 = require("src/services/data/auth/auth-service");
injector_1.Injector.register("databaseConfigName", "config");
if (hornet_js_utils_1.Utils.config.getOrDefault("mock.enabled", false) && hornet_js_utils_1.Utils.config.getOrDefault("mock.serviceData.enabled", false)) {
    Promise.all([
        Promise.resolve().then(function () { return require("src/mock/services/data/auth/auth-service-impl-mock"); })
    ]).then(function (_a) {
        var AuthServiceDataMockImpl = _a[0];
        injector_1.Injector.register(auth_service_1.AuthService, AuthServiceDataMockImpl.AuthServiceDataMockImpl, injectable_1.Scope.SINGLETON);
    });
}
else {
    Promise.all([
        Promise.resolve().then(function () { return require("src/services/data/auth/auth-service-impl"); })
    ]).then(function (_a) {
        var AuthServiceImpl = _a[0], SecteurServiceImpl = _a[1], PartenaireServiceImpl = _a[2], ReferentielPaysServiceImpl = _a[3], FicheProduitServiceImpl = _a[4];
        injector_1.Injector.register(auth_service_1.AuthService, AuthServiceImpl.AuthServiceImpl, injectable_1.Scope.SINGLETON);
    });
}

//# sourceMappingURL=injector-context-services-data.js.map
