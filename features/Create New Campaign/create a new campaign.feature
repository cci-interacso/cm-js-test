Feature: Create new campaign

    Background: my
        Given S is an internal user in the Spanish Group
        And is on the Create campaign page

    
    Scenario: Create campaign
        When he enters
            | campaignName |
            | campaignId   |
            | startDate    |
            | endDate      |
        Then the campaign is successfully created

