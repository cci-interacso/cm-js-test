import { Given, Then } from "cucumber";
import { WithStage } from "@serenity-js/core";
import { SearchForCampaign } from "../../src/screenplay/ui/tasks/SearchForCampaign";
import { DeleteCampaign } from "../../src/screenplay/ui/tasks/DeleteCampaign";
import { campaignName } from "./CreateCampaignSteps";




Then(/he attempts to delete the campaign/, function (this: WithStage) {

    return this.stage.theActorInTheSpotlight()
        .attemptsTo(SearchForCampaign.goToCampaigns(campaignName()),
            DeleteCampaign.deleteCampaign()
            )
})