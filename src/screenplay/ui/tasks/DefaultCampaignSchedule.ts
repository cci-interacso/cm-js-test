import { Task } from "@serenity-js/core";
import { Campaigns } from "../po/campaigns";
import { Click, Enter, Hover, ExecuteScript, Target } from "@serenity-js/protractor";
import {Library} from '../po/library'
import { by } from "protractor";
import { creative } from "../../../../features/step_definitions/servicesSteps";

export class DefaultCampaignSchedule implements Task{
    
    static defaultSchedule() : DefaultCampaignSchedule {
        return new DefaultCampaignSchedule();
    }
    
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(Campaigns.DEFAULT_CONTENT),
            Click.on(Campaigns.ADD_CREATIVES),
            Hover.over(Campaigns.SORT_CREATIVES),
            Click.on(Campaigns.ADDED_NEWEST),
            ExecuteScript.async(function (t, callback) {
                t = arguments[0];
                var result = t.click();
                callback(result);
            }).withArguments(Target.the('creative image').located(by.xpath("//*[contains(text(),'"+creative()+".jpeg')]"))),
            Click.on(Campaigns.NEXT_BUTTON),
            Click.on(Campaigns.DONE)

        )
    }
    
}