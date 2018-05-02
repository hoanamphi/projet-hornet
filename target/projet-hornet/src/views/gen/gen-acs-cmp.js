"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var hornet_js_utils_1 = require("hornet-js-utils");
var hornet_component_1 = require("hornet-js-react-components/src/widget/component/hornet-component");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.gen.gen-acs-cmp");
var AccessibleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AccessibleComponent, _super);
    function AccessibleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    AccessibleComponent.prototype.render = function () {
        logger.info("VIEW AccessibleBar render");
        var applicationTitle = this.state.applicationTitle;
        var messIntl = this.i18n("header");
        var lienContact = (this.state.linkContactVisible) ?
            React.createElement("li", null,
                React.createElement("a", { href: this.genUrl("/contact") }, messIntl.contact))
            : null;
        var lienAide = (this.state.linkHelpVisible) ?
            React.createElement("li", null,
                React.createElement("a", { href: this.genUrl("/aide") }, messIntl.help))
            : null;
        var lienFullscreen = (this.props.linkFullscreenVisible === true) ?
            React.createElement("li", { className: "fullscreen" },
                React.createElement("a", { onClick: this.props.onClickLinkFullscreen, className: "icone_action" },
                    React.createElement("img", { src: AccessibleComponent.genUrlTheme("/img/header/resize-page.png"), alt: "", title: "" })))
            : null;
        return (React.createElement("nav", { id: "infos" },
            React.createElement("div", { className: "logoDiplo" },
                React.createElement("a", { id: "img_menu_acces", title: this.i18n("application.headerTitle"), href: "http://intranet.diplomatie.gouv.fr/" },
                    React.createElement("img", { src: AccessibleComponent.genUrlTheme("/img/header/logo_diplonet_barre.png"), alt: this.i18n("application.headerTitle") }))),
            React.createElement("ul", { id: "access_liens" },
                React.createElement("li", null,
                    React.createElement("a", { href: "#nav", title: messIntl.menuTitle + applicationTitle }, messIntl.menu)),
                React.createElement("li", null,
                    React.createElement("a", { href: "#bd", title: messIntl.contentTitle + applicationTitle }, messIntl.content)),
                React.createElement("li", null,
                    React.createElement("a", { href: this.genUrl("/planAppli"), title: messIntl.planTitle + applicationTitle }, messIntl.plan)),
                React.createElement("li", null,
                    React.createElement("a", { href: this.genUrl("/politiqueAccessibilite"), title: messIntl.accessTitle + applicationTitle }, messIntl.access)),
                lienContact,
                lienAide,
                React.createElement("li", null,
                    React.createElement("a", { href: "#", title: "langue fr", onClick: this.props.changeInternationalization.bind(this, "fr-FR") }, "FR")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#", title: "langue en", onClick: this.props.changeInternationalization.bind(this, "en-EN") }, "EN")),
                lienFullscreen)));
    };
    return AccessibleComponent;
}(hornet_component_1.HornetComponent));
exports.AccessibleComponent = AccessibleComponent;
//# sourceMappingURL=gen-acs-cmp.js.map