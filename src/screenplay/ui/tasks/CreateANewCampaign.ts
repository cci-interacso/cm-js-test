import { Task } from "@serenity-js/core";
import { Click, Enter } from "@serenity-js/protractor";
import { Campaigns } from "../po/campaigns";
var faker = require('faker');

const campaignName:string = faker.company.companyName()

export class CreateANewCampaign implements Task {

    static enterNewCampaignData() : CreateANewCampaign { 
        return new(CreateANewCampaign)
    }

    static getEntries(){
        return campaignName
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
             Click.on(Campaigns.NEW_CAMPAIGN_BUTTON),
             Enter.theValue(campaignName).into(Campaigns.CAMPAIGN_NAME),
             Enter.theValue(faker.random.number()).into(Campaigns.CAMPAIGN_ID),
             Click.on(Campaigns.DATE_PICKER),
             Click.on(Campaigns.FROM_DATE),
             Click.on(Campaigns.TO_DATE),
             Click.on(Campaigns.SUBMIT_CAMPAIGN)
       )
    }
    
}