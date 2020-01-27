"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var campaigns_1 = require("../po/campaigns");
var protractor_1 = require("@serenity-js/protractor");
var protractor_2 = require("protractor");
var servicesSteps_1 = require("../../../../features/step_definitions/servicesSteps");
var DefaultCampaignSchedule = /** @class */ (function () {
    function DefaultCampaignSchedule() {
    }
    DefaultCampaignSchedule.defaultSchedule = function () {
        return new DefaultCampaignSchedule();
    };
    DefaultCampaignSchedule.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Click.on(campaigns_1.Campaigns.DEFAULT_CONTENT), protractor_1.Click.on(campaigns_1.Campaigns.ADD_CREATIVES), protractor_1.Hover.over(campaigns_1.Campaigns.SORT_CREATIVES), protractor_1.Click.on(campaigns_1.Campaigns.ADDED_NEWEST), protractor_1.ExecuteScript.async(function (t, callback) {
            t = arguments[0];
            var result = t.click();
            callback(result);
        }).withArguments(protractor_1.Target.the('creative image').located(protractor_2.by.xpath("//*[contains(text(),'" + servicesSteps_1.creative() + ".jpeg')]"))), protractor_1.Click.on(campaigns_1.Campaigns.NEXT_BUTTON), protractor_1.Click.on(campaigns_1.Campaigns.DONE));
    };
    return DefaultCampaignSchedule;
}());
exports.DefaultCampaignSchedule = DefaultCampaignSchedule;
//# sourceMappingURL=DefaultCampaignSchedule.js.map