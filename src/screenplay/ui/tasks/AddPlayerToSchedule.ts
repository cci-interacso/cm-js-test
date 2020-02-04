import { PerformsActivities, Task, Duration, actorInTheSpotlight } from "@serenity-js/core";
import { ContentSchedule } from './../po/ContentSchedule'
import { Click, Enter, Wait, isClickable } from "@serenity-js/protractor";
import { Library} from './../po/library'
import { Campaigns } from "../po/campaigns";

export class AddPlayerToSchedule implements Task {
    
    static addPlayerToSchedule(): AddPlayerToSchedule {
        return new AddPlayerToSchedule()
    }
    
    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Wait.upTo(Duration.ofSeconds(5)).until(ContentSchedule.SELECT_PLAYERS, isClickable()),
            Click.on(ContentSchedule.SELECT_PLAYERS),
            Enter.theValue("TOOTBEC SHELTER1").into(Library.SEARCH_BY_NAME),
            Click.on(ContentSchedule.SELECT_A_PLAYER),
            Click.on(Campaigns.DONE)
        )
    }

}