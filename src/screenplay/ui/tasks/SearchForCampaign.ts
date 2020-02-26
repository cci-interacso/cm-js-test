import { Task, Duration } from "@serenity-js/core";
import { Campaigns } from "../po/campaigns";
import { Click, Enter, Hover, Wait } from "@serenity-js/protractor";


export class SearchForCampaign implements Task {

    constructor(private campaignName:string){

    }

    static goToCampaigns(campaignName:string): SearchForCampaign{
        return new SearchForCampaign(campaignName)
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
            Click.on(Campaigns.CAMPAIGNS),
            Wait.for(Duration.ofSeconds(5)),
            Enter.theValue(this.campaignName).into(Campaigns.SEARCH_BY_NAME)
        )
    }

}