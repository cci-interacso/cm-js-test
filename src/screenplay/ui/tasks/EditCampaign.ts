import { Task } from "@serenity-js/core";
import { Campaigns } from "../po/campaigns";
import { Click, Hover } from "@serenity-js/protractor";

export class EditCampaign implements Task {
    
    static editCampaign(): EditCampaign{
        return new EditCampaign()
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
            Hover.over(Campaigns.BUTTON_CONTAINER),
            Click.on(Campaigns.EDIT_CAMPAIGN),
        )
    }

}
