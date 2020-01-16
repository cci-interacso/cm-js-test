"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var core_1 = require("@serenity-js/core");
var BrowseTo_1 = require("../../src/screenplay/ui/tasks/BrowseTo");
var Login_1 = require("../../src/screenplay/ui/tasks/Login");
var UploadACreative_1 = require("../../src/screenplay/ui/tasks/UploadACreative");
var rest_1 = require("@serenity-js/rest");
var protractor_1 = require("@serenity-js/protractor");
var ptor_1 = require("protractor/built/ptor");
var get_1 = require("../../src/screenplay/api/endpoints/get");
var session_Token_1 = require("../../src/screenplay/api/authentication/session_Token");
var ShareACreative_1 = require("../../src/screenplay/ui/tasks/ShareACreative");
var LoginPage_1 = require("../../src/screenplay/ui/po/LoginPage");
cucumber_1.Given(/(.*) uploads a static creative as an internal user/, function (actorName) {
    var filePath = '/home/niyifalade/CM_JS_TEST/src/resources/download.jpeg';
    return this.stage.theActorCalled(actorName).attemptsTo(BrowseTo_1.BrowseTo.LoginPage(), Login_1.Login.loginOnCM(process.env.SPANISH_INTERNAL_USERNAME, process.env.SPANISH_INTERNAL_PASSWORD), UploadACreative_1.UploadACreative.upload(filePath));
});
cucumber_1.Then(/the file is available/, function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    core_1.Actor.named('Stan').whoCan(rest_1.CallAnApi.at(process.env.REST_API), protractor_1.BrowseTheWeb.using(ptor_1.protractor.browser));
                    _b = (_a = this.stage.theActorInTheSpotlight()).attemptsTo;
                    _d = (_c = get_1.Get).get;
                    _e = ["/creatives/static?userGroupsDetail=false" /* "getCreatives" */.toString()];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent()]))])];
            }
        });
    });
});
cucumber_1.Then(/share the creative with my regional external users/, function () {
    return this.stage.theActorInTheSpotlight()
        .attemptsTo(ShareACreative_1.ShareACreative.assignCreative(), 
    //   Hover.over(LoginPage.HoverOnLogin),
    //   Wait.upTo(Duration.ofSeconds(5)).until(LoginPage.loginOut, isVisible()),
    protractor_1.Click.on(LoginPage_1.LoginPage.JOIN), protractor_1.Wait.for(core_1.Duration.ofSeconds(39)));
});
cucumber_1.When(/When I am on the Library Screen of the APP/, function () {
    return this.stage.theActorInTheSpotlight()
        .attemptsTo();
});
//# sourceMappingURL=creativeLibrarySteps.js.map