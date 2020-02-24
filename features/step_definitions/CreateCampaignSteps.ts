import { Given, Then, When } from 'cucumber';
import { See, Duration, actorInTheSpotlight, actorCalled } from '@serenity-js/core';
import { CallAnApi, LastResponse } from '@serenity-js/rest';
import { campaignRequestAlreadyStarted, campaignRequestFutureDate, campaignRequestEndDateInthePast } from '../../src/screenplay/api/endpoints/requests/CampaignRequest'
import { Wait, isClickable, Text, Website, isVisible } from '@serenity-js/protractor';
import { AuthenticateApi } from '../../src/screenplay/api/authentication/session_Token';
import { campaignPath, Path, Status } from '../../src/screenplay/cm_variables'
import { Get } from '../../src/screenplay/api/endpoints/get'
import { expect } from '../../src/expect';
import { CreateANewCampaign } from '../../src/screenplay/ui/tasks/CreateANewCampaign'
import { Campaigns } from '../../src/screenplay/ui/po/campaigns';
import { Post } from '../../src/screenplay/api/endpoints/post'
import { SearchForCampaign } from './../../src/screenplay/ui/tasks/SearchForCampaign'
import { LogOut } from './../../src/screenplay/ui/tasks/LogOut'
import { EditCampaign } from '../../src/screenplay/ui/tasks/EditCampaign'
import { ClickOnNewCampaign } from './../../src/screenplay/ui/tasks/ClickOnNewCampaign'
import { EditTheCampaign } from './../../src/screenplay/ui/tasks/EditIcon'
import { EditContentSchedule } from './../../src/screenplay/ui/tasks/EditContentSchedule'
import { EditDefaultSchedule } from './../../src/screenplay/ui/tasks/EditDefaultSchedule'
import { Ensure, equals, not, and } from '@serenity-js/assertions';
import { AssignCampaign } from  './../../src/screenplay/ui/tasks/AssignCampaign'

var date = require('date-and-time')

let campaignID: any
let name: any
const waitTimeInMillseconds = Duration.ofMilliseconds(15000);

var faker = require('faker');
const now = new Date();
const next_month = date.addMonths(now, 1);

Given(/(.*) has a new campaign (starting today|already started|with a future date|with an end date in the past)/, async (actor: string, option: string) => {

    var  campaignRequest1 = {
        name: faker.random.word()+faker.random.number(),
        fromDate: date.format(now, 'YYYY-MM-DD'),
        toDate: date.format(next_month, 'YYYY-MM-DD')
    }
    
   
    actorCalled(actor)

    switch (option) {
        case 'starting today':
            return actorInTheSpotlight().attemptsTo(
                Post.post(Path.getCampaigns, campaignRequest1, await AuthenticateApi(), 201))
        case 'already started':
            return actorInTheSpotlight().attemptsTo(
                Post.post(Path.getCampaigns, campaignRequestAlreadyStarted, await AuthenticateApi(), 201))
        case 'with a future date':
            return actorInTheSpotlight().attemptsTo(
                Post.post(Path.getCampaigns, campaignRequestFutureDate, await AuthenticateApi(), 201))
        case 'with an end date in the past':
            return actorInTheSpotlight().attemptsTo(
                Post.post(Path.getCampaigns, campaignRequestEndDateInthePast, await AuthenticateApi(), 201))
    }
})

Given(/(.*) from (.*) has created a campaign/, async function (user: string, country: string) {

    var campaignRequest1 = {
        name: faker.random.word(),
        fromDate: date.format(now, 'YYYY-MM-DD'),
        toDate: date.format(next_month, 'YYYY-MM-DD')
    }

    switch (country) {
        case "Spain":
            return actorCalled(user).attemptsTo(
                Post.post(Path.getCampaigns, campaignRequest1, await AuthenticateApi(), 201))
    }
})

Then(/(.*) get campaign id from the response/, (actor: string) => {

    return CallAnApi.as(actorCalled(actor))
        .mapLastResponse(response => {

            campaignID = response.data._id;
            name = response.data.name
        })
})

export function getCampaignName(): string {
    return name
}

Then(/Output/, function () {

    CallAnApi.as(actorInTheSpotlight())
        .mapLastResponse(response => console.log(response.data))
})

