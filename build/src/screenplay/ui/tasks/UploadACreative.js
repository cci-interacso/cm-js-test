"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
var library_1 = require("../po/library");
var waitTimeInMillseconds = core_1.Duration.ofMilliseconds(10000);
var UploadACreative = /** @class */ (function () {
    function UploadACreative(upload) {
        this.upload = upload;
    }
    UploadACreative.upload = function (upload) {
        return new UploadACreative(upload);
    };
    UploadACreative.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Wait.upTo(waitTimeInMillseconds).until(library_1.Library.LIBRARY, protractor_1.isClickable()), protractor_1.Click.on(library_1.Library.LIBRARY), protractor_1.Wait.upTo(waitTimeInMillseconds).until(library_1.Library.UPLOAD_CREATIVES_ICON, protractor_1.isClickable()), protractor_1.Click.on(library_1.Library.UPLOAD_CREATIVES_ICON), protractor_1.Click.on(library_1.Library.UPLOAD_CREATIVES_FROM_DEVICE), protractor_1.Enter.theValue(this.upload).into(library_1.Library.UPLOAD_LINK), protractor_1.Wait.upTo(core_1.Duration.ofSeconds(30)).until(library_1.Library.UPLOAD_SUCCESS, protractor_1.isVisible()), protractor_1.Click.on(library_1.Library.NEXT_BUTTON), protractor_1.Wait.for(core_1.Duration.ofSeconds(5)));
    };
    return UploadACreative;
}());
exports.UploadACreative = UploadACreative;
//# sourceMappingURL=UploadACreative.js.map