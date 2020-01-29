"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var ContentSchedule_1 = require("./../po/ContentSchedule");
var protractor_1 = require("@serenity-js/protractor");
var EditContentSchedule = /** @class */ (function () {
    function EditContentSchedule() {
    }
    EditContentSchedule.editContentSchedule = function () {
        return new EditContentSchedule();
    };
    EditContentSchedule.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Click.on(ContentSchedule_1.ContentSchedule.CONTENT_SCHEDULE), protractor_1.Clear.theValueOf(ContentSchedule_1.ContentSchedule.SCHEDULE_TITLE), protractor_1.Enter.theValue('ScheduleEdited').into(ContentSchedule_1.ContentSchedule.SCHEDULE_TITLE), protractor_1.Click.on(ContentSchedule_1.ContentSchedule.DATE_PICKER_FROM), protractor_1.Click.on(ContentSchedule_1.ContentSchedule.FROM_DATE), protractor_1.Click.on(ContentSchedule_1.ContentSchedule.DATE_PICKER_END), protractor_1.Click.on(ContentSchedule_1.ContentSchedule.TO_DATE), 
        //   Click.on(ContentSchedule.TIME_TXTAREA),
        protractor_1.Enter.theValue('01:00').into(ContentSchedule_1.ContentSchedule.TIME_TXTAREA), 
        //   Enter.theValue('22:00').into(ContentSchedule.END_TIME),
        protractor_1.Click.on(ContentSchedule_1.ContentSchedule.DAYS), protractor_1.Wait.for(core_1.Duration.ofSeconds(5)), protractor_1.Click.on(ContentSchedule_1.ContentSchedule.CLOSE));
    };
    return EditContentSchedule;
}());
exports.EditContentSchedule = EditContentSchedule;
//# sourceMappingURL=EditContentSchedule.js.map