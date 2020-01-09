Feature: View campaign status
  As a user of Content manager
  I should be able to see the status of the campaigns

  @test
  Scenario: New campaigns are in draft status
    Given there is a new campaign
    Then get campaign id from the response
    Then the campaign has a status of draft 
    
