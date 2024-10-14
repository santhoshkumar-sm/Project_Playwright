import { Locator, Page } from "@playwright/test";
class CartPage {
  page: Page;
  cartHyperLink: Locator;
  cartPageHeader: Locator;
  uploadBTN: Locator;
  successMessage: Locator;
  constructor(page: Page) {
    this.page = page;
    this.cartHyperLink = page.locator(
      "//div[contains(@class,'zak-header-actions--desktop')]//a[@class='cart-page-link']"
    );
    this.cartPageHeader = page.locator("//*[@class='zak-page-title']");
    this.uploadBTN = page.locator("//*[@id='upload_1']");
    this.successMessage = page.locator("//label[contains(text(),'uploaded successfully')]");
  }
  async navigateToCartPage() {
    await this.page.goto("/cart");
  }
}

export default CartPage;
