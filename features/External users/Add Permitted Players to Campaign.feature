Feature: Add Permitted players to campaign

  Background:
   Given Tony is an internal user from the Spanish region
    And shared the players with Sevilla regional group


Scenario: Display permitted player for external users
    Given Barry is an external user in the Sevilla Regional group
    When on the CM app
    Then only a list permitted players are displayed

  Scenario: Add Permitted players [draft status] to Campaign allowed by External user
    Given Barry is an external user in the Sevilla Regional group
    And  have selected a campaign that has status of DRAFT
    When add a permitted player to my campaign
    Then player is added successfully the campaign content schedule   
    
