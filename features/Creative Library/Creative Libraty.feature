@regression
Feature: Creative Library

    As a User, I want to have access to a Library section,
    So that I can upload, view and delete creatives
   
    @ui 
    Scenario: Upload a static creative to the library
        Given Stan uploads a static creative as an internal user
        Then the file is available
        Then share the creative with my regional external users

  
      
         
       
      
   
   
      
      