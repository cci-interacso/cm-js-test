import { Task, Duration } from "@serenity-js/core";
import { Hover, Click, Wait } from "@serenity-js/protractor";
import {LoginPage } from './../po/LoginPage'

export class LogOut implements Task {

    static userLogout():LogOut {
        return new LogOut()
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
    
      return  actor.attemptsTo(
            Hover.over(LoginPage.loginOutIcon),
            Wait.for(Duration.ofSeconds(3)),
            Click.on(LoginPage.LogOut)

        )
    }
    
}