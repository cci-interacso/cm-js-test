@regression
Feature: View campaign status
  As a user of Content manager
  I should be able to see the status of the campaigns

  Scenario: View campaign status
    Given there is a new campaign starting today
    Then get campaign id from the response
    Then the campaign has a status of draft

 Scenario: Current campaigns are in Ongoing status
    Given there is a new campaign already started
    Then get campaign id from the response
    Then stan upload a creative 
    Then get creative id
    Then stan assigns static to default content schedule 
    Then the campaign has a status of ongoing

Scenario: Pause a campaign
    Given there is a new campaign already started
    Then get campaign id from the response
    When he pauses the campaign

   
