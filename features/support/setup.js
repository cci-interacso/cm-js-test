"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var cucumber_1 = require("cucumber");
var actors_1 = require("./../screenplay/actors");
cucumber_1.setDefaultTimeout(15000);
cucumber_1.setWorldConstructor(function (_a) {
    var parameters = _a.parameters;
    this.stage = core_1.serenity.callToStageFor(new actors_1.Actors());
});
//# sourceMappingURL=setup.js.map