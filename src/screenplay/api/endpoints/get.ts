import { Task } from "@serenity-js/core";
import { Send, LastResponse, GetRequest } from "@serenity-js/rest";
import { Ensure, equals } from "@serenity-js/assertions";

export class Get implements Task {

    constructor(private path: string, private token: string, private statusCode : number) {

    }
    static get(path: string, token: string, statusCode:number): Get {
        return new Get(path, token, statusCode)
    }

    static getCampaigns(path: string, token: string,statuscode:number): Get {
        return new Get(path, token,statuscode);
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Send.a(GetRequest.to(this.path).using({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer'.concat(" "+this.token)
                },
                timeout: 5000,
                responseType : 'json'
            
            })),
            Ensure.that(LastResponse.status(), equals(this.statusCode)))
    }

}