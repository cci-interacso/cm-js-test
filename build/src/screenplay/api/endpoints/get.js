"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = require("@serenity-js/rest");
var assertions_1 = require("@serenity-js/assertions");
var Get = /** @class */ (function () {
    function Get(path, token) {
        this.path = path;
        this.token = token;
    }
    Get.get = function (path, token) {
        return new Get(path, token);
    };
    Get.getCampaigns = function (path, token) {
        return new Get(path, token);
    };
    Get.prototype.performAs = function (actor) {
        return actor.attemptsTo(rest_1.Send.a(rest_1.GetRequest.to(this.path).using({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token '.concat(this.token)
            },
            timeout: 5000,
            responseType: 'json'
        })), assertions_1.Ensure.that(rest_1.LastResponse.status(), assertions_1.equals(200)));
    };
    return Get;
}());
exports.Get = Get;
//# sourceMappingURL=get.js.map