import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';


export class LoginPage{
    static username = Target.the('username field').located(by.id('okta-signin-username'));r
    static password = Target.the('password field').located(by.id('okta-signin-password'));
    static submit = Target.the('submit button').located(by.id('okta-signin-submit'));
}