import { PerformsActivities, Task, Duration } from "@serenity-js/core";
import { LoginPage } from "../po/LoginPage";
import { Enter, Click, Wait } from "@serenity-js/protractor/lib/screenplay/interactions";
import { Campaigns } from "../po/campaigns";
import { isClickable, BrowseTheWeb } from "@serenity-js/protractor";
require('dotenv').config();


const waitTimeInMillseconds = Duration.ofMilliseconds(10000)


export class Login implements Task {

   constructor(private username:string, private password:string){

   }
   public static loginOnCM(username:string, password :string): Login {
      return new Login(username,password);
   }

   performAs(actor: PerformsActivities): PromiseLike<void> {
      return actor.attemptsTo(
         Enter.theValue(this.username).into(LoginPage.username),
         Enter.theValue(this.password).into(LoginPage.password),
         Click.on(LoginPage.submit),
      );
   }
}


