
import { Task } from "@serenity-js/core";
import { Send, PostRequest, LastResponse } from "@serenity-js/rest";
import { Ensure, equals } from "@serenity-js/assertions";
export class Post implements Task {

    constructor(private path: string, private body:
        any, private token: string, private statusCode: number) {
    }

    static post(path: string, body: any, token: string, statusCode:number): Post {
        return new Post(path, body, token, statusCode);
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       
        return actor.attemptsTo(
            Send.a(PostRequest.to(this.path)
                .using({
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':'Bearer '.concat(this.token),
                    },
                    data:this.body,
                    timeout:10000
                })
            ), 
            Ensure.that(LastResponse.status(), equals(this.statusCode))
        )    
    }
}

//1d85adc0b36932d6c9cea079ce3d4d12979ebe58