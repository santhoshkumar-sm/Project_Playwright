import { test, expect } from '@playwright/test';
test.describe('Tests for contact form', () => {
    test('Go to contact tab and fill the form', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");
        await page.locator("//ul[@id='zak-primary-menu']//a[contains(@href,'/contact')]").click();
        const currentPage = page.url();
        console.log(currentPage);
        expect(currentPage).toContain("contact/");

        await page.waitForSelector("h1[class=zak-page-title]");
        
        const fieldName = page.locator("//*[@id='evf-277-field_ys0GeZISRs-1']");
        await fieldName.scrollIntoViewIfNeeded();
        await fieldName.fill("Sample");

        await page.locator("//*[@type='email']").fill("sample@gmail.com");
        await page.locator("//*[@id='evf-277-field_66FR384cge-3']").fill("900123456");
        await page.locator("//*[@id='evf-277-field_yhGx3FOwr2-4']").fill("Sample");
        await page.locator("//*[@id='evf-submit-277']").click();

        await page.waitForSelector("//div[contains(text(), 'Thanks for contacting us')]");
        const successMessage = (await page.locator("//div[contains(text(), 'Thanks for contacting us')]").textContent())?.trim();
        console.log("Message => "+successMessage);
        expect.soft(successMessage).toContain("Thanks");

        expect(test.info().errors.length).toBeLessThan(1);
    })
})
