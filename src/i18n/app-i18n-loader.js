"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var i18n_loader_1 = require("hornet-js-core/src/i18n/i18n-loader");
var path = require("path");
var AppliI18nLoader = /** @class */ (function (_super) {
    tslib_1.__extends(AppliI18nLoader, _super);
    function AppliI18nLoader() {
        return _super.call(this, path.join(__dirname, "..", "resources")) || this;
    }
    return AppliI18nLoader;
}(i18n_loader_1.I18nLoader));
exports.AppliI18nLoader = AppliI18nLoader;
//# sourceMappingURL=app-i18n-loader.js.map