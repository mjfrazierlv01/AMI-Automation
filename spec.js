// AMI Automation for UI
// Michael Frazier
// 04/23/18
// https://github.com/mjfrazierlv01/AMI-Automation.git
// All Rights Reserved

describe('UI Automation', function() {
   it('QA Automation', function() {

// This turns off the angular check in protractor
// This is only used if you are using protractor to run these tests

   browser.ignoreSynchronization = true;

//This will navigate to the QA site of AMI

   browser.get('https://amiqaserver.com/login.aspx');
   expect(browser.getCurrentUrl()).toEqual('https://amiqaserver.com/login.aspx');

// First, We will create a new user, by clicking on 'Register New Device'
// Then click on 'Dont have a user? Sign up
// Note: You will have to change the email address each time this script runs.

   element(by.css('a[href="/registerDevice.aspx"]')).click();
   // browser.sleep(5000);
   element(by.xpath("html/body/form/div[3]/div/div/div/div/div[3]/div[2]/div/div[2]/div[1]/a")).click();
   element(by.id('DeviceSnNew')).sendKeys('2499');
   element(by.id('AccountName')).sendKeys('Test Account');
   element(by.id('LoginName')).sendKeys('AMI Test 1');
   element(by.id('Password')).sendKeys('Justin10!!');
   element(by.id('ConfirmPassword')).sendKeys('Justin10!!');
   element(by.id('PrimaryEmail')).sendKeys('mjfrazier@me.com');
   element(by.id('FirstName')).sendKeys('Test');
   element(by.id('LastName')).sendKeys('User1');
   element(by.id('cbSecurityQuestion')).$('[value="2"]').click();
   element(by.id('SecurityAnswer')).sendKeys('Las Vegas');
   element(by.buttonText('Submit')).click();
   element(by.buttonText("Continue")).click();
   // browser.sleep(5000);

// This section will Register New Device

   browser.get('https://amiqaserver.com/login.aspx');
   element(by.css('a[href="/registerDevice.aspx"]')).click();
   element(by.css('input#DeviceSN')).sendKeys('2499');
   element(by.css('input#Login')).sendKeys('AMI Test 1');
   element(by.css('input#Pass')).sendKeys('Justin10!');
   element(by.xpath("html/body/form/div[3]/div/div/div/div/div[3]/div[2]/div/div[1]/fieldset/div[1]/button/span")).click();
   element(by.buttonText("Continue")).click();
   // browser.sleep(5000);

// This section will perform a login request

   browser.get('https://amiqaserver.com/login.aspx');
   element(by.id('username')).sendKeys('AMI Test 1');
   element(by.id('Password')).sendKeys('Justin10!');
   element(by.xpath("/html/body/form/div[3]/div/div/div/div/div[2]/div[1]/div/div[1]/fieldset/div[1]/button/span")).click();
   element(by.buttonText("Login")).click();
   // browser.sleep(5000);
    });
});
