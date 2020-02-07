@cmv-89 @regression
Feature: Permit players to be used by an external user

   Scenario: add player to the seville group
      Given Barry gets content manager screens
      Then Barry get okta groups
      Then extract id for content manager seville
      Then Barry gets content manager screens
      Then get screen id
      Then add seville group to screen 

   @ui @cmv-119 @retest
   Scenario: Permit a screen to be used by a external user group
      Given Stan is an internal user in the Spanish Group
      Then Stan can click on Screen and assign it to the Seville group