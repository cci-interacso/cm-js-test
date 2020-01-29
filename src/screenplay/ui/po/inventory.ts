import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';


export class Inventory {

    static INVENTORY = Target.the('Inventory').located(by.linkText('Inventory'));
    static HOVER_ON_PLAYER  = Target.the('hover on searched inventory').located(by.xpath("//*[contains(text(), 'BALHAM')]"))
    static ASSIGN_CAMPAIGN = Target.the('assign the inventory').located(by.xpath("//*[@data-test-id='assign-campaign']"))
    static ASSIGN_TO_SEVILLE = Target.the('Assign inv to seville').located(by.xpath("//*[contains(text(), '!App Content Manager (Seville)')]"))

}