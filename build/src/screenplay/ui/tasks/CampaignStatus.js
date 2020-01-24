"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("@serenity-js/protractor");
var campaigns_1 = require("./../po/campaigns");
var assertions_1 = require("@serenity-js/assertions");
var CampaignStatus = /** @class */ (function () {
    function CampaignStatus(campaignName) {
        this.campaignName = campaignName;
    }
    CampaignStatus.getCampaignStatus = function (campaignName) {
        return new CampaignStatus(campaignName);
    };
    CampaignStatus.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Enter.theValue(this.campaignName).into(campaigns_1.Campaigns.SEARCH_BY_NAME), assertions_1.Ensure.that(protractor_1.Text.of(campaigns_1.Campaigns.CAMPAIGN_STATUS), assertions_1.equals('DRAFT')));
    };
    return CampaignStatus;
}());
exports.CampaignStatus = CampaignStatus;
//# sourceMappingURL=CampaignStatus.js.map