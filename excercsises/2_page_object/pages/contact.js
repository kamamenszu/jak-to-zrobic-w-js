var Contact = function() { 
  
    this.get = function() {
      browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
    };
  
    this.getTitle = function() {
      return browser.driver.getTitle();
    };
    
  };
  module.exports = new Contact();