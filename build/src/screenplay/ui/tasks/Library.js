"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
var library_1 = require("../po/library");
var LibraryHome = /** @class */ (function () {
    function LibraryHome() {
    }
    LibraryHome.goToLibrary = function () {
        return new LibraryHome();
    };
    LibraryHome.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Wait.upTo(core_1.Duration.ofSeconds(5)).until(library_1.Library.LIBRARY, protractor_1.isVisible()), protractor_1.Click.on(library_1.Library.LIBRARY), protractor_1.Enter.theValue('market.jpeg').into(library_1.Library.SEARCH_BY_NAME));
    };
    return LibraryHome;
}());
exports.LibraryHome = LibraryHome;
//# sourceMappingURL=Library.js.map