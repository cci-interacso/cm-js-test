"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("@serenity-js/protractor");
var protractor_2 = require("protractor");
var rest_1 = require("@serenity-js/rest");
var Actors = /** @class */ (function () {
    function Actors() {
    }
    Actors.prototype.prepare = function (actor) {
        return actor.whoCan(protractor_1.BrowseTheWeb.using(protractor_2.protractor.browser), rest_1.CallAnApi.at(process.env.REST_API));
    };
    return Actors;
}());
exports.Actors = Actors;
//# sourceMappingURL=actors.js.map