"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
var library_1 = require("../po/library");
var ShareACreative = /** @class */ (function () {
    function ShareACreative() {
    }
    ShareACreative.assignCreative = function () {
        return new ShareACreative();
    };
    ShareACreative.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Wait.upTo(core_1.Duration.ofSeconds(20)).until(library_1.Library.SEARCH_BY_NAME, protractor_1.isVisible()), protractor_1.Enter.theValue('download.jpeg').into(library_1.Library.SEARCH_BY_NAME), protractor_1.Click.on(library_1.Library.SELECT_ADDED_CREATIVES), protractor_1.Click.on(library_1.Library.ADD_USER), protractor_1.Click.on(library_1.Library.ADD_CREATIVE_TO_SEVILLE), protractor_1.Click.on(library_1.Library.ASSIGN_CREATIVE), protractor_1.Wait.for(core_1.Duration.ofSeconds(4)));
    };
    return ShareACreative;
}());
exports.ShareACreative = ShareACreative;
//# sourceMappingURL=ShareACreative.js.map