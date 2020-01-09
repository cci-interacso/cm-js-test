import { Given, Then } from 'cucumber';
import { WithStage, Actor, See } from '@serenity-js/core';
import { CallAnApi, LastResponse } from '@serenity-js/rest';
import { Post } from './../../src/screenplay/Api/endpoints/post'
import { campaignRequest } from '../../src/screenplay/Api/endpoints/requests/CampaignRequest'
import { BrowseTheWeb } from '@serenity-js/protractor';
import { protractor } from 'protractor/built/ptor';
import { AuthenticateApi } from '../../src/screenplay/Api/authentication/session_Token';
import { campaignPath, campaignStatus } from '../../src/screenplay/cm_variables'
import { Get } from './../../src/screenplay/Api/endpoints/get'
import { expect } from '../../src/expect';

var campaignID: any;

Given(/there is a new campaign/, async function (this: WithStage) {

    Actor.named('Apisit').whoCan(
        CallAnApi.at(process.env.REST_API),
        BrowseTheWeb.using(protractor.browser)
    );

    return this.stage.theActorInTheSpotlight().attemptsTo(
        Post.post(campaignPath.CAMPAIGNS, campaignRequest, await AuthenticateApi())
    )
})

Then(/get campaign id from the response/, function () {

    CallAnApi.as(this.stage.theActorInTheSpotlight())
        .mapLastResponse(response => campaignID = response.data._id
        )
})

Then(/Output/, function t(this: WithStage) {

    CallAnApi.as(this.stage.theActorInTheSpotlight())
        .mapLastResponse(response => console.log(response))
})

Then(/the campaign has a status of (draft|paused|ongoing)/, async function (this: WithStage, status: string) {

    var campaign_status: number;

    switch (status) {
        case "draft":
            campaign_status = campaignStatus.DRAFT;
            break;
        case "paused":
            campaign_status = campaignStatus.PAUSED;
            break;
        case "ongoing":
            campaign_status = campaignStatus.ONGOING;
            break;
    }

    return this.stage.theActorInTheSpotlight()
        .attemptsTo(Get.get(campaignPath.GET_CAMPAIGNS, await AuthenticateApi(), status, campaignID),
            See.if(LastResponse.body(), actual => expect(actual).to.have.property('status', campaign_status)))
})

