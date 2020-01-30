Project Title

Content Manager E2E Javascript Test Framework 


Prerequisites 

Install node js 

npm install -g protractor ( Execute the command from terminal )

webdriver-manager update  (Execute the command from terminal)



Installing 

npm install  (from the root of the project)
npm run webdriver-update'
npm run postinstall'


Run tests locallly

npm run test (@your feature file tage) - this should run a single  " npm run test @test "

to run all test "npm run test @regression"

Generate report ( output will stored at target/site/serenity/index.html )

npm run test:report



Run tests on CI

Project name  - cm-js-test 

Build with parameters "tags" and "github branch"



