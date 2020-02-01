@regression
Feature: Delete Campaign

  @ui @api @test
  Scenario: Delete a campaign
    Given there is a new campaign starting today
    Then get campaign id from the response
    And S is an internal user in the Spanish Group
    And is on the Create campaign page
    And search for a campaign
    And he attempts to delete the campaign
    And campaign is successfully deleted




