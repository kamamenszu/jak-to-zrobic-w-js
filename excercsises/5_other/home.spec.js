var homePage = require(browser.__pagesDir + '/home');
var features = require(browser.__dataDir + '/features.json');

describe('How to do it in JS homepage', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('should have Protractor workshop | Home', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should contain correct fetures', function(){
		homePage.scrolltoFeaturesSection();
		homePage.takeScreenshot("screen-1");
		homePage.scrollPageDown();
		homePage.takeScreenshot("screen-2");
		// homePage.scrollPageDown();
		// homePage.takeScreenshot("screen-3");
		expect(homePage.getFeatures()).toEqual(features.data);
	});

});
