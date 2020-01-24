"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var campaigns_1 = require("../po/campaigns");
var protractor_1 = require("@serenity-js/protractor");
var SearchForCampaign = /** @class */ (function () {
    function SearchForCampaign(campaignName) {
        this.campaignName = campaignName;
    }
    SearchForCampaign.goToCampaigns = function (campaignName) {
        return new SearchForCampaign(campaignName);
    };
    SearchForCampaign.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Click.on(campaigns_1.Campaigns.CAMPAIGNS), protractor_1.Enter.theValue(this.campaignName).into(campaigns_1.Campaigns.SEARCH_BY_NAME), protractor_1.Hover.over(campaigns_1.Campaigns.BUTTON_CONTAINER), protractor_1.Click.on(campaigns_1.Campaigns.EDIT_CAMPAIGN));
    };
    return SearchForCampaign;
}());
exports.SearchForCampaign = SearchForCampaign;
//# sourceMappingURL=SearchForCampaign.js.map