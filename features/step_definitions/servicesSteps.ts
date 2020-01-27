import { Given, Then, When, Before } from 'cucumber';
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
import { Patch } from '../../src/screenplay/api/endpoints/patch'
import { campaignRequest } from '../../src/screenplay/api/endpoints/requests/CampaignRequest';
import { Actors } from '../support/actors';
import { engage, actorCalled, actorInTheSpotlight } from '@serenity-js/core';

var FormData = require('form-data');
var faker = require('faker');
var path = require('path')

let creativeID: any
let userGroup: any
let campaignID: any
let name: any
var SEVILLE_ID: any
var SPAIN_ID: any
var creativeFileID: any
var contentScheduleID: any
var screens: any
var contentSchedule: any
var templateID: any
var creativeName: string

Before(() => {
    engage(new Actors())
});

Given(/(.*) get okta groups/, async function (actor: string) {

    return actorCalled(actor).whoCan(
        CallAnApi.at(process.env.REST_API),
        BrowseTheWeb.using(protractor.browser))
        .attemptsTo(Get.get(Path.getGroups, await AuthenticateApi(), 200))
})

Then(/extract id for content manager seville/, async function () {
    var data: any

    CallAnApi.as(actorInTheSpotlight())
        .mapLastResponse(response => data = response.data
        )
    SEVILLE_ID = data[1].id;
    SPAIN_ID = data[2].id
})

Then(/(.*) adds the campaign to a group/, async function (actor: string) {

    var groups = {
        userGroups: [SPAIN_ID, SEVILLE_ID]
    }

    return actorCalled(actor)
        .whoCan(CallAnApi.at(process.env.REST_API), BrowseTheWeb.using(protractor.browser))
        .attemptsTo(Put.put(Path.campaigns.concat("/" + CampaignID()), groups, await AuthenticateApi(), 200))
})

Then(/(.*) upload a creative/, async function (actor: string) {

    const fd = new FormData();
    creativeName = faker.name.firstName();
    const actual = path.resolve(process.cwd(), 'src/resources/test.jpeg');
    const target = path.resolve(process.cwd(), "src/resources/toDeleteContent/" + creativeName + ".jpeg");


    try {
        fs.copyFile(actual, target, (err) => {
            // if (err) throw err;
        })
    } catch (err) {
        console.log(err)
    }

    fd.append('file', fs.createReadStream(target));

    return actorCalled(actor)
        .attemptsTo(PostUpload.post(Path.addStaticContent, fd, await AuthenticateApi(), 200));
})

Then(/get creative id/, function () {
    return CallAnApi.as(actorInTheSpotlight()).mapLastResponse((res) => {
        creativeID = res.data._id;
        creativeFileID = res.data.fileId;
    })
})

Then(/(.*) assign static creative to external group/, async function (actor: string) {

    var group = {
        userGroups: [SEVILLE_ID, SPAIN_ID]
    }

    return actorCalled(actor)
        .attemptsTo(Put.put(Path.addStaticContent.concat("/" + creativeID), group, await AuthenticateApi(), 200))
})

Then(/(.*) assigns static to (default|content) schedule/, async function (actor: string, option: string) {

    var creative = {
        creativesId: [creativeFileID]
    }

    switch (option) {
        case 'default':
            return actorCalled(actor)
                .attemptsTo(Post.post(Path.addstaticContentToDefaultSchedule.concat(CampaignID() + "/static"), creative, await AuthenticateApi(), 200))
        case 'content':
            return actorCalled(actor)
                .attemptsTo(Post.post(Path.addstaticContentToDefaultSchedule.concat(CampaignID() + Path.schedules + contentScheduleID + "/static"), creative, await AuthenticateApi(), 200))
    }
})


