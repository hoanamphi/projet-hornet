"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var hornet_js_utils_1 = require("hornet-js-utils");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.gen-nfe-page");
var NotFoundPage = /** @class */ (function (_super) {
    tslib_1.__extends(NotFoundPage, _super);
    function NotFoundPage(props, context) {
        return _super.call(this, props, context) || this;
    }
    NotFoundPage.prototype.prepareClient = function () {
    };
    /**
     * @inheritDoc
     */
    NotFoundPage.prototype.render = function () {
        logger.info("VIEW NotFoundPage render");
        var error = hornet_js_utils_1.Utils.getCls("hornet.currentError");
        var messIntl = this.i18n("nfePage");
        var title = messIntl.title;
        var link = messIntl.backToHome;
        return (React.createElement("div", { id: "nfe-page" },
            React.createElement("div", { id: "nf-img" }),
            React.createElement("h2", { className: "nfe-title" }, title),
            React.createElement("a", { href: this.genUrl(hornet_js_utils_1.Utils.config.getOrDefault("welcomePage", "/")), title: "", className: "hornet-button nfe-button" }, link)));
    };
    return NotFoundPage;
}(hornet_page_1.HornetPage));
exports.NotFoundPage = NotFoundPage;

//# sourceMappingURL=gen-nfe-page.js.map
