import { Given } from "cucumber";
import { actorInTheSpotlight } from "@serenity-js/core";
import { AssignInventory } from './../../src/screenplay/ui/tasks/AssignInventory'

Given(/add group to player and prevent user from unassigning their own user group/, function(){

    return actorInTheSpotlight().attemptsTo(
        AssignInventory.addInventory('BALHAM STN DEPOT')
    )


})