When(/he (pauses|scheduled) the campaign/, async function (option: string) {

    switch (option) {
        case 'pauses':
            var status = { status: 2 }
            return actorInTheSpotlight().attemptsTo(
                Patch.patch(Path.campaigns.concat("/" + CampaignID() + "/status"), status, await AuthenticateApi(), 200))
        case 'scheduled':
            var status = { status: 3 }
            return actorInTheSpotlight().attemptsTo(
                Patch.patch(Path.campaigns.concat("/" + CampaignID() + "/status"), status, await AuthenticateApi(), 200))
    }

})

Then(/(.*) gets content manager screens/, async function (actor: string) {

    return actorCalled(actor)
        .attemptsTo(Get.get(Path.screens, await AuthenticateApi(), 200))
})

Then(/get screen id/, function () {

    CallAnApi.as(actorInTheSpotlight())
        .mapLastResponse(response => {
            screens = response.data.docs.filter(getI)
        })

    function getI(v) {
        return v.name === "TOOTBEC SHELTER1";
    }
})


Then(/(.*) edits campaign schedule/, async function (actor: string) {

    const editScheduleRequest = {
        screens: [],
        name: 'name'
    }

    return actorCalled(actor)
        .attemptsTo(Put.put(Path.campaigns.concat("/" + CampaignID() + Path.schedules), editScheduleRequest, await AuthenticateApi(), 200))

})

Then(/(.*) post the schedules for the campaign/, async function (actor: string) {

    return actorCalled(actor)
        .attemptsTo(Post.post(Path.campaigns.concat("/" + CampaignID() + Path.schedules), "", await AuthenticateApi(), 201))

})

Then(/(.*) get content schedule/, async function (actor: string) {

    return actorCalled(actor)
        .attemptsTo(Get.get(Path.campaigns.concat("/" + CampaignID() + Path.schedules), await AuthenticateApi(), 200))
})

Then(/get content schedule id/, function () {

    CallAnApi.as(actorInTheSpotlight())
        .mapLastResponse(response => {
            contentScheduleID = response.data._id
            contentSchedule = response.data;
        })
})

Then(/add players to schedule/, async function () {
    var screensRequest = {
        dynamicContent: [],
        screens: [screens[0]._id],
        screensGroups: [],
        name: 'All week'
    }

    return actorInTheSpotlight()
        .attemptsTo(Put.put(Path.campaigns.concat("/" + CampaignID() + Path.schedules + contentScheduleID), screensRequest, await AuthenticateApi(), 200))
})


Then(/add a template/, async function () {

    var template = {
        name: 'templateX',
        schedules: [{
            weekDays: contentSchedule.docs[0].weekDays,
            startTime: '00:00:00',
            endTime: "23:59:59",
            visibility: true,
            screens: [contentSchedule.docs[0].screens[0]],
            screensGroups: [],
            name: 'name',
            fromDate: contentSchedule.docs[0].fromDate,
            toDate: contentSchedule.docs[0].toDate,
            priority: 1,
            index: 1
        }]

    }

    return actorInTheSpotlight()
        .attemptsTo(Post.post(Path.templates, template, await AuthenticateApi(), 201))
})

Then(/get template id/, function () {

    return CallAnApi.as(actorInTheSpotlight())
        .mapLastResponse(response => {
            templateID = response.data._id
            //  console.log(response.data)
        })
})

Then(/create a campaign from template id/, async function () {

    return actorInTheSpotlight()
        .attemptsTo(Post.post(Path.getCampaigns.concat(Path.template + templateID), campaignRequest, await AuthenticateApi(), 201))

})

Then(/(.*) get the template using templateID/, async function (actor: string) {

    return actorCalled(actor)
        .attemptsTo(Get.get(Path.template.concat(templateID), await AuthenticateApi(), 200))

})

Then(/campaign is successfully deleted/, async function () {

    return actorInTheSpotlight()
        .attemptsTo(Get.get(Path.getCampaigns.concat("/" + CampaignID()), await AuthenticateApi(), 404))
})


export function creative() {
    return creativeName

}