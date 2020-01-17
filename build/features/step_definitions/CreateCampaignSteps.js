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
var post_1 = require("../../src/screenplay/api/endpoints/post");
var CampaignRequest_1 = require("../../src/screenplay/api/endpoints/requests/CampaignRequest");
var protractor_1 = require("@serenity-js/protractor");
var ptor_1 = require("protractor/built/ptor");
var session_Token_1 = require("../../src/screenplay/api/authentication/session_Token");
var cm_variables_1 = require("../../src/screenplay/cm_variables");
var get_1 = require("../../src/screenplay/api/endpoints/get");
var expect_1 = require("../../src/expect");
var CreateANewCampaign_1 = require("../../src/screenplay/ui/tasks/CreateANewCampaign");
var campaigns_1 = require("../../src/screenplay/ui/po/campaigns");
var file_system_1 = require("file-system");
var querystring_1 = require("querystring");
var FormData = require('form-data');
var campaignID;
var waitTimeInMillseconds = core_1.Duration.ofMilliseconds(5000);
cucumber_1.Given(/there is a new campaign/, function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    core_1.Actor.named('Apisit').whoCan(rest_1.CallAnApi.at(process.env.REST_API), protractor_1.BrowseTheWeb.using(ptor_1.protractor.browser));
                    _b = (_a = this.stage.theActorInTheSpotlight()).attemptsTo;
                    _d = (_c = post_1.Post).post;
                    _e = [cm_variables_1.campaignPath.CAMPAIGNS, CampaignRequest_1.campaignRequest];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent()]))])];
            }
        });
    });
});
cucumber_1.Then(/get campaign id from the response/, function () {
    rest_1.CallAnApi.as(this.stage.theActorInTheSpotlight())
        .mapLastResponse(function (response) { return campaignID = response.data._id; });
});
cucumber_1.Then(/Output/, function () {
    rest_1.CallAnApi.as(this.stage.theActorInTheSpotlight())
        .mapLastResponse(function (response) { return console.log(response); });
});
cucumber_1.Then(/the campaign has a status of (draft|paused|ongoing)/, function (status) {
    return __awaiter(this, void 0, void 0, function () {
        var campaign_status, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    switch (status) {
                        case "draft":
                            campaign_status = cm_variables_1.campaignStatus.DRAFT;
                            break;
                        case "paused":
                            campaign_status = cm_variables_1.campaignStatus.PAUSED;
                            break;
                        case "ongoing":
                            campaign_status = cm_variables_1.campaignStatus.ONGOING;
                            break;
                    }
                    _b = (_a = this.stage.theActorInTheSpotlight()).attemptsTo;
                    _d = (_c = get_1.Get).get;
                    _e = [cm_variables_1.campaignPath.GET_CAMPAIGNS];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent()])),
                        core_1.See.if(rest_1.LastResponse.body(), function (actual) { return expect_1.expect(actual).to.have.property('status', campaign_status); })])];
            }
        });
    });
});
cucumber_1.Given(/is on the Create campaign page/, function () {
    return this.stage.theActorInTheSpotlight().attemptsTo(protractor_1.Wait.upTo(waitTimeInMillseconds).until(campaigns_1.Campaigns.NEW_CAMPAIGN_BUTTON, protractor_1.isClickable()));
});
cucumber_1.When(/he enters/, function () {
    return this.stage.theActorInTheSpotlight().attemptsTo(CreateANewCampaign_1.CreateANewCampaign.enterNewCampaignData());
});
cucumber_1.Then(/the campaign is successfully created/, function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = this.stage.theActorInTheSpotlight()
                        .whoCan(rest_1.CallAnApi.at(process.env.REST_API))).attemptsTo;
                    _d = (_c = get_1.Get).getCampaigns;
                    _e = [cm_variables_1.campaignPath.GET_CAMPAIGNS.concat('?&limit=1&userGroupsDetail=false')];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent()])),
                        core_1.See.if(rest_1.LastResponse.body(), function (Actual) { return expect_1.expect(Actual)
                            .to.have.deep.property('docs.[0].name', CreateANewCampaign_1.CreateANewCampaign.getEntries()); })])];
            }
        });
    });
});
cucumber_1.Given(/(.*) get groups/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = core_1.Actor.named(actor).whoCan(rest_1.CallAnApi.at(process.env.REST_API), protractor_1.BrowseTheWeb.using(ptor_1.protractor.browser))).attemptsTo;
                    _d = (_c = get_1.Get).get;
                    _e = ["/okta/groups" /* getGroups */];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent()]))])];
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
            data[1].id;
            return [2 /*return*/];
        });
    });
});
cucumber_1.Then(/(.*) upload a creative/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var filePath, formdata, actor_1, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    file_system_1.fs.readFile('src/resources/download_13.jpeg', function (err, data) {
                        if (err)
                            throw err;
                        filePath = data;
                    });
                    actor_1 = core_1.Actor.named(actor).whoCan(rest_1.CallAnApi.at(process.env.REST_API), protractor_1.BrowseTheWeb.using(ptor_1.protractor.browser), formdata = querystring_1.stringify({
                        file: filePath
                    }));
                    _b = (_a = actor_1).attemptsTo;
                    _d = (_c = post_1.Post).post;
                    _e = ["/creatives/static" /* addStaticContent */, ""];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent()]))])];
            }
        });
    });
});
//# sourceMappingURL=CreateCampaignSteps.js.map