import { Task, Duration } from "@serenity-js/core";
import {ContentSchedule } from './../po/ContentSchedule'
import { Click, Clear, Enter, Press, Wait } from "@serenity-js/protractor";
import { Key } from "protractor";

export class EditContentSchedule implements Task {

    static editContentSchedule() : EditContentSchedule {
        return new EditContentSchedule();
    }
   
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
        
        return actor.attemptsTo(
            Click.on(ContentSchedule.CONTENT_SCHEDULE),
            Clear.theValueOf(ContentSchedule.SCHEDULE_TITLE),
            Enter.theValue('ScheduleEdited').into(ContentSchedule.SCHEDULE_TITLE),
            Click.on(ContentSchedule.DATE_PICKER_FROM),
            Click.on(ContentSchedule.FROM_DATE),
            Click.on(ContentSchedule.DATE_PICKER_END),
            Click.on(ContentSchedule.FROM_DATE),
            Click.on(ContentSchedule.TIME_TXTAREA),
            Wait.for(Duration.ofSeconds(2)),
            Click.on(ContentSchedule.START_TIME_HRS), 
            Click.on(ContentSchedule.START_TIME_MM),
            Click.on(ContentSchedule.DAYS),
            Wait.for(Duration.ofSeconds(5)),
            Click.on(ContentSchedule.CLOSE)
        )
    }

}