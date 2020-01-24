"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
var campaigns_1 = require("./../po/campaigns");
var library_1 = require("./../po/library");
var AddCreativeToCampaign = /** @class */ (function () {
    function AddCreativeToCampaign(campaignName) {
        this.campaignName = campaignName;
    }
    AddCreativeToCampaign.addCreativeToCampaign = function (campaignName) {
        return new AddCreativeToCampaign(campaignName);
    };
    AddCreativeToCampaign.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Hover.over(campaigns_1.Campaigns.BUTTON_CONTAINER), protractor_1.Click.on(campaigns_1.Campaigns.EDIT_CAMPAIGN), protractor_1.Click.on(campaigns_1.Campaigns.ADD_NEW_SCHEDULE), protractor_1.Wait.upTo(core_1.Duration.ofSeconds(5)).until(campaigns_1.Campaigns.ADD_CREATIVES, protractor_1.isClickable()), protractor_1.Click.on(campaigns_1.Campaigns.ADD_CREATIVES), protractor_1.ExecuteScript.async(function (t, callback) {
            t = arguments[0];
            var result = t.click();
            callback(result);
        }).withArguments(library_1.Library.CREATIVE_IMAGE), protractor_1.Click.on(campaigns_1.Campaigns.NEXT_BUTTON), protractor_1.Click.on(campaigns_1.Campaigns.DONE));
    };
    return AddCreativeToCampaign;
}());
exports.AddCreativeToCampaign = AddCreativeToCampaign;
//# sourceMappingURL=AddCreativeToCampaign.js.map