import { Task } from "@serenity-js/core";
import { Campaigns } from "../po/campaigns";
import { Click, Hover } from "@serenity-js/protractor";

export class DeleteCampaign implements Task {
    
    static deleteCampaign(): DeleteCampaign{
        return new DeleteCampaign()
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
            Hover.over(Campaigns.BUTTON_CONTAINER),
            Click.on(Campaigns.DELETE_CAMPAIGN),
            Click.on(Campaigns.DELETE_CAMPAIGN_YES)
        )
    }

}
