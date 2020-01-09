import { PerformsActivities,Task } from "@serenity-js/core";
import { LoginPage } from "../po/LoginPage";
import { Enter, Click } from "@serenity-js/protractor/lib/screenplay/interactions";
require('dotenv').config();


export class Login implements Task {

   public static loginOnCM() : Login {
      return new Login();
   }
  
   performAs(actor: PerformsActivities): PromiseLike<void> {
       return actor.attemptsTo(
         Enter.theValue(process.env.username).into(LoginPage.username),
         Enter.theValue(process.env.password).into(LoginPage.password),
         Click.on(LoginPage.submit)
       );
   }

   constructor(){
      
   }
    
  
    
}