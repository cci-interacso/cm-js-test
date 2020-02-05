import { Given, Then } from "cucumber";
import { actorInTheSpotlight, Task } from "@serenity-js/core";
import { AddContentSchedule } from './../../src/screenplay/ui/tasks/AddContentSchedule'
import { AddPlayerToSchedule } from  './../../src/screenplay/ui/tasks/AddPlayerToSchedule'
import { Click } from "@serenity-js/protractor";
import { Campaigns } from "../../src/screenplay/ui/po/campaigns";

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

Then(/schedule the campaign to start/, function () {
    return actorInTheSpotlight().attemptsTo(
        Click.on(Campaigns.SCHEDULE_CAMPAIGN),
        Click.on(Campaigns.DONE)
    )
   
})

