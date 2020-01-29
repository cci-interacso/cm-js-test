import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

var date = require('date-and-time');

const now = new Date();
const addDays = date.addDays(now, 10);

const startDate = date.format(now, 'MMMM D, YYYY');
const endDate = date.format(addDays, 'MMMM D, YYYY');


export class ContentSchedule {

    static CONTENT_SCHEDULE = Target.the('Content Schedule').located(by.xpath("//*[@data-test-id='schedule-content-title']"))
    static SCHEDULE_TITLE = Target.the('shedule title').located(by.id("schedule-name"))
    static DATE_PICKER_FROM = Target.the('date area').located(by.xpath("//input[@class='ant-calendar-picker-input ant-input']"))
    static DATE_PICKER_END = Target.the('date area').located(by.xpath("//span[@id='schedule-to-date']/div/input"))
    static FROM_DATE = Target.the('from date').located(by.xpath("//*[@role='gridcell' and @title='" + startDate + "']"));
    static TO_DATE = Target.the('to date').located(by.xpath("//*[@role='gridcell' and @title='" + endDate + "']"))
    static DAYS = Target.the('days').located(by.xpath("//span[1]/input"))
    static TIME_TXTAREA = Target.the('').located(by.xpath("//*[@id='schedule-start-time']"))
    static START_TIME_HRS = Target.the('enter hours').located(by.xpath("//div[1]/ul/li[2]"))
    static START_TIME_MM = Target.the('enter mins').located(by.xpath("//div[2]/ul/li[4]"))
    static END_TIME = Target.the('End time').located(by.xpath("//*[@id='schedule-end-time']"))
    static CLOSE = Target.the('close the schedule').located(by.xpath("//button[@data-test-id='close-schedule']"))
}