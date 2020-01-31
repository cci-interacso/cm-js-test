@CMV-83 @api @regression  
Feature: Add 'permitted content' to a campaign

  Background:
    Given there is a new campaign starting today
    Then get campaign id from the response
    Then the campaign has a status of draft
    Then stan get okta groups
    Then extract id for content manager seville
    Then Starks adds the campaign to a group
    Then stan upload a creative
    Then get creative id
    Then mark assign static creative to external group

   @ui @test
  Scenario: Display permitted creative content for external users
    Given Barry is an external user in the Spanish Region
    When I am on the Library Screen of the APP
    Then only permitted static creatives are displayed
 

   @ui 
  Scenario: Add Permitted content [draft status] to Campaign allowed by External user
    Given Tony is an external user in the Spanish Region
    And campaign should have draft status
    When add a permitted creative content to my campaign
    Then creative content is added to Campaign content schedule
 
  
   @ui
  Scenario: Permitted creative content Default content schedule
    Given Tony is an external user in the Spanish Region
    And search for a campaign
    And I have selected default content schedule
    And permitted creative is successfully added to the default content schedule
  
