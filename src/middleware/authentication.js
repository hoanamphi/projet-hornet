"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var sha1 = require("sha1");
var flash = require("connect-flash");
var ReactDOMServer = require("react-dom/server");
var passport = require("passport");
var passport_local_1 = require("passport-local");
var _ = require("lodash");
var gen_cnx_page_1 = require("src/views/gen/gen-cnx-page");
var middlewares_1 = require("hornet-js-core/src/middleware/middlewares");
var AuthenticationMiddleware = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationMiddleware, _super);
    function AuthenticationMiddleware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthenticationMiddleware.prototype.insertMiddleware = function (app) {
        // init passport
        /**
         * Insertion de la stratégie login/mot de passe (= stratégie 'locale', voir doc passport)
         */
        passport.use(new passport_local_1.Strategy(function (_api) {
            return function (username, password, done) {
                AuthenticationMiddleware.logger.trace("Tentative d'authentification de l'utilisateur ", username);
                var encodedPassword = sha1(password);
                _api.auth({
                    login: username,
                    password: encodedPassword
                }).then(function (retourApi) {
                    AuthenticationMiddleware.logger.debug("Retour API utilisateur : ", retourApi);
                    done(null, retourApi);
                }).catch(function (err) {
                    AuthenticationMiddleware.logger.warn("Retour en erreur:", err);
                    if (err.code == "ERR_AUTHENTICATION_FAILED") {
                        done(null, false, { message: "Votre identifiant ou votre mot de passe est incorrect" });
                    }
                    else {
                        done(null, false, { message: "Une erreur technique est survenue : " + err.toString() });
                    }
                });
            };
        }(this.api)));
        passport.serializeUser(function (user, done) {
            // Pour l'appli on sérialise tout l'objet plutot que juste son ID
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
        // init middleware
        var loginUrl = hornet_js_utils_1.Utils.appSharedProps.get("loginUrl");
        var logoutUrl = hornet_js_utils_1.Utils.appSharedProps.get("logoutUrl");
        var welcomePageUrl = hornet_js_utils_1.Utils.appSharedProps.get("welcomePageUrl");
        function ensureAuthenticated(req, res, next) {
            if (req.isAuthenticated() || _.startsWith(req.originalUrl, loginUrl)) {
                return next();
            }
            req.getSession().setAttribute("previousUrl", hornet_js_utils_1.Utils.buildContextPath(req.originalUrl));
            res.redirect(hornet_js_utils_1.Utils.buildContextPath(loginUrl));
        }
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());
        app.post(loginUrl, passport.authenticate("local", { failureRedirect: hornet_js_utils_1.Utils.buildContextPath(loginUrl), failureFlash: true }), function (req, res, next) {
            AuthenticationMiddleware.logger.trace("Authentification ok, redirection vers la page d'accueil");
            var previousUrl = req.body.previousUrl || req.getSession().getAttribute("previousUrl") || hornet_js_utils_1.Utils.buildContextPath(welcomePageUrl);
            res.redirect(previousUrl);
        });
        app.all(loginUrl, function (req, res) {
            var errors = req["flash"]("error");
            if (errors.length > 0 && errors[0] === "Missing credentials") {
                errors = ["Votre identifiant ou votre mot de passe est incorrect"];
            }
            var props = {
                errorMessage: errors,
                previousUrl: null
            };
            // Cas d'un perte de connexion liée à un timeout
            if (req.query.previousUrl) {
                props.previousUrl = req.query.previousUrl;
            }
            // cas d'une perte de connexion liée à un timeout + F5
            if (req.getSession().getAttribute("previousUrl") && !props["previousUrl"]) {
                props.previousUrl = req.getSession().getAttribute("previousUrl");
                req.getSession().removeAttribute("previousUrl");
            }
            var locales = req.acceptsLanguages();
            var htmlApp = ReactDOMServer.renderToStaticMarkup(new gen_cnx_page_1.ConnexionPage(props).render());
            var docTypeHtml = "<!DOCTYPE html>";
            res.setHeader("x-is-login-page", "true");
            res.send(docTypeHtml + htmlApp);
        });
        app.get(logoutUrl, function (req, res, next) {
            // notifie passport
            req.logout();
            // notifie le session-manager et redirige une fois la session détruite
            req.getSession().invalidate(function () {
                res.redirect(hornet_js_utils_1.Utils.buildContextPath(welcomePageUrl));
            });
        });
        app.use(ensureAuthenticated);
    };
    AuthenticationMiddleware.logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.middleware.authentication");
    return AuthenticationMiddleware;
}(middlewares_1.AbstractHornetMiddleware));
exports.AuthenticationMiddleware = AuthenticationMiddleware;

//# sourceMappingURL=authentication.js.map
