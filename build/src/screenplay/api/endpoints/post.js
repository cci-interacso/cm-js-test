"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = require("@serenity-js/rest");
var assertions_1 = require("@serenity-js/assertions");
var Post = /** @class */ (function () {
    function Post(path, body, token, statusCode) {
        this.path = path;
        this.body = body;
        this.token = token;
        this.statusCode = statusCode;
    }
    Post.post = function (path, body, token, statusCode) {
        return new Post(path, body, token, statusCode);
    };
    Post.prototype.performAs = function (actor) {
        return actor.attemptsTo(rest_1.Send.a(rest_1.PostRequest.to(this.path)
            .using({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token '.concat(this.token),
            },
            data: this.body,
            timeout: 5000
        })), assertions_1.Ensure.that(rest_1.LastResponse.status(), assertions_1.equals(this.statusCode)));
    };
    return Post;
}());
exports.Post = Post;
//1d85adc0b36932d6c9cea079ce3d4d12979ebe58
//# sourceMappingURL=post.js.map