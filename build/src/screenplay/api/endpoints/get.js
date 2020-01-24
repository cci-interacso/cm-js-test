"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = require("@serenity-js/rest");
var assertions_1 = require("@serenity-js/assertions");
var Get = /** @class */ (function () {
    function Get(path, token, statusCode) {
        this.path = path;
        this.token = token;
        this.statusCode = statusCode;
    }
    Get.get = function (path, token, statusCode) {
        return new Get(path, token, statusCode);
    };
    Get.getCampaigns = function (path, token, statuscode) {
        return new Get(path, token, statuscode);
    };
    Get.prototype.performAs = function (actor) {
        return actor.attemptsTo(rest_1.Send.a(rest_1.GetRequest.to(this.path).using({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token '.concat(this.token)
            },
            timeout: 5000,
            responseType: 'json'
        })), assertions_1.Ensure.that(rest_1.LastResponse.status(), assertions_1.equals(this.statusCode)));
    };
    return Get;
}());
exports.Get = Get;
//# sourceMappingURL=get.js.map