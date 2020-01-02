"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
require('dotenv').config();
var BrowseTo = /** @class */ (function (_super) {
    __extends(BrowseTo, _super);
    function BrowseTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowseTo.LoginPage = function () {
        return new BrowseTo();
    };
    BrowseTo.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Navigate.to(process.env.BASE_URL));
    };
    return BrowseTo;
}(core_1.Task));
exports.BrowseTo = BrowseTo;
//# sourceMappingURL=BrowseTo.js.map