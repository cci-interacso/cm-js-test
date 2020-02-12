@regression
Feature: Delete Campaign

  @ui @api
  Scenario: Delete a campaign
    Given A has a new campaign starting today
    Then  A get campaign id from the response
    And S is an internal user in the Spanish Group
    And S is on the Create campaign page
    And search for a campaign
    And he attempts to delete the campaign
    And campaign is successfully deleted




