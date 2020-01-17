@wip
Feature: Add creatives to schedule

  Scenario: add static creative to schedule
    Given Picard is editing a campaign
    When he attempts to add a static creative to the campaign
    Then the creative is successfully added

  Scenario: add d3ck creative to schedule
    Given Picard is editing a campaign
    When he attempts to add a d3ck creative to the campaign
    Then the creative is successfully added

  @CMV-99
  Scenario Outline: add different creative types to schedule
    Given Picard is editing a campaign
    When he attempts to add a <fileType> static creative to the campaign
    Then the creative is successfully added

    Examples: of creative file types
      | fileType |
      | jpg      |
      | mp4      |
      | GET LIST |

  @CMV-102
  Scenario: Users can add a creative to a schedule using the "Select from Library" option
    Given Picard is editing a campaign
    And there is a creative previously added to the library
    When he attempts to add the creative to the schedule from the library
    Then the creative is successfully added


  @CMV-102
  Scenario: Users can select content from Groups
    Given Picard is editing a campaign
    And there is a creative previously added to the library
    And the creative is added to a creative group
    When he attempts to add the creative group to the schedule from the library
    Then the creative group is successfully added

  @CMV-104
  Scenario: Users can delete content from schedule if added from library
    Given there is a creative that has been added from the library
    And Picard is editing a campaign
    And a creative has been added from the library
    When he attempts to delete the creative from the schedule
    Then the creative is successfully deleted
