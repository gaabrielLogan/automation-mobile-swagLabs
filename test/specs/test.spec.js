const swagLabsPage = require ('../pageobjects/Catalog.page')
const addRemoveItemPage = require ('../pageobjects/addRemove.page')
describe('Product and checkout', () => {
    beforeEach(async () => {
       
    });
    
    it('adding clothing to cart and completing checkout', async () => {
        await swagLabsPage.login('standard_user', 'secret_sauce');
        
        await swagLabsPage.addToCartAndCheckout();

        await swagLabsPage.fillCheckoutForm('Teste', 'LastName', '72636');

        await swagLabsPage.verifyOrderConfirmation();

        await driver.deleteSession();
       

    });

    it('Adding product and removing from the shopping cart', async () => {
        await browser.reloadSession();

        await swagLabsPage.login('standard_user', 'secret_sauce');

        await addRemoveItemPage.addToCart();

        await addRemoveItemPage.goToCart();
        await browser.pause(1000);

        const isItemDisplayed = await addRemoveItemPage.isItemDisplayed();
        expect(isItemDisplayed).toBeTruthy();

        await addRemoveItemPage.removeItem();
        await browser.pause(1000);
        
        await addRemoveItemPage.expectItemNotToExist();

        await driver.deleteSession();
    });
});
