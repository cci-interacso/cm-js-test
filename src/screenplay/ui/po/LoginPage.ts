import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';


export class LoginPage{
    static username = Target.the('username field').located(by.id('okta-signin-username'));
    static password = Target.the('password field').located(by.id('okta-signin-password'));
    static submit = Target.the('submit button').located(by.id('okta-signin-submit'));
    static HoverOnLogin = Target.the('login out').located(by.xpath("//button[@class='ant-btn ant-dropdown-trigger ant-btn-default']"));
    static loginOut = Target.the('logout').located(by.css('body > div:nth-child(7) > div > div > ul > li'))
    static JOIN = Target.the('label').of(LoginPage.HoverOnLogin).located(by.css('body > div:nth-child(7) > div > div > ul > li'))
}