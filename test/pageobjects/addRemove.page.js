class AddRemoveItemPage {
    constructor(driver) {
        this.driver = driver;
    }

    async addToCart() {
        await $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]').click();
        
    }

    async goToCart() {
        await $('~test-Cart').click();
    }

    async isItemDisplayed() {
        return await $('~test-Item').isDisplayed();
    }

    async removeItem() {
        await $('~test-REMOVE').click();
        await browser.pause(1000);
    }

    async expectItemNotToExist() {
        await expect($('~test-Item')).not.toExist();
    }
}

module.exports = new AddRemoveItemPage();
