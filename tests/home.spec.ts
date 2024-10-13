import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";
test.describe("Home Page Tests", () => {
  let homePage: HomePage;
  test("Go to HomePage and verify the title", async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToSTBHomePage();
    await expect(page).toHaveTitle("Home Page");
  });

  test("Click Whats new tab and validate the URL", async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToSTBHomePage();
    await homePage.clickMenuItem();
    await expect(page).toHaveURL(/.*what-is-new/);
  });

  test("Go to Home page and verify the text in banner ", async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToSTBHomePage();

    //Text locator Type 1 - case insensitive, substring
    await expect(homePage.banTextCaseInsensitive).toBeVisible();

    //Text locator Type 2 - case sensitive, unique text
    await expect(homePage.banTextCaseSensitive).toBeVisible();
  });

  test("Find and verify the unique element from the set using CSS and text", async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await expect(homePage.homePageLinkText).toBeVisible();
  });

  test("Verify the presence of search box using xpath", async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToSTBHomePage();
    await expect(homePage.searchBox).toBeVisible();
  });

  test("Fetch all elements from a menu and validate", async ({ page }) => {
    homePage = new HomePage(page);
    const expectedMenus = ["Home", "About", "Shop", "Blog", "Contact", "My account"];
    await homePage.navigateToHomePage();
    expect(await homePage.menuItems.allTextContents()).toEqual(expectedMenus);
  });

  test("Get the tab list and print the label using for each loop", async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToSTBHomePage();
    await page.pause();
    for (const tab of await homePage.headerMenuTabs.elementHandles()) {
      console.log("Tab name => " + (await tab.textContent()));
    }
  });
});
