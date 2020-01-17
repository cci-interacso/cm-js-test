import { Given, Then, When } from 'cucumber';
import { WithStage, Actor, See, Duration } from '@serenity-js/core';
import { CallAnApi, LastResponse } from '@serenity-js/rest';
import { Post } from '../../src/screenplay/api/endpoints/post'
import { campaignRequest } from '../../src/screenplay/api/endpoints/requests/CampaignRequest'
import { BrowseTheWeb, Wait, isClickable } from '@serenity-js/protractor';
import { protractor } from 'protractor/built/ptor';
import { AuthenticateApi } from '../../src/screenplay/api/authentication/session_Token';
import { campaignPath, campaignStatus, Path } from '../../src/screenplay/cm_variables'
import { Get } from '../../src/screenplay/api/endpoints/get'
import { expect } from '../../src/expect';
import { CreateANewCampaign } from '../../src/screenplay/ui/tasks/CreateANewCampaign'
import { Campaigns } from '../../src/screenplay/ui/po/campaigns';
import { fs } from 'file-system';
import { stringify } from 'querystring';
import Axios from 'axios';
import { format } from 'path';
var FormData = require('form-data');
import { Put } from '../../src/screenplay/api/endpoints/put'

let creativeID: any
let userGroup : any




const waitTimeInMillseconds = Duration.ofMilliseconds(5000);

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
    var campaignID

    CallAnApi.as(this.stage.theActorInTheSpotlight())
        .mapLastResponse(response => campaignID = response.data._id
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
        .attemptsTo(Get.get(campaignPath.GET_CAMPAIGNS, await AuthenticateApi()),
            See.if(LastResponse.body(), actual => expect(actual).to.have.property('status', campaign_status)))
})


Given(/is on the Create campaign page/, function (this: WithStage) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        Wait.upTo(waitTimeInMillseconds).until(Campaigns.NEW_CAMPAIGN_BUTTON, isClickable())
    )

})

When(/he enters/, function (this: WithStage) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        CreateANewCampaign.enterNewCampaignData()
    )

})

Then(/the campaign is successfully created/, async function (this: WithStage) {
    return this.stage.theActorInTheSpotlight()
        .whoCan(CallAnApi.at(process.env.REST_API))
        .attemptsTo(
            Get.getCampaigns(campaignPath.GET_CAMPAIGNS.concat('?&limit=1&userGroupsDetail=false'), await AuthenticateApi()),
            See.if(LastResponse.body(), Actual => expect(Actual)
                .to.have.deep.property('docs.[0].name', CreateANewCampaign.getEntries())
            ))


})

Given(/(.*) get groups/, async function (this: WithStage, actor: string) {

    return Actor.named(actor).whoCan(
        CallAnApi.at(process.env.REST_API),
        BrowseTheWeb.using(protractor.browser))
        .attemptsTo(Get.get(Path.getGroups, await AuthenticateApi()))
})

Then(/extract id for content manager seville/, async function (this: WithStage) {
    var data: any
    CallAnApi.as(this.stage.theActorInTheSpotlight())
        .mapLastResponse(response => data = response.data)

    data[1].id
})


Then(/(.*) upload a creative/, async function (this: WithStage, actor: string) {

    const fd = new FormData();
    fd.append('file', fs.createReadStream('/home/niyifalade/CM_JS_TEST/src/resources/market.jpeg'));

    const actorPost = Actor.named(actor).whoCan(
        CallAnApi.at(process.env.REST_API), BrowseTheWeb.using(protractor.browser));

    return actorPost.attemptsTo(Post.post(Path.addStaticContent, fd, await AuthenticateApi()));
})

Then(/get creative id/, function (this: WithStage) {
    return CallAnApi.as(this.stage.theActorInTheSpotlight()).mapLastResponse((res) => {
        creativeID = res.data._id;
        userGroup = res.data.userGroups[0];
    })

})

Then(/(.*) assign static creative to external group/, async function (this: WithStage, actor: string) {

    var group = {
        userGroups :[ userGroup,'00g243c8wt1xlYnxD357'
        ]
    }
  
    return Actor.named(actor)
        .whoCan(CallAnApi.at(process.env.REST_API), BrowseTheWeb.using(protractor.browser))
        .attemptsTo(Put.put(Path.addStaticContent.concat("/" + creativeID), group, await AuthenticateApi(),200))
})








