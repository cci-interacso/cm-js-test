@regression @cmv-103
Feature: External user to edit campaign default schedule


  Background:
    Given there is a new campaign starting today
    Then get campaign id from the response
    Then the campaign has a status of draft
    Then stan get okta groups
    Then extract id for content manager seville
    Then Starks adds the campaign to a group
    Then stan upload a creative
    Then get creative id
    Then stan assign static creative to external group
    Then stan assigns static to default schedule


  @ui
  Scenario: CM will allow me to edit campaign default schedule
    Given Barry is an external user in the Spanish Region
    And search for a campaign
    And edit the campaign
    When edit the default schedule
    Then permitted creative is successfully added to the default content schedule


