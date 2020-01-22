import { Task } from "@serenity-js/core";
import { Hover, Click } from "@serenity-js/protractor";
import {LoginPage } from './../po/LoginPage'

export class LogOut implements Task {

    static userLogout():LogOut {
        return new LogOut()
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
    
      return  actor.attemptsTo(
            Hover.over(LoginPage.loginOutIcon),
            Click.on(LoginPage.LogOut)

        )
    }
    
}