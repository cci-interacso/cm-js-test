import { WithStage } from "@serenity-js/core";
import { Given } from 'cucumber';
import {BrowseTo} from '../../src/screenplay/UI/tasks/BrowseTo'
import {Login}  from '../../src/screenplay/UI/tasks/Login'

    Given(/(.*) is an internal user in the Spanish Gr oup/, function (this: WithStage, actorName : string) {
        return this.stage.theActorCalled(actorName).attemptsTo(
           BrowseTo.LoginPage(),
           Login.loginOnCM()
           );
    });


   
   
