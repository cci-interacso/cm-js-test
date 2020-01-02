import { BrowseTo } from "../screenplay/ui_app/tasks/BrowseTo";
import { WithStage } from "@serenity-js/core";
import { Given } from 'cucumber';
import { Login } from "../screenplay/ui_app/tasks/Login";

    Given(/(.*) is an internal user in the Spanish Gr oup/, function (this: WithStage, actorName : string) {
        return this.stage.theActorCalled(actorName).attemptsTo(
           BrowseTo.LoginPage(),
           Login.loginOnCM()
           );
    });


   
   
