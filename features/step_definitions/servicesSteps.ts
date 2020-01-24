import { Given, Then, When } from 'cucumber';
import { WithStage, Actor } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';
import { BrowseTheWeb } from '@serenity-js/protractor';
import { protractor } from 'protractor/built/ptor';
import { AuthenticateApi } from '../../src/screenplay/api/authentication/session_Token';
import { Path } from '../../src/screenplay/cm_variables'
import { Get } from '../../src/screenplay/api/endpoints/get'
import { Put } from '../../src/screenplay/api/endpoints/put'
import { CampaignID } from './CreateCampaignSteps'
import { fs } from 'file-system';
import { PostUpload } from '../../src/screenplay/api/endpoints/postUpload';
import { Post } from '../../src/screenplay/api/endpoints/post';

var FormData = require('form-data');
var faker = require('faker');
var path = require('path')

let creativeID: any
let userGroup: any
let campaignID: any
let name: any
var SEVILLE_ID: any
var SPAIN_ID: any
var creativeFileID : any

Given(/(.*) get okta groups/, async function (this: WithStage, actor: string) {

    return Actor.named(actor).whoCan(
        CallAnApi.at(process.env.REST_API),
        BrowseTheWeb.using(protractor.browser))
        .attemptsTo(Get.get(Path.getGroups, await AuthenticateApi(), 200))
})

Then(/extract id for content manager seville/, async function (this: WithStage) {
    var data: any

    CallAnApi.as(this.stage.theActorInTheSpotlight())
        .mapLastResponse(response => data = response.data
        )
    SEVILLE_ID = data[1].id;
    SPAIN_ID = data[2].id
})

Then(/(.*) adds the campaign to a group/, async function (this: WithStage, actor: string) {

    var groups = {
        userGroups: [SPAIN_ID, SEVILLE_ID]
    }

    return Actor.named(actor)
        .whoCan(CallAnApi.at(process.env.REST_API), BrowseTheWeb.using(protractor.browser))
        .attemptsTo(Put.put(Path.campaigns.concat("/" + CampaignID()), groups, await AuthenticateApi(), 200))
})

Then(/(.*) upload a creative/, async function (this: WithStage, actor: string) {

    const fd = new FormData();
    const name = faker.internet.userName();
    const actual = path.resolve(process.cwd(), 'src/resources/test.jpeg');
    const target = path.resolve(process.cwd(), "src/resources/toDeleteContent/" + name + ".jpeg");

    fs.copyFile(actual, target, (err) => {
        if (err) throw err;
    })

    fd.append('file', fs.createReadStream(target));

    const actorPost = Actor.named(actor).whoCan(
        CallAnApi.at(process.env.REST_API), BrowseTheWeb.using(protractor.browser));

    return actorPost.attemptsTo(PostUpload.post(Path.addStaticContent, fd, await AuthenticateApi(), 200));
})

Then(/get creative id/, function (this: WithStage) {
    return CallAnApi.as(this.stage.theActorInTheSpotlight()).mapLastResponse((res) => {
        creativeID = res.data._id;
        creativeFileID = res.data.fileId;
    })
})

Then(/(.*) assign static creative to external group/, async function (this: WithStage, actor: string) {

    var group = {
        userGroups: [SEVILLE_ID, SPAIN_ID]
    }

    return Actor.named(actor)
        .whoCan(CallAnApi.at(process.env.REST_API), BrowseTheWeb.using(protractor.browser))
        .attemptsTo(Put.put(Path.addStaticContent.concat("/" + creativeID), group, await AuthenticateApi(), 200))
})

Then(/(.*) assigns static to default content schedule/, async function (this: WithStage, actor: string) {

    var creative = {
        creativesId: [creativeFileID]
    }

    return Actor.named(actor)
        .whoCan(CallAnApi.at(process.env.REST_API), BrowseTheWeb.using(protractor.browser))
        .attemptsTo(Post.post(Path.addstaticContentToDefaultSchedule.concat(CampaignID()+"/static"), creative, await AuthenticateApi(), 200))
})

When(/he pauses the campaign/, function(this:WithStage){
    
})
