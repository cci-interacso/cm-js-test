import { WithStage, engage, actorCalled } from "@serenity-js/core";
import { Given, Before } from 'cucumber';
import { BrowseTo } from '../../src/screenplay/ui/tasks/BrowseTo'
import { Login } from '../../src/screenplay/ui/tasks/Login'
import { Actors } from "../support/actors";

Before(() => {
    engage(new Actors())
});


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




