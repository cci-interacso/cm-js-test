"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginPage_1 = require("../ui/LoginPage");
var interactions_1 = require("@serenity-js/protractor/lib/screenplay/interactions");
require('dotenv').config();
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.loginOnCM = function () {
        return new Login();
    };
    Login.prototype.performAs = function (actor) {
        return actor.attemptsTo(interactions_1.Enter.theValue(process.env.username).into(LoginPage_1.LoginPage.username), interactions_1.Enter.theValue(process.env.password).into(LoginPage_1.LoginPage.password), interactions_1.Click.on(LoginPage_1.LoginPage.submit));
    };
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=Login.js.map