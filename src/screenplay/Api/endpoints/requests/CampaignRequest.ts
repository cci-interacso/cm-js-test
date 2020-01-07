var faker = require('faker');
var date = require('date-and-time');

const now = new Date();
const next_month = date.addMonths(now, 1);

export var campaignRequest = {
    name: faker.company.companyName(),
    fromDate: date.format(now, 'YYYY-MM-DD'),
    toDate: date.format(next_month, 'YYYY-MM-DD')
}