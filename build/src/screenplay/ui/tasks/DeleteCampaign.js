"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var campaigns_1 = require("../po/campaigns");
var protractor_1 = require("@serenity-js/protractor");
var DeleteCampaign = /** @class */ (function () {
    function DeleteCampaign() {
    }
    DeleteCampaign.deleteCampaign = function () {
        return new DeleteCampaign();
    };
    DeleteCampaign.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Hover.over(campaigns_1.Campaigns.BUTTON_CONTAINER), protractor_1.Click.on(campaigns_1.Campaigns.DELETE_CAMPAIGN), protractor_1.Click.on(campaigns_1.Campaigns.DELETE_CAMPAIGN_YES));
    };
    return DeleteCampaign;
}());
exports.DeleteCampaign = DeleteCampaign;
//# sourceMappingURL=DeleteCampaign.js.map