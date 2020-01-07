import { Given, Then } from 'cucumber';
import { WithStage, Actor } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';
import { Post} from './../../src/screenplay/Api/endpoints/post'
import { campaignRequest }  from '../../src/screenplay/Api/endpoints/requests/CampaignRequest'
import { BrowseTheWeb } from '@serenity-js/protractor';
import { protractor } from 'protractor/built/ptor';
import { AuthenticateApi } from '../../src/screenplay/Api/authentication/session_Token';


Given(/there is a new campaign/, async function (this: WithStage) {

    const token = await AuthenticateApi().then(function(value:string){
        return value;
    });

    Actor.named('Apisit').whoCan(
        CallAnApi.at(process.env.REST_API),
        BrowseTheWeb.using(protractor.browser)
    );

    return this.stage.theActorInTheSpotlight().attemptsTo(
        Post.post('campaigns',campaignRequest,token)
    )
})

Then(/Output/, function(this:WithStage) {

  return CallAnApi.as(this.stage.theActorInTheSpotlight()).mapLastResponse(response => console.log(response.config))

})




