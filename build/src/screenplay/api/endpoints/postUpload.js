"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = require("@serenity-js/rest");
var assertions_1 = require("@serenity-js/assertions");
var PostUpload = /** @class */ (function () {
    function PostUpload(path, body, token, statusCode) {
        this.path = path;
        this.body = body;
        this.token = token;
        this.statusCode = statusCode;
    }
    PostUpload.post = function (path, body, token, statusCode) {
        return new PostUpload(path, body, token, statusCode);
    };
    PostUpload.prototype.performAs = function (actor) {
        return actor.attemptsTo(rest_1.Send.a(rest_1.PostRequest.to(this.path)
            .using({
            headers: {
                'Content-Type': this.body.getHeaders()['content-type'],
                'Authorization': 'Token '.concat(this.token),
            },
            data: this.body,
            timeout: 5000
        })), assertions_1.Ensure.that(rest_1.LastResponse.status(), assertions_1.equals(this.statusCode)));
    };
    return PostUpload;
}());
exports.PostUpload = PostUpload;
//1d85adc0b36932d6c9cea079ce3d4d12979ebe58
//# sourceMappingURL=postUpload.js.map