export const Status = {
    DRAFT: 1,
    PAUSED: 2,
    ONGOING: 3
}

export const campaignPath = {
    CAMPAIGNS: '/campaigns',
    GET_CAMPAIGNS: '/campaigns/',
    GET_CREATIVES: '/creatives/static?userGroupsDetail=false'
}


export const enum Path {
    campaigns = '/campaigns',
    getCampaigns = '/campaigns',
    getCreatives = '/creatives/static?userGroupsDetail=false',
    getGroups = '/okta/groups',
    addStaticContent = '/creatives/static'

}

interface myPath {
    Path:string
}


