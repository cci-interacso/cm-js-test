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
    // static HoverOnLogOut = Target.the('login out').located(by.xpath("//button[@class='ant-btn ant-dropdown-trigger ant-btn-default']"));
    LoginPage.loginOutIcon = protractor_1.Target.the('logoutIcon').located(protractor_2.by.xpath("//*[@id='root']/div/div/header/div[2]/div/button[2]"));
    LoginPage.LogOut = protractor_1.Target.the('Logout').located(protractor_2.by.xpath("//*[contains(text(),'Logout')]"));
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map