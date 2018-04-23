exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
      'browserName': 'firefox' // or 'safari'
  },


onPrepare: function() {
    /* global angular: false, browser: false, jasmine: false */
    //Window size
    browser.driver.manage().window().maximize();
    browser.manage().timeouts().pageLoadTimeout(4000000);
    browser.manage().timeouts().implicitlyWait(2500000);

// Disable animations so e2e tests run more quickly
    var disableNgAnimate = function() {
      angular.module('disableNgAnimate', []).run(['$animate',
      function($animate)
      {
        $animate.enabled(false);
      }]);
    };

    browser.addMockModule('disableNgAnimate', disableNgAnimate);

    // Store the name of the browser that's currently being used.
    browser.getCapabilities().then(function(caps) {
      browser.params.browser = caps.get('chrome');
    });
   },

};







