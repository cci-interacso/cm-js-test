import { Task } from "@serenity-js/core";
import { Send, LastResponse, GetRequest, PatchRequest } from "@serenity-js/rest";
import { Ensure, equals } from "@serenity-js/assertions";

export class Patch implements Task {

    constructor(private path: any, private data: any, private statusCode: any) {
    }

    static patch(path: any, data: any, statusCode: any): Patch {
       
        return new Patch(path, data, statusCode);
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       
        return actor.attemptsTo(
            Send.a(PatchRequest.to(this.path).with(this.data)),
            Ensure.that(LastResponse.status(), equals(this.statusCode)),
        )
    }

}