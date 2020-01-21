import { Given, Then, When } from 'cucumber';
import { WithStage, Actor, See, Duration } from '@serenity-js/core';
import { CallAnApi, LastResponse } from '@serenity-js/rest';
import { PostUpload } from '../../src/screenplay/api/endpoints/postUpload'
import { campaignRequest } from '../../src/screenplay/api/endpoints/requests/CampaignRequest'
import { BrowseTheWeb, Wait, isClickable } from '@serenity-js/protractor';
import { protractor } from 'protractor/built/ptor';
import { AuthenticateApi } from '../../src/screenplay/api/authentication/session_Token';
import { campaignPath, Path, Status } from '../../src/screenplay/cm_variables'
import { Get } from '../../src/screenplay/api/endpoints/get'
import { expect } from '../../src/expect';
import { CreateANewCampaign } from '../../src/screenplay/ui/tasks/CreateANewCampaign'
import { Campaigns } from '../../src/screenplay/ui/po/campaigns';
import { stringify } from 'querystring';
import Axios from 'axios';
import { format } from 'path';
import { Put } from '../../src/screenplay/api/endpoints/put'
import { Post } from '../../src/screenplay/api/endpoints/post'
import { SearchForCampaign } from './../../src/screenplay/ui/tasks/SearchForCampaign'

let creativeID: any
let userGroup: any
let campaignID: any
let name: any
const waitTimeInMillseconds = Duration.ofMilliseconds(5000);

Given(/there is a new campaign/, async function (this: WithStage) {

    Actor.named('Apisit').whoCan(
        CallAnApi.at(process.env.REST_API),
        BrowseTheWeb.using(protractor.browser)
    );

    return this.stage.theActorInTheSpotlight().attemptsTo(
        Post.post(campaignPath.CAMPAIGNS, campaignRequest, await AuthenticateApi(), 201)
    )
})

Then(/get campaign id from the response/, function () {

    return CallAnApi.as(this.stage.theActorInTheSpotlight())
        .mapLastResponse(response => {
            campaignID = response.data._id;
            name = response.data.name
        }
        )
})

Then(/Output/, function (this: WithStage) {

    CallAnApi.as(this.stage.theActorInTheSpotlight())
        .mapLastResponse(response => console.log(response))
})

Then(/the campaign has a status of (draft|paused|ongoing)/, async function (this: WithStage, status: string) {

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

    return this.stage.theActorInTheSpotlight()
        .attemptsTo(Get.get(Path.getCampaigns.concat('?userGroupsDetail=false'), await AuthenticateApi(), 200))
    //        See.if(LastResponse.body(), actual => expect(actual).to.have.property('status', campaign_status)))
})


Given(/is on the Create campaign page/, function (this: WithStage) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        Wait.upTo(waitTimeInMillseconds).until(Campaigns.NEW_CAMPAIGN_BUTTON, isClickable())
    )

})

When(/he enters/, function (this: WithStage, table:any) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        CreateANewCampaign.enterNewCampaignData()
    )

})

Then(/the campaign is successfully created/, async function (this: WithStage) {
    return this.stage.theActorInTheSpotlight()
        .whoCan(CallAnApi.at(process.env.REST_API))
        .attemptsTo(
            Get.getCampaigns(campaignPath.GET_CAMPAIGNS.concat('?&limit=1&userGroupsDetail=false'), await AuthenticateApi(), 200),
            See.if(LastResponse.body(), Actual => expect(Actual)
                .to.have.deep.property('docs.[0].name', CreateANewCampaign.getEntries())
            ))
})

Then(/search for a campaign/, function(this:WithStage){
    return this.stage.theActorInTheSpotlight().attemptsTo(
        SearchForCampaign.goToCampaigns("Schinner LLC")
    )
})


export function CampaignID(): string {
    return campaignID
}

export function campaignName(): string {
    return name;
}










