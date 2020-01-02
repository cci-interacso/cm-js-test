Feature: Authenticate a user 
@test
Scenario: get a session token to make api call
Given user is Guan an external user
And extract the session token from response
And get access token
And Output
