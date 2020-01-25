"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var SearchForCampaign_1 = require("../../src/screenplay/ui/tasks/SearchForCampaign");
var DeleteCampaign_1 = require("../../src/screenplay/ui/tasks/DeleteCampaign");
var CreateCampaignSteps_1 = require("./CreateCampaignSteps");
cucumber_1.Then(/he attempts to delete the campaign/, function () {
    return this.stage.theActorInTheSpotlight()
        .attemptsTo(SearchForCampaign_1.SearchForCampaign.goToCampaigns(CreateCampaignSteps_1.campaignName()), DeleteCampaign_1.DeleteCampaign.deleteCampaign());
});
//# sourceMappingURL=DeleteCampaign.js.map