import { Given, Then, When } from 'cucumber';
import { CallAnApi, LastResponse, Send, PostRequest } from '@serenity-js/rest';
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
import { actorCalled, actorInTheSpotlight, See } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { expect } from '../../src/expect';
import { campaignNewResponse } from './../../features/step_definitions/CreateCampaignSteps';

var FormData = require('form-data');
var faker = require('faker');
var path = require('path')
var date = require('date-and-time');

const now = new Date();

const today = date.format(now, 'YYYY-MM-DD');


let creativeID: any
var SEVILLE_ID: any
var SPAIN_ID: any
var contentScheduleID: any
var screens: any
var contentSchedule: any
var templateID: any

Given(/(.*) get okta groups/, async function (actor: string) {

    return actorCalled(actor).attemptsTo(Get.get(Path.getGroups, await AuthenticateApi(), 200))
})

Then(/extract id for content manager seville/, async function () {
    var data: any

    CallAnApi.as(actorInTheSpotlight())
        .mapLastResponse(response => data = response.data
        )
    SEVILLE_ID = data[0].id;
    SPAIN_ID = data[1].id
})

Then(/(.*) adds the campaign to a group/, async function (actor: string) {

    var groups = {
        userGroups: [SPAIN_ID, SEVILLE_ID],
        name: campaignNewResponse().name,
        fromDate: campaignNewResponse().fromDate,
        toDate: campaignNewResponse().toDate,
        campaignId:  campaignNewResponse().campaignId
        
    }

    return actorCalled(actor)
        .attemptsTo(Put.put(Path.campaigns.concat("/" + CampaignID()), groups, await AuthenticateApi(), 200))
})

Then(/(.*) upload a creative/, async function (actor: string) {

    const fd = new FormData();
    const actual = path.resolve(process.cwd(), 'src/resources/test.jpeg');

    fd.append('file', fs.createReadStream(actual));


    return actorCalled(actor)
        .attemptsTo(PostUpload.post(Path.addStaticContent, fd, await AuthenticateApi(), 200));
})

When(/(.*) attempts to upload this (.*)/, async function (actor: string, file: string) {

    const fd = new FormData();
    const actual = path.resolve(process.cwd(), 'src/resources/' + file);

    fd.append('file', fs.createReadStream(actual));

    return actorCalled(actor).attemptsTo(

        Send.a(PostRequest.to(Path.addStaticContent)
            .using({
                headers: {
                    'Content-Type': fd.getHeaders()['content-type'],
                    'Authorization': 'Token '.concat(await AuthenticateApi()),
                },
                data: fd,
                timeout: 5000
            })
        ),

    )


})

Then(/(.*) upload is (not successful|successful)/, function (actor: string, option:string) {

    switch(option){
        case 'not successful':
            return actorCalled(actor).attemptsTo(
                Ensure.that(LastResponse.status(), equals(415))
            )
        case 'successful' :
            return actorCalled(actor).attemptsTo(
                Ensure.that(LastResponse.status(), equals(200))
            )    

    }

    return actorCalled(actor).attemptsTo(
        Ensure.that(LastResponse.status(), equals(200))
    )
})

Then(/get creative id/, function () {
    return CallAnApi.as(actorInTheSpotlight()).mapLastResponse((res) => {
        creativeID = res.data._id;
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
        creativesId: [creativeID]
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


When(/he set the campaign status to (pauses|ongoing|scheduled|completed)/, async function (option: string) {

    switch (option) {
        case 'scheduled':
            var status = { status: 3 }
            return actorInTheSpotlight().attemptsTo(
                Patch.patch(Path.campaigns.concat("/" + CampaignID() + "/status"), status, await AuthenticateApi(), 200))
        case 'pauses':
            var status = { status: 2 }
            return actorInTheSpotlight().attemptsTo(
                Patch.patch(Path.campaigns.concat("/" + CampaignID() + "/status"), status, await AuthenticateApi(), 200))
        case 'ongoing':
            var status = { status: 3 }
            return actorInTheSpotlight().attemptsTo(
                Patch.patch(Path.campaigns.concat("/" + CampaignID() + "/status"), status, await AuthenticateApi(), 200))
        case 'completed':
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

Then(/(.*) get (content|default) schedule/, async function (actor: string) {

    return actorCalled(actor)
        .attemptsTo(Get.get(Path.campaigns.concat("/" + CampaignID() + Path.schedules), await AuthenticateApi(), 200))
})

Then(/content schedule is updated/, function () {

    return actorInTheSpotlight()
        .attemptsTo(
            See.if(LastResponse.body(), Actual => expect(Actual).to.have.deep.property('docs.[0].startTime', '01:03:00')),
            See.if(LastResponse.body(), Actual => expect(Actual).to.have.deep.property('docs.[0].name', 'ScheduleEdited')),
            See.if(LastResponse.body(), Actual => expect(Actual).to.have.deep.property('docs.[0].fromDate', today)),
            See.if(LastResponse.body(), Actual => expect(Actual).to.have.deep.property('docs.[0].toDate', today)
            ))
})

Then(/schedule is updated with permitted player/, function () {
    return actorInTheSpotlight()
        .attemptsTo(
            See.if(LastResponse.body(), Actual => expect(Actual).to.have.deep.property('docs.[0].screens[0].name', 'TOOTBEC SHELTER1')),
        )
})

Then(/get content schedule id/, function () {

    return CallAnApi.as(actorInTheSpotlight())
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
            screens: [contentSchedule.docs[0].screens[0]._id],
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

Then(/campaign is successfully deleted/, async function () {

    return actorInTheSpotlight()
        .attemptsTo(Get.get(Path.getCampaigns.concat("/" + CampaignID()), await AuthenticateApi(), 404))
})



Then(/add seville group to screen/, async function () {

    var addGrouptoScreenRequest = {
        userGroups: [SPAIN_ID, SEVILLE_ID]
    }
    return actorInTheSpotlight()
        .attemptsTo(
            Put.put(Path.screen.concat(screens[0]._id), addGrouptoScreenRequest, await AuthenticateApi(), 200)
        )
})


export function creative() {
    return "test"

}