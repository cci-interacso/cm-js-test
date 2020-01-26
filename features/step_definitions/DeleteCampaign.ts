import { Given, Then, Before } from "cucumber";
import { WithStage, engage, actorInTheSpotlight } from "@serenity-js/core";
import { SearchForCampaign } from "../../src/screenplay/ui/tasks/SearchForCampaign";
import { DeleteCampaign } from "../../src/screenplay/ui/tasks/DeleteCampaign";
import { campaignName } from "./CreateCampaignSteps";
import { Actors } from "../support/actors";

Before(() => {
    engage(new Actors())
});


Then(/he attempts to delete the campaign/, function () {

    return actorInTheSpotlight()
        .attemptsTo(SearchForCampaign.goToCampaigns(campaignName()),
            DeleteCampaign.deleteCampaign()
            )
})