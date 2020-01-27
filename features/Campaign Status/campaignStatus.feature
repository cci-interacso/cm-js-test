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
    Then stan assigns static to default schedule 
    Then the campaign has a status of ongoing


Scenario: Pause a campaign
    Given there is a new campaign already started
    Then get campaign id from the response
    Then stan upload a creative 
    Then get creative id
    Then stan assigns static to default schedule 
    When he pauses the campaign
    Then the campaign has a status of paused


Scenario: Campaigns with a future start date have a Scheduled status
    Given there is a new campaign with a future date 
    Then get campaign id from the response
    Then stan upload a creative 
    Then get creative id
    Then stan assigns static to default schedule
     When he scheduled the campaign
    Then the campaign has a status of ongoing 
   

   
