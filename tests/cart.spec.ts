import { test, expect } from "@playwright/test";
import CartPage from "../pages/cart.page";
import path from "path";

test.describe("Tests for validating cart and upload functionality", () => {
  let cartPage: CartPage;

  test("Validation of simple upload", async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.navigateToCartPage();
    expect(page).toHaveURL("cart/");
    await page.waitForTimeout(2000);

    const pageHeader = (await cartPage.cartPageHeader.textContent())?.trim();
    expect(pageHeader).toEqual("Cart");
    cartPage.uploadBTN.scrollIntoViewIfNeeded();
    const filePath = path.join(__dirname, "../testdata/sampleImage.jpg");
    await page.setInputFiles("//*[@id='upfile_1']", filePath);
    await cartPage.uploadBTN.click();
    await cartPage.successMessage.isVisible();
    await expect(cartPage.successMessage).toBeVisible();
  });
});
