"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var LoginPage_1 = require("../po/LoginPage");
var interactions_1 = require("@serenity-js/protractor/lib/screenplay/interactions");
require('dotenv').config();
var waitTimeInMillseconds = core_1.Duration.ofMilliseconds(10000);
var Login = /** @class */ (function () {
    function Login(username, password) {
        this.username = username;
        this.password = password;
    }
    Login.loginOnCM = function (username, password) {
        return new Login(username, password);
    };
    Login.prototype.performAs = function (actor) {
        return actor.attemptsTo(interactions_1.Enter.theValue(this.username).into(LoginPage_1.LoginPage.username), interactions_1.Enter.theValue(this.password).into(LoginPage_1.LoginPage.password), interactions_1.Click.on(LoginPage_1.LoginPage.submit));
    };
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=Login.js.map