module.exports = {
  'When using correct google address, google should load' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .end();
  },

  'When searching for Chuck Norris, results should be visible' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'Chuck Norris')
      .click('input[name=btnK]')
      .pause(1000);

      browser.expect.element('#rso').to.be.present.before(1000);
      browser.end();
  }
};
