import { Task } from "@serenity-js/core";
import { Click, Enter, Text } from "@serenity-js/protractor";
import { Campaigns } from './../po/campaigns'
import { Ensure, equals } from "@serenity-js/assertions";
export class CampaignStatus implements Task {

    constructor(private campaignName:string) {
    }

    static getCampaignStatus(campaignName:string):CampaignStatus {
        return new CampaignStatus(campaignName)
    }
    
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
           Enter.theValue(this.campaignName).into(Campaigns.SEARCH_BY_NAME),
           Ensure.that(Text.of(Campaigns.CAMPAIGN_STATUS),equals('DRAFT'))
       )
    }

}