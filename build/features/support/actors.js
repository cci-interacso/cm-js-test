"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("@serenity-js/protractor");
var protractor_2 = require("protractor");
var rest_1 = require("@serenity-js/rest");
var axios_1 = require("axios");
var Actors = /** @class */ (function () {
    function Actors() {
    }
    Actors.prototype.prepare = function (actor) {
        return actor.whoCan(protractor_1.BrowseTheWeb.using(protractor_2.protractor.browser), rest_1.CallAnApi.using(axiosInstance));
    };
    return Actors;
}());
exports.Actors = Actors;
var axiosInstance = axios_1.default.create({
    timeout: 5 * 1000,
});
//# sourceMappingURL=actors.js.map