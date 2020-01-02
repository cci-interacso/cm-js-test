import { Given, Then } from "cucumber";
import { WithStage, Actor } from "@serenity-js/core";
import { CallAnApi, Send, PostRequest } from "@serenity-js/rest";
import { BrowseTheWeb } from "@serenity-js/protractor";
import { protractor } from "protractor/built/ptor";
import { okTa } from "../support/oktaRequest";
import { token } from "../support/sessionToken";
import { Debug } from "../support/debugger";
import Axios from "axios";
require('dotenv').config();

let Bob: any
let obj_sessionToken: any

Given(/user is (.*) an external user/, function (this: WithStage, actorName: string) {

    Bob = Actor.named(actorName).whoCan(
        CallAnApi.at(process.env.OKTA),
        BrowseTheWeb.using(protractor.browser)
    );
    return Bob.attemptsTo(
        Send.a(PostRequest
            .to('/api/v1/authn').with(JSON.stringify(okTa)).using({
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
            })),
    )
});

Then(/extract the session token from response/, function (this: WithStage) {

    CallAnApi.as(this.stage.theActorInTheSpotlight()).mapLastResponse(response => {
        let obj = (JSON.parse(JSON.stringify(response.data)));
        obj_sessionToken = obj.sessionToken;
    })
})

Then(/get access token/, function (this: WithStage) {

    return this.stage.theActorInTheSpotlight().attemptsTo(
        token.getToken(Bob, obj_sessionToken),
    ).catch(function (err) {
        let token :string = err.cause.request._currentUrl;
        let token1 :string[]  = token.split('access_token=');
        let token2 :string[] = token1[1].split('&');
        let token3:string = token2[0];

        console.log(token3);
    })
})

Then(/Output/, function (this: WithStage) {


    CallAnApi.as(Bob).mapLastResponse(response => {
     //   console.log(response.request)

    })

})
