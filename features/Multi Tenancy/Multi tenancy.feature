@CMV-10 @regression
Feature:  The application must be multi tenanted

   As a user of a single tenant
   when I log in
   then I expect to see only campaigns, players anc creatives that are available to my tenant

   @test @ui
   Scenario: Campaigns created within a tenant will only be accessible within the same tenant
      Given Simon from Spain has created a campaign
      Then Simon get campaign id from the response
      And Sally from Sweden attempts to view the campaign
      When Sally is on the Create campaign page
      And search for a campaign
      Then Sally is unable to view the campaign
