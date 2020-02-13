@cmv-92 @regression
Feature: External user to edit campaign content schedule information

   Background:
      Given D has a new campaign starting today
      Then D get campaign id from the response
      Then the campaign has a status of draft
      Then stan get okta groups
      Then extract id for content manager seville
      Then Starks adds the campaign to a group
      Then stan post the schedules for the campaign

   @ui 
   Scenario: External user can edit shared content schedule of shared campaign
      And Barry is an external user in the Spanish Region
      And search for a campaign
      And edit the campaign
      When edit the content schedule
      And Barry get content schedule
      Then content schedule is updated 

