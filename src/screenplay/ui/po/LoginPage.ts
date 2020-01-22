import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';


export class LoginPage{
    static username = Target.the('username field').located(by.id('okta-signin-username'));
    static password = Target.the('password field').located(by.id('okta-signin-password'));
    static submit = Target.the('submit button').located(by.id('okta-signin-submit'));
   // static HoverOnLogOut = Target.the('login out').located(by.xpath("//button[@class='ant-btn ant-dropdown-trigger ant-btn-default']"));
    static loginOutIcon = Target.the('logoutIcon').located(by.xpath("//*[@id='root']/div/div/header/div[2]/div/button[2]"))
    static LogOut = Target.the('Logout').located(by.xpath("//*[contains(text(),'Logout')]"))
}