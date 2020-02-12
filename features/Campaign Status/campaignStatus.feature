@regression @api
Feature: View campaign status
  As a user of Content manager
  I should be able to see the status of the campaigns


  Scenario: View campaign status
    Given M has a new campaign starting today
    Then M get campaign id from the response
    Then the campaign has a status of draft


  Scenario: Current campaigns are in Ongoing status
    Given X has a new campaign starting today
    Then X get campaign id from the response
    Then stan upload a creative
    Then get creative id
    Then stan assigns static to default schedule
    Then he set the campaign status to ongoing
    Then the campaign has a status of ongoing


  Scenario: Pause a campaign
    Given Y has a new campaign already started
    Then Y get campaign id from the response
    Then stan upload a creative
    Then get creative id
    Then stan assigns static to default schedule
    When he set the campaign status to pauses
    Then the campaign has a status of paused



  Scenario: Campaigns with a future start date have a Scheduled status
    Given Z has a new campaign with a future date
    Then Z get campaign id from the response
    Then stan upload a creative
    Then get creative id
    Then stan assigns static to default schedule
    When he set the campaign status to scheduled
    Then the campaign has a status of scheduled

  
  Scenario: Completed campaign are in Completed status
    Given U has a new campaign with an end date in the past
    Then U get campaign id from the response
    Then stan upload a creative
    Then get creative id
    Then stan assigns static to default schedule
    When he set the campaign status to completed
    Then the campaign has a status of completed





