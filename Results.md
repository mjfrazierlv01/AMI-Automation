Challenge Test Results

**Challenge 1** 

Challenge 1 is complete.

What it does:

1. Logs into https://portal.dev.influential.co/
2. Clicks on Get Started Icon _(Note: There is only one element id for mulitiple 'Get Started Icons')_   
3. Fills out Influential for Talent Management _(Note: It fails since I already used the credentials.)_
4. Logs into the site with the credentials from step 3.
5. Clicks and reviews each page. (Note: there is sleeps to slow it down for verification.)
6. Clicks on Notifications (Note: There is a error message that appears - does not show profile)
7. Then it logs out.

Potential Issues:

- Using protractor, the inputs are too fast in creating an influencer. This is a issue with the webdriver. 
workaround is using Firefox.
- When Clicking on the My Profile from the Gear, there is a error message and the profile does not appear. 
States that there is a "Error Fetching Data, More Info" (500 Internal Server Error)
- There is a autocomplete window that appears in the influencer signup page.
  - Issue when trying to get protractor to click on the autocomplete - In progress, will find out solution. 
  - There have been instances that if you type test, it brings up oregon and florida as the locations. 
    I beleive its doing that since its finding a partial match in the united sta**tes**
  - If the users state and or location is not found, user cannot sign up.
  - If the users Verticals Categories is not found, user cannot sign up.
- The graphic link in the verification email is presenting a issue to use. Protractor cannot click it.

**Challenge 1 Extra Credit**

Not Complete yet. I will continue on my own time to find out solution.

- The verification email is giving me issues when clicking on the graphic to verify. Protractor cannot click it.
  - Possible resolutions are to use the token from the database and process that.
  - Install a service in the test framework (mailsauor) that reads the email, looks for the confirmation emial 
  and clicks on the verify link.
  
**Challenge 2 - Logins and Database**

With the information provided, I cannot complete this task. I do not have the requirments for the system to log
in. I would need the source code to change the location of the database and understand what the schema is to create
the users, what security requirements are needed and how the tokens are generated.

In the solution, there is a sample database scripts that I created that will add users to the database. Please see
Influential Dev.mwb (created by mysql for mac) 




