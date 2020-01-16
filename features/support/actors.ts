import { Actor, DressingRoom } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/protractor';
import { protractor } from 'protractor';
import { CallAnApi } from '@serenity-js/rest';
import Axios from 'axios'

export class Actors implements DressingRoom {
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            BrowseTheWeb.using(protractor.browser),
            CallAnApi.using(axiosInstance)
        );
    }
}


const axiosInstance = Axios.create({
         timeout: 5 * 1000,
     });