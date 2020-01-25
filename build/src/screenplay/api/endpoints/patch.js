"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = require("@serenity-js/rest");
var assertions_1 = require("@serenity-js/assertions");
var Patch = /** @class */ (function () {
    function Patch(path, data, token, statusCode) {
        this.path = path;
        this.data = data;
        this.token = token;
        this.statusCode = statusCode;
    }
    Patch.patch = function (path, data, token, statusCode) {
        return new Patch(path, data, token, statusCode);
    };
    Patch.prototype.performAs = function (actor) {
        return actor.attemptsTo(rest_1.Send.a(rest_1.PatchRequest.to(this.path)
            .with(this.data)
            .using({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token '.concat(this.token)
            }
        })), assertions_1.Ensure.that(rest_1.LastResponse.status(), assertions_1.equals(this.statusCode)));
    };
    return Patch;
}());
exports.Patch = Patch;
//# sourceMappingURL=patch.js.map