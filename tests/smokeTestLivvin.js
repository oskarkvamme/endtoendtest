var credentials = require('../credentials');


module.exports = {
  'When typing correct address, livin should load' : function (browser) {
    browser
      .url('https://beta.livvin.com')
      .waitForElementVisible('body', 1000)
      .end();
  },

  'When clicking on search in map, search result should appear' : function(browser) {
    browser
      .url('https://beta.livvin.com')
      .waitForElementVisible('.frontpage__content__or-search__button', 1000)
      .click('.frontpage__content__or-search__button')
      .waitForElementVisible('.residence-list__item', 1000);

      browser.assert.elementPresent(".residence-list__item");
      browser.end();
  },

  'Facebook login' : function(browser) {
    var loginButtonClass = '.masthead__menu .masthead__menu-item:nth-child(3) button';
    
    browser
      .url('https://beta.livvin.com')
      .waitForElementVisible(loginButtonClass, 4000)
      .click(loginButtonClass)
      .pause(100)
      .click('.facebook-button')
      .waitForElementVisible('#email', 1000)
      .setValue('#email', credentials.facebook.username)
      .setValue('#pass', credentials.facebook.password)
      .click('#loginbutton')
      .waitForElementVisible('.masthead__user-image', 2000)
      .end();
  }
};
