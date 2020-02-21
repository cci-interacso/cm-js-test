@cmv-118 @regression
Feature: Make Campaign available to an External User

    Background:
        Given D has a new campaign starting today
        Then D get campaign id from the response
        Then the campaign has a status of draft

    @ui
    Scenario:  display a list of all known pre-defined external user groups
        Given Tony is an internal user in the Spanish Group
        And search for a campaign
        When Tony assigns campaign to external group
        Then graphical icon is displayed against the shared campaign












