import { Given, Then, Before, After } from "cucumber";
import { WithStage, engage, actorInTheSpotlight, Duration } from "@serenity-js/core";
import { SearchForCampaign } from "../../src/screenplay/ui/tasks/SearchForCampaign";
import { DeleteCampaign } from "../../src/screenplay/ui/tasks/DeleteCampaign";
import { campaignName } from "./CreateCampaignSteps";
import { Actors } from "../support/actors";
import { LogOut } from "../../src/screenplay/ui/tasks/LogOut";
import { Wait } from "@serenity-js/protractor";


Then(/he attempts to delete the campaign/, function () {

    return actorInTheSpotlight()
        .attemptsTo(
            //SearchForCampaign.goToCampaigns(campaignName()),
            DeleteCampaign.deleteCampaign()
            )
})