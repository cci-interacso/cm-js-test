import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';


export class Library {

    static LIBRARY = Target.the('Library').located(by.linkText('Library'));
    static UPLOAD_CREATIVES_ICON = Target.the('upload creatives').located(by.xpath("//button[@data-test-id='upload-creativities']"));
    static UPLOAD_CREATIVES_FROM_DEVICE = Target.the('upload from device').located(by.css(" div:nth-child(2) > div.css-w6fiy5.e5tq3qf3"));
    static SELECT_CREATIVES = Target.the('select creatives').located(by.css("div > div > p > span"));
    static UPLOAD_SUCCESS = Target.the('select creatives').located(by.css("div.css-ihkhlw.en6jioo11 > div > div.label"));
    static NEXT_BUTTON = Target.the('next button').located(by.xpath("//button[@class='ui blue icon right labeled button']"));
    static SEARCH_BY_NAME = Target.the('search by name').located(by.xpath("//input[@placeholder='Search by name...']"));
    static UPLOAD_LINK = Target.the('upload a file').located(by.xpath("//input[@accept='image/*,video/*']"));
    static ADD_USER = Target.the('Add user to creative content').located(by.xpath("//button[@data-test-id='add-user']"));
    static SELECT_ADDED_CREATIVES = Target.the('select a static creative').located(by.xpath("//div[contains(text(), 'download.jpeg')]"));
    static ADD_CREATIVE_TO_SEVILLE = Target.the('add static creative to seville').located(by.xpath("//li[2]/label/span[1]/input[@class='ant-checkbox-input'] "));
    static ASSIGN_CREATIVE = Target.the('assign creative ').located(by.xpath("//button[@class='ant-btn ant-btn-primary']"));
    static SUCCESS_MESSAGE = Target.the('creative added success message').located(by.xpath("//div[@class='ant-notification-notice-message']"));
    static STATIC_CREATIVE = Target.the('static creative').located(by.xpath("//*[contains(text(),'market.jpeg')]"));
    static CREATIVE_IMAGE = Target.the('creative image').located(by.xpath("//*[contains(text(),'market.jpeg')]/preceding::div[1]/img"))
    static LIBRARY_HOW_T0_UPLOAD = Target.the('how to add creatives').located(by.xpath("//*[contains(text(),'Library')]"));
}
