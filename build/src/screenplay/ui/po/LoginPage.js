"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("@serenity-js/protractor");
var protractor_2 = require("protractor");
var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    LoginPage.username = protractor_1.Target.the('username field').located(protractor_2.by.id('okta-signin-username'));
    LoginPage.password = protractor_1.Target.the('password field').located(protractor_2.by.id('okta-signin-password'));
    LoginPage.submit = protractor_1.Target.the('submit button').located(protractor_2.by.id('okta-signin-submit'));
    LoginPage.HoverOnLogin = protractor_1.Target.the('login out').located(protractor_2.by.xpath("//button[@class='ant-btn ant-dropdown-trigger ant-btn-default']"));
    LoginPage.loginOut = protractor_1.Target.the('logout').located(protractor_2.by.css('body > div:nth-child(7) > div > div > ul > li'));
    LoginPage.JOIN = protractor_1.Target.the('label').of(LoginPage.HoverOnLogin).located(protractor_2.by.css('body > div:nth-child(7) > div > div > ul > li'));
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map