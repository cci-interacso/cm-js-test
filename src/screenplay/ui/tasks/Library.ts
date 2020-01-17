import { Task, Duration } from "@serenity-js/core";
import { Click, Enter, Text, Wait, isVisible } from "@serenity-js/protractor";
import { Library } from "../po/library";
import { Ensure, equals } from "@serenity-js/assertions";

export class LibraryHome implements Task {

   static goToLibrary():LibraryHome {
       return new LibraryHome();
   }
   
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
           Wait.upTo(Duration.ofSeconds(5)).until(Library.LIBRARY, isVisible()),
           Click.on(Library.LIBRARY),
           Enter.theValue('market.jpeg').into(Library.SEARCH_BY_NAME),
           Ensure.that(Text.of(Library.STATIC_CREATIVE), equals('market.jpeg'))
       )
    }
    
}