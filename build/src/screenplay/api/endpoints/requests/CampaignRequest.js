"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
var date = require('date-and-time');
var now = new Date();
var next_month = date.addMonths(now, 1);
var past = date.addDays(now, -3);
var future = date.addDays(now, +2);
var campaignName = faker.company.companyName();
function getCampaignName() {
    return campaignName;
}
exports.getCampaignName = getCampaignName;
exports.campaignRequest = {
    name: campaignName,
    fromDate: date.format(now, 'YYYY-MM-DD'),
    toDate: date.format(next_month, 'YYYY-MM-DD')
};
exports.campaignRequestAlreadyStarted = {
    name: campaignName,
    fromDate: date.format(past, 'YYYY-MM-DD'),
    toDate: date.format(next_month, 'YYYY-MM-DD')
};
exports.campaignRequestFutureDate = {
    name: campaignName,
    fromDate: date.format(past, 'YYYY-MM-DD'),
    toDate: date.format(next_month, 'YYYY-MM-DD')
};
//# sourceMappingURL=CampaignRequest.js.map