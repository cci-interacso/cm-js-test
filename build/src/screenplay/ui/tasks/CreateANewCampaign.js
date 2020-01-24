"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
var campaigns_1 = require("../po/campaigns");
var faker = require('faker');
var campaignName = faker.company.companyName();
var CreateANewCampaign = /** @class */ (function () {
    function CreateANewCampaign() {
    }
    CreateANewCampaign.enterNewCampaignData = function () {
        return new (CreateANewCampaign);
    };
    CreateANewCampaign.getEntries = function () {
        return campaignName;
    };
    CreateANewCampaign.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Click.on(campaigns_1.Campaigns.NEW_CAMPAIGN_BUTTON), protractor_1.Enter.theValue(campaignName).into(campaigns_1.Campaigns.CAMPAIGN_NAME), protractor_1.Enter.theValue(faker.random.number()).into(campaigns_1.Campaigns.CAMPAIGN_ID), protractor_1.Click.on(campaigns_1.Campaigns.DATE_PICKER), protractor_1.Click.on(campaigns_1.Campaigns.FROM_DATE), protractor_1.Click.on(campaigns_1.Campaigns.TO_DATE), protractor_1.Wait.upTo(core_1.Duration.ofSeconds(5)).until(campaigns_1.Campaigns.SUBMIT_CAMPAIGN, protractor_1.isClickable()), protractor_1.ExecuteScript.async(function (element, callback) {
            element = arguments[0];
            var res = element.click();
            callback(res);
        }).withArguments(campaigns_1.Campaigns.SUBMIT_CAMPAIGN));
    };
    return CreateANewCampaign;
}());
exports.CreateANewCampaign = CreateANewCampaign;
//# sourceMappingURL=CreateANewCampaign.js.map