import { Task } from "@serenity-js/core";
import { Send, PostRequest, LastResponse, PutRequest } from "@serenity-js/rest";
import { Ensure, equals } from "@serenity-js/assertions";
export class Put implements Task {

    constructor(private path: string, private body:
        any, private token: string, private statusCode:number) {
    }

    static put(path: string, body: any, token: string, statusCode: number): Put {
        return new Put(path, body, token, statusCode);
    }


    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {

        return actor.attemptsTo(
            Send.a(PutRequest.to(this.path)
                .using({
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Token '.concat(this.token)
                    },
                    data: this.body,
                    timeout: 5000
                })),
            Ensure.that(LastResponse.status(), equals(this.statusCode))
        )
    }

}