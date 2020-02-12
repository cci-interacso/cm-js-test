import { WithStage, actorCalled, Question, actorInTheSpotlight, See, Duration } from "@serenity-js/core";
import { Given, When } from 'cucumber';
import { BrowseTo } from '../../src/screenplay/ui/tasks/BrowseTo'
import { Login } from '../../src/screenplay/ui/tasks/Login'
import { Website, BrowseTheWeb, Browser, Wait } from "@serenity-js/protractor";
import { expect } from "../../src/expect";
import { toASCII } from "punycode";
import { equals, Ensure, includes, Check } from "@serenity-js/assertions";
import { LogOut } from "../../src/screenplay/ui/tasks/LogOut";



Given(/(.*) is an internal user in the Spanish Group/, async function (this: WithStage, actorName: string) {

    return actorCalled(actorName).attemptsTo(

        Check.whether(Website.url(), includes("cmanager.cc"))
            .andIfSo(
                LogOut.userLogout(),
                BrowseTo.LoginPage(),
                Wait.for(Duration.ofSeconds(3)),
            ).otherwise(
                BrowseTo.LoginPage(),
            ),
        Login.loginOnCM(process.env.SPANISH_INTERNAL_USERNAME, process.env.SPANISH_INTERNAL_PASSWORD)
    )
});

Given(/(.*) is an external user in the Spanish Region/, async function (this: WithStage, actorName: string) {
    const url: string = await BrowseTheWeb.as(actorCalled(actorName)).getCurrentUrl()
    if (url.includes("cmanager.cc")) {
        return actorInTheSpotlight().attemptsTo(
            LogOut.userLogout(),
            Wait.for(Duration.ofSeconds(3)),
            BrowseTo.LoginPage(),
            Login.loginOnCM(process.env.SPANISH_EXTERNAL_USERNAME, process.env.SPANISH_EXTERNAL_PASSWORD)
        )
    } else {
        return actorCalled(actorName).attemptsTo(
            BrowseTo.LoginPage(),
            Login.loginOnCM(process.env.SPANISH_EXTERNAL_USERNAME, process.env.SPANISH_EXTERNAL_PASSWORD)
        )
    }
})

When(/(.*) from (.*) logs on to content manager app/, function(actorName:string, country:string) {

    switch(country) {
        case "Sweden":

            return actorCalled(actorName).attemptsTo(

                Check.whether(Website.url(), includes("cmanager.cc"))
                    .andIfSo(
                        LogOut.userLogout(),
                        BrowseTo.LoginPage(),
                        Wait.for(Duration.ofSeconds(3)),
                    ).otherwise(
                        BrowseTo.LoginPage(),
                    ),
                Login.loginOnCM(process.env.SWEDISH_INTERNAL_USERNAME, process.env.SWEDISH_PASSWORD)
            )

    }

})






