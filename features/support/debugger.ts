import { Interaction } from "@serenity-js/core";

export const Debug = () => Interaction.where('#actor pauses to debug', actor => {
    debugger;
    return Promise.resolve();
});