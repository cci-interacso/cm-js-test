"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("@serenity-js/protractor");
var protractor_2 = require("protractor");
var date = require('date-and-time');
var now = new Date();
var next_month = date.addMonths(now, 1);
var startDate = date.format(now, 'MMMM DD, YYYY');
var endDate = date.format(next_month, 'MMMM DD, YYYY');
var Campaigns = /** @class */ (function () {
    function Campaigns() {
    }
    Campaigns.SEARCH_BY_NAME = protractor_1.Target.the('search by name field').located(protractor_2.by.xpath("//input[@data-test-id='search-value']"));
    Campaigns.NEW_CAMPAIGN_BUTTON = protractor_1.Target.the('new campaign button').located(protractor_2.by.xpath("//button[@data-test-id='new-campaign-button']"));
    Campaigns.CAMPAIGN_NAME = protractor_1.Target.the('campaign name field').located(protractor_2.by.xpath("//input[@id='campaign-name']"));
    Campaigns.CAMPAIGN_ID = protractor_1.Target.the('campaign ID field').located(protractor_2.by.xpath("//input[@id='campaign-id']"));
    Campaigns.DATE_PICKER = protractor_1.Target.the('date area').located(protractor_2.by.xpath("//span[@class='ant-calendar-picker-input ant-input']"));
    Campaigns.FROM_DATE = protractor_1.Target.the('from date').located(protractor_2.by.xpath("//*[@role='gridcell' and @title='" + startDate + "']"));
    Campaigns.TO_DATE = protractor_1.Target.the('to date').located(protractor_2.by.xpath("//*[@role='gridcell' and @title='" + endDate + "']"));
    Campaigns.SUBMIT_CAMPAIGN = protractor_1.Target.the("campaign submit button").located(protractor_2.by.xpath("//button[@class='ant-btn ant-btn-primary']"));
    return Campaigns;
}());
exports.Campaigns = Campaigns;
//# sourceMappingURL=campaigns.js.map