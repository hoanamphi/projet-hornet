"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var hornet_js_utils_1 = require("hornet-js-utils");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.gen.gen-hom-page");
/**
 * Ecran de page d'accueil de l'application
 */
var HomePage = /** @class */ (function (_super) {
    tslib_1.__extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.prepareClient = function () {
    };
    /**
     * @inheritDoc
     */
    HomePage.prototype.render = function () {
        logger.info("VIEW HomePage render");
        return (React.createElement("div", { id: "pageAccueil" },
            React.createElement("h2", null, "Accueil")));
    };
    return HomePage;
}(hornet_page_1.HornetPage));
exports.HomePage = HomePage;
//# sourceMappingURL=gen-hom-page.js.map