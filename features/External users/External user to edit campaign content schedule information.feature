@wip @92 @Ignore
Feature: External user to edit campaign content schedule information

   Scenario: Scenario name
    Given context Given Barry is an external user in the Spanish Region
    And select a campaign that is shared 
    And campaign is in draft status
    Then I can edit the campaign
    Then CM will allow edit the following 
      | Schedule Content Name| 
      |Start Date | 