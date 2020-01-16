import { Given, Then, When } from 'cucumber';
import { WithStage, Actor, Duration } from '@serenity-js/core';
import { BrowseTo } from '../../src/screenplay/ui/tasks/BrowseTo';
import { Login } from '../../src/screenplay/ui/tasks/Login';
import { UploadACreative } from '../../src/screenplay/ui/tasks/UploadACreative'
import { CallAnApi } from '@serenity-js/rest';
import { BrowseTheWeb, Click, Hover, Wait, isClickable, isVisible } from '@serenity-js/protractor';
import { protractor } from 'protractor/built/ptor';
import { Get } from '../../src/screenplay/api/endpoints/get';
import { Path } from '../../src/screenplay/cm_variables';
import { AuthenticateApi } from '../../src/screenplay/api/authentication/session_Token';
import { ShareACreative } from '../../src/screenplay/ui/tasks/ShareACreative'
import { LoginPage } from '../../src/screenplay/ui/po/LoginPage';

Given(/(.*) uploads a static creative as an internal user/, function (this: WithStage, actorName: string) {

    var filePath: string = '/home/niyifalade/CM_JS_TEST/src/resources/download.jpeg';

    return this.stage.theActorCalled(actorName).attemptsTo(
        BrowseTo.LoginPage(),
        Login.loginOnCM(process.env.SPANISH_INTERNAL_USERNAME, process.env.SPANISH_INTERNAL_PASSWORD),
        UploadACreative.upload(filePath))
})

Then(/the file is available/, async function (this: WithStage) {

    Actor.named('Stan').whoCan(
        CallAnApi.at(process.env.REST_API),
        BrowseTheWeb.using(protractor.browser)
    );

    return this.stage.theActorInTheSpotlight()
        .attemptsTo(Get.get(Path["getCreatives"].toString(), await AuthenticateApi()))
})


Then(/share the creative with my regional external users/, function (this: WithStage) {
    return this.stage.theActorInTheSpotlight()
        .attemptsTo(
            ShareACreative.assignCreative(),
         //   Hover.over(LoginPage.HoverOnLogin),
         //   Wait.upTo(Duration.ofSeconds(5)).until(LoginPage.loginOut, isVisible()),
            Click.on(LoginPage.JOIN),
            Wait.for(Duration.ofSeconds(39))
        )
})

When(/When I am on the Library Screen of the APP/, function (this: WithStage) {
    return this.stage.theActorInTheSpotlight()
        .attemptsTo()
})