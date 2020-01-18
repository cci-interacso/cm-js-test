import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';
var date = require('date-and-time');

const now = new Date();
const next_month = date.addMonths(now, 1);

const startDate = date.format(now, 'MMMM DD, YYYY');
const endDate = date.format(next_month, 'MMMM DD, YYYY');

export class Campaigns {

    static SEARCH_BY_NAME = Target.the('search by name field').located(by.xpath("//input[@data-test-id='search-value']"));
    static NEW_CAMPAIGN_BUTTON = Target.the('new campaign button').located(by.xpath("//button[@data-test-id='new-campaign-button']"));
    static CAMPAIGN_NAME = Target.the('campaign name field').located(by.xpath("//input[@id='campaign-name']"));
    static CAMPAIGN_ID = Target.the('campaign ID field').located(by.xpath("//input[@id='campaign-id']"));
    static DATE_PICKER = Target.the('date area').located(by.xpath("//span[@class='ant-calendar-picker-input ant-input']"));
    static FROM_DATE = Target.the('from date').located(by.xpath("//*[@role='gridcell' and @title='" + startDate + "']"));
    static TO_DATE = Target.the('to date').located(by.xpath("//*[@role='gridcell' and @title='" + endDate + "']"))
    static SUBMIT_CAMPAIGN = Target.the("campaign submit button").located(by.xpath("//button[@class='ant-btn ant-btn-primary']"));
    static CAMPAIGN_STATUS = Target.the('Campaign status').located(by.xpath("//td[5]/span"))


    //January 10, 2020
}