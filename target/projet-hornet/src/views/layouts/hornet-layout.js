"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var hornet_js_utils_1 = require("hornet-js-utils");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var navigation_utils_1 = require("hornet-js-components/src/utils/navigation-utils");
var fs = require("fs");
var path = require("path");
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.layouts.hornet-layout");
var styleLoader = ".loader-page:before {display: block;position: absolute;content: '';left: -200px;width: 200px;height: 4px;background-color: #00d468;animation: loadingPage 2s linear infinite;}@keyframes loadingPage {from {left: -200px; width: 30%;}50% {width: 30%;}70% {width: 70%;}80% { left: 50%;}95% {left: 120%;}to {left: 100%;}}";
/**
 * Layout de l'application
 */
var HornetLayout = /** @class */ (function (_super) {
    tslib_1.__extends(HornetLayout, _super);
    function HornetLayout(props, context) {
        var _this = _super.call(this, props, context) || this;
        var currentUrl = hornet_js_utils_1.Utils.getCls("hornet.routePath");
        _this.state = tslib_1.__assign({}, _this.state, { applicationTitle: _this.i18n(navigation_utils_1.NavigationUtils.retrievePageTextKey(navigation_utils_1.NavigationUtils.getConfigMenu(), currentUrl)) });
        return _this;
    }
    HornetLayout.prototype.prepareClient = function () {
    };
    HornetLayout.prototype.getLoadingText = function () {
        return this.state.applicationLoading || this.i18n("applicationLoading");
    };
    /**
     * @inheritDoc
     */
    HornetLayout.prototype.render = function () {
        logger.info("VIEW HornetLayout render");
        var loaderStyle = {
            "width": "100%",
            "position": "absolute",
            "overflow": "hidden",
            "backgroundColor": "#eee",
            "height": "4px",
            "top": "6em",
            zIndex: 9999
        };
        var loadingOverlayStyle = {
            background: "black",
            position: "fixed",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            opacity: 0.1,
            "zIndex": 9999
        };
        try {
            var compatible = "<!--[if IE]> <meta http-equiv=\"X-UA-Compatible\" content=\"edge\" /> <![endif]-->";
            return (React.createElement("html", { dir: "ltr", lang: hornet_js_utils_1.Utils.getCls("hornet.internationalization").lang },
                React.createElement("head", null,
                    React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" }),
                    React.createElement("meta", { httpEquiv: "Content-Type", content: "text/html; charset=UTF-8" }),
                    React.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
                    React.createElement("link", { rel: "icon", type: "image/png", href: this.genUrlStatic(this.state.appLogo) }),
                    React.createElement("title", null, this.state.applicationTitle),
                    React.createElement("link", { rel: "stylesheet", type: "text/css", href: HornetLayout.genUrlTheme(this.state.fwkTheme) }),
                    React.createElement("link", { rel: "stylesheet", type: "text/css", href: this.genUrlStatic(this.state.appTheme) })),
                React.createElement("body", null,
                    !this.state.nojavascript ?
                        React.createElement("div", { id: "firstLoadingSpinner" },
                            React.createElement("style", { dangerouslySetInnerHTML: { __html: styleLoader } }),
                            React.createElement("div", { style: loadingOverlayStyle }),
                            React.createElement("div", { style: loaderStyle, className: "loader-page" }))
                        : null,
                    React.createElement("div", { id: "app", dangerouslySetInnerHTML: { __html: this.state.content } }),
                    React.createElement("script", { dangerouslySetInnerHTML: { __html: (this.state.state || "").toString() } }),
                    process.env.NODE_ENV !== "production" ? this.renderScriptVendor() : null,
                    this.renderScript())));
        }
        catch (e) {
            logger.error("Render hornet-layout exception", e);
            throw e;
        }
    };
    HornetLayout.prototype.renderScript = function () {
        logger.debug("VIEW HornetLayout renderScript");
        if (!this.state.nojavascript) {
            return (React.createElement("script", { src: this.genUrlStatic(this.state.appStatic) }));
        }
        return null;
    };
    HornetLayout.prototype.renderScriptVendor = function () {
        var _this = this;
        logger.debug("VIEW HornetLayout renderScript DLL");
        var dlls = [];
        if (!this.state.nojavascript) {
            var dllDirectory = path.join(path.dirname(require.main.filename), "static", this.state.appStaticDll);
            if (fs.existsSync(dllDirectory)) {
                var listFiles = fs.readdirSync(dllDirectory);
                listFiles.forEach(function (file, idx) {
                    if (path.extname(file) == ".js" && path.basename(file).match(/^dll_/)) {
                        dlls.push(React.createElement("script", { src: _this.genUrlStatic(path.join(_this.state.appStaticDll, path.basename(file))), key: "dll-" + idx }));
                    }
                });
            }
        }
        return dlls;
    };
    HornetLayout.defaultProps = {
        appLogo: "/img/logoHornet.png",
        appTheme: "/css/theme.css",
        fwkTheme: process.env.NODE_ENV === "production" ? "/css/theme-min.css" : "/css/theme.css",
        appStatic: "/js/client.js",
        appStaticDll: "/js/dll",
        nojavascript: false,
        applicationTitle: ""
    };
    return HornetLayout;
}(hornet_page_1.HornetPage));
exports.HornetLayout = HornetLayout;

//# sourceMappingURL=hornet-layout.js.map
