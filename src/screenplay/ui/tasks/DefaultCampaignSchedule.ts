import { Task } from "@serenity-js/core";
import { Campaigns } from "../po/campaigns";
import { Click, Enter, Hover } from "@serenity-js/protractor";
import {Library} from '../po/library'

export class DefaultCampaignSchedule implements Task{
    
    
    
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(Campaigns.DEFAULT_CONTENT),
            Click.on(Campaigns.ADD_CREATIVES),

        )
    }
    
}