Then(/the campaign has a status of (draft|paused|ongoing|scheduled|completed)/, async function (status: string) {

    var campaign_status: number;

    switch (status) {
        case "draft":
            campaign_status = Status.DRAFT;
            break;
        case "paused":
            campaign_status = Status.PAUSED;
            break;
        case "ongoing":
            campaign_status = Status.ONGOING;
            break;
        case "scheduled":
            campaign_status = Status.ONGOING;
            break;
        case "completed":
            campaign_status = Status.ONGOING;
            break;

    }

    return actorInTheSpotlight()
        .attemptsTo(Get.get(Path.getCampaigns.concat('?userGroupsDetail=true&limit=1'), await AuthenticateApi(), 200),
            See.if(LastResponse.body(), Actual => expect(Actual)
                .to.have.deep.property('docs.[0].status', campaign_status)
            ))
})


Given(/(.*) is on the Create campaign page/, function (actor: string) {

    return actorCalled(actor).attemptsTo(
        Wait.upTo(waitTimeInMillseconds).until(Campaigns.NEW_CAMPAIGN_BUTTON, isClickable())
    )

})

When(/he enters/, function (options: string) {

    return actorInTheSpotlight().attemptsTo(
        ClickOnNewCampaign.clickOnNewButton(),
        CreateANewCampaign.enterNewCampaignData()
    )

})

Then(/the campaign is successfully (?:created|edited)/, async function () {

    var res: any
    CallAnApi.as(actorInTheSpotlight())
        .mapLastResponse(response => {
            res = response.data
        })

    var expected = res.docs.filter(function (e) {
        return e.name === CreateANewCampaign.getEntries()
    })

    return actorInTheSpotlight()
        .attemptsTo(
            See.if(expected, Actual => expect(Actual)
                .to.have.deep.property('[0].name', CreateANewCampaign.getEntries())
            ))
})

When(/(.*) makes a get campaign call/, async function (actor: string) {
    return actorInTheSpotlight()
        .attemptsTo(Get.getCampaigns(campaignPath.GET_CAMPAIGNS.concat('?&limit=10&userGroupsDetail=false'), await AuthenticateApi(), 200))
})

Then(/search for a campaign/, function () {
    return actorInTheSpotlight().attemptsTo(
        SearchForCampaign.goToCampaigns(campaignName()),
    )
})

Then(/(.*) assigns campaign to external group/, function(actor:string){
    return actorCalled(actor).attemptsTo(
        AssignCampaign.assignCampaign()
    )
})

Then(/graphical icon is displayed against the shared campaign/, function(){
    return actorInTheSpotlight().attemptsTo(
       Ensure.that(Campaigns.SHARED_ICON, isVisible())

    )
})

Then(/(.*) is unable to view the (campaign|creative|screen)/, function (actor: string, option: string) {

    switch (option) {
        case 'campaign':
            return actorCalled(actor).attemptsTo(
                Ensure.that(Campaigns.EMPTY_LIST, isVisible())
            )
        case 'creative':
            return actorCalled(actor).attemptsTo(
                Ensure.that(Text.of(Campaigns.EMPTY_LIST), equals('You don’t have any creatives yet')))
        case 'campaign':
            return actorCalled(actor).attemptsTo(
                Ensure.that(Campaigns.EMPTY_LIST, isVisible())
            )

    }

})

Then(/edit the campaign/, function () {
    return actorInTheSpotlight().attemptsTo(
        EditCampaign.editCampaign()
    )
})

Then(/(.*) edits the campaign/, function (actor: string) {

    return actorCalled(actor).attemptsTo(EditTheCampaign.editCampaignUsingTheEditIcon())
})

Then(/edit the (content|default) schedule/, function (option: string) {

    switch (option) {
        case 'content':
            return actorInTheSpotlight().attemptsTo(EditContentSchedule.editContentSchedule());
        case 'default':
            return actorInTheSpotlight().attemptsTo(EditDefaultSchedule.editDefaultSchedule());
    }


})

Then(/I can edit the campaign/, function () {
    return actorInTheSpotlight().attemptsTo(
        CreateANewCampaign.enterNewCampaignData()
    )

})

Then(/Logout/, function () {

    return actorInTheSpotlight().attemptsTo(
        LogOut.userLogout(),
        Wait.for(Duration.ofSeconds(3))
    )

})


export function CampaignID(): string {
    return campaignID
}

export function campaignName(): string {
    return name;
}










