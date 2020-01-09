import { Task, See } from "@serenity-js/core";
import { Send, PostRequest, LastResponse, GetRequest } from "@serenity-js/rest";
import { Ensure, equals } from "@serenity-js/assertions";

export class Get implements Task {

    constructor(private path: string, private token: string, private status: string, private campaignID: any) {

    }
    static get(path: string, token: string, status?: string, campaignID?: any): Get {
        return new Get(path, token, status, campaignID)
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {

        return actor.attemptsTo(
            Send.a(GetRequest.to(this.path + '/' + this.campaignID).using({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '.concat(this.token)
                },
                timeout: 5000,

            })),
            Ensure.that(LastResponse.status(), equals(200)))
    }

}