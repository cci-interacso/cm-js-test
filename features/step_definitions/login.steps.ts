import { WithStage, actorCalled, Question, actorInTheSpotlight, See } from "@serenity-js/core";
import { Given } from 'cucumber';
import { BrowseTo } from '../../src/screenplay/ui/tasks/BrowseTo'
import { Login } from '../../src/screenplay/ui/tasks/Login'
import { Website, BrowseTheWeb, Browser } from "@serenity-js/protractor";
import { expect } from "../../src/expect";
import { toASCII } from "punycode";
import { equals } from "@serenity-js/assertions";



Given(/(.*) is an internal user in the Spanish Group/, function (this: WithStage, actorName: string) {


    return actorCalled(actorName).attemptsTo(
        BrowseTo.LoginPage(),
        Login.loginOnCM(process.env.SPANISH_INTERNAL_USERNAME,process.env.SPANISH_INTERNAL_PASSWORD),
    )
});

Given(/(.*) is an external user in the Spanish Region/, function(this:WithStage, actorName: string){

    Website.url()
    return actorCalled(actorName).attemptsTo(
        BrowseTo.LoginPage(),
        Login.loginOnCM(process.env.SPANISH_EXTERNAL_USERNAME,process.env.SPANISH_EXTERNAL_PASSWORD)
    )
})




