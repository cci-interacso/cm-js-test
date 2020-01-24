"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("@serenity-js/protractor");
var protractor_2 = require("protractor");
var Library = /** @class */ (function () {
    function Library() {
    }
    Library.LIBRARY = protractor_1.Target.the('Library').located(protractor_2.by.linkText('Library'));
    Library.UPLOAD_CREATIVES_ICON = protractor_1.Target.the('upload creatives').located(protractor_2.by.xpath("//button[@data-test-id='upload-creativities']"));
    Library.UPLOAD_CREATIVES_FROM_DEVICE = protractor_1.Target.the('upload from device').located(protractor_2.by.css(" div:nth-child(2) > div.css-w6fiy5.e5tq3qf3"));
    Library.SELECT_CREATIVES = protractor_1.Target.the('select creatives').located(protractor_2.by.css("div > div > p > span"));
    Library.UPLOAD_SUCCESS = protractor_1.Target.the('select creatives').located(protractor_2.by.css("div.css-ihkhlw.en6jioo11 > div > div.label"));
    Library.NEXT_BUTTON = protractor_1.Target.the('next button').located(protractor_2.by.xpath("//*[contains(text(),'Next')]"));
    Library.SEARCH_BY_NAME = protractor_1.Target.the('search by name').located(protractor_2.by.xpath("//input[@placeholder='Search by name...']"));
    Library.UPLOAD_LINK = protractor_1.Target.the('upload a file').located(protractor_2.by.xpath("//input[@accept='image/*,video/*']"));
    Library.ADD_USER = protractor_1.Target.the('Add user to creative content').located(protractor_2.by.xpath("//button[@data-test-id='add-user']"));
    Library.SELECT_ADDED_CREATIVES = protractor_1.Target.the('select a static creative').located(protractor_2.by.xpath("//div[contains(text(), 'market.jpeg')]"));
    Library.ADD_CREATIVE_TO_SEVILLE = protractor_1.Target.the('add static creative to seville').located(protractor_2.by.xpath("//li[2]/label/span[1]/input[@class='ant-checkbox-input'] "));
    Library.ASSIGN_CREATIVE = protractor_1.Target.the('assign creative ').located(protractor_2.by.xpath("//button[@class='ant-btn ant-btn-primary']"));
    Library.SUCCESS_MESSAGE = protractor_1.Target.the('creative added success message').located(protractor_2.by.xpath("//div[@class='ant-notification-notice-message']"));
    Library.STATIC_CREATIVE = protractor_1.Target.the('static creative').located(protractor_2.by.xpath("//*[contains(text(),'market.jpeg')]"));
    Library.CREATIVE_IMAGE = protractor_1.Target.the('creative image').located(protractor_2.by.xpath("//*[contains(text(),'market.jpeg')]/preceding::div[1]/img"));
    Library.LIBRARY_HOW_T0_UPLOAD = protractor_1.Target.the('how to add creatives').located(protractor_2.by.xpath("//*[contains(text(),'Library')]"));
    return Library;
}());
exports.Library = Library;
//# sourceMappingURL=library.js.map