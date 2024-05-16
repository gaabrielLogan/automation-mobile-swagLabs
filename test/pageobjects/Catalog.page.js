class SwagLabsPage {
    constructor(driver) {
        this.driver = driver;
    }

    async login(username, password) {
        await $('~test-Username').addValue(username);
        await $('~test-Password').addValue(password);
        await $('~test-LOGIN').click();
    }

    async addToCartAndCheckout() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Sauce Labs Onesie")').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("ADD TO CART")');
        await $('~test-ADD TO CART').click();
        await $('~test-Cart').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await $('~test-CHECKOUT').click();
    }

    async fillCheckoutForm(firstName, lastName, zipCode) {
        await $('~test-First Name').addValue(firstName);
        await $('~test-Last Name').addValue(lastName);
        await $('~test-Zip/Postal Code').addValue(zipCode);
        await $('~test-CONTINUE').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("FINISH")');
        await $('~test-FINISH').click();
    }

    async verifyOrderConfirmation() {
        const totalPriceElement = await $('//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]');
        const totalPriceText = await totalPriceElement.getText();
        expect(totalPriceText).toBe('THANK YOU FOR YOU ORDER');
    }
}

module.exports = new SwagLabsPage();
