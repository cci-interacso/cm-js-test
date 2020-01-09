import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';


export class Campaigns{

    static searchByName = Target.the('search by name field').located(by.xpath("//input[@data-test-id='search-value']"));
    static newCampaign = Target.the('new campaign').located(by.xpath("//input[@data-test-id='new-campaign-button']"));

}