@cmv-92 @regression
Feature: External user to edit campaign content schedule information

   @ui
   Scenario: Scenario name
   Given there is a new campaign starting today
    Then get campaign id from the response
    Then the campaign has a status of draft
    Then stan get okta groups
    Then extract id for content manager seville
    Then Starks adds the campaign to a group
    And Barry is an external user in the Spanish Region
    And search for a campaign
    When Barry edits the campaign
    Then I can edit the campaign
    And the campaign is successfully edited 
  