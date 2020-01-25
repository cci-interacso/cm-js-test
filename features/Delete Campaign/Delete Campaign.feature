@apu @ui @regression
Feature: Delete Campaigns

  As a user
  I want to be able to delete old campaigns

 
  Scenario: Delete the campaign
    Given there is a new campaign starting today
    Then get campaign id from the response
    And S is an internal user in the Spanish Group
    And is on the Create campaign page
    And he attempts to delete the campaign
    And campaign is successfully deleted
    And Logout
    
