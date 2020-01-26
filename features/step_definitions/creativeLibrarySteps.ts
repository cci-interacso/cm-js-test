import { Given, Then, When } from 'cucumber';
import { WithStage, Actor, Duration } from '@serenity-js/core';
import { BrowseTo } from '../../src/screenplay/ui/tasks/BrowseTo';
import { Login } from '../../src/screenplay/ui/tasks/Login';
import { UploadACreative } from '../../src/screenplay/ui/tasks/UploadACreative'
import { CallAnApi } from '@serenity-js/rest';
import { BrowseTheWeb, Click, Hover, Wait, isClickable, isVisible, Text, Target } from '@serenity-js/protractor';
import { protractor } from 'protractor/built/ptor';
import { Get } from '../../src/screenplay/api/endpoints/get';
import { Path } from '../../src/screenplay/cm_variables';
import { AuthenticateApi } from '../../src/screenplay/api/authentication/session_Token';
import { ShareACreative } from '../../src/screenplay/ui/tasks/ShareACreative'
import { LoginPage } from '../../src/screenplay/ui/po/LoginPage';
import { LibraryHome } from '../../src/screenplay/ui/tasks/Library'
import { Ensure, equals } from '@serenity-js/assertions';
import { Library } from '../../src/screenplay/ui/po/library';
import { CampaignStatus } from '../../src/screenplay/ui/tasks/CampaignStatus'
import { campaignName } from './CreateCampaignSteps';
import { AddCreativeToCampaign } from './../../src/screenplay/ui/tasks/AddCreativeToCampaign'
import { Campaigns } from '../../src/screenplay/ui/po/campaigns';
import { DefaultCampaignSchedule } from './../../src/screenplay/ui/tasks/DefaultCampaignSchedule'
import { creative } from './servicesSteps';
import { by } from 'protractor';
var path = require('path')



Given(/(.*) uploads a static creative as an internal user/, function (this: WithStage, actorName: string) {

    var filePath: string = path.resolve(process.cwd(), 'src/resources/market.jpeg')

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
        .attemptsTo(Get.get(Path["getCreatives"].toString(), await AuthenticateApi(), 200))
})


Then(/share the creative with my regional external users/, function (this: WithStage) {
    return this.stage.theActorInTheSpotlight()
        .attemptsTo(
            ShareACreative.assignCreative(),
        )
})

When(/I am on the Library Screen of the APP/, function (this: WithStage) {

    return this.stage.theActorInTheSpotlight()
        .attemptsTo(
            LibraryHome.goToLibrary(creative().concat(".jpeg"))
        )
})

Then(/only permitted static creatives are displayed/, function (this: WithStage) {

    return this.stage.theActorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(Target.the('static creative').located(by.xpath("//*[contains(text(),'"+creative()+".jpeg')]"))), equals(creative().concat('.jpeg')))
    )
})

Then(/campaign should have draft status/, function (this: WithStage) {

    return this.stage.theActorInTheSpotlight().attemptsTo(
        CampaignStatus.getCampaignStatus(campaignName())
    )
})

When(/add a permitted creative content to my campaign/, function (this: WithStage) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        AddCreativeToCampaign.addCreativeToCampaign(campaignName())
    )
})

Then(/creative content is added to Campaign content schedule/, function (this: WithStage) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(Campaigns.STATIC_CREATIVE_ADDED), equals("1 static | 0 dynamic"))
    )
})


Then(/I have selected default content schedule/, function (this: WithStage) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        DefaultCampaignSchedule.defaultSchedule()

    )
})


Then(/permitted creative is successfully added to the default content schedule/, function (this: WithStage) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(Campaigns.STATIC_CREATIVE_ADDED_DEFAULT_SCHEDULE), equals("1 static | 0 dynamic"))


    )
})

