import { Page } from "@playwright/test";
class homePage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage() {
    await this.page.goto("https://practice.sdetunicorns.com/");
  }
}

export default homePage;
