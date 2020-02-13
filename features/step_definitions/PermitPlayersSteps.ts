import { Then } from "cucumber";
import { actorCalled } from "@serenity-js/core";
import { AssignInventory } from "../../src/screenplay/ui/tasks/AssignInventory";

Then(/(.*) can click on Screen and assign it to the Seville group/, function(actorName: string) {
  
  return actorCalled(actorName).attemptsTo(
    
    AssignInventory.addInventory("BALHAM STN DEPOT")
  );
});
