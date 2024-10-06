import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";
import ContactPage from "../pages/contact.page";
test.describe("Tests for contact form", () => {
  let homePage: HomePage;
  let contactPage: ContactPage;
  test("Go to contact tab and fill the form", async ({ page }) => {
    homePage = new HomePage(page);
    contactPage = new ContactPage(page);
    await homePage.navigateToHomePage();
    await contactPage.contactHyperLink.click();
    const currentPage = page.url();
    expect(currentPage).toContain("contact/");

    await contactPage.contactPageHeader.waitFor({ state: "visible", timeout: 3000 });

    await contactPage.nameTextbox.scrollIntoViewIfNeeded();
    await contactPage.nameTextbox.fill("Sample");
    await contactPage.emailTextbox.fill("sample@gmail.com");
    await contactPage.phoneNumberTextbox.fill("900123456");
    await contactPage.commentTextbox.fill("Sample");
    await contactPage.submitBTN.click();

    await contactPage.successMSG.waitFor({ state: "visible", timeout: 3000 });
    const successMessage = (await contactPage.successMSG.textContent())?.trim();
    expect.soft(successMessage).toContain("Thanks");

    expect(test.info().errors.length).toBeLessThan(1);
  });
});
