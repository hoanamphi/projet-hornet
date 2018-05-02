"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Bean_1 = require("hornet-js-bean/src/decorators/Bean");
var Map_1 = require("hornet-js-bean/src/decorators/Map");
var Alias_1 = require("hornet-js-bean/src/decorators/Alias");
var PrefectureMetier = /** @class */ (function () {
    function PrefectureMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("idPrefecture"),
        tslib_1.__metadata("design:type", Number)
    ], PrefectureMetier.prototype, "id_prefecture", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("region"),
        tslib_1.__metadata("design:type", String)
    ], PrefectureMetier.prototype, "region", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("departement"),
        tslib_1.__metadata("design:type", String)
    ], PrefectureMetier.prototype, "departement", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("prefecture"),
        tslib_1.__metadata("design:type", String)
    ], PrefectureMetier.prototype, "prefecture", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("adresse"),
        tslib_1.__metadata("design:type", String)
    ], PrefectureMetier.prototype, "adresse", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("codePostal"),
        tslib_1.__metadata("design:type", Number)
    ], PrefectureMetier.prototype, "code_postal", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("ville"),
        tslib_1.__metadata("design:type", String)
    ], PrefectureMetier.prototype, "ville", void 0);
    PrefectureMetier = tslib_1.__decorate([
        Bean_1.default
    ], PrefectureMetier);
    return PrefectureMetier;
}());
exports.PrefectureMetier = PrefectureMetier;
var ValiseMetier = /** @class */ (function () {
    function ValiseMetier() {
    }
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("numValise"),
        tslib_1.__metadata("design:type", Number)
    ], ValiseMetier.prototype, "num_valise", void 0);
    tslib_1.__decorate([
        Map_1.default(),
        Alias_1.default("dateValise"),
        tslib_1.__metadata("design:type", Date)
    ], ValiseMetier.prototype, "date_valise", void 0);
    ValiseMetier = tslib_1.__decorate([
        Bean_1.default
    ], ValiseMetier);
    return ValiseMetier;
}());
exports.ValiseMetier = ValiseMetier;

//# sourceMappingURL=common-mod.js.map
