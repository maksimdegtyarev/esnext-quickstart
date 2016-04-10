'use strict';


module.exports = {
  'Smoketest'(browser) {
    browser
      .url(`${browser.launchUrl}/`)
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Hello, SydJS!')
      .end();
  }
};
