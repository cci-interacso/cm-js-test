@regression @api
Feature: Create new campaign

    @ui
    Scenario: Create campaign using Content manager
        Given S is an internal user in the Spanish Group
        And S is on the Create campaign page
        Then he enters
            | campaignName |
            | campaignId   |
            | startDate    |
            | endDate      |
        When S makes a get campaign call    
        Then the campaign is successfully created
         

    @api
    Scenario: Create campaign from a template
        Given M has a new campaign starting today
        Then M get campaign id from the response
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
        When create a campaign from template id
        Then the campaign has a status of draft


    @cmv-189
    Scenario: Schedule a default content only camapaign
        Given F has a new campaign starting today
        Then F get campaign id from the response
        Then stan upload a creative
        Then get creative id
        Then stan assigns static to default schedule
        And S is an internal user in the Spanish Group
        And search for a campaign
        And edit the campaign
        And schedule the campaign to start
        Then the campaign has a status of ongoing



