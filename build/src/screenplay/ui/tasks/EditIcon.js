"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var campaigns_1 = require("../po/campaigns");
var protractor_1 = require("@serenity-js/protractor");
var EditTheCampaign = /** @class */ (function () {
    function EditTheCampaign() {
    }
    EditTheCampaign.editCampaignUsingTheEditIcon = function () {
        return new EditTheCampaign();
    };
    EditTheCampaign.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Hover.over(campaigns_1.Campaigns.EDIT_ICON), protractor_1.Click.on(campaigns_1.Campaigns.EDIT_ICON));
    };
    return EditTheCampaign;
}());
exports.EditTheCampaign = EditTheCampaign;
//# sourceMappingURL=EditIcon.js.map