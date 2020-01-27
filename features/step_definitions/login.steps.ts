import { WithStage, engage, actorCalled, actorInTheSpotlight, Duration } from "@serenity-js/core";
import { Given, Before, After } from 'cucumber';
import { BrowseTo } from '../../src/screenplay/ui/tasks/BrowseTo'
import { Login } from '../../src/screenplay/ui/tasks/Login'
import { Actors } from "../support/actors";
import { expect } from "../../src/expect";
import { Website, Wait } from "@serenity-js/protractor";
import { LogOut } from "../../src/screenplay/ui/tasks/LogOut";



Given(/(.*) is an internal user in the Spanish Group/, function (this: WithStage, actorName: string) {

    return actorCalled(actorName).attemptsTo(
        BrowseTo.LoginPage(),
        Login.loginOnCM(process.env.SPANISH_INTERNAL_USERNAME,process.env.SPANISH_INTERNAL_PASSWORD),
    )
});

Given(/(.*) is an external user in the Spanish Region/, function(this:WithStage, actorName: string){
    return actorCalled(actorName).attemptsTo(
        BrowseTo.LoginPage(),
        Login.loginOnCM(process.env.SPANISH_EXTERNAL_USERNAME,process.env.SPANISH_EXTERNAL_PASSWORD)
    )
})




