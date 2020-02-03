import { Task, Duration } from "@serenity-js/core";
import {ContentSchedule } from '../po/ContentSchedule'
import { Click, Clear, Enter, Press, Wait, Hover } from "@serenity-js/protractor";
import { Key } from "protractor";
import { DefaultSchedule } from "../po/DefaultSchedule";
import { Campaigns } from "../po/campaigns";
import { Library } from "../po/library";

export class EditDefaultSchedule implements Task {

    static editDefaultSchedule() : EditDefaultSchedule {
        return new EditDefaultSchedule();
    }
   
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
        
        return actor.attemptsTo(
            Click.on(DefaultSchedule.DEFAULT_SCHEDULE),
            Click.on(DefaultSchedule.REVIEW_AND_EDIT),
            Hover.over(DefaultSchedule.ADD_MORE),
            Click.on(DefaultSchedule.FROM_LIBRARY),
            Hover.over(Campaigns.SORT_CREATIVES),
            Wait.for(Duration.ofSeconds(3)),
            Click.on(Campaigns.ADDED_NEWEST),
            Click.on(Library.STATIC_CREATIVE),
            Click.on(Library.NEXT_BUTTON),
            Click.on(Campaigns.DONE),
            Click.on(ContentSchedule.CLOSE)
        )
    }

}