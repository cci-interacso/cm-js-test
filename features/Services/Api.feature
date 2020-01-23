@api @regression
Feature: API Services

  Scenario: View campaign status
    Given there is a new campaign
    Then get campaign id from the response
    Then the campaign has a status of draft


  Scenario: Upload a creative | Assign creative to external group
    Given there is a new campaign
    Then get campaign id from the response
    Then the campaign has a status of draft
    Then stan get okta groups
    Then extract id for content manager seville
    Then Starks adds the campaign to a group
    Then stan upload a creative
    Then get creative id
    Then mark assign static creative to external group

