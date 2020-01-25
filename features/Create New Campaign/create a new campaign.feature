@regression @ui @api
Feature: Create new campaign


    Scenario: Create campaign using Content manager
        Given S is an internal user in the Spanish Group
        And is on the Create campaign page
        When he enters
            | campaignName |
            | campaignId   |
            | startDate    |
            | endDate      |
        Then the campaign is successfully created
        Then Logout


    Scenario: Create campaign from a template
        Given there is a new campaign starting today
        Then get campaign id from the response
        Then stan upload a creative
        Then get creative id
        Then stan post the schedules for the campaign
        Then get content schedule id
        Then stan assigns static to content schedule
        Then stan assigns static to default schedule
        Then stan gets content manager screens
        Then get screen id
        Then add players to schedule
        Then stan get content schedule
        Then get content schedule id
        Then add a template
        Then get template id
        Then create a template from ID
        Then marks get the template using templateID


