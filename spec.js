// This is the QA Challenge test for Influential
// Michael Frazier
// 03.21.18
// https://github.com/mjfrazierlv01/QA-Challenge
// All Rights Reserved

describe('Influential Test', function() {
   it('QA Challenge Test 1', function() {

// This turns off the angular check in protractor
// This is only used if you are using protractor to run these tests

   browser.ignoreSynchronization = true;
   console.log();

//This will navigate to the dev site of Influential

   browser.get('https://portal.dev.influential.co/');
   expect(browser.getCurrentUrl()).toEqual('https://portal.dev.influential.co/');

// This section will click on the get started button
// Note: There are more than one Get Started button(s) on the page and will select only the first one found.

   element(by.css('a[href="/signup"]')).click();

// This will click on the 'Influential for Talent Management' link and start the process
// This will enter the user details, set up a account and send an email to the user for verification
// This will generate an error as the username and email are already set up and I skip the errors and log in.

   element(by.css('a[href="/signup/talent#form-anchor"]')).click();
   element(by.id('name-first')).sendKeys('Michael');
   element(by.id('name-last')).sendKeys('Frazier');
   element(by.id('email')).sendKeys('mjfrazierlv01@mailinator.com');
   element(by.id('company-name')).sendKeys('VirtualCorsair');
   element(by.id('username')).sendKeys('mjfrazierlv01');
   element(by.id('password')).sendKeys('Justin10!!');
   element(by.id('password-confirm')).sendKeys('Justin10!!');
   element(by.buttonText('Sign Up')).click();
   browser.sleep(500);

// Email Verification - Working on the solution
// Correct way to do this is to install a service that checks email, reads and clicks on the email
   //browser.ignoreSynchronization = true;
   //browser.get('https://www.mailinator.com');
   //element(by.id('inboxfield')).sendKeys('mjfrazierlv01');
   //element(by.buttonText('Go!')).click();
   //element(by.xpath("//*[contains(text(),'Fwd: 'Welcome To Talent!')]")).click();
   //browser.sleep(500);


// Once Email is verified, log into the Influential site
// The Sleep is added so the user can see the action, not recommended for use.

   element(by.css('a[href*="/login"]')).click();
   element(by.id('email')).sendKeys('mjfrazierlv01@mailinator.com');
   element(by.id('password')).sendKeys('Justin10!!');
   element(by.buttonText('Sign In')).click();
   browser.sleep(500);

// Once logged in, a basic test to make sure the main pages are present
// The Sleep is added so the user can see the action, not recommended for use.

// My Influencers Link in Side Bar
// Creates a Influencer Profile

   element(by.xpath("//div[@id='foundation']/div[4]/section/ul/li[2]/span")).click();
   browser.sleep(500);
   //element(by.buttonText('Add Influencer')).click();
   //element(by.id('name_first')).sendKeys('Michael');
   //element(by.id('name_last')).sendKeys('Frazier');
   //element(by.id('email')).sendKeys('mjfrazierlv01@mailinator.com');
   //element(by.id('phone')).sendKeys('702-555-1212');
   //element(by.id('demo-age')).sendKeys('44');
   //element(by.id('demo-gender')).$('[value="male"]').click();
   //element(by.id('demo-ethnicity')).$('[value="black"]').click();
   //element(by.id('demo-location')).sendKeys('Las Vegas').click();
   //element(by.id('vertical-search')).$('[value="Gaming"]');
   //element(by.id('vertical-search')).sendKeys('Gaming');
   //element(by.id('facebook-search')).sendKeys('www.facebook.com/michael.frazier');
   //element(by.id('twitter-search')).sendKeys('www.twitter.com/michael.frazier');
   //element(by.id('instagram-search')).sendKeys('www.instagram.com/michael.frazier');
   //element(by.id('youtube-search')).sendKeys('www.youtube.com/michael.frazier');
   //element(by.id('snapchat-search')).sendKeys('www.snapchat.com/michael.frazier');
   //element(by.buttonText('Add Influencer')).click();


// Opportunities Link in Side Bar
     element(by.xpath("//div[@id='foundation']/div[4]/section/ul/li[3]/span")).click();
     browser.sleep(50);

// Offers Link in Side Bar
     element(by.xpath("//div[@id='foundation']/div[4]/section/ul/li[4]/span")).click();
     browser.sleep(50);

// Social Tracker Link in Side Bar
     element(by.xpath("//div[@id='foundation']/div[4]/section/ul/li[5]/span")).click();
     browser.sleep(50);

// Content Search Link in Side Bar
     element(by.xpath("//div[@id='foundation']/div[4]/section/ul/li[6]/span")).click();
     browser.sleep(50);

// Roster Link in Side Bar
     element(by.xpath("//div[@id='foundation']/div[4]/section/ul/li[7]/span")).click();
     browser.sleep(50);

// Team Link in Side Bar
     element(by.xpath("//div[@id='foundation']/div[4]/section/ul/li[8]/span")).click();
     browser.sleep(5000);

// Click on Notifications
     element(by.css('i.fa.fa-bell')).click();
     browser.sleep(500);

// Click on the Gear Icon - my Profile
     element(by.css('i.fa.fa-cog')).click();
     element(by.linkText('My Profile')).click();
     browser.sleep(500);

// Click on the Gear Icon - Logout
     element(by.css('i.fa.fa-cog')).click();
     element(by.linkText('Logout')).click();
     browser.sleep(500);

// This section will be reserved to gather credentials from local database and
// and use them on the site.

    });
});
