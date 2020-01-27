var faker = require('faker');
var date = require('date-and-time');

const now = new Date();
const next_month = date.addMonths(now, 1);
const past = date.addDays(now,-3);
const future = date.addDays(now,+2);


export var campaignRequest = {
    name: faker.company.companyName(),
    fromDate: date.format(now, 'YYYY-MM-DD'),
    toDate: date.format(next_month, 'YYYY-MM-DD')
}

export const campaignRequestAlreadyStarted = {
    name: faker.company.companyName(),
    fromDate: date.format(past, 'YYYY-MM-DD'),
    toDate: date.format(next_month, 'YYYY-MM-DD')
}

export const campaignRequestFutureDate = {
    name: faker.company.companyName(),
    fromDate: date.format(past, 'YYYY-MM-DD'),
    toDate: date.format(next_month, 'YYYY-MM-DD')
}






