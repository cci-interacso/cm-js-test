import { Task } from "@serenity-js/core";
import { Campaigns } from "../po/campaigns";
import { Click, Enter, Hover } from "@serenity-js/protractor";


export class SearchForCampaign implements Task {

    constructor(private campaignName:string){

    }

    static goToCampaigns(campaignName:string): SearchForCampaign{
        return new SearchForCampaign(campaignName)
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
            Click.on(Campaigns.CAMPAIGNS),
            Enter.theValue(this.campaignName).into(Campaigns.SEARCH_BY_NAME)
        )
    }

}