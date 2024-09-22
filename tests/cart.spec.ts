import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";
import CartPage from "../pages/cart.page";
const path = require('path');

test.describe('Tests for validating cart and upload functionality', () => {
    let homePage: HomePage;
    let cartPage : CartPage;

    test('Validation of simple upload', async ({ page }) => {
        homePage = new HomePage(page);
        cartPage = new CartPage(page);

        await homePage.navigateToHomePage();
        await cartPage.cartHyperLink.click();
        await page.waitForTimeout(2000);

        const pageHeader = (await cartPage.cartPageHeader.textContent())?.trim();
        expect(pageHeader).toEqual("Cart");
        cartPage.uploadBTN.scrollIntoViewIfNeeded();
        const filePath = path.join(__dirname,"../testdata/sampleImage.jpg");
        await page.setInputFiles("//*[@id='upfile_1']",filePath);
        await cartPage.uploadBTN.click();
        await cartPage.successMessage.isVisible();
        await expect(cartPage.successMessage).toBeVisible();
    })
})
