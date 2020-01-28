@cmv-118 @Ignore
Feature: Make Campaign available to an External User
    

    Background:
        Given S is an internal user in the Spanish Group


    Scenario:  display a list of all known pre-defined external user groups
        And there is a new campaign
        And Click on the Add user icon
        Then all my external user groups are displayed
        Then I can select one from pre defined list
        Then a graphical icon is displayed against the shared campaign
        Then shared Icon is displayed in campaign edit mode


    Scenario: CM will record that selected campaign is shareable 
        Given contextAnd there is a new campaign
        When I make to the campaign service 
        Then campaign is marked as shared to my external group
    
    








