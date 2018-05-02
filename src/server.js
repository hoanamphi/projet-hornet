"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// L'import de hornet-js-utils doit être fait le plus tôt possible
var hornet_js_utils_1 = require("hornet-js-utils");
var fs = require("fs");
var app_i18n_loader_1 = require("src/i18n/app-i18n-loader");
var HornetServer = require("hornet-js-core/src/server");
var hornet_app_1 = require("src/views/layouts/hornet-app");
var hornet_layout_1 = require("src/views/layouts/hornet-layout");
var error_page_1 = require("hornet-js-react-components/src/widget/component/error-page");
// import { AuthenticationAPIMiddleware } from "src/middleware/authentication-api";
var routes_1 = require("src/routes/routes");
var component_middleware_1 = require("hornet-js-react-components/src/middleware/component-middleware");
var HornetMiddlewares = require("hornet-js-core/src/middleware/middlewares");
var DataBaseMiddlewares = require("hornet-js-database/src/middleware/middleware");
// Authent passport
var passport_authentication_1 = require("hornet-js-passport/src/passport-authentication");
var authentication_configuration_1 = require("hornet-js-passport/src/authentication-configuration");
// Saml
var saml_configuration_1 = require("hornet-js-passport/src/strategy/saml/saml-configuration");
var saml_strategy_1 = require("hornet-js-passport/src/strategy/saml/saml-strategy");
var database_1 = require("hornet-js-database/src/sequelize/database");
var injector_1 = require("hornet-js-core/src/inject/injector");
var Menu = require("src/resources/navigation.json");
// Mise en place des injections de service
var logger = hornet_js_utils_1.Utils.getLogger("hornet-themes.server");
function initContext() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require("src/injector-context-services-data"); })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("src/injector-context-services-page"); })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("src/middleware/authentication-api"); })];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
var AuthenticationAPIMiddleware;
/*
let AuthenticationAPIMiddleware;
initContext().then(
    (AuthenticationAPI)=> {
        AuthenticationAPIMiddleware = AuthenticationAPI
    });
*/
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.configure = function () {
        var configServer = {
            serverDir: __dirname,
            staticPath: "../static",
            appComponent: hornet_app_1.HornetApp,
            layoutComponent: hornet_layout_1.HornetLayout,
            errorComponent: error_page_1.ErrorPage,
            defaultRoutesClass: new routes_1.Routes(),
            sessionStore: null,
            routesLoaderPaths: ["src/routes/"],
            /*Directement un flux JSON >>internationalization:require("./i18n/messages-fr-FR.json"),*/
            /*Sans utiliser le système clé/valeur>> internationalization:null,*/
            internationalization: new app_i18n_loader_1.AppliI18nLoader(),
            menuConfig: Menu.menu,
            loginUrl: hornet_js_utils_1.Utils.config.get("authentication.loginUrl"),
            logoutUrl: hornet_js_utils_1.Utils.config.get("authentication.logoutUrl"),
            welcomePageUrl: hornet_js_utils_1.Utils.config.get("welcomePage"),
            publicZones: [
                hornet_js_utils_1.Utils.config.get("welcomePage")
            ]
        };
        var key = hornet_js_utils_1.Utils.config.getOrDefault("server.https.key", false);
        var cert = hornet_js_utils_1.Utils.config.getOrDefault("server.https.cert", false);
        if (key && cert) {
            configServer.httpsOptions = {
                key: fs.readFileSync(key, "utf8"),
                cert: fs.readFileSync(cert, "utf8"),
                passphrase: hornet_js_utils_1.Utils.config.get("server.https.passphrase")
            };
        }
        return configServer;
    };
    Server.middleware = function () {
        var hornetMiddlewareList = new HornetMiddlewares.HornetMiddlewareList()
            .addAfter(component_middleware_1.PageRenderingMiddleware, HornetMiddlewares.UserAccessSecurityMiddleware)
            .addAfter(component_middleware_1.UnmanagedViewErrorMiddleware, HornetMiddlewares.DataRenderingMiddleware)
            .addBefore(DataBaseMiddlewares.DataBaseErrorMiddleware, HornetMiddlewares.UnmanagedDataErrorMiddleware);
        if (hornet_js_utils_1.Utils.config.getOrDefault("authentication.saml.enabled", false)) {
            var configAuth = new authentication_configuration_1.AuthenticationtConfiguration(hornet_js_utils_1.Utils.config.get("authentication.loginUrl"), hornet_js_utils_1.Utils.config.get("authentication.logoutUrl"));
            var authent = new passport_authentication_1.PassportAuthentication(configAuth);
            var configuration = new saml_configuration_1.SamlConfiguration(hornet_js_utils_1.Utils.config.get("authentication.saml.configuration.callbackUrl"), hornet_js_utils_1.Utils.config.get("authentication.saml.configuration.logoutCallbackUrl"), 
            // Page de retour par défaut
            hornet_js_utils_1.Utils.config.get("authentication.saml.configuration.hostUrlReturnTo"), 
            // Usually specified as `/shibboleth` from site root
            hornet_js_utils_1.Utils.config.get("authentication.saml.configuration.issuer"), 
            // Certificat applicatif
            fs.readFileSync(__dirname + "/../config/cert/cert.pem", "utf8"), 
            // Clé privée de décryptage
            fs.readFileSync(__dirname + "/../config/cert/key.pem", "utf8"), hornet_js_utils_1.Utils.config.get("authentication.saml.configuration.idp"));
            authent.initStrategy(new saml_strategy_1.SamlStrategy(configuration));
            hornetMiddlewareList.addAfter(authent.getMiddleware(), HornetMiddlewares.ChangeI18nLocaleMiddleware);
        }
        else {
            hornetMiddlewareList.addAfter(AuthenticationAPIMiddleware, HornetMiddlewares.ChangeI18nLocaleMiddleware);
        }
        return hornetMiddlewareList;
    };
    Server.startApplication = function () {
        initContext().then(function (AuthenticationAPI) {
            if (process.env.NODE_ENV !== "production" &&
                !hornet_js_utils_1.Utils.config.getOrDefault("mock.enabled", false) &&
                !hornet_js_utils_1.Utils.config.getOrDefault("mock.serviceData.enabled", false)) {
                var files = void 0;
                var databaseConfName = injector_1.Injector.getRegistered("databaseConfigName");
                if (databaseConfName === "config") {
                    files = ["database/01_createTablesSqlite.sql", "database/02_initDataSqlite.sql"];
                }
                else if (databaseConfName === "configPostgres") {
                    files = ["database/01_createTablesPostgres.sql", "database/02_initDataPostgres.sql"];
                }
                database_1.Database.runScripts([{
                        configName: databaseConfName,
                        files: files
                    }]).then(function () {
                    Server.start(AuthenticationAPI);
                });
            }
            else {
                Server.start(AuthenticationAPI);
            }
        });
    };
    Server.start = function (AuthenticationAPI) {
        AuthenticationAPIMiddleware = AuthenticationAPI.AuthenticationAPIMiddleware;
        var server = new HornetServer.Server(Server.configure(), Server.middleware());
        server.start();
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map