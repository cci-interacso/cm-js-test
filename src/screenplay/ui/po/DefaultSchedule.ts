import { Target } from "@serenity-js/protractor";

import { by } from "protractor";

export class DefaultSchedule {

    static DEFAULT_SCHEDULE = Target.the('Default Schedule').located(by.xpath("//*[contains(text(),'Default content')]"))
    static REVIEW_AND_EDIT = Target.the('Review and edit button').located(by.xpath("//*[contains(text(),'Review and edit')]"))
    static ADD_MORE = Target.the('Add more creative').located(by.xpath("//*[contains(text(),'Add more')]"))
    static FROM_LIBRARY = Target.the('Add more creatives from the Library').located(by.xpath("//*[contains(text(),'From library')]"))
    static CREATIVE = Target.the('select a creative').located(by.xpath("//*[contains(text(),'test.jpeg')]"))
}