import { Task, Duration } from "@serenity-js/core";
import { Click } from "@serenity-js/protractor";
import { Campaigns } from "../po/campaigns";


export class ClickOnNewCampaign implements Task {

    static clickOnNewButton(): ClickOnNewCampaign {
        return new ClickOnNewCampaign()
    }


    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(Campaigns.NEW_CAMPAIGN_BUTTON))
    }

}
