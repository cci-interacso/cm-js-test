@regression @cmv-84
Feature:Add 'permitted player's to a campaign

    Background:
        Given C has a new campaign starting today
        Then C get campaign id from the response
        Then the campaign has a status of draft
        Then stan get okta groups
        Then extract id for content manager seville
        Then Starks adds the campaign to a group
        Then Barry gets content manager screens
        Then get screen id
        Then add seville group to screen

    @ui
    Scenario: add permitted player to a campaign
        Given Tony is an external user in the Spanish Region
        And search for a campaign
        And edit the campaign
        And add new a content schedule 
        And add a player to the content schedule
        When stan get content schedule
        Then schedule is updated with permitted player

        
