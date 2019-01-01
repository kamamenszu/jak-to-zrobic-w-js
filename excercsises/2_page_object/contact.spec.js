var homePage = require('./pages/home');
var contact = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		contact.get();
	});

	it('should have "Get in touch" and "Address" sections on Contact Us page', function(){
		var headerGet = element(by.xpath('//fieldset/h3'));
		var expectedHeaderGet = "Get in Touch";
		expect(headerGet.getText()).toContain(expectedHeaderGet);
		expect(element(by.css('input[placeholder="Name"]')).isDisplayed()).toBe(true);
		expect(element(by.css('input[placeholder="Email"]')).isDisplayed()).toBe(true);
		expect(element(by.css('textarea[placeholder="Your Message"]')).isDisplayed()).toBe(true);
		expect(element(by.xpath('//fieldset/button')).isDisplayed()).toBe(true);
		var headerAddress = element(by.xpath('//span[2]/h3'));
		var expectedHeaderAddress = "Address";
		expect(headerAddress.getText()).toBe(expectedHeaderAddress);
		var addresses = element.all(by.css('.span6 address'));
		expect(addresses.count()).toEqual(2);
	});
});
