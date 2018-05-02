"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var hornet_js_utils_1 = require("hornet-js-utils");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var notification_1 = require("hornet-js-react-components/src/widget/notification/notification");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.gen.gen-aid-page");
var AidePage = /** @class */ (function (_super) {
    tslib_1.__extends(AidePage, _super);
    function AidePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AidePage.prototype.prepareClient = function () {
    };
    /**
     * @inheritDoc
     */
    AidePage.prototype.render = function () {
        logger.info("VIEW AidePage render");
        return (React.createElement("div", null,
            React.createElement("h2", null, "Aide"),
            React.createElement(notification_1.Notification, { id: "n1" }),
            React.createElement("div", { className: "pure-g-r" },
                React.createElement("div", { className: "pure-u-3-4" },
                    React.createElement("h3", null, "Objet de l'application"),
                    React.createElement("p", { className: "texte" }, "Cette application permet de donner un aper\u00E7u des \u00E9l\u00E9ments int\u00E9gr\u00E9s Hornet \u00E0 travers l'exemple fonctionnel d'un magasin."),
                    React.createElement("h3", null, "Objet de cette page"),
                    React.createElement("p", { className: "texte" }, "Cette page en particulier permet de visualiser le rendu des balises <h2>, <h3>, <h4>, <h5> et <h6> au travers d'un contenu statique."),
                    React.createElement("h4", null, "Donn\u00E9es de l\u2019application"),
                    React.createElement("h5", null, "Partenaires"),
                    React.createElement("p", { className: "texte" }, "Les donn\u00E9es de l\u2019application font r\u00E9f\u00E9rence \u00E0 des personnes fictives."),
                    React.createElement("h5", null, "Secteurs"),
                    React.createElement("p", { className: "texte" }, "Les secteurs d\u2019activit\u00E9 ont \u00E9t\u00E9 choisi au hasard, n\u2019h\u00E9sitez pas \u00E0 les compl\u00E9ter."),
                    React.createElement("h5", null, "Le magasin"),
                    React.createElement("h6", null, "Notre magasin"),
                    React.createElement("p", { className: "texte" }, "Notre magasin est fictif, tout comme nos utilisateurs."),
                    React.createElement("h6", null, "O\u00F9 sommes nous ?"),
                    React.createElement("p", { className: "texte" },
                        "La commune de l\u2019Etang-Sal\u00E9 existe. Elle est limitrophe des Avirons et de Saint-Louis, situ\u00E9s respectivement au nord et \u00E0 l'est de celle-ci. Elle compte sur son territoire une belle for\u00EAt littorale, la for\u00EAt de l'\u00C9tang-Sal\u00E9. Ceci explique sa devise : \u00AB Entre mer et for\u00EAt \u00BB. L'\u00C9tang-Sal\u00E9 doit son nom \u00E0 un petit plan d'eau autrefois aliment\u00E9 par les marais. \u00C0 sa place, aujourd'hui un bel \u00E9tang, royaume des enfants, des petits p\u00EAcheurs et des mod\u00E8les r\u00E9duits. La commune se partage entre trois zones : la station baln\u00E9aire, le centre-ville, et les hameaux des hauts, ainsi qu'un vaste arri\u00E8re pays montagneux. La longue plage de sable noir n'est pas son moindre atout. Autrefois, la modeste bourgade \u00E9tait appel\u00E9e \\u0022village\\u0022 par les gens du Sud. On y allait en vacances en ao\u00FBt. Le reste de l'ann\u00E9e, l'endroit redevenait le royaume des familles p\u00EAcheurs \\u0022canotte\\u0022. Apr\u00E8s la for\u00EAt, restaur\u00E9e par l'ONF, on entre dans le centre-ville, aux cours encombr\u00E9es de fruitiers et de fleurs. Plus hauts se rencontrent des hameaux de moyenne altitudes, les Canots, le Maniron, le Cap ... [ extrait de la page \u00A0",
                        React.createElement("a", { href: "http://fr.wikipedia.org/wiki/L%27%C3%89tang-Sal%C3%A9" }, "Wikip\u00E9dia"),
                        "\u00A0 au 25/04/2013]"),
                    React.createElement("p", { className: "texte" }, "Bonne navigation.")))));
    };
    return AidePage;
}(hornet_page_1.HornetPage));
exports.AidePage = AidePage;

//# sourceMappingURL=gen-aid-page.js.map
