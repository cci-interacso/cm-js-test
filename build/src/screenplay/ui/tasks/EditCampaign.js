"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var campaigns_1 = require("../po/campaigns");
var protractor_1 = require("@serenity-js/protractor");
var EditCampaign = /** @class */ (function () {
    function EditCampaign() {
    }
    EditCampaign.editCampaign = function () {
        return new EditCampaign();
    };
    EditCampaign.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Hover.over(campaigns_1.Campaigns.BUTTON_CONTAINER), protractor_1.Click.on(campaigns_1.Campaigns.EDIT_CAMPAIGN));
    };
    return EditCampaign;
}());
exports.EditCampaign = EditCampaign;
//# sourceMappingURL=EditCampaign.js.map