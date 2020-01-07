
import { Task } from "@serenity-js/core";
import { Send, PostRequest, LastResponse } from "@serenity-js/rest";
import { Ensure, equals } from "@serenity-js/assertions";
export class Post implements Task {

    constructor(private path: string, private body:
        any, private token: string) {
    }

    static post(path: string, body: any, token: string): Post {
        return new Post(path, body, token);
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       
        return actor.attemptsTo(
            Send.a(PostRequest.to(this.path)
                .using({
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':'Token '.concat(this.token)
                    },
                    data:this.body,
                    timeout:5000
                })
            ), Ensure.that(LastResponse.status(), equals(201))
        )    
    }
}