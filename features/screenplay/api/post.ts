import { Interaction, UsesAbilities, AnswersQuestions, Task, PerformsActivities } from "@serenity-js/core";
import { CallAnApi, LastResponse } from "@serenity-js/rest";
import { AxiosResponse, AxiosRequestConfig, Method } from "axios";
import { Ensure, equals } from "@serenity-js/assertions";
import { isEqualTo } from "tiny-types";

export class Post implements Task {
    
    static resourse = (resource: AxiosRequestConfig) => new Post(resource);
    
    
    performAs(actor: PerformsActivities & UsesAbilities): PromiseLike<any> {

        return null

        
    }

    constructor(private resource: AxiosRequestConfig) {
    }

    toString = () => `{0} execute a GET on resource ${this.resource}`;

    
}