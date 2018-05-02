"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var hornet_js_utils_1 = require("hornet-js-utils");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var plan_1 = require("hornet-js-react-components/src/widget/navigation/plan");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.nav.nav-pap-page");
/**
 * Ecran du plan de l'application
 */
var PlanAppliPage = /** @class */ (function (_super) {
    tslib_1.__extends(PlanAppliPage, _super);
    function PlanAppliPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlanAppliPage.prototype.prepareClient = function () {
    };
    /**
     * @inheritDoc
     */
    PlanAppliPage.prototype.render = function () {
        logger.info("VIEW PlanAppliPage render");
        return (React.createElement("div", null,
            React.createElement("h2", null, this.i18n("navigation.plan")),
            React.createElement(plan_1.Plan, null)));
    };
    return PlanAppliPage;
}(hornet_page_1.HornetPage));
exports.PlanAppliPage = PlanAppliPage;
//# sourceMappingURL=nav-pap-page.js.map