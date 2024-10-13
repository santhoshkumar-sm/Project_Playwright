import { test, expect } from "@playwright/test";
import BlogPage from "../pages/blog.page";

test.describe("Tests for Blog", () => {
  let blogPage: BlogPage;
  test("Go to Blog tab and get the total number of blogs", async ({ page }) => {
    blogPage = new BlogPage(page);
    let blogText;
    await blogPage.navigateToBlogPage();
    await expect(page).toHaveURL(/.*blog/);

    await blogPage.blogs.waitFor({ state: "visible", timeout: 3000 });
    const blogList = await blogPage.blogList;
    expect(await blogList.count()).toEqual(5);

    for (const blog of await blogList.elementHandles()) {
      blogText = (await blog.textContent())?.trim();
      expect(blogText.length).toBeGreaterThan(10);
    }
  });
});
