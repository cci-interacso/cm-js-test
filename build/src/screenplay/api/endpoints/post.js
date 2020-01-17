"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = require("@serenity-js/rest");
var Post = /** @class */ (function () {
    function Post(path, body, token) {
        this.path = path;
        this.body = body;
        this.token = token;
    }
    Post.post = function (path, body, token) {
        return new Post(path, body, token);
    };
    Post.prototype.performAs = function (actor) {
        return actor.attemptsTo(rest_1.Send.a(rest_1.PostRequest.to(this.path)
            .using({
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token '.concat(this.token)
            },
            data: this.body,
            timeout: 5000
        })));
    };
    return Post;
}());
exports.Post = Post;
//1d85adc0b36932d6c9cea079ce3d4d12979ebe58
//# sourceMappingURL=post.js.map