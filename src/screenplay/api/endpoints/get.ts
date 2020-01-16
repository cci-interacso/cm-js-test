import { Task } from "@serenity-js/core";
import { Send, LastResponse, GetRequest } from "@serenity-js/rest";
import { Ensure, equals } from "@serenity-js/assertions";

export class Get implements Task {

    constructor(private path: string, private token: string) {

    }
    static get(path: string, token: string): Get {
        return new Get(path, token)
    }

    static getCampaigns(path: string, token: string): Get {
        return new Get(path, token);
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Send.a(GetRequest.to(this.path).using({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '.concat(this.token)
                },
                timeout: 5000,
                responseType : 'json'
            
            })),
            Ensure.that(LastResponse.status(), equals(200)))
    }

}