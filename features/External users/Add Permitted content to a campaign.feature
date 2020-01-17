@wip @CMV-83
Feature: Add 'permitted content' to a campaign

  Background:
    # Given Stan uploads a static creative as an internal user
    # Then share the creative with my regional external users
 #   Given stan upload a creative
  #  Then get creative id
   # Then mark assign static creative to external group

 @test
  Scenario: Display permitted creative content for external users
    Given Barry is an external user in the Spanish Region
    When I am on the Library Screen of the APP
  #Then only permitted contents are displayed

  Scenario: Add Permitted content [draft status] to Campaign allowed by External user
    Given Tony is an external user in the Spanish Region
    And campaign should have draft status
    When add a permitted creative content to my campaign
    Then creative content is added successfully



  Scenario: Permitted creative content to Campaign content schedule
    Given Tony is an external user in the Spanish Region
    When add a permitted creative content to my campaign
    Then permitted creative is successfully to campaign content schedule.


  Scenario: Permitted creative content Default content schedule
    Given Tony is an external user in the Spanish Region
    And I have selected default content schedule
    When add a permitted creative content to my campaign
    Then permitted creative is successfully to the default content schedule

  Scenario: Block user from adding content via DECK
    Given Tony is an external user in the Spanish Region
    When I attempt to add content via DECK URL to a camapaign
    Then creative is not added to campaign

  Scenario: Block user from adding content via Device
    Given Tony is an external user in the Spanish Region
    When I attempt to add content via Device to a camapaign
    Then creative is not added to campaign