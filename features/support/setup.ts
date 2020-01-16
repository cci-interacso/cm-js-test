import { serenity, WithStage } from '@serenity-js/core';
import { setDefaultTimeout, setWorldConstructor } from 'cucumber';
import { Actors } from "./../support/actors";

setDefaultTimeout(60 * 1000);

setWorldConstructor(function (this: WithStage, { parameters }) {
    this.stage = serenity.callToStageFor(new Actors());
});