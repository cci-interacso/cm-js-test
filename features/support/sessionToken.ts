import { Interaction, Task, UsesAbilities, Actor } from "@serenity-js/core";
import { CallAnApi, Send, GetRequest, LastResponse } from "@serenity-js/rest";
import { Ensure, equals } from "@serenity-js/assertions";
import { request } from "http";
import { Actors } from "../screenplay/actors";
import Axios, { AxiosRequestConfig } from "axios";
import { Debug } from "./debugger";

export class token implements Task {

    constructor(private actor: UsesAbilities, private sessionToken:any) {
        this.actor = actor;
        this.sessionToken = sessionToken;
    }

    static getToken(actor: UsesAbilities, sessionToken : any): token {
        return new token(actor,sessionToken);
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<any> {

     const tokenSessionRequest : AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 500000
                        }

        return actor.attemptsTo(
              Send.a(GetRequest.to("/oauth2/default/v1/authorize/?state=state&client_id=0oag0a89cwNhcrOtc356&redirect_uri=http://localhost:43127/implicit/callback&response_type=id_token%20token&response_mode=fragment&scope=openid%20email%20profile%20groups&nonce=nonce&sessionToken="+this.sessionToken)
                .using(tokenSessionRequest))
                        )   
    }
}