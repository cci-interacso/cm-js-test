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
var CampaignRequest_1 = require("../../src/screenplay/api/endpoints/requests/CampaignRequest");
var protractor_1 = require("@serenity-js/protractor");
var session_Token_1 = require("../../src/screenplay/api/authentication/session_Token");
var cm_variables_1 = require("../../src/screenplay/cm_variables");
var get_1 = require("../../src/screenplay/api/endpoints/get");
var expect_1 = require("../../src/expect");
var CreateANewCampaign_1 = require("../../src/screenplay/ui/tasks/CreateANewCampaign");
var campaigns_1 = require("../../src/screenplay/ui/po/campaigns");
var post_1 = require("../../src/screenplay/api/endpoints/post");
var SearchForCampaign_1 = require("./../../src/screenplay/ui/tasks/SearchForCampaign");
var LogOut_1 = require("./../../src/screenplay/ui/tasks/LogOut");
var EditCampaign_1 = require("../../src/screenplay/ui/tasks/EditCampaign");
var date = require('date-and-time');
var campaignID;
var name;
var waitTimeInMillseconds = core_1.Duration.ofMilliseconds(15000);
cucumber_1.Given(/there is a new campaign (starting today|already started|with a future date)/, function (option) { return __awaiter(void 0, void 0, void 0, function () {
    var faker, now, next_month, campaignRequest1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    return __generator(this, function (_s) {
        switch (_s.label) {
            case 0:
                faker = require('faker');
                now = new Date();
                next_month = date.addMonths(now, 1);
                campaignRequest1 = {
                    name: faker.company.companyName(),
                    fromDate: date.format(now, 'YYYY-MM-DD'),
                    toDate: date.format(next_month, 'YYYY-MM-DD')
                };
                core_1.actorCalled('Apisit');
                _a = option;
                switch (_a) {
                    case 'starting today': return [3 /*break*/, 1];
                    case 'already started': return [3 /*break*/, 3];
                    case 'with a future date': return [3 /*break*/, 5];
                }
                return [3 /*break*/, 7];
            case 1:
                _c = (_b = core_1.actorInTheSpotlight()).attemptsTo;
                _e = (_d = post_1.Post).post;
                _f = ["/campaigns" /* getCampaigns */, campaignRequest1];
                return [4 /*yield*/, session_Token_1.AuthenticateApi()];
            case 2: return [2 /*return*/, _c.apply(_b, [_e.apply(_d, _f.concat([_s.sent(), 201]))])];
            case 3:
                _h = (_g = core_1.actorInTheSpotlight()).attemptsTo;
                _k = (_j = post_1.Post).post;
                _l = ["/campaigns" /* getCampaigns */, CampaignRequest_1.campaignRequestAlreadyStarted];
                return [4 /*yield*/, session_Token_1.AuthenticateApi()];
            case 4: return [2 /*return*/, _h.apply(_g, [_k.apply(_j, _l.concat([_s.sent(), 201]))])];
            case 5:
                _o = (_m = core_1.actorInTheSpotlight()).attemptsTo;
                _q = (_p = post_1.Post).post;
                _r = ["/campaigns" /* getCampaigns */, CampaignRequest_1.campaignRequestFutureDate];
                return [4 /*yield*/, session_Token_1.AuthenticateApi()];
            case 6: return [2 /*return*/, _o.apply(_m, [_q.apply(_p, _r.concat([_s.sent(), 201]))])];
            case 7: return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/get campaign id from the response/, function () {
    return rest_1.CallAnApi.as(core_1.actorInTheSpotlight())
        .mapLastResponse(function (response) {
        campaignID = response.data._id;
        name = response.data.name;
    });
});
function getCampaignName() {
    return name;
}
exports.getCampaignName = getCampaignName;
cucumber_1.Then(/Output/, function () {
    rest_1.CallAnApi.as(core_1.actorInTheSpotlight())
        .mapLastResponse(function (response) { return console.log(response.data); });
});
cucumber_1.Then(/the campaign has a status of (draft|paused|ongoing)/, function (status) {
    return __awaiter(this, void 0, void 0, function () {
        var campaign_status, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    switch (status) {
                        case "draft":
                            campaign_status = cm_variables_1.Status.DRAFT;
                            break;
                        case "paused":
                            campaign_status = cm_variables_1.Status.PAUSED;
                            break;
                        case "ongoing":
                            campaign_status = cm_variables_1.Status.ONGOING;
                            break;
                    }
                    _b = (_a = core_1.actorInTheSpotlight()).attemptsTo;
                    _d = (_c = get_1.Get).get;
                    _e = ["/campaigns" /* getCampaigns */.concat('?userGroupsDetail=false&limit=1')];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200])),
                        core_1.See.if(rest_1.LastResponse.body(), function (Actual) { return expect_1.expect(Actual)
                            .to.have.deep.property('docs.[0].status', campaign_status); })])];
            }
        });
    });
});
cucumber_1.Given(/is on the Create campaign page/, function () {
    return core_1.actorInTheSpotlight().attemptsTo(protractor_1.Wait.upTo(waitTimeInMillseconds).until(campaigns_1.Campaigns.NEW_CAMPAIGN_BUTTON, protractor_1.isClickable()));
});
cucumber_1.When(/he enters/, function () {
    return core_1.actorInTheSpotlight().attemptsTo(CreateANewCampaign_1.CreateANewCampaign.enterNewCampaignData());
});
cucumber_1.Then(/the campaign is successfully created/, function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = core_1.actorInTheSpotlight()).attemptsTo;
                    _d = (_c = get_1.Get).getCampaigns;
                    _e = [cm_variables_1.campaignPath.GET_CAMPAIGNS.concat('?&limit=1&userGroupsDetail=false')];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200])),
                        core_1.See.if(rest_1.LastResponse.body(), function (Actual) { return expect_1.expect(Actual)
                            .to.have.deep.property('docs.[0].name', CreateANewCampaign_1.CreateANewCampaign.getEntries()); })])];
            }
        });
    });
});
cucumber_1.Then(/search for a campaign/, function () {
    return core_1.actorInTheSpotlight().attemptsTo(SearchForCampaign_1.SearchForCampaign.goToCampaigns("Schinner LLC"), EditCampaign_1.EditCampaign.editCampaign());
});
cucumber_1.Then(/Logout/, function () {
    return core_1.actorInTheSpotlight().attemptsTo(LogOut_1.LogOut.userLogout(), protractor_1.Wait.for(core_1.Duration.ofSeconds(3)));
});
function CampaignID() {
    return campaignID;
}
exports.CampaignID = CampaignID;
function campaignName() {
    return name;
}
exports.campaignName = campaignName;
//# sourceMappingURL=CreateCampaignSteps.js.map