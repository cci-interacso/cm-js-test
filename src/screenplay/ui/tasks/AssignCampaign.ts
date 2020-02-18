import { Task } from "@serenity-js/core";
import { Click, Hover, isVisible } from "@serenity-js/protractor";
import { Inventory } from "../po/Inventory";
import { Ensure } from "@serenity-js/assertions";


export class AssignCampaign implements Task {

    static assignCampaign():AssignCampaign {
        return new AssignCampaign();
    }
    
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
           Hover.over(Inventory.ASSIGN_USERGROUP),
           Click.on(Inventory.ASSIGN_USERGROUP),
           Ensure.that(Inventory.ASSIGN_TO_SEVILLE, isVisible()),
           Click.on(Inventory.ASSIGN_TO_SEVILLE),
           Click.on(Inventory.ASSIGN)
       )
    }
}