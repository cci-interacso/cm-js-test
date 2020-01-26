"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var cucumber_1 = require("cucumber");
var BrowseTo_1 = require("../../src/screenplay/ui/tasks/BrowseTo");
var Login_1 = require("../../src/screenplay/ui/tasks/Login");
var actors_1 = require("../support/actors");
cucumber_1.Before(function () {
    core_1.engage(new actors_1.Actors());
});
cucumber_1.Given(/(.*) is an internal user in the Spanish Group/, function (actorName) {
    return core_1.actorCalled(actorName).attemptsTo(BrowseTo_1.BrowseTo.LoginPage(), Login_1.Login.loginOnCM(process.env.SPANISH_INTERNAL_USERNAME, process.env.SPANISH_INTERNAL_PASSWORD));
});
cucumber_1.Given(/(.*) is an external user in the Spanish Region/, function (actorName) {
    return core_1.actorCalled(actorName).attemptsTo(BrowseTo_1.BrowseTo.LoginPage(), Login_1.Login.loginOnCM(process.env.SPANISH_EXTERNAL_USERNAME, process.env.SPANISH_EXTERNAL_PASSWORD));
});
//# sourceMappingURL=login.steps.js.map