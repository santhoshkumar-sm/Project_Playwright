import { Locator, Page } from "@playwright/test";
class homePage {
  page: Page;
  homePageLinkText: Locator;
  altHomePageLinkText: Locator;
  menuItems: Locator;
  menuItemWhatIsNew: Locator;
  searchBox: Locator;
  headerMenuTabs: Locator;
  banTextCaseInsensitive: Locator;
  banTextCaseSensitive: Locator;
  constructor(page: Page) {
    this.page = page;
    this.homePageLinkText = page.locator('#zak-primary-menu:has-text("Home")');
    this.altHomePageLinkText = page.locator("#menu-item-489 >> text=Home");
    this.menuItems = page.locator("#zak-primary-menu li[id*=menu]");
    this.menuItemWhatIsNew = page.locator("#ui-id-3");
    this.searchBox = page.locator('//*[@id="search"]');
    this.headerMenuTabs = page.locator("#ui-id-2 li[class*=level0]");
    this.banTextCaseInsensitive = page.locator("text=New Luma Yoga Collection");
    this.banTextCaseSensitive = page.locator('text="Get fit and look fab in new seasonal styles"');
  }

  async navigateToSTBHomePage() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

  async navigateToHomePage() {
    await this.page.goto("/");
  }

  async clickMenuItem() {
    await this.menuItemWhatIsNew.isVisible();
    await this.menuItemWhatIsNew.click();
  }
}

export default homePage;
