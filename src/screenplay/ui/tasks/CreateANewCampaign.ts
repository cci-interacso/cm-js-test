import { Task, Duration } from "@serenity-js/core";
import { Click, Enter, Wait, isClickable, ExecuteScript, Clear, Text } from "@serenity-js/protractor";
import { Campaigns } from "../po/campaigns";
import { callbackify } from "util";
import { TextData } from "@serenity-js/core/lib/model";
import { expect } from "../../../expect";
var faker = require('faker');

const campaignName: string = faker.random.word()

export class CreateANewCampaign implements Task {

    static enterNewCampaignData(): CreateANewCampaign {
        return new (CreateANewCampaign)
    }

    static getEntries() {
        return campaignName
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {

        
            return actor.attemptsTo(
                Enter.theValue(campaignName).into(Campaigns.CAMPAIGN_NAME),
                Enter.theValue(faker.random.number()).into(Campaigns.CAMPAIGN_ID),
                Click.on(Campaigns.DATE_PICKER),
                Click.on(Campaigns.FROM_DATE),
                Click.on(Campaigns.TO_DATE),
                Wait.upTo(Duration.ofSeconds(5)).until(Campaigns.SUBMIT_CAMPAIGN, isClickable()),

                ExecuteScript.async(function (element, callback) {
                    element = arguments[0];
                    var res = element.click();
                    callback(res)

                }).withArguments(Campaigns.SUBMIT_CAMPAIGN),
            )
    }

}
    