"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = require("@serenity-js/rest");
var assertions_1 = require("@serenity-js/assertions");
var Put = /** @class */ (function () {
    function Put(path, body, token, statusCode) {
        this.path = path;
        this.body = body;
        this.token = token;
        this.statusCode = statusCode;
    }
    Put.put = function (path, body, token, statusCode) {
        return new Put(path, body, token, statusCode);
    };
    Put.prototype.performAs = function (actor) {
        return actor.attemptsTo(rest_1.Send.a(rest_1.PutRequest.to(this.path)
            .using({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token '.concat(this.token)
            },
            data: this.body,
            timeout: 5000
        })), assertions_1.Ensure.that(rest_1.LastResponse.status(), assertions_1.equals(this.statusCode)));
    };
    return Put;
}());
exports.Put = Put;
//# sourceMappingURL=put.js.map