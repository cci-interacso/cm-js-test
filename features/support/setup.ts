import { setDefaultTimeout, Before, After } from 'cucumber';
import { engage, actorInTheSpotlight, Duration } from '@serenity-js/core';
import { Actors } from './actors';
import { LogOut } from '../../src/screenplay/ui/tasks/LogOut';
import { Wait } from '@serenity-js/protractor';

setDefaultTimeout(60 * 1000);


Before(() => {

    engage(new Actors())
});

After({tags: "@ui"},function (scenario) {

    console.log('I am a after hook')

    return actorInTheSpotlight().attemptsTo(
        LogOut.userLogout(),
        Wait.for(Duration.ofSeconds(3))
    )
})
