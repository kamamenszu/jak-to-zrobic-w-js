var Page = require('./page.js');

var HomePage = function() {

  /**
   * Call super constructor.
   */
  Page.call(this);

  /**
   * Self reference.
   */
  var self = this;

  this.features = element.all(by.css('h2'));

 /* this.footer = require('../modules/footer');*/

  this.get = function() {
    this.load('/');
    this.logNavigationTiming();
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickRegisterButton = function() {
    this.registerButton.click();
  };

  this.getFeatures = function(){
    return this.features.map(function(elm, index) {
      return {
        index: index,
        name: elm.getText()
      };
    });
  };

  this.getSpeakerByIdx = function(idx){
    return this.speakers.get(0).element(by.css('a')).getText();
  };

  this.scrolltoLocationSection = function() {
    var sectionPlace = element(by.xpath('//h3[contains(text(),"Place")]'));
    this.scrollToElement(sectionPlace)
  };

  this.scrolltoFeaturesSection = function() {
    //var sectionPlace = element(by.xpath('//h3[contains(text(),"Speakers")]'));
    let sectionPlace = element(by.xpath('//h2[contains(text(),"Feature A")]'));
    this.scrollToElement(sectionPlace);
  };
};

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();
