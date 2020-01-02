
import { PerformsActivities,Task } from "@serenity-js/core";
import { Navigate } from "@serenity-js/protractor";
require('dotenv').config();

export class BrowseTo extends Task  {
    
    public static LoginPage(): BrowseTo {
        return new BrowseTo();
    }

    performAs(actor:PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Navigate.to(process.env.BASE_URL)  
        );
    }

}