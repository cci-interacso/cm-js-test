 var faker = require('faker');
 var date = require('date-and-time');

const now = new Date();
const next_month = date.addMonths(now, 1);
const past = date.addDays(now,-3);

const campaignName:string = faker.company.companyName()

export function getCampaignName():string{
    return campaignName
}

export var campaignRequest = {
    name: campaignName,
    fromDate: date.format(now, 'YYYY-MM-DD'),
    toDate: date.format(next_month, 'YYYY-MM-DD')
}

export const campaignRequestAlreadyStarted = {
    name: campaignName,
    fromDate: date.format(past, 'YYYY-MM-DD'),
    toDate: date.format(next_month, 'YYYY-MM-DD')
}



