"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
var campaigns_1 = require("./../po/campaigns");
var protractor_2 = require("protractor");
var servicesSteps_1 = require("../../../../features/step_definitions/servicesSteps");
var AddCreativeToCampaign = /** @class */ (function () {
    function AddCreativeToCampaign(campaignName) {
        this.campaignName = campaignName;
    }
    AddCreativeToCampaign.addCreativeToCampaign = function (campaignName) {
        return new AddCreativeToCampaign(campaignName);
    };
    AddCreativeToCampaign.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Hover.over(campaigns_1.Campaigns.BUTTON_CONTAINER), protractor_1.Wait.upTo(core_1.Duration.ofSeconds(3)).until(campaigns_1.Campaigns.EDIT_CAMPAIGN, protractor_1.isClickable()), protractor_1.Click.on(campaigns_1.Campaigns.EDIT_CAMPAIGN), protractor_1.Click.on(campaigns_1.Campaigns.ADD_NEW_SCHEDULE), protractor_1.Wait.upTo(core_1.Duration.ofSeconds(5)).until(campaigns_1.Campaigns.ADD_CREATIVES, protractor_1.isClickable()), protractor_1.Click.on(campaigns_1.Campaigns.ADD_CREATIVES), protractor_1.Hover.over(campaigns_1.Campaigns.SORT_CREATIVES), protractor_1.Click.on(campaigns_1.Campaigns.ADDED_NEWEST), protractor_1.ExecuteScript.async(function (t, callback) {
            t = arguments[0];
            var result = t.click();
            callback(result);
        }).withArguments(protractor_1.Target.the('creative image').located(protractor_2.by.xpath("//*[contains(text(),'" + servicesSteps_1.creative() + ".jpeg')]"))), protractor_1.Click.on(campaigns_1.Campaigns.NEXT_BUTTON), protractor_1.Click.on(campaigns_1.Campaigns.DONE));
    };
    return AddCreativeToCampaign;
}());
exports.AddCreativeToCampaign = AddCreativeToCampaign;
//# sourceMappingURL=AddCreativeToCampaign.js.map