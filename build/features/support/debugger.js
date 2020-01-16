"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
exports.Debug = function () { return core_1.Interaction.where('#actor pauses to debug', function (actor) {
    debugger;
    return Promise.resolve();
}); };
//# sourceMappingURL=debugger.js.map