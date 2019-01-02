var Contact = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a')); 
  this.leftField1 = element(by.css('#name'));
  this.leftField2 = element(by.css('#email'))
  this.leftField3 = element(by.css('#content'));
  this.leftButton = element(by.css('fieldset > button'));
  this.header = element(by.xpath('//span[1]/h3[1]'));


  this.get = function() {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickMenuItemAt = function(idx) {
    this.menuItems.get(idx).click();
  };

  this.sendKeysLeftField1 = function() {
    this.leftField1.sendKeys('Kamila')
  }

  this.sendKeysLeftField2 = function() {
    this.leftField2.sendKeys('malpa@wp.pl')
  }

  this.sendKeysLeftField3 = function() {
    this.leftField3.sendKeys('Dzień dobry')
  }

  this.clickLeftButton = function() {
    this.leftButton.click();
  }

  this.getHeader = function() {
    return this.header.getText();
  }
};

module.exports = new Contact();
