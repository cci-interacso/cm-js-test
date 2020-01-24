"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("@serenity-js/protractor");
var LoginPage_1 = require("./../po/LoginPage");
var LogOut = /** @class */ (function () {
    function LogOut() {
    }
    LogOut.userLogout = function () {
        return new LogOut();
    };
    LogOut.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Hover.over(LoginPage_1.LoginPage.loginOutIcon), protractor_1.Click.on(LoginPage_1.LoginPage.LogOut));
    };
    return LogOut;
}());
exports.LogOut = LogOut;
//# sourceMappingURL=LogOut.js.map