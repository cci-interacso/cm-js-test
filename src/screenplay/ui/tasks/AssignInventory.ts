import { Task, Duration } from "@serenity-js/core";
import { Inventory } from "../po/Inventory";
import {
  Click,
  Enter,
  Hover,
  Wait,
  isClickable
} from "@serenity-js/protractor";

export class AssignInventory implements Task {
  constructor(private inventory: string) {}

  static addInventory(inventory: string): AssignInventory {
    return new AssignInventory(inventory);
  }

  performAs(
    actor: import("@serenity-js/core").PerformsActivities
  ): PromiseLike<void> {
    return actor.attemptsTo(
      Click.on(Inventory.INVENTORY),
      Enter.theValue(this.inventory).into(Inventory.SEARCH_BY_NAME),
      Hover.over(Inventory.HOVER_ON_PLAYER),
      Wait.upTo(Duration.ofSeconds(3)).until(
        Inventory.ASSIGN_USERGROUP,
        isClickable()
      ),
      Click.on(Inventory.ASSIGN_USERGROUP),
      Click.on(Inventory.ASSIGN_TO_SEVILLE),
      Click.on(Inventory.ASSIGN)
    );
  }
}
