import { Task } from "@serenity-js/core";
import { Inventory } from "../po/Inventory";
import { Click, Enter } from "@serenity-js/protractor";

export class SearchForInventory implements Task {

    constructor(private inventory: string) { }

    static searchForInventory (inventory: string): SearchForInventory {
        return new SearchForInventory(inventory);
      }
    
    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(Inventory.INVENTORY),
            Enter.theValue(this.inventory).into(Inventory.SEARCH_BY_NAME))
    }

}