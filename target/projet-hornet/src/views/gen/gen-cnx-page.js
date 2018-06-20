"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var hornet_js_utils_1 = require("hornet-js-utils");
var hornet_component_1 = require("hornet-js-react-components/src/widget/component/hornet-component");
var _ = require("lodash");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.gen.gen-cnx-page");
/**
 * Ecran de connexion
 */
var ConnexionPage = /** @class */ (function (_super) {
    tslib_1.__extends(ConnexionPage, _super);
    function ConnexionPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnexionPage.prototype.componentDidMount = function () {
        document.getElementById("username").focus();
    };
    /**
     * @inheritDoc
     */
    ConnexionPage.prototype.render = function () {
        logger.info("VIEW ConnexionPage render");
        var fwkTheme = process.env.NODE_ENV === "production" ? "/css/theme-min.css" : "/css/theme.css";
        return (React.createElement("html", { lang: 'fr' },
            React.createElement("head", null,
                React.createElement("title", null, "Magasin de L'Étang-Salé : Authentification centrale"),
                React.createElement("meta", { httpEquiv: "Content-Type", content: "text/html; charset=UTF-8" }),
                React.createElement("link", { rel: "icon", type: "image/png", href: this.genUrlStatic("/img/logoHornet.png") }),
                React.createElement("link", { rel: "stylesheet", type: "text/css", href: ConnexionPage.genUrlTheme(fwkTheme) }),
                React.createElement("link", { rel: 'stylesheet', type: 'text/css', href: this.genUrlStatic("/css/auth.css") })),
            React.createElement("body", { id: "auth" },
                React.createElement("div", { id: "site" },
                    React.createElement("div", { id: "content" },
                        React.createElement("h1", { id: "app-name" }, "Magasin de L'étang-salé Authentification centrale."),
                        React.createElement("form", { id: "fm1", className: "fm-v", method: "post" },
                            React.createElement("div", { id: "login", className: "box" },
                                React.createElement("h2", null, "Entrez votre identifiant et votre mot de passe."),
                                this._renderErrorDiv(),
                                React.createElement("div", { className: "row" },
                                    React.createElement("label", { htmlFor: "username" },
                                        React.createElement("span", { className: "accesskey" }, "I"),
                                        "dentifiant :"),
                                    React.createElement("input", { autoFocus: true, type: "text", accessKey: "i", tabIndex: 1, className: "required", ref: "username", name: "username", id: "username" })),
                                React.createElement("div", { className: "row" },
                                    React.createElement("label", { htmlFor: "password" },
                                        React.createElement("span", { className: "accesskey" }, "M"),
                                        "ot de passe :"),
                                    React.createElement("input", { type: "password", accessKey: "m", tabIndex: 2, className: "required", ref: "password", name: "password", id: "password" })),
                                React.createElement("input", { type: "hidden", name: "previousUrl", value: this.state.previousUrl }),
                                React.createElement("div", { className: "row btn-row" },
                                    React.createElement("button", { type: "submit", tabIndex: 4, accessKey: "l", name: "submit", className: "btn-submit" }, " SE CONNECTER ")))),
                        React.createElement("div", { id: "sidebar" },
                            React.createElement("p", null, "Pour des raisons de sécurité, veuillez vous déconnecter et fermer votre navigateur lorsque vous avez fini d'accéder aux pages authentifiées."))),
                    React.createElement("div", { id: "footer" },
                        React.createElement("div", null,
                            React.createElement("p", null, "\u00A0")))))));
    };
    ConnexionPage.prototype._renderErrorDiv = function () {
        if (_.isArray(this.state.errorMessage) && this.state.errorMessage.length >= 1) {
            return (React.createElement("div", { className: "errors", id: "status" }, this.state.errorMessage));
        }
        else {
            return null;
        }
    };
    return ConnexionPage;
}(hornet_component_1.HornetComponent));
exports.ConnexionPage = ConnexionPage;
//# sourceMappingURL=gen-cnx-page.js.map