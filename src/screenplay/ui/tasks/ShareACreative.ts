import { Task, Duration } from "@serenity-js/core";
import { Click, Enter, Wait, isVisible, isClickable } from "@serenity-js/protractor";
import { Library } from "../po/library";

export class ShareACreative implements Task {

    constructor() { }

    static assignCreative(): ShareACreative {
        return new ShareACreative();
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       
        return actor.attemptsTo(
            Wait.upTo(Duration.ofSeconds(5)).until(Library.SEARCH_BY_NAME, isVisible()),
            Enter.theValue('market.jpeg').into(Library.SEARCH_BY_NAME),
            Click.on(Library.SELECT_ADDED_CREATIVES),
            Click.on(Library.ADD_USER),
            Click.on(Library.ADD_CREATIVE_TO_SEVILLE),
            Click.on(Library.ASSIGN_CREATIVE),
            Wait.for(Duration.ofSeconds(4))
        )
    }

}