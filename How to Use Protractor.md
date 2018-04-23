**How to Use Protractor**

This document will describe the background, file structure and the common commands that will be used in this solution using protractor.

**Background**

Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

Protractor also can be used for non-angular applications, but since most web applications I have seen are angular, the decision to use protractor seemed the quickest and easiest way to complete the challenge.
What makes protractor even more powerfull, you can attach it to a product called "HipTest" that allows users to enter manual test cases/scenarios and export the tests to any of the most popular frameworks
to be used.

**File Structure**

Protractor uses a front end version of Selenium Webdriver and primary uses two of the following files. 

_**conf.js**_ - this is the configuration file that protractor will use to configure the local environment. This file contains arguments like what 
type of browser to use, what type of test reporting engine to use, addresses to the selenium server, turning off animations, etc.
This is where you can change what browser you want to use.

 
_**spec.js**_ - this is the meat and bones of the protractor environment. This is where you will add the code to run the tests against
your application. It uses common selenium commands to execute. If you are using HipTest, this file is now called actionwords.js.


**Environment Commands:**


One Time Per Session Setup commands:

**_webdriver-manager update_** - this command sets up the environment with the latest code to get the server started. It will
update the json and executable files in preperation to start the server.


**_webdriver-manager start_** - This will start the selenium server based on the conf.js arguements.


Common Commands when running Protractor

Starting the test  `protractor conf.js`

So, "protractor" will start the appliction and "conf.js" is what protractor will look for. Inside of the conf.js file, it
points to the spec.js file that has the test(s).

Here are some websites that show what it can do.

https://moduscreate.com/blog/protractor_parameters_adding_flexibility_automation_tests/

https://sqa.stackexchange.com/questions/28536/change-a-url-to-be-environment-specific-in-protractor-test

https://stackoverflow.com/questions/23224883/how-can-i-use-system-environment-variables-in-angularjs-protractor





