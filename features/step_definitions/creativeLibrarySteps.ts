import { Given, Then, When, Before, After } from 'cucumber';
import { WithStage, Actor, Duration, engage, actorInTheSpotlight, actorCalled } from '@serenity-js/core';
import { BrowseTo } from '../../src/screenplay/ui/tasks/BrowseTo';
import { Login } from '../../src/screenplay/ui/tasks/Login';
import { UploadACreative } from '../../src/screenplay/ui/tasks/UploadACreative'
import { CallAnApi } from '@serenity-js/rest';
import { BrowseTheWeb, Click, Hover, Wait, isClickable, isVisible, Text, Target, DoubleClick, Website } from '@serenity-js/protractor';
import { protractor } from 'protractor/built/ptor';
import { Get } from '../../src/screenplay/api/endpoints/get';
import { Path } from '../../src/screenplay/cm_variables';
import { AuthenticateApi } from '../../src/screenplay/api/authentication/session_Token';
import { ShareACreative } from '../../src/screenplay/ui/tasks/ShareACreative'
import { LoginPage } from '../../src/screenplay/ui/po/LoginPage';
import { LibraryHome } from '../../src/screenplay/ui/tasks/Library'
import { Ensure, equals, includes, Check } from '@serenity-js/assertions';
import { Library } from '../../src/screenplay/ui/po/library';
import { CampaignStatus } from '../../src/screenplay/ui/tasks/CampaignStatus'
import { campaignName } from './CreateCampaignSteps';
import { AddCreativeToCampaign } from './../../src/screenplay/ui/tasks/AddCreativeToCampaign'
import { Campaigns } from '../../src/screenplay/ui/po/campaigns';
import { DefaultCampaignSchedule } from './../../src/screenplay/ui/tasks/DefaultCampaignSchedule'
import { creative } from './servicesSteps';
import { by } from 'protractor';
import { Actors } from '../support/actors';
import { LogOut } from '../../src/screenplay/ui/tasks/LogOut';
import { SearchForInventory} from '../../src/screenplay/ui/tasks/SearchForInventory'
var path = require('path')

Given(/(.*) uploads a static creative as an internal user/, function (actorName: string) {

    var filePath: string = path.resolve(process.cwd(), 'src/resources/market.jpeg')

    return actorCalled(actorName).attemptsTo(

        Check.whether(Website.url(), includes("cmanager.cc"))
            .andIfSo(
                LogOut.userLogout(),
                Wait.for(Duration.ofSeconds(3)),
                BrowseTo.LoginPage(),
                // Wait.for(Duration.ofSeconds(3)),
            ).otherwise(
                BrowseTo.LoginPage(),
            ),
        Login.loginOnCM(process.env.SPANISH_INTERNAL_USERNAME, process.env.SPANISH_INTERNAL_PASSWORD),
        UploadACreative.upload(filePath))
})


Then(/the file is available/, async function () {

    return actorCalled('Stan').attemptsTo(Get.get(Path["getCreatives"].toString(), await AuthenticateApi(), 200))
})


Then(/share the creative with my regional external users/, function () {
    return actorInTheSpotlight()
        .attemptsTo(
            ShareACreative.assignCreative(),
        )
})

When(/I am on the (Library|Inventory) Screen of the APP/, function (option: string) {

    switch (option) {
        case 'Library':
            return actorInTheSpotlight()
                .attemptsTo(
                    LibraryHome.goToLibrary(creative().concat(".jpeg"))
                )
        case 'Inventory':
            return actorInTheSpotlight()
                .attemptsTo(
                    SearchForInventory.searchForInventory("TOOTBEC SHELTER1")
                )
    }


})

Then(/only permitted static creatives are displayed/, function () {

    return actorInTheSpotlight().attemptsTo(
        Hover.over(Campaigns.SORT_CREATIVES),
        Wait.for(Duration.ofSeconds(3)),
        Click.on(Campaigns.ADDED_NEWEST),
        Wait.for(Duration.ofSeconds(10)),
        Ensure.that(Text.of(Target.the('static creative').located(by.xpath("//*[contains(text(),'" + creative() + ".jpeg')]"))), equals(creative().concat('.jpeg')))
    )
})

Then(/campaign should have draft status/, function () {

    return actorInTheSpotlight().attemptsTo(
        CampaignStatus.getCampaignStatus(campaignName())
    )
})

When(/add a permitted creative content to my campaign/, function () {
    return actorInTheSpotlight().attemptsTo(
        AddCreativeToCampaign.addCreativeToCampaign(campaignName())
    )
})

Then(/creative content is added to Campaign content schedule/, function () {
    return actorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(Campaigns.STATIC_CREATIVE_ADDED), equals("1 static | 0 dynamic"))
    )
})


Then(/I have selected default content schedule/, function () {
    return actorInTheSpotlight().attemptsTo(
        DefaultCampaignSchedule.defaultSchedule()

    )
})


Then(/permitted creative is successfully added to the default content schedule/, function () {
    return actorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(Campaigns.STATIC_CREATIVE_ADDED_DEFAULT_SCHEDULE), equals("1 static | 0 dynamic"))


    )
})

