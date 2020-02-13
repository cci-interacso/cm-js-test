import { PerformsActivities, Task, Duration, actorInTheSpotlight } from "@serenity-js/core";
import { ContentSchedule } from './../po/ContentSchedule'
import { Click } from "@serenity-js/protractor";

export class AddContentSchedule implements Task {
    static addNewSchedule(): AddContentSchedule {
        return new AddContentSchedule()
    }
    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(ContentSchedule.ADD_NEW)
        )
    }

}