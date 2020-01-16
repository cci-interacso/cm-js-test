"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
var date = require('date-and-time');
var now = new Date();
var next_month = date.addMonths(now, 1);
exports.campaignRequest = {
    name: faker.company.companyName(),
    fromDate: date.format(now, 'YYYY-MM-DD'),
    toDate: date.format(next_month, 'YYYY-MM-DD')
};
//# sourceMappingURL=CampaignRequest.js.map