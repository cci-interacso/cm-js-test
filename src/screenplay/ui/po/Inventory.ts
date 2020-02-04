import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class Inventory {

    static INVENTORY = Target.the('Inventory').located(by.linkText('Inventory'));
    static HOVER_ON_PLAYER = Target.the('hover on searched inventory').located(by.xpath("//*[contains(text(), 'BALHAM')]"))
    static ASSIGN_CAMPAIGN = Target.the('assign the inventory').located(by.xpath("//*[@data-test-id='assign-campaign']"))
    static ASSIGN_TO_SEVILLE = Target.the('Assign inv to seville').located(by.xpath("//*[contains(text(), '!App Content Manager (Seville)')]"))
    static ASSIGN = Target.the('assign').located(by.xpath("//button[contains(text(),'Assign')]"))
    static ASSIGN_TO_SPAIN = Target.the('Assign player to Spain').located(by.xpath("//*[contains(text(),'!App Content Manager (Spain)')]"))
    static SEARCH_BY_NAME = Target.the("search by name").located(by.xpath("//input[@placeholder='Search by name...']"));
    static ASSIGN_USERGROUP = Target.the("Assign the inventory").located(by.xpath("//button[@data-test-id='assign-campaign']"));
}