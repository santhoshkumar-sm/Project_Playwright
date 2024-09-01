import { test, expect } from "@playwright/test";
const path = require('path');

test.describe('Tests for validating cart and upload functionality', () => {
    test('Validation of simple upload', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");
        await page.locator("//div[contains(@class,'zak-header-actions--desktop')]//a[@class='cart-page-link']").click();
        await page.waitForTimeout(2000);
        const pageHeader = await page.locator("//*[@class='zak-page-title']");
        pageHeader.scrollIntoViewIfNeeded();
        console.log((await pageHeader.textContent())?.trim());
        
        const uploadBTN = await page.locator("//*[@id='upload_1']");
        uploadBTN.scrollIntoViewIfNeeded();
        const filePath = path.join(__dirname,"../testdata/Sankranti.jpg");
        await page.setInputFiles("//*[@id='upfile_1']",filePath);
        await page.locator("//*[@id='upload_1']").click();
        await page.locator("//label[contains(text(),'uploaded successfully')]").isVisible();
        await expect(page.locator("//label[contains(text(),'uploaded successfully')]")).toBeVisible();
    })
})
