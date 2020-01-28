@cmv-89 @regression
Feature: Permit players to be used by an external user

   Scenario: add player to the seville group
      Given Barry gets content manager screens
      Then Barry get okta groups
      Then extract id for content manager seville
      Then Barry gets content manager screens
      Then get screen id
      Then add seville group to screen 
     
