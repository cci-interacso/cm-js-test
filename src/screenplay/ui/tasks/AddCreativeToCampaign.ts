import { PerformsActivities, Task, Duration } from "@serenity-js/core";
import { Click, Enter, Wait, isVisible, isClickable, Hover, DoubleClick, ExecuteScript, Target } from "@serenity-js/protractor";
import { Campaigns } from './../po/campaigns'
import { Library } from './../po/library'
import { by } from "protractor";
import { creative } from "../../../../features/step_definitions/servicesSteps";


export class AddCreativeToCampaign implements Task {

    constructor(private campaignName: string) {

    }

    static addCreativeToCampaign(campaignName: string): AddCreativeToCampaign {
        return new AddCreativeToCampaign(campaignName)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {

        return actor.attemptsTo(
            Hover.over(Campaigns.BUTTON_CONTAINER),
            Wait.upTo(Duration.ofSeconds(3)).until(Campaigns.EDIT_CAMPAIGN, isClickable()),
            Click.on(Campaigns.EDIT_CAMPAIGN),
            Click.on(Campaigns.ADD_NEW_SCHEDULE),
            Wait.upTo(Duration.ofSeconds(5)).until(Campaigns.ADD_CREATIVES, isClickable()),
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