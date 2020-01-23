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
    static SUBMIT_CAMPAIGN = Target.the("campaign submit button").located(by.xpath("//*[contains(text(),'Done')]"));
    static CAMPAIGN_STATUS = Target.the('Campaign status').located(by.xpath("//td[5]/span"))
    static EDIT_CAMPAIGN = Target.the('Edit a campaign').located(by.xpath("//button[@data-test-id='edit-campaign']"));
    static ADD_NEW_SCHEDULE = Target.the('Add new schediule').located(by.xpath("//button[@data-test-id='Add-new-schedule']"));
    static ADD_CREATIVES = Target.the('Add Creative to Campaign').located(by.xpath("//button[@data-test-id='add-creative']"));
    static NEXT_BUTTON = Target.the('Next Time').located(by.xpath("//button[@class='ui primary button']"));
    static DONE = Target.the('Done Button').located(by.xpath("//*[contains(text(),'Done')]"))
    static BUTTON_CONTAINER = Target.the('Button contianer').located(by.xpath("//button[@data-test-id='edit-campaign']"))
    static STATIC_CREATIVE_ADDED = Target.the('Static creative added').located(by.xpath("//*[@data-test-id='schedule-campaign-date']/following::div[2]"))
    static DEFAULT_CONTENT = Target.the('default content').located(by.xpath("//*[contains(text(),'Default content')]"))
    static CAMPAIGNS = Target.the('Go to Campaigns').located(by.linkText("Campaigns"));
    static STATIC_CREATIVE_ADDED_DEFAULT_SCHEDULE = Target.the('Static creative added').located(by.xpath("//*[@data-test-id='default-content']/div[2]/div"))

}