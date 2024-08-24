import { test, expect } from '@playwright/test';
test.describe('Tests for Blog', () => {
    
    test('Go to Blog tab and get the total number of blogs', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");
        await page.locator("//ul[@id='zak-primary-menu']//a[contains(@href,'/blog')]").click();
        const currentPage = page.url();
        console.log(currentPage);

        await page.waitForSelector("//*[@id='recent-posts-3']");
        const blogList = page.locator("//*[@id='recent-posts-3']/ul/li");
        console.log("Total blogs => "+await blogList.count());
        var blogText;
        for(const blog of await blogList.elementHandles()){
             blogText = await blog.textContent();
            console.log(await blogText.length);
            expect(blogText.length).toBeGreaterThan(5);
        }
    })
})
