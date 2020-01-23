import { Task } from "@serenity-js/core";
import { Campaigns } from "../po/campaigns";
import { Click, Enter, Hover, ExecuteScript } from "@serenity-js/protractor";
import {Library} from '../po/library'

export class DefaultCampaignSchedule implements Task{
    
    static defaultSchedule() : DefaultCampaignSchedule {
        return new DefaultCampaignSchedule();
    }
    
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(Campaigns.DEFAULT_CONTENT),
            Click.on(Campaigns.ADD_CREATIVES),
            ExecuteScript.async(function (t, callback) {
                t = arguments[0];
                var result = t.click();
                callback(result);
            }).withArguments(Library.CREATIVE_IMAGE),
            Click.on(Campaigns.NEXT_BUTTON),
            Click.on(Campaigns.DONE)

        )
    }
    
}