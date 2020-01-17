Feature: Permit creative content to be used by an EXTERNAL USER

  
  Scenario: Permit use of creative to Group
    Given Tony is an internal user in the Spanish Group
    When I attempt to view previously uploaded content in the CM library associated to my tenant
    Then I can view all previously upload static and dyanmic content
    And I can select static or dynamic content