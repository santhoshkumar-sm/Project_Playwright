import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';
import HomePage from '../pages/home.page';

test.describe('Tests for Blog', () => {
    let blogPage: BlogPage;
    let homePage: HomePage;
    test('Go to Blog tab and get the total number of blogs', async ({ page }) => {
        blogPage = new BlogPage(page);
        homePage = new HomePage(page);
        let blogText;
        await homePage.navigateToHomePage();
        await blogPage.blogHyperLink.click();
        await expect(page).toHaveURL(/.*blog/);

        await blogPage.blogs.waitFor({state: "visible", timeout: 3000});
        const blogList = await blogPage.blogList;
        
        console.log("Total number of blogs => "+await blogList.count());
        expect(await blogList.count()).toEqual(5);
        
        for(const blog of await blogList.elementHandles()){
             blogText = (await blog.textContent())?.trim();
            expect(blogText.length).toBeGreaterThan(10);
        }
    })
})
