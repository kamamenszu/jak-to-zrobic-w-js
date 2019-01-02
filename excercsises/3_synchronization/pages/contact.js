var Contact = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a')); 
  this.name = element(by.css('#name'));
  this.email = element(by.css('#email'))
  this.message = element(by.css('#content'));
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

  this.sendKeysName = function() {
    this.name.sendKeys('Kamila')
  }

  this.submitMessage = function (name, email, message){
    this.sendKeysName(name);
    this.typeEmail(email);
    this.sendKeysMessage (message);
    this.leftButton.click();
  }
  
  this.typeEmail = function(email) {
    this.email.sendKeys(email);
  }

  this.sendKeysMessage = function() {
    this.message.sendKeys('Dzień dobry')
  }

  this.clickLeftButton = function() {
    this.leftButton.click();
  }

  this.getHeader = function() {
    return this.header.getText();
  }
};

module.exports = new Contact();
