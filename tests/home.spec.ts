import { test, expect } from '@playwright/test';
import exp from 'constants';
test.describe('Home Test', () => {
    test('Go to HomePage and verify the title', async ({ page }) => {
        
        await page.goto("https://magento.softwaretestingboard.com/");
        await expect(page).toHaveTitle("Home Page");
    })
    
    test('Click Whats new tab and validate the URL', async ({ page }) => {
        await page.goto("https://magento.softwaretestingboard.com/");
        await page.locator("#ui-id-3").click();
        await expect(page).toHaveURL(/.*what-is-new/);
    })
    
    test('Go to Home page and verify the text in banner ', async ({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');

        //Text locator Type 1 - case insensitive, substring
        const bannerText = page.locator('text=New Luma Yoga Collection');
        await expect(bannerText).toBeVisible();

        //Text locator Type 2 - case sensitive, unique text
        const bannerHeadline = page.locator('text="Get fit and look fab in new seasonal styles"');
        await expect(bannerHeadline).toBeVisible();
    })

    test('Find and verify the unique element from the set using CSS and text', async ({ page }) => {
        
    //    await page.goto("https://demo.nopcommerce.com/");
       await page.goto("https://practice.sdetunicorns.com/");
    
    //    const homeText = page.locator("#menu-item-489 >> text=Home");
       const homeText = page.locator('#zak-primary-menu:has-text("Home")');
       await expect(homeText).toBeVisible();
    })
    
    test('Verify the presence of search box using xpath', async ({ page }) => {
        await page.goto("https://magento.softwaretestingboard.com/");
        const searchBox = page.locator('//*[@id="search"]');

        await expect(searchBox).toBeVisible();
    })
    
    test('Fetch all elements from a menu and validate', async ({ page }) => {
        const expectedMenus = ["Home","About","Shop","Blog","Contact","My account"];
        await page.goto("https://practice.sdetunicorns.com/");
        
        const items = page.locator("#zak-primary-menu li[id*=menu]");
        console.log("Element Count => "+await items.count());
        expect(await items.allTextContents()).toEqual(expectedMenus);
    })
     
    test('Get the tab list and print the label using for each loop', async ({ page }) => {
        await page.goto("https://magento.softwaretestingboard.com/");
        const headerTabs = page.locator("#ui-id-2 li[class*=level0]");
        console.log("Element Count => "+await headerTabs.count());

        for(const tab of await headerTabs.elementHandles())
            console.log("Tab name => "+ await tab.textContent());

    })
})
