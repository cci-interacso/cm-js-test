@api
Feature: Campaigns


    Background:
        Given there is a new campaign
        Then get campaign id from the response
        Then the campaign has a status of draft
        Then stan get okta groups
        Then extract id for content manager seville
        Then Starks adds the campaign to a group



    
    Scenario: [Campaigns] Add Groups To Campaigns
        Given Starks adds the campaign to a group
       




