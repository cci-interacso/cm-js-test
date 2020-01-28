 @Ignore @wip @cm-103
Feature: External user to edit campaign default scheduel


    Scenario: CM will allow me to edit campaign default schedule
    Given context Given Barry is an external user in the Spanish Region
    And select a campaign that is shared 
    And campaign is in draft status
    Then I can edit the campaign
    Then CM will display the following 
      | default content schedule| no of static creatives|
      |default content schedule | no of dynamic creatives|
      

