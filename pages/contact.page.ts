import { Locator, Page } from "@playwright/test";
class ContactPage{
    contactHyperLink: Locator;
    contactPageHeader: Locator;
    nameTextbox: Locator;
    emailTextbox: Locator;
    phoneNumberTextbox: Locator;
    commentTextbox: Locator;
    submitBTN: Locator;
    successMSG: Locator;
    constructor(page:Page){
        this.contactHyperLink = page.locator("//ul[@id='zak-primary-menu']//a[contains(@href,'/contact')]");
        this.contactPageHeader = page.locator("//*[@class='zak-page-title']");
        this.nameTextbox = page.locator("//*[@id='evf-277-field_ys0GeZISRs-1']");
        this.emailTextbox = page.locator("//*[@type='email']");
        this.phoneNumberTextbox = page.locator("//*[@id='evf-277-field_66FR384cge-3']");
        this.commentTextbox = page.locator("//*[@id='evf-277-field_yhGx3FOwr2-4']");
        this.submitBTN = page.locator("//*[@id='evf-submit-277']");
        this.successMSG = page.locator("//div[contains(text(), 'Thanks for contacting us')]");

    }
}

export default ContactPage;