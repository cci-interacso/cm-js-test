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
    Campaigns.SUBMIT_CAMPAIGN = protractor_1.Target.the("campaign submit button").located(protractor_2.by.xpath("//*[contains(text(),'Done')]"));
    Campaigns.CAMPAIGN_STATUS = protractor_1.Target.the('Campaign status').located(protractor_2.by.xpath("//td[5]/span"));
    Campaigns.EDIT_CAMPAIGN = protractor_1.Target.the('Edit a campaign').located(protractor_2.by.xpath("//button[@data-test-id='edit-campaign']"));
    Campaigns.ADD_NEW_SCHEDULE = protractor_1.Target.the('Add new schediule').located(protractor_2.by.xpath("//button[@data-test-id='Add-new-schedule']"));
    Campaigns.ADD_CREATIVES = protractor_1.Target.the('Add Creative to Campaign').located(protractor_2.by.xpath("//button[@data-test-id='add-creative']"));
    Campaigns.NEXT_BUTTON = protractor_1.Target.the('Next Time').located(protractor_2.by.xpath("//button[@class='ui primary button']"));
    Campaigns.DONE = protractor_1.Target.the('Done Button').located(protractor_2.by.xpath("//*[contains(text(),'Done')]"));
    Campaigns.BUTTON_CONTAINER = protractor_1.Target.the('Button contianer').located(protractor_2.by.xpath("//button[@data-test-id='edit-campaign']"));
    Campaigns.STATIC_CREATIVE_ADDED = protractor_1.Target.the('Static creative added').located(protractor_2.by.xpath("//*[@data-test-id='schedule-campaign-date']/following::div[2]"));
    Campaigns.DEFAULT_CONTENT = protractor_1.Target.the('default content').located(protractor_2.by.xpath("//*[contains(text(),'Default content')]"));
    Campaigns.CAMPAIGNS = protractor_1.Target.the('Go to Campaigns').located(protractor_2.by.linkText("Campaigns"));
    Campaigns.STATIC_CREATIVE_ADDED_DEFAULT_SCHEDULE = protractor_1.Target.the('Static creative added').located(protractor_2.by.xpath("//*[@data-test-id='default-content']/div[2]/div"));
    return Campaigns;
}());
exports.Campaigns = Campaigns;
//# sourceMappingURL=campaigns.js.map