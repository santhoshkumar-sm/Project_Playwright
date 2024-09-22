import { Page, Locator } from "@playwright/test";

class BlogPage{
    page: Page;
    blogHyperLink: Locator;
    blogs: Locator;
    blogList: Locator;
    constructor(page: Page){
        this.page = page;
        this.blogHyperLink = page.locator("//ul[@id='zak-primary-menu']//a[contains(@href,'/blog')]");
        this.blogs = page.locator("//*[@id='recent-posts-3']");
        this.blogList = page.locator("//*[@id='recent-posts-3']/ul/li");
        
    }
}

export default BlogPage;