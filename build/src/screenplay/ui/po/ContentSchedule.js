"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("@serenity-js/protractor");
var protractor_2 = require("protractor");
var date = require('date-and-time');
var now = new Date();
var addDays = date.addDays(now, 10);
var startDate = date.format(now, 'MMMM D, YYYY');
var endDate = date.format(addDays, 'MMMM D, YYYY');
var ContentSchedule = /** @class */ (function () {
    function ContentSchedule() {
    }
    ContentSchedule.CONTENT_SCHEDULE = protractor_1.Target.the('Content Schedule').located(protractor_2.by.xpath("//*[@data-test-id='schedule-content-title']"));
    ContentSchedule.SCHEDULE_TITLE = protractor_1.Target.the('shedule title').located(protractor_2.by.id("schedule-name"));
    ContentSchedule.DATE_PICKER_FROM = protractor_1.Target.the('date area').located(protractor_2.by.xpath("//input[@class='ant-calendar-picker-input ant-input']"));
    ContentSchedule.DATE_PICKER_END = protractor_1.Target.the('date area').located(protractor_2.by.xpath("//span[@id='schedule-to-date']/div/input"));
    ContentSchedule.FROM_DATE = protractor_1.Target.the('from date').located(protractor_2.by.xpath("//*[@role='gridcell' and @title='" + startDate + "']"));
    ContentSchedule.TO_DATE = protractor_1.Target.the('to date').located(protractor_2.by.xpath("//*[@role='gridcell' and @title='" + endDate + "']"));
    ContentSchedule.DAYS = protractor_1.Target.the('days').located(protractor_2.by.xpath("//span[1]/input"));
    ContentSchedule.TIME_TXTAREA = protractor_1.Target.the('').located(protractor_2.by.xpath("/html/body/div[3]/div/div/div/div[1]/input"));
    ContentSchedule.START_TIME = protractor_1.Target.the('start time').located(protractor_2.by.xpath("//*[@id='schedule-start-time']"));
    ContentSchedule.END_TIME = protractor_1.Target.the('End time').located(protractor_2.by.xpath("//*[@id='schedule-end-time']"));
    ContentSchedule.CLOSE = protractor_1.Target.the('close the schedule').located(protractor_2.by.xpath("//button[@data-test-id='close-schedule']"));
    return ContentSchedule;
}());
exports.ContentSchedule = ContentSchedule;
//# sourceMappingURL=ContentSchedule.js.map