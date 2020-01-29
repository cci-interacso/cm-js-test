"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("@serenity-js/protractor");
var campaigns_1 = require("../po/campaigns");
var ClickOnNewCampaign = /** @class */ (function () {
    function ClickOnNewCampaign() {
    }
    ClickOnNewCampaign.clickOnNewButton = function () {
        return new ClickOnNewCampaign();
    };
    ClickOnNewCampaign.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Click.on(campaigns_1.Campaigns.NEW_CAMPAIGN_BUTTON));
    };
    return ClickOnNewCampaign;
}());
exports.ClickOnNewCampaign = ClickOnNewCampaign;
//# sourceMappingURL=ClickOnNewCampaign.js.map