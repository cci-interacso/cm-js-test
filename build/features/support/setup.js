"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var core_1 = require("@serenity-js/core");
var actors_1 = require("./actors");
var LogOut_1 = require("../../src/screenplay/ui/tasks/LogOut");
var protractor_1 = require("@serenity-js/protractor");
cucumber_1.setDefaultTimeout(60 * 1000);
cucumber_1.Before(function () {
    core_1.engage(new actors_1.Actors());
});
cucumber_1.After({ tags: "@ui" }, function (scenario) {
    return core_1.actorInTheSpotlight().attemptsTo(LogOut_1.LogOut.userLogout(), protractor_1.Wait.for(core_1.Duration.ofSeconds(3)));
});
//# sourceMappingURL=setup.js.map