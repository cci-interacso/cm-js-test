import { Task, Duration } from "@serenity-js/core";
import { Click, Enter, Text, Wait, isVisible } from "@serenity-js/protractor";
import { Library } from "../po/library";
import { Ensure, equals } from "@serenity-js/assertions";

export class LibraryHome implements Task {

    constructor(private searchItem) {

    }

   static goToLibrary(searchItem :string):LibraryHome {
       return new LibraryHome(searchItem);
   }
   
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
           Wait.upTo(Duration.ofSeconds(5)).until(Library.LIBRARY, isVisible()),
           Click.on(Library.LIBRARY),
           Enter.theValue(this.searchItem).into(Library.SEARCH_BY_NAME),
       )
    }
    
}