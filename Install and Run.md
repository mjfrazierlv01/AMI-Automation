

**Install Components**

These are the instructions on how to run the project for the QA Challenge

Install the following components and choose the correct one for the operating system you want to use.

(I developed the solution using a Macbook Air, OS 10.13.3 )


1. Install Intellij v2017.3.5 community edition with standard defaults.
   
   https://www.jetbrains.com/idea/

2. Install GIT 
   
   https://git-scm.com/downloads

3. Install Ruby
   
   https://www.ruby-lang.org/en/downloads/

4. Install Protractor - setup instructions on site - (I recommend that you do this throught the Intellij Terminal)
   
   https://www.protractortest.org

5. Install Jasimine Reporter - (I recommend that you do this throught the Intellij Terminal)
   
   https://www.npmjs.com/package/jasmine-spec-reporter   
   

6. Latest version of Firefox Browser

   https://www.mozilla.org/en-US/firefox/new/?utm_medium=referral&utm_source=firefox-com
   
8. Latest version of Chrome Browser

   https://www.google.com/chrome/?brand=CHBD&ds_kid=&gclid=Cj0KCQjwqM3VBRCwARIsAKcekb2Ts1oQwVvoH5HPchSDa115xr6dBxWOZjmNB1tFYdjuOKzqgfT9z8kaAivXEALw_wcB

  

**Running the Solution**

 Ensure that you are running Intellij as "Administrator" or "Root" so it can write the files needed.

1. In Intellij, clone the solution to your computer.

   The location of the project is: `https://github.com/mjfrazierlv01/QA-Challenge.git`

2. In Intellij, open up one terminal window and excute the following command

   `webdriver-manager update`

   This will prepare the selenium server enviornment and update any necessary files
   
3. In the same Intellij terminal, excute the following command

    `webdriver-manager start` 

   This will start the selenium ide webdriver server.

4. Now you can run the solution. In another terminal window, excute the following command

   `protractor conf.js`
   
   The solution is running using protractor which is another front end for selenium
   that is usually for Angular applications. This will start up the server and protractor and invoke firefox. 
   
   The reason that I am using firefox is that firefox plays well with automation languages. Chrome webdriver will work
   but some items like clicking on a image might not work consistently all the time or entering text in a field might be too fast and not correctly add the text.
   
   Please see the "**How to Use Protractor.md**" document for more information on running the solution and the common commands to manipulate the solution.   
   
   
