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
var patch_1 = require("../../src/screenplay/api/endpoints/patch");
var CampaignRequest_1 = require("../../src/screenplay/api/endpoints/requests/CampaignRequest");
var core_1 = require("@serenity-js/core");
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
var contentScheduleID;
var screens;
var contentSchedule;
var templateID;
var creativeName;
cucumber_1.Given(/(.*) get okta groups/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = core_1.actorCalled(actor)).attemptsTo;
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
            rest_1.CallAnApi.as(core_1.actorInTheSpotlight())
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
                    _b = (_a = core_1.actorCalled(actor)
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
        var fd, actual, target, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    fd = new FormData();
                    creativeName = faker.name.firstName();
                    actual = path.resolve(process.cwd(), 'src/resources/test.jpeg');
                    target = path.resolve(process.cwd(), "src/resources/toDeleteContent/" + creativeName + ".jpeg");
                    try {
                        file_system_1.fs.copyFile(actual, target, function (err) {
                            // if (err) throw err;
                        });
                    }
                    catch (err) {
                        console.log(err);
                    }
                    fd.append('file', file_system_1.fs.createReadStream(target));
                    _b = (_a = core_1.actorCalled(actor)).attemptsTo;
                    _d = (_c = postUpload_1.PostUpload).post;
                    _e = ["/creatives/static" /* addStaticContent */, fd];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/get creative id/, function () {
    return rest_1.CallAnApi.as(core_1.actorInTheSpotlight()).mapLastResponse(function (res) {
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
                    _b = (_a = core_1.actorCalled(actor)).attemptsTo;
                    _d = (_c = put_1.Put).put;
                    _e = ["/creatives/static" /* addStaticContent */.concat("/" + creativeID), group];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/(.*) assigns static to (default|content) schedule/, function (actor, option) {
    return __awaiter(this, void 0, void 0, function () {
        var creative, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0:
                    creative = {
                        creativesId: [creativeFileID]
                    };
                    _a = option;
                    switch (_a) {
                        case 'default': return [3 /*break*/, 1];
                        case 'content': return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 5];
                case 1:
                    _c = (_b = core_1.actorCalled(actor)).attemptsTo;
                    _e = (_d = post_1.Post).post;
                    _f = ["/campaigns/" /* addstaticContentToDefaultSchedule */.concat(CreateCampaignSteps_1.CampaignID() + "/static"), creative];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 2: return [2 /*return*/, _c.apply(_b, [_e.apply(_d, _f.concat([_m.sent(), 200]))])];
                case 3:
                    _h = (_g = core_1.actorCalled(actor)).attemptsTo;
                    _k = (_j = post_1.Post).post;
                    _l = ["/campaigns/" /* addstaticContentToDefaultSchedule */.concat(CreateCampaignSteps_1.CampaignID() + "/schedules/" /* schedules */ + contentScheduleID + "/static"), creative];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 4: return [2 /*return*/, _h.apply(_g, [_k.apply(_j, _l.concat([_m.sent(), 200]))])];
                case 5: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When(/he (pauses|scheduled) the campaign/, function (option) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, status, _b, _c, _d, _e, _f, status, _g, _h, _j, _k, _l;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0:
                    _a = option;
                    switch (_a) {
                        case 'pauses': return [3 /*break*/, 1];
                        case 'scheduled': return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 5];
                case 1:
                    status = { status: 2 };
                    _c = (_b = core_1.actorInTheSpotlight()).attemptsTo;
                    _e = (_d = patch_1.Patch).patch;
                    _f = ["/campaigns" /* campaigns */.concat("/" + CreateCampaignSteps_1.CampaignID() + "/status"), status];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 2: return [2 /*return*/, _c.apply(_b, [_e.apply(_d, _f.concat([_m.sent(), 200]))])];
                case 3:
                    status = { status: 3 };
                    _h = (_g = core_1.actorInTheSpotlight()).attemptsTo;
                    _k = (_j = patch_1.Patch).patch;
                    _l = ["/campaigns" /* campaigns */.concat("/" + CreateCampaignSteps_1.CampaignID() + "/status"), status];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 4: return [2 /*return*/, _h.apply(_g, [_k.apply(_j, _l.concat([_m.sent(), 200]))])];
                case 5: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then(/(.*) gets content manager screens/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = core_1.actorCalled(actor)).attemptsTo;
                    _d = (_c = get_1.Get).get;
                    _e = ["/screens?userGroupsDetail=false&limit=4" /* screens */];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/get screen id/, function () {
    rest_1.CallAnApi.as(core_1.actorInTheSpotlight())
        .mapLastResponse(function (response) {
        screens = response.data.docs.filter(getI);
    });
    function getI(v) {
        return v.name === "TOOTBEC SHELTER1";
    }
});
cucumber_1.Then(/(.*) edits campaign schedule/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var editScheduleRequest, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    editScheduleRequest = {
                        screens: [],
                        name: 'name'
                    };
                    _b = (_a = core_1.actorCalled(actor)).attemptsTo;
                    _d = (_c = put_1.Put).put;
                    _e = ["/campaigns" /* campaigns */.concat("/" + CreateCampaignSteps_1.CampaignID() + "/schedules/" /* schedules */), editScheduleRequest];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/(.*) post the schedules for the campaign/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = core_1.actorCalled(actor)).attemptsTo;
                    _d = (_c = post_1.Post).post;
                    _e = ["/campaigns" /* campaigns */.concat("/" + CreateCampaignSteps_1.CampaignID() + "/schedules/" /* schedules */), ""];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 201]))])];
            }
        });
    });
});
cucumber_1.Then(/(.*) get content schedule/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = core_1.actorCalled(actor)).attemptsTo;
                    _d = (_c = get_1.Get).get;
                    _e = ["/campaigns" /* campaigns */.concat("/" + CreateCampaignSteps_1.CampaignID() + "/schedules/" /* schedules */)];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/get content schedule id/, function () {
    rest_1.CallAnApi.as(core_1.actorInTheSpotlight())
        .mapLastResponse(function (response) {
        contentScheduleID = response.data._id;
        contentSchedule = response.data;
    });
});
cucumber_1.Then(/add players to schedule/, function () {
    return __awaiter(this, void 0, void 0, function () {
        var screensRequest, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    screensRequest = {
                        dynamicContent: [],
                        screens: [screens[0]._id],
                        screensGroups: [],
                        name: 'All week'
                    };
                    _b = (_a = core_1.actorInTheSpotlight()).attemptsTo;
                    _d = (_c = put_1.Put).put;
                    _e = ["/campaigns" /* campaigns */.concat("/" + CreateCampaignSteps_1.CampaignID() + "/schedules/" /* schedules */ + contentScheduleID), screensRequest];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/add a template/, function () {
    return __awaiter(this, void 0, void 0, function () {
        var template, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    template = {
                        name: 'templateX',
                        schedules: [{
                                weekDays: contentSchedule.docs[0].weekDays,
                                startTime: '00:00:00',
                                endTime: "23:59:59",
                                visibility: true,
                                screens: [contentSchedule.docs[0].screens[0]],
                                screensGroups: [],
                                name: 'name',
                                fromDate: contentSchedule.docs[0].fromDate,
                                toDate: contentSchedule.docs[0].toDate,
                                priority: 1,
                                index: 1
                            }]
                    };
                    _b = (_a = core_1.actorInTheSpotlight()).attemptsTo;
                    _d = (_c = post_1.Post).post;
                    _e = ["/templates/" /* templates */, template];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 201]))])];
            }
        });
    });
});
cucumber_1.Then(/get template id/, function () {
    return rest_1.CallAnApi.as(core_1.actorInTheSpotlight())
        .mapLastResponse(function (response) {
        templateID = response.data._id;
        //  console.log(response.data)
    });
});
cucumber_1.Then(/create a campaign from template id/, function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = core_1.actorInTheSpotlight()).attemptsTo;
                    _d = (_c = post_1.Post).post;
                    _e = ["/campaigns" /* getCampaigns */.concat("/template/" /* template */ + templateID), CampaignRequest_1.campaignRequest];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 201]))])];
            }
        });
    });
});
cucumber_1.Then(/(.*) get the template using templateID/, function (actor) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = core_1.actorCalled(actor)).attemptsTo;
                    _d = (_c = get_1.Get).get;
                    _e = ["/template/" /* template */.concat(templateID)];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
cucumber_1.Then(/campaign is successfully deleted/, function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = core_1.actorInTheSpotlight()).attemptsTo;
                    _d = (_c = get_1.Get).get;
                    _e = ["/campaigns" /* getCampaigns */.concat("/" + CreateCampaignSteps_1.CampaignID())];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 404]))])];
            }
        });
    });
});
cucumber_1.Then(/add seville group to screen/, function () {
    return __awaiter(this, void 0, void 0, function () {
        var addGrouptoScreenRequest, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    addGrouptoScreenRequest = {
                        userGroups: [SPAIN_ID, SEVILLE_ID]
                    };
                    _b = (_a = core_1.actorInTheSpotlight()).attemptsTo;
                    _d = (_c = put_1.Put).put;
                    _e = ["/screens/" /* screen */.concat(screens[0]._id), addGrouptoScreenRequest];
                    return [4 /*yield*/, session_Token_1.AuthenticateApi()];
                case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, _e.concat([_f.sent(), 200]))])];
            }
        });
    });
});
function creative() {
    return creativeName;
}
exports.creative = creative;
//# sourceMappingURL=servicesSteps.js.map