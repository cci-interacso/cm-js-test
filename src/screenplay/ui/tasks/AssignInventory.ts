import { Task } from "@serenity-js/core";
import { Inventory } from "../po/inventory";
import { Click, Enter, Hover } from "@serenity-js/protractor";
import { Library } from './../po/library'


export class AssignInventory implements Task {

    constructor(private inventory: string) {

    }

    static addInventory(inventory: string): AssignInventory {
        return new AssignInventory(inventory)
    }

    performAs(actor: import("@serenity-js/core").PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(Inventory.INVENTORY),
            Enter.theValue(this.inventory).into(Library.SEARCH_BY_NAME),
            Hover.over(Inventory.HOVER_ON_PLAYER),
            Click.on(Inventory.ASSIGN_TO_SEVILLE),
            Click.on(Inventory.ASSIGN_CAMPAIGN)

        )}



}