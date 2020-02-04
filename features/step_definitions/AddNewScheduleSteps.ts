import { Given, Then } from "cucumber";
import { actorInTheSpotlight } from "@serenity-js/core";
import { AddContentSchedule } from './../../src/screenplay/ui/tasks/AddContentSchedule'
import { AddPlayerToSchedule } from  './../../src/screenplay/ui/tasks/AddPlayerToSchedule'

Given(/add new a content schedule/, function () {

    return actorInTheSpotlight().attemptsTo(
        AddContentSchedule.addNewSchedule()
    )

}) 

Then(/add a player to the content schedule/, function (){
    return actorInTheSpotlight().attemptsTo(
        AddPlayerToSchedule.addPlayerToSchedule()
    )
})

