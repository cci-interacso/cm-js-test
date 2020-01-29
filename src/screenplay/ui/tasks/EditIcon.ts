import { Task, Duration } from "@serenity-js/core";
import { Campaigns } from "../po/campaigns";
import { Click, Wait, isClickable, Hover } from "@serenity-js/protractor";



export class EditTheCampaign implements Task {
    
    static editCampaignUsingTheEditIcon(): EditTheCampaign {
        return new EditTheCampaign();
    }
    
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {

        return actor.attemptsTo(
            Hover.over(Campaigns.EDIT_ICON),
            Click.on(Campaigns.EDIT_ICON)
        )
    }

}