import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';


export class LoginPage{
    static username = Target.the('username field').located(by.id('okta-signin-username'));
    static password = Target.the('password field').located(by.id('okta-signin-password'));
    static submit = Target.the('submit button').located(by.id('okta-signin-submit'));
    static loginOutIcon = Target.the('logoutIcon').located(by.xpath("//*[@id='root']/div/div/header/div[2]/div/button[2]/i"))
    static LogOut = Target.the('Logout').located(by.xpath("//*[contains(text(),'Logout')]"))
}


//*[@id="root"]/div/div/header/div[2]/div/button[2]/i