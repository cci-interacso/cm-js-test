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
var rest_1 = require("@serenity-js/rest");
var protractor_1 = require("@serenity-js/protractor");
var ptor_1 = require("protractor/built/ptor");
var session_Token_1 = require("../../src/screenplay/api/authentication/session_Token");
var get_1 = require("../../src/screenplay/api/endpoints/get");
var put_1 = require("../../src/screenplay/api/endpoints/put");
var CreateCampaignSteps_1 = require("./CreateCampaignSteps");
var file_system_1 = require("file-system");
var postUpload_1 = require("../../src/screenplay/api/endpoints/postUpload");
var post_1 = require("../../src/screenplay/api/endpoints/post");
var FormData = require('form-data');
var faker = require('faker');
var path = require('path');
var creativeID;
var userGroup;
var campaignID;
var name;
var SEVILLE_ID;
var SPAIN_ID;
var creativeFileID;
cucumber_1.Given(/(.*) get okta groups/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = core_1.Actor.named(actor).whoCan(rest_1.CallAnApi.at(process.env.REST_API), protractor_1.BrowseTheWeb.using(ptor_1.protractor.browser))).attemptsTo;
                    _d = (_c = get_1.Get).get;
                    _e = ["/okta/groups" /* getGroups */];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/extract id for content manager seville/, function () {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            rest_1.CallAnApi.as(this.stage.theActorInTheSpotlight())
                .mapLastResponse(function (response) { return data = response.data; });
            SEVILLE_ID = data[1].id;
            SPAIN_ID = data[2].id;
            return [2 /*return*/];
        });
    });
});
cucumber_1.Then(/(.*) adds the campaign to a group/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var groups, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    groups = {
                        userGroups: [SPAIN_ID, SEVILLE_ID]
                    };
                    _b = (_a = core_1.Actor.named(actor)
                        .whoCan(rest_1.CallAnApi.at(process.env.REST_API), protractor_1.BrowseTheWeb.using(ptor_1.protractor.browser))).attemptsTo;
                    _d = (_c = put_1.Put).put;
                    _e = ["/campaigns" /* campaigns */.concat("/" + CreateCampaignSteps_1.CampaignID()), groups];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/(.*) upload a creative/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var fd, name, actual, target, actorPost, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    fd = new FormData();
                    name = faker.internet.userName();
                    actual = path.resolve(process.cwd(), 'src/resources/test.jpeg');
                    target = path.resolve(process.cwd(), "src/resources/toDeleteContent/" + name + ".jpeg");
                    file_system_1.fs.copyFile(actual, target, function (err) {
                        if (err)
                            throw err;
                    });
                    fd.append('file', file_system_1.fs.createReadStream(target));
                    actorPost = core_1.Actor.named(actor).whoCan(rest_1.CallAnApi.at(process.env.REST_API), protractor_1.BrowseTheWeb.using(ptor_1.protractor.browser));
                    _b = (_a = actorPost).attemptsTo;
                    _d = (_c = postUpload_1.PostUpload).post;
                    _e = ["/creatives/static" /* addStaticContent */, fd];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/get creative id/, function () {
    return rest_1.CallAnApi.as(this.stage.theActorInTheSpotlight()).mapLastResponse(function (res) {
        creativeID = res.data._id;
        creativeFileID = res.data.fileId;
    });
});
cucumber_1.Then(/(.*) assign static creative to external group/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var group, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    group = {
                        userGroups: [SEVILLE_ID, SPAIN_ID]
                    };
                    _b = (_a = core_1.Actor.named(actor)
                        .whoCan(rest_1.CallAnApi.at(process.env.REST_API), protractor_1.BrowseTheWeb.using(ptor_1.protractor.browser))).attemptsTo;
                    _d = (_c = put_1.Put).put;
                    _e = ["/creatives/static" /* addStaticContent */.concat("/" + creativeID), group];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/(.*) assigns static to default content schedule/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var creative, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    creative = {
                        creativesId: [creativeFileID]
                    };
                    _b = (_a = core_1.Actor.named(actor)
                        .whoCan(rest_1.CallAnApi.at(process.env.REST_API), protractor_1.BrowseTheWeb.using(ptor_1.protractor.browser))).attemptsTo;
                    _d = (_c = post_1.Post).post;
                    _e = ["/campaigns/" /* addstaticContentToDefaultSchedule */.concat(CreateCampaignSteps_1.CampaignID() + "/static"), creative];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.When(/he pauses the campaign/, function () {
});
//# sourceMappingURL=servicesSteps.js.map