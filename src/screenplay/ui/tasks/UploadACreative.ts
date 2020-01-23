import { Task, Duration } from "@serenity-js/core";
import { Click, Enter, Wait, isVisible, isClickable, isEnabled } from "@serenity-js/protractor";
import { Library } from "../po/library";

const waitTimeInMillseconds = Duration.ofMilliseconds(10000);

export class UploadACreative implements Task {

    constructor(private upload: string) {}

    static upload(upload: string): UploadACreative {
        return new UploadACreative(upload)
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {

        return actor.attemptsTo(
            Wait.upTo(waitTimeInMillseconds).until(Library.LIBRARY, isClickable()),
            Click.on(Library.LIBRARY),
            Wait.upTo(waitTimeInMillseconds).until(Library.UPLOAD_CREATIVES_ICON, isClickable()),
            Click.on(Library.UPLOAD_CREATIVES_ICON),
            Click.on(Library.UPLOAD_CREATIVES_FROM_DEVICE),
            Enter.theValue(this.upload).into(Library.UPLOAD_LINK),
            Wait.upTo(Duration.ofSeconds(5)).until(Library.NEXT_BUTTON, isEnabled()),
            Click.on(Library.NEXT_BUTTON),
            Wait.for(Duration.ofSeconds(5))
        )
    }

}