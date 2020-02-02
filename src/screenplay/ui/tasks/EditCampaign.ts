import { Task, Duration } from "@serenity-js/core";
import { Campaigns } from "../po/campaigns";
import { Click, Hover, Wait } from "@serenity-js/protractor";

export class EditCampaign implements Task {
    
    static editCampaign(): EditCampaign{
        return new EditCampaign()
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
            Wait.for(Duration.ofSeconds(3)),
            Hover.over(Campaigns.BUTTON_CONTAINER),
            Click.on(Campaigns.EDIT_CAMPAIGN),
        )
    }

}
