@CMV-10 @regression
Feature:  The application must be multi tenanted

   As a user of a single tenant
   when I log in
   then I expect to see only campaigns, players anc creatives that are available to my tenant

   @ui
   Scenario: Campaigns created within a tenant will only be accessible within the same tenant
      Given Simon from Spain has created a campaign
      Then Simon get campaign id from the response
      And Sally from Sweden logs on to content manager app
      When Sally is on the Create campaign page
      And search for a campaign
      Then Sally is unable to view the campaign

   @ui
   Scenario: Creatives uploaded within a tenant will only be accessible within the same tenant.
      Given Simon from Spain has created a campaign
      Then Simon get campaign id from the response
      Then stan upload a creative
      Then get creative id
      And Sally from Sweden logs on to content manager app
      When I am on the Library Screen of the APP
      Then Sally is unable to view the creative

   @ui
   Scenario: Players and inventory groups uploaded within a tenant will only be accessible within the same tenant.
      Given Simon from Spain has created a campaign
      And Simon get campaign id from the response
      Then stan post the schedules for the campaign
      Then get content schedule id
      Then stan gets content manager screens
      Then get screen id
      Then add players to schedule
      And Sally from Sweden logs on to content manager app
      When I am on the Inventory Screen of the APP
      Then Sally is unable to view the screen


