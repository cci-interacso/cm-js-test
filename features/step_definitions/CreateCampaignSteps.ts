import { Given, Then, When, Before } from 'cucumber';
import { See, Duration, engage, actorInTheSpotlight, actorCalled } from '@serenity-js/core';
import { CallAnApi, LastResponse } from '@serenity-js/rest';
import { campaignRequest, campaignRequestAlreadyStarted, campaignRequestFutureDate } from '../../src/screenplay/api/endpoints/requests/CampaignRequest'
import { BrowseTheWeb, Wait, isClickable } from '@serenity-js/protractor';
import { protractor } from 'protractor/built/ptor';
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
import { Actors } from '../support/actors';

let campaignID: any
let name: any
const waitTimeInMillseconds = Duration.ofMilliseconds(15000);

Before(() => {
    engage(new Actors())
});

Given(/there is a new campaign (starting today|already started|with a future date)/, async (option: string) => {


    actorCalled('Apisit')

    switch (option) {
        case 'starting today':
            return actorInTheSpotlight().attemptsTo(
                Post.post(Path.getCampaigns, campaignRequest, await AuthenticateApi(), 201))
        case 'already started':
            return actorInTheSpotlight().attemptsTo(
                Post.post(Path.getCampaigns, campaignRequestAlreadyStarted, await AuthenticateApi(), 201))
        case 'with a future date':
            return actorInTheSpotlight().attemptsTo(
                Post.post(Path.getCampaigns, campaignRequestFutureDate, await AuthenticateApi(), 201))
    }
})

Then(/get campaign id from the response/, () => {

   return CallAnApi.as(actorInTheSpotlight())
        .mapLastResponse(response => {

            campaignID = response.data._id;
            name = response.data.name
        })
    })

Then(/Output/, function () {

    CallAnApi.as(actorInTheSpotlight())
        .mapLastResponse(response => console.log(response.data))
})

Then(/the campaign has a status of (draft|paused|ongoing)/, async function (status: string) {

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
    }

    return actorInTheSpotlight()
        .attemptsTo(Get.get(Path.getCampaigns.concat('?userGroupsDetail=false&limit=1'), await AuthenticateApi(), 200),
            See.if(LastResponse.body(), Actual => expect(Actual)
                .to.have.deep.property('docs.[0].status', campaign_status)
            ))
})


Given(/is on the Create campaign page/, function () {
    return actorInTheSpotlight().attemptsTo(
        Wait.upTo(waitTimeInMillseconds).until(Campaigns.NEW_CAMPAIGN_BUTTON, isClickable())
    )

})

When(/he enters/, function () {
    return actorInTheSpotlight().attemptsTo(
        CreateANewCampaign.enterNewCampaignData()
    )

})

Then(/the campaign is successfully created/, async function () {
    return actorInTheSpotlight()
        .whoCan(CallAnApi.at(process.env.REST_API))
        .attemptsTo(
            Get.getCampaigns(campaignPath.GET_CAMPAIGNS.concat('?&limit=1&userGroupsDetail=false'), await AuthenticateApi(), 200),
            See.if(LastResponse.body(), Actual => expect(Actual)
                .to.have.deep.property('docs.[0].name', CreateANewCampaign.getEntries())
            ))
})

Then(/search for a campaign/, function () {
    return actorInTheSpotlight().attemptsTo(
        SearchForCampaign.goToCampaigns("Schinner LLC"),
        EditCampaign.editCampaign()
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










